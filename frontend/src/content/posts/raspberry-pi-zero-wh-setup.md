---
title: RasberryPi Zero WHのセットアップメモ
summary: Raspberry Pi Zero WH を触るときの最初の確認事項と初期設定の記録です。
publishedAt: 2023-11-06
tags: ["Raspberry Pi", "Setup"]
legacyPath: /rasberrypi_zero_wh_memo1.html
---

## 概要

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
