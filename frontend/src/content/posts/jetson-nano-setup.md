---
title: Jetson Nanoのセットアップメモ
summary: Jetson Nano を最初に触るときの手順や引っかかりやすい点のまとめです。
publishedAt: 2023-10-30
tags: ["Jetson Nano", "Linux", "Setup"]
legacyPath: /JetsonNano_memo1.html
---

## 概要

Jetson Nano を触り始めたときのセットアップ作業を、後から見返しやすい形にまとめています。

## 準備するもの

- Jetson Nano Developer Kit
- microSD カード（32GB 以上推奨）
- USB キーボード・マウス
- HDMI 接続できるモニター
- 5V 4A の電源アダプター（バレルジャック）

## OS の書き込み

NVIDIA が提供する JetPack SD カードイメージを公式サイトからダウンロードし、balenaEtcher などで microSD に書き込みます。

```bash
# 書き込み後、SD を挿して起動
# 初回起動時はセットアップウィザードが走る
```

## 初回起動後の確認

```bash
# CUDA のバージョン確認
nvcc --version

# Jetson の状態確認（jtop が入っている場合）
sudo jtop
```

## 備考

- 旧 HTML 版の詳細は「旧HTMLを見る」ボタンから参照できます。
- 本ページは Markdown へ移行中のサンプルです。
