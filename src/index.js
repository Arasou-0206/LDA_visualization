import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import ReactWordcloud from "react-wordcloud";
import { ResponsiveTreeMap } from "@nivo/treemap";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    window
      .fetch("./LDA-tag.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const root = data;
  const words = [
    [
      { value: 0.052, text: "実行" },
      { value: 0.042, text: "ファイル" },
      { value: 0.032, text: "テスト" },
      { value: 0.021, text: "エラー" },
      { value: 0.02, text: "python" },
      { value: 0.018, text: "指定" },
      { value: 0.018, text: "出力" },
      { value: 0.015, text: "コマンド" },
      { value: 0.015, text: "コード" },
      { value: 0.013, text: "結果" },
      { value: 0.011, text: "確認" },
      { value: 0.009, text: "プログラム" },
      { value: 0.009, text: "使用" },
      { value: 0.009, text: "表示" },
      { value: 0.008, text: "オプション" },
      { value: 0.007, text: "発生" },
      { value: 0.007, text: "スクリプト" },
      { value: 0.007, text: "処理" },
      { value: 0.007, text: "test" },
      { value: 0.006, text: "問題" },
      { value: 0.006, text: "実施" },
      { value: 0.006, text: "内容" },
      { value: 0.006, text: "作成" },
      { value: 0.006, text: "py" },
      { value: 0.006, text: "プロセス" },
      { value: 0.005, text: "パス" },
      { value: 0.005, text: "モジュール" },
      { value: 0.005, text: "ディレクトリ" },
      { value: 0.005, text: "必要" },
      { value: 0.005, text: "bot" },
    ],
    [
      { value: 0.037, text: "インストール" },
      { value: 0.027, text: "環境" },
      { value: 0.026, text: "設定" },
      { value: 0.018, text: "aws" },
      { value: 0.018, text: "コマンド" },
      { value: 0.018, text: "起動" },
      { value: 0.017, text: "docker" },
      { value: 0.016, text: "作成" },
      { value: 0.015, text: "実行" },
      { value: 0.014, text: "確認" },
      { value: 0.01, text: "ファイル" },
      { value: 0.009, text: "構築" },
      { value: 0.009, text: "接続" },
      { value: 0.009, text: "windows" },
      { value: 0.009, text: "バージョン" },
      { value: 0.008, text: "必要" },
      { value: 0.008, text: "パッケージ" },
      { value: 0.008, text: "ディレクトリ" },
      { value: 0.007, text: "ダウンロード" },
      { value: 0.007, text: "linux" },
      { value: 0.006, text: "os" },
      { value: 0.006, text: "イメージ" },
      { value: 0.006, text: "install" },
      { value: 0.006, text: "node" },
      { value: 0.006, text: "デプロイ" },
      { value: 0.005, text: "変更" },
      { value: 0.005, text: "service" },
      { value: 0.005, text: "参考" },
      { value: 0.005, text: "config" },
      { value: 0.005, text: "制御" },
    ],
    [
      { value: 0.022, text: "js" },
      { value: 0.017, text: "コード" },
      { value: 0.016, text: "記事" },
      { value: 0.014, text: "html" },
      { value: 0.013, text: "開発" },
      { value: 0.012, text: "コンポーネント" },
      { value: 0.012, text: "実装" },
      { value: 0.011, text: "ライブラリ" },
      { value: 0.011, text: "vue" },
      { value: 0.01, text: "javascript" },
      { value: 0.01, text: "css" },
      { value: 0.008, text: "web" },
      { value: 0.008, text: "json" },
      { value: 0.008, text: "機能" },
      { value: 0.008, text: "言語" },
      { value: 0.007, text: "react" },
      { value: 0.007, text: "プロジェクト" },
      { value: 0.007, text: "タグ" },
      { value: 0.007, text: "必要" },
      { value: 0.007, text: "framework" },
      { value: 0.007, text: "簡単" },
      { value: 0.007, text: "ページ" },
      { value: 0.007, text: "記述" },
      { value: 0.006, text: "ファイル" },
      { value: 0.006, text: "機械学習" },
      { value: 0.006, text: "利用" },
      { value: 0.005, text: "typescript" },
      { value: 0.005, text: "要素" },
      { value: 0.005, text: "業務" },
      { value: 0.005, text: "導入" },
    ],
    [
      { value: 0.048, text: "git" },
      { value: 0.037, text: "github" },
      { value: 0.024, text: "リポジトリ" },
      { value: 0.023, text: "slack" },
      { value: 0.02, text: "ブランチ" },
      { value: 0.02, text: "変更" },
      { value: 0.019, text: "key" },
      { value: 0.017, text: "ログ" },
      { value: 0.017, text: "コミット" },
      { value: 0.016, text: "ファイル" },
      { value: 0.016, text: "push" },
      { value: 0.014, text: "作成" },
      { value: 0.012, text: "コマンド" },
      { value: 0.012, text: "master" },
      { value: 0.011, text: "デプロイ" },
      { value: 0.01, text: "ローカル" },
      { value: 0.01, text: "管理" },
      { value: 0.01, text: "作業" },
      { value: 0.01, text: "確認" },
      { value: 0.01, text: "log" },
      { value: 0.009, text: "ssh" },
      { value: 0.008, text: "マージ" },
      { value: 0.008, text: "commit" },
      { value: 0.008, text: "探索" },
      { value: 0.008, text: "add" },
      { value: 0.008, text: "削除" },
      { value: 0.007, text: "wordpress" },
      { value: 0.007, text: "pull" },
      { value: 0.007, text: "修正" },
      { value: 0.007, text: "リモート" },
    ],
    [
      { value: 0.024, text: "データ" },
      { value: 0.011, text: "モデル" },
      { value: 0.01, text: "必要" },
      { value: 0.01, text: "問題" },
      { value: 0.01, text: "学習" },
      { value: 0.009, text: "記事" },
      { value: 0.008, text: "開発" },
      { value: 0.007, text: "システム" },
      { value: 0.006, text: "情報" },
      { value: 0.006, text: "結果" },
      { value: 0.006, text: "エンジニア" },
      { value: 0.006, text: "理解" },
      { value: 0.005, text: "技術" },
      { value: 0.005, text: "設計" },
      { value: 0.005, text: "機能" },
      { value: 0.005, text: "チーム" },
      { value: 0.005, text: "利用" },
      { value: 0.005, text: "説明" },
      { value: 0.004, text: "特徴" },
      { value: 0.004, text: "サービス" },
      { value: 0.004, text: "紹介" },
      { value: 0.004, text: "手法" },
      { value: 0.004, text: "勉強" },
      { value: 0.004, text: "分析" },
      { value: 0.004, text: "ゲーム" },
      { value: 0.004, text: "重要" },
      { value: 0.004, text: "デバイス" },
      { value: 0.004, text: "内容" },
      { value: 0.004, text: "課題" },
      { value: 0.004, text: "目的" },
    ],
    [
      { value: 0.027, text: "作成" },
      { value: 0.023, text: "api" },
      { value: 0.019, text: "取得" },
      { value: 0.017, text: "情報" },
      { value: 0.015, text: "設定" },
      { value: 0.015, text: "利用" },
      { value: 0.015, text: "アクセス" },
      { value: 0.014, text: "ユーザー" },
      { value: 0.014, text: "サービス" },
      { value: 0.012, text: "必要" },
      { value: 0.011, text: "コンテナ" },
      { value: 0.01, text: "使用" },
      { value: 0.01, text: "登録" },
      { value: 0.01, text: "id" },
      { value: 0.009, text: "認証" },
      { value: 0.009, text: "ログイン" },
      { value: 0.009, text: "url" },
      { value: 0.009, text: "アプリケーション" },
      { value: 0.009, text: "データ" },
      { value: 0.008, text: "送信" },
      { value: 0.008, text: "リクエスト" },
      { value: 0.008, text: "機能" },
      { value: 0.008, text: "サーバー" },
      { value: 0.008, text: "cloud" },
      { value: 0.008, text: "管理" },
      { value: 0.008, text: "アカウント" },
      { value: 0.008, text: "リソース" },
      { value: 0.008, text: "ユーザ" },
      { value: 0.007, text: "web" },
      { value: 0.007, text: "確認" },
    ],
    [
      { value: 0.037, text: "表示" },
      { value: 0.033, text: "設定" },
      { value: 0.026, text: "画面" },
      { value: 0.024, text: "選択" },
      { value: 0.018, text: "作成" },
      { value: 0.018, text: "入力" },
      { value: 0.017, text: "クリック" },
      { value: 0.015, text: "ボタン" },
      { value: 0.014, text: "追加" },
      { value: 0.012, text: "アプリ" },
      { value: 0.009, text: "変更" },
      { value: 0.009, text: "ノード" },
      { value: 0.009, text: "ページ" },
      { value: 0.008, text: "機能" },
      { value: 0.007, text: "検索" },
      { value: 0.007, text: "記事" },
      { value: 0.007, text: "操作" },
      { value: 0.007, text: "unity" },
      { value: 0.006, text: "キー" },
      { value: 0.006, text: "移動" },
      { value: 0.006, text: "確認" },
      { value: 0.006, text: "ui" },
      { value: 0.006, text: "状態" },
      { value: 0.005, text: "イベント" },
      { value: 0.005, text: "編集" },
      { value: 0.005, text: "保存" },
      { value: 0.005, text: "項目" },
      { value: 0.005, text: "使用" },
      { value: 0.005, text: "line" },
      { value: 0.005, text: "amazon" },
    ],
    [
      { value: 0.029, text: "関数" },
      { value: 0.02, text: "処理" },
      { value: 0.019, text: "クラス" },
      { value: 0.018, text: "メソッド" },
      { value: 0.016, text: "定義" },
      { value: 0.015, text: "変数" },
      { value: 0.015, text: "実装" },
      { value: 0.013, text: "オブジェクト" },
      { value: 0.011, text: "コード" },
      { value: 0.011, text: "引数" },
      { value: 0.01, text: "計算" },
      { value: 0.01, text: "要素" },
      { value: 0.009, text: "配列" },
      { value: 0.009, text: "結果" },
      { value: 0.008, text: "文字列" },
      { value: 0.007, text: "生成" },
      { value: 0.006, text: "使用" },
      { value: 0.006, text: "変換" },
      { value: 0.006, text: "必要" },
      { value: 0.006, text: "指定" },
      { value: 0.006, text: "条件" },
      { value: 0.006, text: "出力" },
      { value: 0.005, text: "参照" },
      { value: 0.005, text: "リスト" },
      { value: 0.005, text: "説明" },
      { value: 0.005, text: "lambda" },
      { value: 0.005, text: "パラメータ" },
      { value: 0.005, text: "部分" },
      { value: 0.004, text: "データ" },
      { value: 0.004, text: "実行" },
    ],
    [
      { value: 0.034, text: "rails" },
      { value: 0.028, text: "azure" },
      { value: 0.023, text: "手順" },
      { value: 0.023, text: "ruby" },
      { value: 0.016, text: "タスク" },
      { value: 0.013, text: "バージョン" },
      { value: 0.012, text: "ci" },
      { value: 0.01, text: "ウィンドウ" },
      { value: 0.009, text: "gem" },
      { value: 0.008, text: "備忘録" },
      { value: 0.008, text: "rb" },
      { value: 0.008, text: "マシン" },
      { value: 0.007, text: "エラー" },
      { value: 0.007, text: "記事" },
      { value: 0.007, text: "cli" },
      { value: 0.007, text: "リリース" },
      { value: 0.007, text: "arduino" },
      { value: 0.007, text: "ビルド" },
      { value: 0.007, text: "今後" },
      { value: 0.006, text: "参考文献" },
      { value: 0.006, text: "レイヤー" },
      { value: 0.006, text: "環境" },
      { value: 0.006, text: "参考" },
      { value: 0.006, text: "task" },
      { value: 0.006, text: "修正" },
      { value: 0.006, text: "blob" },
      { value: 0.006, text: "一緒" },
      { value: 0.005, text: "開発" },
      { value: 0.005, text: "gradle" },
      { value: 0.005, text: "led" },
    ],
    [
      { value: 0.031, text: "データ" },
      { value: 0.03, text: "テーブル" },
      { value: 0.026, text: "php" },
      { value: 0.024, text: "db" },
      { value: 0.017, text: "id" },
      { value: 0.017, text: "data" },
      { value: 0.016, text: "データベース" },
      { value: 0.016, text: "sql" },
      { value: 0.015, text: "mysql" },
      { value: 0.014, text: "user" },
      { value: 0.013, text: "name" },
      { value: 0.012, text: "レコード" },
      { value: 0.011, text: "microsoft" },
      { value: 0.011, text: "csv" },
      { value: 0.009, text: "カラム" },
      { value: 0.009, text: "model" },
      { value: 0.008, text: "削除" },
      { value: 0.008, text: "users" },
      { value: 0.008, text: "type" },
      { value: 0.007, text: "モデル" },
      { value: 0.007, text: "time" },
      { value: 0.006, text: "指定" },
      { value: 0.006, text: "macos" },
      { value: 0.006, text: "select" },
      { value: 0.006, text: "クリエイト" },
      { value: 0.006, text: "日付" },
      { value: 0.006, text: "postgresql" },
      { value: 0.006, text: "table" },
      { value: 0.006, text: "アップ" },
      { value: 0.006, text: "index" },
    ],
    [
      { value: 0.056, text: "画像" },
      { value: 0.019, text: "ビルド" },
      { value: 0.015, text: "android" },
      { value: 0.014, text: "pc" },
      { value: 0.014, text: "サイズ" },
      { value: 0.013, text: "指定" },
      { value: 0.012, text: "ios" },
      { value: 0.012, text: "flutter" },
      { value: 0.011, text: "変換" },
      { value: 0.01, text: "手順" },
      { value: 0.01, text: "対応" },
      { value: 0.01, text: "タイミング" },
      { value: 0.01, text: "state" },
      { value: 0.009, text: "検出" },
      { value: 0.008, text: "bit" },
      { value: 0.008, text: "image" },
      { value: 0.008, text: "ステップ" },
      { value: 0.007, text: "xcode" },
      { value: 0.007, text: "フォント" },
      { value: 0.007, text: "生成" },
      { value: 0.007, text: "step" },
      { value: 0.007, text: "build" },
      { value: 0.007, text: "方向" },
      { value: 0.006, text: "アドレス" },
      { value: 0.006, text: "文字" },
      { value: 0.006, text: "apple" },
      { value: 0.006, text: "ファイル" },
      { value: 0.006, text: "sdk" },
      { value: 0.006, text: "証明書" },
      { value: 0.005, text: "世界" },
    ],
    [
      { value: 0.104, text: "https" },
      { value: 0.078, text: "com" },
      { value: 0.025, text: "github" },
      { value: 0.024, text: "qiita" },
      { value: 0.02, text: "www" },
      { value: 0.018, text: "jp" },
      { value: 0.016, text: "go" },
      { value: 0.014, text: "html" },
      { value: 0.014, text: "items" },
      { value: 0.013, text: "http" },
      { value: 0.012, text: "docs" },
      { value: 0.011, text: "org" },
      { value: 0.011, text: "参考" },
      { value: 0.011, text: "ja" },
      { value: 0.009, text: "laravel" },
      { value: 0.009, text: "io" },
      { value: 0.007, text: "blog" },
      { value: 0.007, text: "会社" },
      { value: 0.006, text: "net" },
      { value: 0.006, text: "google" },
      { value: 0.005, text: "code" },
      { value: 0.005, text: "component" },
      { value: 0.005, text: "演算子" },
      { value: 0.005, text: "質問" },
      { value: 0.004, text: "目標" },
      { value: 0.004, text: "issue" },
      { value: 0.004, text: "twitter" },
      { value: 0.004, text: "ビット" },
      { value: 0.004, text: "サイト" },
      { value: 0.004, text: "手順" },
    ],
  ];

  const wordClioudOptions = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "DotumChe",
    fontSizes: [50, 110],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };

  return (
    <div>
      <head>
        <title>LDAを用いたQiitaの分析</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"
        ></link>
      </head>
      <body>
        {/*title*/}
        <section class="hero is-success">
          <div class="hero-head">
            <nav class="navbar">
              <div class="container">
                <div id="navbarMenuHeroA" class="navbar-menu">
                  <div class="navbar-end">
                    <a class="navbar-item is-active" href="./index.html">
                      Home
                    </a>
                    <a class="navbar-item" href="./explanation.html">
                      Examples
                    </a>
                    <a class="navbar-item">Documentation</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-1">LDAを用いたQiitaの分析</h1>
              <h2 class="subtitle is-6">適当に説明書くところ</h2>
            </div>
          </div>
        </section>

        <br></br>
        <br></br>
        <div class="navbar-start">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-success is-large" href="#topic1">
                <strong>Topic1</strong>
              </a>
              <a class="button is-success is-large" href="#topic2">
                <strong>topic2</strong>
              </a>
              <a class="button is-success is-large" href="#topic3">
                <strong>topic3</strong>
              </a>
              <a class="button is-success is-large" href="#topic4">
                <strong>topic4</strong>
              </a>
              <a class="button is-success is-large" href="#topic5">
                <strong>topic5</strong>
              </a>
              <a class="button is-success is-large" href="#topic6">
                <strong>topic6</strong>
              </a>
              <a class="button is-success is-large" href="#topic7">
                <strong>topic7</strong>
              </a>
              <a class="button is-success is-large" href="#topic8">
                <strong>topic8</strong>
              </a>
              <a class="button is-success is-large" href="#topic9">
                <strong>topic9</strong>
              </a>
              <a class="button is-success is-large" href="#topic10">
                <strong>topic10</strong>
              </a>
              <a class="button is-success is-large" href="#topic11">
                <strong>topic11</strong>
              </a>
              <a class="button is-success is-large" href="#topic12">
                <strong>Topic12</strong>
              </a>
            </div>
          </div>
        </div>

        {/*text*/}
        <section class="section">
          {/*topic1*/}
          <a name="topic1" id="topic1"></a>
          <div class="box">
            <h1 class="title is-2">topic 1</h1>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordClioudOptions}
                        words={words[0]}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="container"
                      style={{ width: "1190px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={root}
                        identity="tag"
                        value="topic1"
                        innerPadding={3}
                        outerPadding={3}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "nivo" }}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", "0.2"]],
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={11}
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {/*topic2*/}
          <a name="topic2" id="topic2"></a>
          <div class="box">
            <h1 class="title is-2">topic 2</h1>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordClioudOptions}
                        words={words[1]}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="container"
                      style={{ width: "1190px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={root}
                        identity="tag"
                        value="topic2"
                        innerPadding={3}
                        outerPadding={3}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "nivo" }}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", "0.2"]],
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={11}
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {/*topic3*/}
          <a name="topic3" id="topic3"></a>
          <div class="box">
            <h1 class="title is-2">topic 3</h1>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordClioudOptions}
                        words={words[2]}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="container"
                      style={{ width: "1190px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={root}
                        identity="tag"
                        value="topic3"
                        innerPadding={3}
                        outerPadding={3}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "nivo" }}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", "0.2"]],
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={11}
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {/*topic4*/}
          <a name="topic4" id="topic4"></a>
          <div class="box">
            <h1 class="title is-2">topic 4</h1>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordClioudOptions}
                        words={words[3]}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="container"
                      style={{ width: "1190px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={root}
                        identity="tag"
                        value="topic4"
                        innerPadding={3}
                        outerPadding={3}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "nivo" }}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", "0.2"]],
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={11}
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {/*topic5*/}
          <a name="topic5" id="topic5"></a>
          <div class="box">
            <h1 class="title is-2">topic 5</h1>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordClioudOptions}
                        words={words[4]}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="container"
                      style={{ width: "1190px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={root}
                        identity="tag"
                        value="topic5"
                        innerPadding={3}
                        outerPadding={3}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "nivo" }}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", "0.2"]],
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={11}
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {/*topic6*/}
          <a name="topic6" id="topic6"></a>
          <div class="box">
            <h1 class="title is-2">topic 6</h1>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordClioudOptions}
                        words={words[5]}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="container"
                      style={{ width: "1190px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={root}
                        identity="tag"
                        value="topic6"
                        innerPadding={3}
                        outerPadding={3}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "nivo" }}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", "0.2"]],
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={11}
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {/*topic7*/}
          <a name="topic7" id="topic7"></a>
          <div class="box">
            <h1 class="title is-2">topic 7</h1>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordClioudOptions}
                        words={words[6]}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="container"
                      style={{ width: "1190px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={root}
                        identity="tag"
                        value="topic7"
                        innerPadding={3}
                        outerPadding={3}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "nivo" }}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", "0.2"]],
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={11}
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {/*topic8*/}
          <a name="topic8" id="topic8"></a>
          <div class="box">
            <h1 class="title is-2">topic 8</h1>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordClioudOptions}
                        words={words[7]}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="container"
                      style={{ width: "1190px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={root}
                        identity="tag"
                        value="topic8"
                        innerPadding={3}
                        outerPadding={3}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "nivo" }}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", "0.2"]],
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={11}
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {/*topic9*/}
          <a name="topic9" id="topic9"></a>
          <div class="box">
            <h1 class="title is-2">topic 9</h1>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordClioudOptions}
                        words={words[8]}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="container"
                      style={{ width: "1190px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={root}
                        identity="tag"
                        value="topic9"
                        innerPadding={3}
                        outerPadding={3}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "nivo" }}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", "0.2"]],
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={11}
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {/*topic10*/}
          <a name="topic10" id="topic10"></a>
          <div class="box">
            <h1 class="title is-2">topic 10</h1>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordClioudOptions}
                        words={words[9]}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="container"
                      style={{ width: "1190px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={root}
                        identity="tag"
                        value="topic10"
                        innerPadding={3}
                        outerPadding={3}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "nivo" }}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", "0.2"]],
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={11}
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {/*topic11*/}
          <a name="topic11" id="topic11"></a>
          <div class="box">
            <h1 class="title is-2">topic 11</h1>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordClioudOptions}
                        words={words[10]}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="container"
                      style={{ width: "1190px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={root}
                        identity="tag"
                        value="topic11"
                        innerPadding={3}
                        outerPadding={3}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "nivo" }}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", "0.2"]],
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={11}
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {/*topic12*/}
          <a name="topic12" id="topic12"></a>
          <div class="box">
            <h1 class="title is-2">topic 12</h1>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordClioudOptions}
                        words={words[11]}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div
                      class="container"
                      style={{ width: "1190px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={root}
                        identity="tag"
                        value="topic12"
                        innerPadding={3}
                        outerPadding={3}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "nivo" }}
                        borderColor={{
                          from: "color",
                          modifiers: [["darker", "0.2"]],
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={11}
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-success is-large" href="PageTop">
                <strong>Page Top</strong>
              </a>
            </div>
          </div>
        </div>
        <br></br>

        {/*footer*/}
        <footer class="footer">
          <div class="content has-text-centered">
            <p>2020年前期課題</p>
          </div>
        </footer>
      </body>
    </div>
  );
};
render(<App />, document.querySelector("#content"));
