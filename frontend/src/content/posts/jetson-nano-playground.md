---
title: Jetson Nanoでやったことメモ
summary: Jetson Nano でデモ実行やカメラ認識を試した記録。
publishedAt: 2020-04-30
tags: ["Jetson Nano", "CUDA", "OpenCV", "TensorFlow"]
legacyPath: /JetsonNano_memo3.html
---

## 3.プログラムを動かしてみる

## 3-1.サンプルプログラムを動かしてみる

参考：Jetson Japan User Group, "Jetson Nano 超入門", ソーテック社 [(amazonの販売ページ)](https://www.amazon.co.jp/Jetson-Nano%E8%B6%85%E5%85%A5%E9%96%80-Japan-User-Group/dp/4800712513)

今日(2020/04/20)の昼にJetsonNanoの入門本が届いたので、これを見ながらデモを動かしてみようと思う。
因みにこの本は後々P研の部室に貸し出し用に置こうかなと思っている、部室がミニミニ図書館化していく…

注意: GUIのプログラムの実行はリモートでは出来ないので、本体から行おう(自責の念)

### 3-1-1.fluidsGLのデモ

まず、fluidsGLデモが入っている、CUDAデモファイルをコピーして持ってくるために、以下のコマンドを実行。

```bash
cd ~
cp -a /usr/local/cuda-10.0/samples/ ../share/
ll
```

まるっとコピーする為のaオプション…そして、コピー先は遠隔で触れるshareフォルダに入れておこう…
うん、全てコピーできているっぽいので、以下のコマンドを実行してfluidsGLディレクトリの所まで飛んでいく。

```bash
cd samples/5_Simulations/fluidsGL
```

それでは、サンプルプログラムをコンパイルして、実行。

```bash
make
./fluidsGL
```

エラーが返ってきた。

"ary when GPU Boost is enabled. No protocol specified freeglut (./fluidsGL): failed to open display ':0'"

なるほど、ディスプレイ設定がされてなくてよ！！って言われてるようだ(英語苦手だから間違えてたらごめんなさい)
リモートでGUIのアプリ動かすなって事かねぇ…
と思い、直接プログラムを実行したら動いた。

![fluidsGLimage](https://github.com/matsunono/matsunono.github.io/blob/master/img/JetsonNano_memo3/fluidsGL.png?raw=true)

おぉ、水面なぞっているみたいだ…この動きを計算しているんですって？凄いね。

他にも色々なサンプルプログラムがあるっぽい、面白そうな感じだ…

## 3-2.USBカメラを使ったプログラムを動かしてみる

参考：Jetson Japan User Group, "Jetson Nano 超入門", ソーテック社 [(amazonの販売ページ)](https://www.amazon.co.jp/Jetson-Nano%E8%B6%85%E5%85%A5%E9%96%80-Japan-User-Group/dp/4800712513)

自分の認識をメモっておこうと思う。
流石にまだ無知無知のムチン(れんこん)すぎて書けないので、本とかサイトに載っているプログラムを引っ張ってくる。

### 3-2-1.JetsonNano超入門に載っていたプログラムを動かして遊ぶ

参考：Jetson Japan User Group, "Jetson Nano 超入門", ソーテック社 [(amazonの販売ページ)](https://www.amazon.co.jp/Jetson-Nano%E8%B6%85%E5%85%A5%E9%96%80-Japan-User-Group/dp/4800712513)

まず、最新の状態にして

```bash
sudo apt-get update
```

"python3-pip"、"protobuf-compiler"、"libprotoc-dev"、"libjpeg-dev"、"cmake"のインストールをする。

```bash
sudo apt-get install python3-pip protobuf-compiler libprotoc-dev libjpeg-dev cmake
```

GitHubからプログラムを引っ張ってきて、フォルダに移動。

```bash
git clone https://github.com/tsutof/tiny_yolov2_onnx_cam
cd tiny_yolov2_onnx_cam
```

exportコマンドは、環境変数やシェル変数を設定するコマンドだそうで…はぁ…？
まぁ分からないのでググると、"export PATH=$PATH [場所]"がPATHを通す、どこからでもそのディレクトリを見れるようにするってことらしい。
"$PATH"は値なんですか？ほー、わけわかめが生える…
つまり、:usr/local/cuda/binにPATHを通すってこと…か、と実行する。

```bash
export PATH=$PATH :usr/local/cuda/bin
```

ライブラリのインストールをする。
…のは分かるが、"python3 -m"と"-r requirements.txt"が分からない、"python3 -m"要るの？？？
ググったら、"pip install -r requirements.txt"で、設定テキスト(←requirements.txt)に定義されたパッケージを一括(←rオプションの意味)インストールするということらしい。
そして"python3 -m"は、後ろに書いた名前のモジュールをmainモジュールとして扱うそうな…またわけわかめ…
と思って暫く調べていたら、[Pythonメモ-107 (__main__.py について)(-m オプション, メインファイル)](https://devlights.hatenablog.com/entry/2019/07/13/231344)に分かりやすく書かれていた。
…のだけど、合体させたら分からなくなった。
pipが通らないから～みたいなのもあったけど、pipこの前通ってた気がするので違うに1票。
[Python モジュールのインストール](https://docs.python.org/ja/3/installing/index.html) の題名の通り、Pythonのモジュールのパッケージだから"python3 -m"を付けて実行なのかな？
つまり、Pythonのモジュールのパッケージを一括インストールしますってことかな…と実行。

```bash
python3 -m pip install -r requirements.txt
```

アプリの実行の準備のコマンドを実行。
[Jetson Nanoにあるnvpmodelコマンド](https://qiita.com/yamamo-to/items/6f0672a91c059a5493ed) とか、
[NVPModel - NVIDIA Jetson TX2 Development Kit](https://www.jetsonhacks.com/2017/03/25/nvpmodel-nvidia-jetson-tx2-development-kit/) とか読むと、nvpmodelコマンドのmオプションは、使用電力のモード決めが出来るっぽい。
jetson_clocksコマンドは [jetson_clocks](https://qiita.com/yamamo-to/items/72bef24f49168fa5dda1) を読むと、(EMC:External Memory Controller)のクロック数、パフォーマンスを変更したり、ファン速度、温度設定を変えるコマンドらしい。
んで、設定を保存したり、元に戻したりもオプション付けて出来るっぽい。
因みにオプション無しは最大パフォーマンスで！！！ってことだそう。

```bash
sudo nvpmodel -m 0
sudo jetson_clocks
```

やっとこさアプリケーションの実行。
初回実行時はダウンロードするものがある(ニューラルネットワークモデルとラベルファイル)のでインターネットに接続しておくこと。
私はUSBカメラのみを繋げているのでcamera=0(何で"--"なのかね？)

```bash
python3 tiny_yolov2_onnx_cam.py --camera=0
```

![camera_App1_image](https://github.com/matsunono/matsunono.github.io/blob/master/img/JetsonNano_memo3/tiny_yolov2_onnx_cam.png?raw=true)

家にトミカとか、リアルな動物のフィギュアとかが無いので、炭酸水のペットボトルを映したら、75%くらいbottleと判定されている…！！
参考にした本では90%とかで当たってたけど…"ペット"ボトルだから精度低いのかな…
あと画像は無いけれど、かなり誤認識が多い…帽子をchairと認識する…orz
精度を上げたいものだねぇ、読めたらパラメータ調整とか出来るようになるのかね？

### 3-2-2.プログラムを読んでみる

先生たちに、まだ何も作ってないのかよ…はぁ(^^;って顔された…ごめんなさい……
他の人のプログラム読んだら書けるようになるかなって…読んでいこうと思います…って言ったけど、これは果たして本当に書けるようになるのだろうか…およよ。
…とりあえず、今まで動かした画像認識のプログラム読んで理解するしかないね！(^ω^)

はー、完全に理解した。

あのね、3-2-1.で書いていた"camera=0(何で\"--\"なのかね？)"の部分、解決しました！
[cloneしてきたプロジェクトのREADMEファイル](https://github.com/tsutof/tiny_yolov2_onnx_cam/blob/master/README.ja.md) にも、こういうコマンド使うよーってのが書いてあったのだが、"tiny_yolov2_onnx_cam.py"の127~129行目に引数のパースがされていたのだ。
えっ、コマンドライン引数のパース？設定？って出来るんですかって驚きをしてしまった…へへっ。

さらに、44~48行目の"GST_STR_CSI"がよく分からなくて結構調べていた。
色々なプログラムに当たり前のように書かれているけど、解説書いてないし…
GStreamerの話ってのは分かるけど…
って思って"GStreamer nvarguscamerasrc"で調べたら、NVIDIAのGStreamerのユーザーガイドが出てきた。
nvarguscamerasrcはNVIDIA独自のプラグインですって書いてある…
あと、父親に聞いたらここでカメラで撮った画像を持ってきて、加工して、渡す…なパイプラインを構築しているんだそうな。
つまり"GST_STR_CSI"は、

- nvarguscamerasrcに、撮ってそのままの画像データを幅、高さ、書式？(NV12形式？)、フレームレートを指定して渡す
- nvarguscamerasrcから、nvvidconvに、画像データを幅、高さ、書式？(BGRx形式？)を指定して渡す
- nvvidconvから、videoconvertに画像データを渡す
- videoconvertから、appsinkに画像データを渡す

という流れを指定しているのかな？
1つ気になるのはNV12やBGRxについて調べていたら、[NV12 to RGBx bad luminance](https://github.com/intel/intel-vaapi-driver/issues/428) という話(輝度値が下がるよって話)が出てきたけど、今回は問題ないのかね？？？

## 3-3.からあげさんがブログに載っけていたプログラムを動かしてみる

そういえば、Samba入れる発端のあのアプリケーション([JetsonNanoのセットアップメモ2-4.を参照](/JetsonNano_memo2.html)) 動かしてないなぁと思い、動かしてみることにした。
でも、さっきのアプリケーションを実行するとき、"--camera=0"って書いたら出来たし、試しにやってみるか…

```bash
cd keras-pi/
python3 inspect_camera.py --camera=0
```

"inspect_camera.py: error: unrecognized arguments: --camera=0"

引数が認識できないって言われてる。
でも、[参考ページ](https://karaage.hatenadiary.jp/entry/2019/04/29/073000) ではラズパイカメラだよってdオプションで書いてるんだよなぁ…どうしよう。
とりあえず、オプション書かないで動かしてみるか…

```bash
python3 inspect_camera.py
```

![camera_App2_image](https://github.com/matsunono/matsunono.github.io/blob/master/img/JetsonNano_memo3/camera.png?raw=true)

動いた…プログラム書き換える必要無かったんだ…
嬉しいけれど、ズコーッ_(┐「ε:)_

(追記 その1)
一回アプリ終了してから動かそうとしたら、エラーが返って来た。

```text
ResourceExhaustedError (see above for traceback): OOM when allocating tensor with shape[3,3,32,64] and
  type float on /job:localhost/replica:0/task:0/device:GPU:0 by allocator GPU_0_bfc
  [[node conv2d_2/kernel/Initializer/random_uniform/RandomUniform (defined at inspect_camera.py:28) ]]
Hint: If you want to see a list of allocated tensors when OOM happens,
  add report_tensor_allocations_upon_oom to RunOptions for current allocation info.
```

何かメモリ足りないみたいなこと言ってるっぽいけど、OOMが分からなかったので調べたら、Out Of Memoryだって。
メモリ不足のエラーでした。
swap領域作ってたらエラー解消されたのかな？
頭が上手く回ってなかったので、再起動をして直したので分からないまま…次回起こったら試してみよう。

(追記 その2)
よく見たら、動く時でもプログラム実行時にWarningが出てた。

```text
[ WARN:0] global /home/matsuno/opencv/opencv-4.3.0/modules/videoio/src/cap_gstreamer.cpp (935) open OpenCV |
  GStreamer warning: Cannot query video position: status=0, value=-1, duration=-1
2020-04-28 17:52:52.174176: I tensorflow/stream_executor/dso_loader.cc:153]
  successfully opened CUDA library libcublas.so.10.0 locally
Gtk-Message: 17:53:08.837: Failed to load modu
```

カメラ辺りの設定が良くないっぽい、がよく分からない。
プログラムをいじる必要があるのだろうか…と考えた松ノ氏はググった。
[GitHubでの質問](https://github.com/TheImagingSource/tiscamera/issues/332) が出てきたが英語なので自動翻訳使いながら読んでみた、解決してないっぽい。

## 4.プログラムを書いてみる

## 4-1.Tensorflowを使って推しの顔認識をしてみる

参考：Jetson Japan User Group, "Jetson Nano 超入門", ソーテック社 [(amazonの販売ページ)](https://www.amazon.co.jp/Jetson-Nano%E8%B6%85%E5%85%A5%E9%96%80-Japan-User-Group/dp/4800712513)

[Python 画像認識：機械学習AI(自作サンプル)でラブライブ虹ヶ咲キャラを顔認識【OpenCV,Keras,ディープラーニング,ラズパイ】](https://nine-num-98.blogspot.com/2019/12/ai-lovelive-01.html)

その3ではYOLOv2を使用したリアルタイムな画像認識のプログラムを動かしてみたのだけど、精度が悪いってなった。
最終的にはリアルタイムな画像認識をしたい訳だけど、とりあえず1枚の画像を渡して画像認識するプログラムを書くことにする。
…理由はUSBカメラが今、手元に無いからょ。
あと、YOLOv3も今後触ってみたいと思う。

pythonでプログラム書くの久しぶりじゃな…って4月時点では思っていたけど、今(5月)ゼミでpythonのプログラム書いてるゎ…

注意: GUIのプログラムの実行はリモートでは出来ないので、本体から行おう(自責の念)

