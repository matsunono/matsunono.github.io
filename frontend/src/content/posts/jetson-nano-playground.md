---
title: Jetson Nanoで遊ぶメモ
summary: 環境構築後に試したことや実験ログを残す備忘録です。
publishedAt: 2020-04-30
tags: ["Jetson Nano", "Experiment"]
legacyPath: /JetsonNano_memo3.html
---

## 概要

セットアップが終わった後に試したことを雑多に記録しています。

## GPIO を触ってみる

Jetson.GPIO ライブラリを使うと Python から GPIO を制御できます。

```python
import Jetson.GPIO as GPIO

GPIO.setmode(GPIO.BOARD)
GPIO.setup(7, GPIO.OUT, initial=GPIO.HIGH)
```

## カメラの確認

```bash
# CSI カメラが認識されているか確認
ls /dev/video*

# GStreamer でキャプチャテスト
gst-launch-1.0 nvarguscamerasrc ! nvoverlaysink
```

## Docker で環境を分離する

深層学習や実験用ライブラリは Docker コンテナの中に閉じ込めると本体環境が汚れません。  
NVIDIA の L4T コンテナイメージを使うと CUDA 対応済みの環境がすぐ立ち上がります。

## 備考

実験したことは順次追記していく予定です。
