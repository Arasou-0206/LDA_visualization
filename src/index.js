import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import ReactWordcloud from "react-wordcloud";
import { ResponsiveTreeMap } from "@nivo/treemap";
import * as d3 from "d3";

const App = () => {
  const wordCloudOptions = {
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

  const [root, setRoot] = useState({});
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    fetch("LDA-tag.json")
      .then((response) => response.json())
      .then((data) => {
        setRoot(data);
      });
    fetch("LDA-wordlist.json")
      .then((response) => response.json())
      .then((data) => {
        setWordList(data);
      });
  }, []);

  let unboundSlice = Array.prototype.slice
  let slice = Function.prototype.call.bind(unboundSlice)
  
  function list() {
    return slice(arguments)
  }

  const newData = JSON.parse(JSON.stringify(list(root)));
  if(root.children != null){
    newData[0].children.sort(function(item, index){
      return index.topic1 - item.topic1;
   });
  };

  const newData2 = JSON.parse(JSON.stringify(list(root)));
  if(root.children != null){
    newData2[0].children.sort(function(item, index){
      return index.topic2 - item.topic2;
   });
  };

  const newData3 = JSON.parse(JSON.stringify(list(root)));
  if(root.children != null){
    newData3[0].children.sort(function(item, index){
      return index.topic3 - item.topic3;
   });
  };

  const newData4 = JSON.parse(JSON.stringify(list(root)));
  if(root.children != null){
    newData4[0].children.sort(function(item, index){
      return index.topic4 - item.topic4;
   });
  };

  const newData5 = JSON.parse(JSON.stringify(list(root)));
  if(root.children != null){
    newData5[0].children.sort(function(item, index){
      return index.topic5 - item.topic5;
   });
  };

  const newData6 = JSON.parse(JSON.stringify(list(root)));
  if(root.children != null){
    newData6[0].children.sort(function(item, index){
      return index.topic6 - item.topic6;
   });
  };

  const newData7 = JSON.parse(JSON.stringify(list(root)));
  if(root.children != null){
    newData7[0].children.sort(function(item, index){
      return index.topic7 - item.topic7;
   });
  };

  const newData8 = JSON.parse(JSON.stringify(list(root)));
  if(root.children != null){
    newData8[0].children.sort(function(item, index){
      return index.topic8 - item.topic8;
   });
  };

  const newData9 = JSON.parse(JSON.stringify(list(root)));
  if(root.children != null){
    newData9[0].children.sort(function(item, index){
      return index.topic9 - item.topic9;
   });
  };

  const newData10 = JSON.parse(JSON.stringify(list(root)));
  if(root.children != null){
    newData10[0].children.sort(function(item, index){
      return index.topic10 - item.topic10;
   });
  };

  const newData11 = JSON.parse(JSON.stringify(list(root)));
  if(root.children != null){
    newData11[0].children.sort(function(item, index){
      return index.topic11 - item.topic11;
   });
  };

  const newData12 = JSON.parse(JSON.stringify(list(root)));
  if(root.children != null){
    newData12[0].children.sort(function(item, index){
      return index.topic12 - item.topic12;
   });
  };

  const margin = 30;  
  const interval = 40;
  const legendWidth = 200;
  const legendLineWidth = 70;
  const contentWidth  = interval * 25;
  const contentHeight = 100 * 6
  const svgWidth = contentWidth + legendWidth - margin;
  const svgHeight = contentHeight + margin;
  
  const yScale = d3.scaleLinear()
    .domain([10,1])
    .range([contentHeight, 0])
    .nice()
  const xScale = d3.scaleLinear()
    .domain([0,newData.length - 1])
    .range([0,contentWidth])
  const rankScale = d3.scaleLinear()
    .domain([10,1])
    .range([contentHeight,0])

  return (
    <div>
      <head>
        <title>LDAを用いたQiitaの分析</title>
      </head>
      <body>
        {/*title*/}
        <section class="hero is-success">
          <div class="hero-head">
            <nav class="navbar">
              <div class="container">
                <div id="navbarMenuHeroA" class="navbar-menu">
                  <div class="navbar-end">
                    <a
                      class="navbar-item is-active"
                      href="https://github.com/Arasou-0206/qiita_LDA"
                    >
                      Githubへはこちら
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div class="hero-body">
            <div class="container">
              <h1 class="title is-1 has-text-black">LDAを用いたQiita記事のトピック可視化</h1>
              <h2 class="subtitle is-6 has-text-black">
                Qiitaに投稿されている記事とタグを用いて、Qiita内のトピックを調べ可視化しました。
                プログラミング技術共有サイトとして最も使用されているQiitaの記事のトピックを知ることで、日本国内内の技術トピックを知ることができます。
                まずは全体を見ていただき、その後ボタンまたは画面上部のトピック一覧から見たいトピックを選択することで、任意のトピックへ移動し確認することができます。
              </h2>
            </div>
          </div>
        </section>
        
        <nav class="navbar is-fixed-top">
          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="#"><strong>Home</strong></a>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">トピック一覧</a>
                <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="#topic1">Topic1</a>
                <a class="navbar-item" href="#topic2">Topic2</a>
                <a class="navbar-item" href="#topic3">Topic3</a>
                <a class="navbar-item" href="#topic4">Topic4</a>
                <a class="navbar-item" href="#topic5">Topic5</a>
                <a class="navbar-item" href="#topic6">Topic6</a>
                <a class="navbar-item" href="#topic7">Topic7</a>
                <a class="navbar-item" href="#topic8">Topic8</a>
                <a class="navbar-item" href="#topic9">Topic9</a>
                <a class="navbar-item" href="#topic10">Topic10</a>
                <a class="navbar-item" href="#topic11">Topic11</a>
                <a class="navbar-item" href="#topic12">Topic12</a>
                </div>
              </div>
            </div>
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="field is-grouped">
                  <p class="control">
                    <a class="button is-primary" href="https://vdslab.jp/products" >
                      <span>研究室ホームページ</span>
                    </a>
                  </p>
                <p class="control">
                  <a class="button is-dark" href="https://github.com/Arasou-0206/qiita_LDA">
                    <span>Githubへはこちら</span>
                  </a>
                </p>
              </div>
            </div>
            </div>

          </div>
        </nav>
        

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
            <div class="tile is-success">
              <div class="tile is-parent">
                <div class="tile is-parent is-4">
                  <article class="tile is-child box has-background-success">
                    <p class="title">Word Cloud</p>
                    <p class="subtitle">
                      このトピックの上位30件の単語を表示しています。
                    </p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordCloudOptions}
                        words={wordList[0] || []}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent is-6">
                  <article class="tile is-child box has-background-success is-centered">
                    <p class="title">TreeMap</p>
                    <p class="subtitle">
                      Topicを用いてどのタグが使われているか表示した結果です。
                    </p>
                    <div
                      class="container"
                      style={{ width: "1000px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={newData2[0] || []}
                        identity="tag"
                        value="topic2"
                        innerPadding={3}
                        outerPadding={3}
                        orientLabel={false}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "yellow_orange_brown" }}
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
            <div class="tile is-success">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">Word Cloud</p>
                    <p class="subtitle">
                      このトピックの上位30件の単語を表示しています。
                    </p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordCloudOptions}
                        words={wordList[1] || [] || []}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">TreeMap</p>
                    <p class="subtitle">
                      Topicを用いてどのタグが使われているか表示した結果です。
                    </p>
                    <div
                      class="container"
                      style={{ width: "1000px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={newData2[0] || []}
                        identity="tag"
                        value="topic2"
                        innerPadding={3}
                        outerPadding={3}
                        orientLabel={false}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "yellow_orange_brown" }}
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
            <div class="tile is-success">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">Word Cloud</p>
                    <p class="subtitle">
                      このトピックの上位30件の単語を表示しています。
                    </p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordCloudOptions}
                        words={wordList[2] || [] || []}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">TreeMap</p>
                    <p class="subtitle">
                      Topicを用いてどのタグが使われているか表示した結果です。
                    </p>
                    <div
                      class="container"
                      style={{ width: "1000px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={newData3[0] || []}
                        identity="tag"
                        value="topic3"
                        innerPadding={3}
                        outerPadding={3}
                        orientLabel={false}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "yellow_orange_brown" }}
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
            <div class="tile is-success">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">Word Cloud</p>
                    <p class="subtitle">
                      このトピックの上位30件の単語を表示しています。
                    </p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordCloudOptions}
                        words={wordList[3] || [] || []}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">TreeMap</p>
                    <p class="subtitle">
                      Topicを用いてどのタグが使われているか表示した結果です。
                    </p>
                    <div
                      class="container"
                      style={{ width: "1000px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={newData4[0] || []}
                        identity="tag"
                        value="topic4"
                        innerPadding={3}
                        outerPadding={3}
                        orientLabel={false}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "yellow_orange_brown" }}
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
            <div class="tile is-success">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">Word Cloud</p>
                    <p class="subtitle">
                      このトピックの上位30件の単語を表示しています。
                    </p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordCloudOptions}
                        words={wordList[4] || [] || []}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">TreeMap</p>
                    <p class="subtitle">
                      Topicを用いてどのタグが使われているか表示した結果です。
                    </p>
                    <div
                      class="container"
                      style={{ width: "1000px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={newData5[0] || []}
                        identity="tag"
                        value="topic5"
                        innerPadding={3}
                        outerPadding={3}
                        orientLabel={false}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "yellow_orange_brown" }}
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
            <div class="tile is-success">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">Word Cloud</p>
                    <p class="subtitle">
                      このトピックの上位30件の単語を表示しています。
                    </p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordCloudOptions}
                        words={wordList[5] || [] || []}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">TreeMap</p>
                    <p class="subtitle">
                      Topicを用いてどのタグが使われているか表示した結果です。
                    </p>
                    <div
                      class="container"
                      style={{ width: "1000px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={newData6[0] || []}
                        identity="tag"
                        value="topic6"
                        innerPadding={3}
                        outerPadding={3}
                        orientLabel={false}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "yellow_orange_brown" }}
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
            <div class="tile is-success">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">Word Cloud</p>
                    <p class="subtitle">
                      このトピックの上位30件の単語を表示しています。
                    </p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordCloudOptions}
                        words={wordList[6] || [] || []}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">TreeMap</p>
                    <p class="subtitle">
                      Topicを用いてどのタグが使われているか表示した結果です。
                    </p>
                    <div
                      class="container"
                      style={{ width: "1000px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={newData7[0] || []}
                        identity="tag"
                        value="topic7"
                        innerPadding={3}
                        outerPadding={3}
                        orientLabel={false}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "yellow_orange_brown" }}
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
            <div class="tile is-success">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">Word Cloud</p>
                    <p class="subtitle">
                      このトピックの上位30件の単語を表示しています。
                    </p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordCloudOptions}
                        words={wordList[7] || [] || []}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">TreeMap</p>
                    <p class="subtitle">
                      Topicを用いてどのタグが使われているか表示した結果です。
                    </p>
                    <div
                      class="container"
                      style={{ width: "1000px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={newData8[0] || []}
                        identity="tag"
                        value="topic8"
                        innerPadding={3}
                        outerPadding={3}
                        orientLabel={false}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "yellow_orange_brown" }}
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
            <div class="tile is-success">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">Word Cloud</p>
                    <p class="subtitle">
                      このトピックの上位30件の単語を表示しています。
                    </p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordCloudOptions}
                        words={wordList[8] || [] || []}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">TreeMap</p>
                    <p class="subtitle">
                      Topicを用いてどのタグが使われているか表示した結果です。
                    </p>
                    <div
                      class="container"
                      style={{ width: "1000px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={newData9[0] || []}
                        identity="tag"
                        value="topic9"
                        innerPadding={3}
                        outerPadding={3}
                        orientLabel={false}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "yellow_orange_brown" }}
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
            <div class="tile is-success">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">Word Cloud</p>
                    <p class="subtitle">
                      このトピックの上位30件の単語を表示しています。
                    </p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordCloudOptions}
                        words={wordList[9] || [] || []}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">TreeMap</p>
                    <p class="subtitle">
                      Topicを用いてどのタグが使われているか表示した結果です。
                    </p>
                    <div
                      class="container"
                      style={{ width: "1000px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={newData10[0] || []}
                        identity="tag"
                        value="topic10"
                        innerPadding={3}
                        outerPadding={3}
                        orientLabel={false}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "yellow_orange_brown" }}
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
            <div class="tile is-success">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">Word Cloud</p>
                    <p class="subtitle">
                      このトピックの上位30件の単語を表示しています。
                    </p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordCloudOptions}
                        words={wordList[10] || [] || []}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">TreeMap</p>
                    <p class="subtitle">
                      Topicを用いてどのタグが使われているか表示した結果です。
                    </p>
                    <div
                      class="container"
                      style={{ width: "1000px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={newData11[0] || []}
                        identity="tag"
                        value="topic11"
                        innerPadding={3}
                        outerPadding={3}
                        orientLabel={false}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "yellow_orange_brown" }}
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
            <div class="tile is-success">
              <div class="tile is-parent is-2">
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">Word Cloud</p>
                    <p class="subtitle">
                      このトピックの上位30件の単語を表示しています。
                    </p>
                    <div
                      class="box has-background-white"
                      style={{ width: "500px", height: "600px" }}
                    >
                      <ReactWordcloud
                        options={wordCloudOptions}
                        words={wordList[11] || [] || []}
                      />
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box has-background-success">
                    <p class="title">TreeMap</p>
                    <p class="subtitle">
                      Topicを用いてどのタグが使われているか表示した結果です。
                    </p>
                    <div
                      class="container"
                      style={{ width: "1000px", height: "600px" }}
                    >
                      <ResponsiveTreeMap
                        root={newData12[0] || []}
                        identity="tag"
                        value="topic12"
                        innerPadding={3}
                        outerPadding={3}
                        orientLabel={false}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="tag"
                        labelSkipSize={11}
                        labelTextColor="#0d0d0d"
                        colors={{ scheme: "yellow_orange_brown" }}
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
              <p id="pageTop">
                <a class="button is-success is-large" href="#">
                  <strong>Page Top</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
        <br></br>

        {/*footer*/}
        <footer class="footer">
          <div class="content has-text-centered">
            <p>2020年度卒業演習課題</p>
          </div>
        </footer>
      </body>
    </div>
  );
};
render(<App />, document.querySelector("#content"));