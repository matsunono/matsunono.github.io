---
title: VMware playerでKaliLinuxを動かすメモ
summary: 仮想環境で Kali Linux を手軽に試すときの前提条件と手順のまとめです。
publishedAt: 2020-04-21
tags: ["Kali Linux", "VMware"]
legacyPath: /kalilinux_memo1.html
---

## 概要

VMware Player（無償版）上で Kali Linux を動かすための手順を整理しています。

## 環境

- ホスト OS: Windows 10 / 11
- VMware Workstation Player 17（無償版）
- Kali Linux 公式 VMware イメージ

## セットアップ手順

1. [Kali Linux 公式](https://www.kali.org/get-kali/#kali-virtual-machines) から VMware 用の `.7z` を取得
2. 解凍して `.vmx` ファイルを VMware Player で開く
3. 「仮想マシンの設定を更新する」ダイアログが出たらそのまま続行
4. 初回ログインのデフォルト認証情報: `kali / kali`

## 日本語入力の設定

```bash
sudo apt update
sudo apt install -y fcitx-mozc
im-config -n fcitx
# 再起動後に設定アイコンからモズクを追加
```

## 備考

NAT 接続のまま使えばホスト側ネットワークへの影響を最小化できます。
