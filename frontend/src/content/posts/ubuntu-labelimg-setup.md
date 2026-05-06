---
title: UbuntuにlabelImgを入れるまでメモ
summary: Ubuntu上でアノテーションツールlabelImgを動かすまでの試行錯誤の記録です。
publishedAt: 2020-04-01
tags: ["Ubuntu", "Python", "labelImg", "機械学習"]
legacyPath: /ubuntu_memo1.html
---

## 1.UbuntuにlabelImg入れるまでメモ

言語を英語に変えて再起動

```bash
$ sudo apt-get update
$ sudo apt install python3.7 -y
$ sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.7 1
$ sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.6 2
$ sudo update-alternatives --config python3
```

ここで2がpython3.7だったので、\*を2にしますって書く（"2"と打ってenter）

```bash
$ python3 --version
```

これで3.7.5って出たら成功

```bash
$ sudo apt install python3-pip
$ sudo pip3 install --upgrade pip
$ sudo apt install python3-venv
```

```bash
$ unzip labelImg-master.zip
$ sudo apt-get install pyqt5-dev-tools
```

labelImg-masterディレクトリに移動

```bash
$ sudo pip3 install -r requirements/requirements-linux-python3.txt
```

これが通ったらpip3上手く入ったって事（昨晩ここで失敗し続けた）

---

（追記）この時点で、"A problem occurred when chacking for the updates."が出ている

"New Terminal"を押しても反応しない…(- -;)

pythonのバージョンがーって話をネットで見かけたので、

```bash
$ sudo update-alternatives --config python3
```

で、"0"を打ってenter

python3.6にバージョンを戻して、"New Terminal"を押したらウインドウ開いた

そして、"A problem occurred when chacking for the updates."の"Show Updates"が開けたので、ソフトウェアのアップデートをする

再起動しますか？（あとで/いま）…今やって上手くいかなくても、ダメージ少ないのでは？？？

再起動後、右上の止まれアイコンが消え、Terminalの起動ができることを確認

---

その後（python3.6が開くように設定してから）labelImg.pyを開こうとすると、以下のコマンドを実行

```bash
$ make qt5py3
$ python3 labelImg.py
```

するとエラーが出るようになってしまった

```
Traceback (most recent call last):
  File "labelImg.py", line 40, in <module>
    from libs.labelFile import LabelFile, LabelFileError
  File "/home/matsuno/labelImg-master/libs/labelFile.py", line 10, in <module>
    from libs.pascal_voc_io import PascalVocWriter
  File "/home/matsuno/labelImg-master/libs/pascal_voc_io.py", line 6, in <module>
    from lxml import etree
ModuleNotFoundError: No module named 'lxml'
```

pip3コマンドも通らなくなってしまった、昨晩こけた時と同じ状態に…

なので、python3.7が開くように設定

```bash
$ sudo update-alternatives --config python3
```

で、"2"を打ってenter

その後labelImg.pyを動かす

```bash
$ python3 labelImg.py
```

ウインドウが出た！やったー！！

ただこの方法だと、うっかりTerminalを閉じたら二度と開けなくなるので、別の方法を探したいものだ

python3 = python3.6が開くように設定した状態で、

```bash
$ python3.7 labelImg.py
```

で開けば良いのでは？？？となったため、解決しました

---

## （2020/09/23追記）

パソコン組んだので、そのパソコンでもlabelImg使えるようにしたくなった

Ubuntu入れて、python3のバージョンを調べたら3.8.2だったから、labelImg-masterディレクトリに移動

```bash
$ sudo pip3 install -r requirements/requirements-linux-python3.txt
```

するとエラーが出てきた（lxml のビルド失敗、libxml2が見つからない等）

その後、

```bash
$ python3 labelImg.py
```

とコマンド打ったら

```
Traceback (most recent call last):
  File "labelImg.py", line 41, in <module>
    from libs.labelFile import LabelFile, LabelFileError, LabelFileFormat
  ...
ModuleNotFoundError: No module named 'lxml'
```

とエラーが出てプログラムが開けない

lxmlモジュールが見つからないようなので、

```bash
$ sudo pip3 install lxml
```

と打ち込んだ後、

```bash
$ python3 labelImg.py
```

と打ち込んだらプログラムが動いたので、良かった
