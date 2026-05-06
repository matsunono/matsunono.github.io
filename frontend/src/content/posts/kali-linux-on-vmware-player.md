---
title: VMware playerでKaliLinuxを動かすメモ
summary: ThinkPadを妹に譲ることになり、ZenBookのDドライブに仮想マシンを作ってKali Linuxを動かすまでの記録です。
publishedAt: 2020-04-21
tags: ["Kali Linux", "VMware"]
legacyPath: /kalilinux_memo1.html
---

松ノ氏はノートパソコンを2台所有しており、ASUSのZenBookをメインで、LenovoのThinkPadをハッキングの勉強に使用していたのだが、ある日のこと…

松ノ氏の妹が大学デビューをしノートパソコンが必要になった為、ThinkPad譲ることになってしまったのだった……！

KaliLinux入れていたのに…どうしようか

P研の先輩に相談したら、部室のボード持ってきゃあって言われたけれど、置く場所が無い…orz

メインで使っているZenBookのCドライブはMHWで容量いっぱい…ん？Cドライブは？

ならば、Dドライブに仮想マシンを保存しとけば良いんだ！！！

## 1.OSの起動まで

## 1-1.物理的な話

用意したもの

- ノートパソコン
- 外付けSSD（Cドライブでも再現できるように書くね）
- ネットにつなぐ環境（Wi-Fiだよ）
- モニター（作業しやすい）
- HDMIケーブル（作業しやすい）
- マウス（作業しやすい）

## 1-2.OSイメージファイルの用意

参考:
- [VMwareでKali Linuxをインストール～日本語入力まで](http://sonickun.hatenablog.com/entry/2014/06/10/184403)
- IPUSIRON, "ハッカーの学校", 株式会社データハウス [(Amazonの販売ページ)](https://www.amazon.co.jp/%E3%83%8F%E3%83%83%E3%82%AB%E3%83%BC%E3%81%AE%E5%AD%A6%E6%A0%A1-IPUSIRON/dp/4781701973)（IPUSIRON氏の本は"暗号技術のすべて"とかも面白いです）

[DOWNLOAD KALI LINUX VIRTUAL IMAGES](https://www.offensive-security.com/kali-linux-vm-vmware-virtualbox-image-download/) から、"Kali Linux VMware 64-Bit"をダウンロードする

時間かかるので、HPの更新とかお絵描きとかして待つ

ダウンロードが終わったら、圧縮ファイルを [7zip](https://sevenzip.osdn.jp/)（インストールしていない場合はリンク先でインストール）で解凍する

今回はDドライブに入れないと容量無いので、Dドライブに展開したのを置いてくれと指定

## 1-3.VMwareでKaliLinuxを動かす

VMwareが入っていない場合は [VMware Workstation Player の試用](https://www.vmware.com/jp/products/workstation-player/workstation-player-evaluation.html) でダウンロードしてインストール

私は前入れてたのをアップグレードしたので、インストールしたときのことを覚えてないけれど、[【ゼロからわかる】VMwareのインストール方法と使い方](https://eng-entrance.com/linux-vmware-install) を参考にするといいかもしれない

VMwareを起動して"仮想マシンを開く"を選択する

![choice_vm_image](https://github.com/matsunono/matsunono.github.io/blob/master/img/kalilinux_memo1/choice_vm.png?raw=true)

すると、OSイメージはどれ？と聞かれるので、さっき解凍したOSイメージを選択する

![choice_OS_image](https://github.com/matsunono/matsunono.github.io/blob/master/img/kalilinux_memo1/choice_OSimage.png?raw=true)

"仮想マシンの再生"を選択すると、KaliLinuxが起動する

ここで、"この仮想マシンは移動またはコピーされた可能性があります"と、移動・コピー確認ダイアログが表示されるので、"コピーしました"を選択

また、VMware Toolsのインストールについてのダイアログも出るので、VMware Toolsは便利なのでインストールする

暫く待っているとログイン画面が出てくるのだが、なんとrootユーザーでログインできない（参考: [Kali Linux、rootユーザーをデフォルトで廃止](https://news.mynavi.jp/article/20200108-951143/)）ので、ユーザー名kali、パスワードkaliでログインする

## 次へ

2へ続く…けど、まだ書いてない
