---
title: RasberryPi Zero WHのセットアップメモ
summary: Raspberry Pi Zero WH のOS起動から初期設定、Chromiumのダウングレードまでの記録です。
publishedAt: 2023-11-13
tags: ["Raspberry Pi", "Setup"]
legacyPath: /rasberrypi_zero_wh_memo1.html
---

## 1.OSの起動まで

## 1-1.物理的な話

用意したもの

- Rasberry Pi Zero WH
- ACアダプタ（5V 3.0A）
- microSDカード（16GB）
- マウス（端子はUSB）
- キーボード（端子はUSB）
- モニター
- miniHDMI-HDMIケーブル

## 1-2.SDカードのフォーマットからOSのインストールまで

今回はSDカードのフォーマット、OSのインストールに [Rasberry Pi Imager](https://www.raspberrypi.com/software/) を用いる。

まず、SDカードをパソコンに挿入し、Rasberry Pi Imagerを開く。

Rasberry Piデバイスを"RASBERRY PI ZERO"、OSを"削除"、ストレージを任意のSDカードとし、フォーマットを行う。

次に、Rasberry Piデバイスを指定せず、OSを"Raspberry Pi OS (32-bit)"、ストレージを任意のSDカードとし、OSインストールを行う。

ここで、Rasberry Piデバイスを指定するとRaspberry Pi OS(32-bit)を指定できない。

Rasberry Piデバイスを"RASBERRY PY ZERO"と指定すると"Raspberry Pi OS(Legacy)"が一番上に来るので、こっちが推奨なのかもしれないが、今回はRaspberry Pi OS(32-bit)を入れる。

"次へ"を選択し、OSをSDカードへインストールする。

## 1-3.初期設定

まず、インストールが終わったSDカードをRasberry Pi Zero WH本体に挿入、本体の電源を入れる。

初回起動時は色々セットアップするので特に時間がかかる。

起動したら、まず日本語表記に変更する。

左上のラズベリーボタンを押し、"Rasberry Pi Configrence"→"Localization"→"Location"へ移動、Languageを"jp"と選択すると国と文字セットも日本に合うので、"OK"を押した後再起動を行う。

次に、このままではChromiumが使えないので、Chromiumのダウングレードを行う。

今回はダウングレードのためにPi-Appsを使用する。

Wi-Fiの設定を行った後、Pi-Appsのインストールを行うために、以下のコマンドを実行する。

```bash
$ sudo apt update
$ sudo apt upgrade
$ wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```

ここで、"-qO-"はqゼロではなく、q大文字のオーである。

Pi-Appsのインストールには成功したが、対応していない旨の警告が発生した。

その状態でChromium Downgradeを選択し、Chromium75にダウングレードした結果、ブラウザのアプリケーションを一切読み込まなくなった。

この処理の前にChromiumの再インストール、OSの変更をしたのだが、開かないままなので、現在（2023/11/13）RasBerry Pi Zero WHでブラウザを使うのをあきらめた方が良いかもしれない……。

Raspberry Pi Zero WH を Wi-Fi ヘッドレスで動かすためのセットアップ手順です。

## 準備するもの

- Raspberry Pi Zero WH
- microSD カード（16GB 以上）
- Raspberry Pi Imager

## OS の書き込みと初期設定

Raspberry Pi Imager で OS を書き込む際、歯車アイコンから次を設定しておくと起動後すぐ SSH で繋がります。

- ホスト名: `raspberrypi.local`
- SSH の有効化
- Wi-Fi の SSID / パスワード
- ユーザー名・パスワード

## SSH 接続確認

```bash
ssh pi@raspberrypi.local
# または IP アドレスを直接指定
ssh pi@192.168.x.x
```

## Python 3 の確認

```bash
python3 --version
pip3 --version
```

## 備考

Zero WH は USB OTG ポートが 1 つしかないため、USB ハブを使う場合は電源に注意が必要です。
