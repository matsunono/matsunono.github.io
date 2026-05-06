---
title: Jetson Nanoのセットアップメモ
summary: Jetson Nano セットアップ手順のメモ（OS起動まで）。
publishedAt: 2023-10-30
tags: ["Jetson Nano", "Linux", "Setup"]
legacyPath: /JetsonNano_memo1.html
---

## 1.OSの起動まで

### 1-1.物理的な話

用意したもの

- Jetson Nano
- ACアダプタ(5V 4.0A)
- microSDカード(最低16GB推奨32GBらしいが，私は64GBのやつ)
- マウス(端子はUSB)
- キーボード(忘れてて家の倉庫を漁った，端子はUSBで)
- モニター
- HDMIケーブル
- ネットにつなぐ環境(私はPLCアダプタとLANケーブル使った)
- USBカメラ

### 1-2.SDカードのフォーマットからOSのインストールまで

参考：[小型 AI コンピュータ NVIDIA Jetson Nano 開発者キットのセットアップ](https://qiita.com/tsutof/items/66e68c75b462c4faf1cb)

#### 1-2-1.OSイメージファイルをダウンロードする

[Jetson Download Center](https://developer.nvidia.com/embedded/downloads) の "Jetson Nano Developer Kit SD Card Image" を選択してダウンロードする．

(2023/10/30 追記) CUDAのバージョンを上げようとしたら環境を壊したので，JetPack ver4.6.1を入れ直した．

#### 1-2-2.SDカードのフォーマット

[SD Memory Card Formatter](https://www.sdcard.org/downloads/formatter/eula_windows/) を使用してフォーマットを行う．

(2023/10/30 追記) SDカードが「デバイスとドライブ」に表示されないので，ディスクの管理から「新しいシンプルボリューム」を選択，その後SD Card Formatterにてフォーマットした．

#### 1-2-3.OSイメージファイルを書き込む

[Etcher](https://www.balena.io/etcher/) を使用して書き込みを行う．

#### 1-2-4.OSの起動

OSのイメージファイルを書き込んだmicroSDカードをJetson Nanoに差し込む(microSDカードを指す場所が分かりずらい，CPUクーラーの下あたり)．
ACアダプタの端子を指すと自動で電源が付く．

最初の起動時に，

- 使用許諾の承諾
- 言語の選択(English)
- キーボードの選択(JapaneseのJapanese)
- タイムゾーンの選択(Tokyo)
- アカウントの設定

を行う

## 2.セットアップ

参考：[Jetson Nano関係のTIPSまとめ](https://qiita.com/karaage0703/items/b14c249aa33112669ee4)

## 2-1.TensorFlowのセットアップ

参考：

- [Jetson Nanoインストールメモ](https://qiita.com/n-yamanaka/items/dd82996312ab333fe9b2)
- [Jetson Nanoをセットアップしてディープラーニングで画像認識を試してみた](https://karaage.hatenadiary.jp/entry/2019/04/29/073000)

(反省点)最初に [installSwapfile](https://github.com/JetsonHacksNano/installSwapfile) を使用して SWAP 領域を追加しておけばもう少し早く終わった。

[Jetson Nanoをセットアップしてディープラーニングで画像認識を試してみた](https://karaage.hatenadiary.jp/entry/2019/04/29/073000) を見ながら、以下のコマンドを実行。

```bash
git clone https://github.com/karaage0703/jetson-nano-tools
cd jetson-nano-tools
./install-tensorflow.sh
./install-tools.sh
```

うーん、スクリプトファイル(コマンドを書いてくれているファイル、打ち込む面倒が省ける)を入れて、実行してるってことかね？理解理解。

## 2-2.OSのアップデート

以下のコマンドを実行。

```bash
sudo apt-get update
sudo apt-get upgrade
```

先に OS のアップデートするべきだった。

## 2-3.OpenCVのセットアップ

参考：[Jetson NanoへOpenCV 4.1.0をインストールする](https://qiita.com/asahi0301/items/3c287190348552f19415)

参考ページ内のリンク（[こちら](https://github.com/AastaNV/JEP/blob/master/script/install_opencv4.0.0_Nano.sh)）が死んでいたので、参考ページに載っていたスクリプトファイルを OpenCV 4.3.0 をインストールするように変更した。

以下のコマンドを実行する(スクリプトの実行)。

```bash
mkdir opencv
./install_opencv4.3.0_Nano.sh opencv
```

## 2-4.画像認識のソフトを動かして遊ぶ(遊べない)

[Jetson Nanoをセットアップしてディープラーニングで画像認識を試してみた](https://karaage.hatenadiary.jp/entry/2019/04/29/073000) を見ながら、以下のコマンドを実行。("Keras" を "Karas" だと勘違いして、最初そんなフォルダ無いよって言われた)

```bash
git clone https://github.com/karaage0703/keras-pi
cd keras-pi
```

あ、ラズパイのカメラじゃないから、USBカメラですよーって書き直さなきゃかな？と思い、VSCodeで開こうと、(この時すでにTeraTermを使ってリモートで動かしていたのだ！)

```bash
code inspect_camera_pi.py
```

とコマンドを打ったけど、"code" なんてコマンドは無いですわよと言われてしまった。よく考えたら当たり前だった、JetsonNano に VSCode 入れてないですもん。

## 2-5.リモートでJetsonNanoの中のファイルを触れるようにする

リモートで触るには Samba を入れるのが良いらしい。

![さんば…？image](https://github.com/matsunono/matsunono.github.io/blob/master/img/JetsonNano_memo2/samba.PNG?raw=true)

### 2-5-1.失敗したメモ (失敗を共有するのも大事だよね)

[Ubuntuでファイルサーバーをたてる（Samba）](https://qiita.com/msrks/items/1385cf13258dd1a0da08) を見ながら、以下のコマンドを実行。

```bash
# インストール
sudo apt-get -y install samba

# 共有するディレクトリの作成
sudo mkdir /home/shere
sudo chmod 777 /home/shere

# ファイルサーバーの設定
sudo vim /etc/samba/smb.conf
```

`smb.conf` を下記のように書き換える。

```conf
# 25行目：以下2行追記
unix charset = UTF-8
dos charset = CP932

# 30行目：必要があれば変更 (Windows側に合わせる)
workgroup = WORKGROUP

# 51行目：コメント解除しアクセス許可IP追記
interfaces = 127.0.0.0/8 10.0.0.0/24

# 58行目：コメント解除 & 追記
bind interfaces only = yes
map to guest = Bad User

# 最終行に追記
[share]# 任意の共有名称を指定
   path = /home/share# 共有フォルダ指定
   writable = yes# 書き込みOK
   guest ok = yes# ゲストユーザーOK
   guest only = yes# 全てゲストとして扱う
   create mode = 0777# フルアクセスでファイル作成
   directory mode = 0777# フルアクセスでフォルダ作成
```

ここでファイルサーバーの再起動の為に、以下のコマンドを実行した。

```bash
sudo systemctl restart smbd
```

すると、以下のエラー文が返ってきた。

```text
Job for smbd.service failed because the control process exited with error code.
See "systemctl status smbd.service" and "journalctl -xe" for details.
```

よく見直してみると "share" が "shere" になっていた。まあ、エラーと関係ない気もするけど、スペルミスは直しておこうと。

```bash
sudo rmdir /home/shere
sudo mkdir /home/share
sudo chmod 777 /home/share

# confファイルの中も間違えているので直す
sudo vim /etc/samba/smb.conf
```

しかし、同じエラーが出る為、

```conf
# 最終行に追記
[share] # 任意の共有名称を指定
path = /home/share # 共有フォルダ指定
writable = yes # 書き込みOK
guest ok = yes # ゲストユーザーOK
guest only = yes # 全てゲストとして扱う
create mode = 0777 # フルアクセスでファイル作成
directory mode = 0777 # フルアクセスでフォルダ作成
```

上記のように、参考ページの通りに `smb.conf` を書いていたのを

```conf
# 最終行に追記
[share]
path = /home/share
writable = yes
guest ok = yes
guest only = yes
create mode = 0777
directory mode = 0777
```

上記のように、コメントを削除してみたところ、

```bash
sudo systemctl restart smbd
```

が実行できた！

だがしかし、JetsonNano の share フォルダにアクセス出来ないし、nmbd が再起動できない…orz

### 2-5-2.成功したメモ

もうだめ…わかんにゃい…

と、とりあえず `smb.conf` の中身を書き換える前に戻して、以下のコマンドを実行して、`smbd` と `nmbd` の再起動が出来る事を確認する。

```bash
sudo systemctl restart smbd nmbd
```

参考ページが悪かったのかな…と、[NVIDIA Jetson Nano を使ってみる（起動と設定編）](https://wisteriahill.sakura.ne.jp/CMS/WordPress/2019/07/07/nvidia-jetson-nano-set-up-configration/) を見ながら、`smb.conf` の末尾に以下の文を追加。

```conf
[share]
path = /home/share
read only = no
guest ok = yes
writable = yes
browsable = yes
directory mode = 0777
create mode = 0777
```

その後、以下のコマンドを実行して、`smbd` と `nmbd` の再起動が出来る事を確認する。

```bash
sudo systemctl restart smbd nmbd
```

やったー！

その後、エクスプローラーのネットワークに移動して、住所を打ち込むと接続出来た…嬉しい…！！

![接続できたよimage](https://github.com/matsunono/matsunono.github.io/blob/master/img/JetsonNano_memo2/success_ver.PNG?raw=true)

2-5-1.で上手くいかなかった理由として、`smb.conf` の中をいじり過ぎたことが考えられる。

```conf
# 25行目：以下2行追記
unix charset = UTF-8
dos charset = CP932

# 30行目：必要があれば変更 (Windows側に合わせる)
workgroup = WORKGROUP

# 51行目：コメント解除しアクセス許可IP追記
interfaces = 127.0.0.0/8 10.0.0.0/24

# 58行目：コメント解除 & 追記
bind interfaces only = yes
map to guest = Bad User
```

上記の部分は変更しなくてOKだった。

Samba？なにそれ？楽しいの？な無知無知のムチン(れんこん)な私なので、最初に見つけたページに書いてあるをそっくりそのまま試していたが、どうも上手くいかないと思ったら、参考資料を変更するのもアリだなと。

あとは今回、上手くいかない→最初の状態に書き直す！が出来たので良かったが、ちゃんとバックアップを取るべきだなと痛感した。さらに今リモートで触っているけど、CUI なのでちゃんとコマンドを覚えておかないと…うろ覚えで打って、そんなコマンド無いわよ！！ってちょくちょく言われるので…頻繁に使うコマンドをいちいちググるのは、大変だし…。

多分、これでセットアップが終わったので、やっと次回から遊べるでござるよ！
