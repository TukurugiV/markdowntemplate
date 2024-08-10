#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const prompt = require("prompt-sync")();

const templateID = prompt("kadai or kyokasho");

const markdownTemplate = `

---
id: "${templateID}"
---

@import "./style.less"

## Introduction
Write a brief introduction of the project.

## Installation
Provide installation instructions.

## Usage
Explain how to use the project.

## License
Mention the license under which the project is released.
`;

const cssTemplate = `
#kadai{
  @import url('https://fonts.googleapis.com/css2?family=Zen+Old+Mincho&display=swap');
  h2 {
    padding-top: 10px;
    border-bottom: 1px solid #86e0d1;
    border-left:3px solid #86e0d1;
    background-color: aliceblue;
  }
  h3{
    padding: 10px;
    margin-bottom: 10px;
    background-color: #e3f2fd;
    border-left: 5px solid #2196f3;
    color: black;
    font-family: "Zen Old Mincho", serif !important;
    font-size: 1.0em;
    font-weight: normal;
  }
  .zen-old-mincho-regular {
    font-family: "Zen Old Mincho", serif;
    font-weight: 400;
    font-style: normal;
  }
  .question{
    padding: 10px;
    margin-bottom: 10px;
    background-color: #e3f2fd;
    border-left: 5px solid #2196f3;
    color: black;
    font-family: "Zen Old Mincho", serif;
  }
  .answer{
    padding: 10px;
    margin-bottom: 20px;
    border: 1px dotted;
    border-top-color: black;
    border-bottom-color: rgb(255, 255, 255);
    border-left-color: rgb(255, 255, 255);
    border-right-color: rgb(255, 255, 255);
  }
  .answerLabel{
    font-weight: bold;
    font-family: "Zen Old Mincho", serif;
  }
  .cover {
    margin-bottom: 20px;
    padding: 20px;
    
    background-color: #fff;
    text-align: center;
}

.cover .title {
    font-size: 2em;
    margin-bottom: 10px;
    color: black;
}

.cover .time {
    font-size: 1em;
    margin-bottom: 10px;
    color: black;
}

.cover .info {
    font-size: 1.2em;
    color: black;
}
.katex-mathml{
  display: block;
  text-align: left;
  margin-left: 0;
}
.qa {
  max-width: none;
  margin-bottom: 5px;
  padding-left: 1em;
  border-bottom: 2px solid #d6dde3;
  background-color: #fff;
}

.qa summary {
  display: flex;
  align-items: center;
  position: relative;
  padding: 1em 2em 1em 4em;
  color: #333333;
  font-weight: 600;
  cursor: pointer;
}

.qa summary::before,
.qa .qa-content::before {
  position: absolute;
  left: 1em;
  font-weight: 600;
  font-size: 1.3em;
}

.qa summary::before {
  color: #75bbff;
  content: "Q";
  left: 1em;
}

.qa summary::after {
  transform: translateY(-25%) rotate(45deg);
  width: 7px;
  height: 7px;
  margin-left: 0;
  border-bottom: 3px solid #333333b3;
  border-right: 3px solid #333333b3;
  content: '';
  transition: transform .5s;
  left: 0;
  position: absolute;
}

.qa[open] summary::after {
  transform: rotate(225deg);
}

.qa .qa-content {
  position: relative;
  transform: translateY(-10px);
  opacity: 0;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  padding-left: 4em;
  color: #333;
  transition: transform .5s, opacity .5s;
}

.qa .qa-content p {
  margin: 0;
}

.qa[open] .qa-content {
  transform: none;
  opacity: 1;
}

.qa .qa-content::before {
  color: #ff8d8d;
  line-height: 1;
  content: "A";
}

.lineBox {
  max-width: none;
  margin-bottom: 1em;
  border: 2px solid #2589d0;
  border-radius: 3px;
  overflow: hidden;
}

.lineBox span {
  padding: .4em .8em;
  background-color: #2589d0;
  color: #fff;
}

.lineBox p {
  margin: 0.3em 0 0.1em 1em;
  padding: 0;
  color: #333;
}
}

#kyokasho{
  h1 {
    position: relative;

    background: #86e0d1;
  }
  
  h1:before {
    position: absolute;
    top: -7px;
    left: -7px;
    width: 100%;
    height: 100%;
    content: '';
    border: 4px solid #000;
  }
  h2 {
    position: relative;
    padding-top: 10px;
    background-color: #87B6E0;
  }
  h2:before {
    position: absolute;
    top: -7px;
    left: -7px;
    width: 100%;
    height: 100%;
    content: '';
    border: 4px solid #000;
  }
  .katex-mathml{
    display: block;
    text-align: left;
    margin-left: 0;
  }
  .qa {
    max-width: none;
    margin-bottom: 5px;
    padding-left: 1em;
    border-bottom: 2px solid #d6dde3;
    background-color: #fff;
  }
  
  .qa summary {
    display: flex;
    align-items: center;
    position: relative;
    padding: 1em 2em 1em 4em;
    color: #333333;
    font-weight: 600;
    cursor: pointer;
  }
  
  .qa summary::before,
  .qa .qa-content::before {
    position: absolute;
    left: 1em;
    font-weight: 600;
    font-size: 1.3em;
  }
  
  .qa summary::before {
    color: #75bbff;
    content: "Q";
    left: 1em;
  }
  
  .qa summary::after {
    transform: translateY(-25%) rotate(45deg);
    width: 7px;
    height: 7px;
    margin-left: 0;
    border-bottom: 3px solid #333333b3;
    border-right: 3px solid #333333b3;
    content: '';
    transition: transform .5s;
    left: 0;
    position: absolute;
  }
  
  .qa[open] summary::after {
    transform: rotate(225deg);
  }
  
  .qa .qa-content {
    position: relative;
    transform: translateY(-10px);
    opacity: 0;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
    padding-left: 4em;
    color: #333;
    transition: transform .5s, opacity .5s;
  }
  
  .qa .qa-content p {
    margin: 0;
  }
  
  .qa[open] .qa-content {
    transform: none;
    opacity: 1;
  }
  
  .qa .qa-content::before {
    color: #ff8d8d;
    line-height: 1;
    content: "A";
  }
  
  .lineBox {
    max-width: none;
    margin-bottom: 1em;
    border: 2px solid #2589d0;
    border-radius: 3px;
    overflow: hidden;
  }

  .lineBox>div{
    padding: .4em .8em;
    background-color: #2589d0;
    color: #fff;
  }
  
  .lineBox p {
    margin: 0.3em 0 0.1em 1em;
    padding: 0;
    color: #333;
  }

  pre, code {
    color: white;
  }
}
`;

const directory = process.cwd();

// ファイルを生成
fs.writeFileSync(path.join(directory, "main.md"), markdownTemplate.trim());
fs.writeFileSync(path.join(directory, "style.less"), cssTemplate.trim());

console.log("Templates created!");
