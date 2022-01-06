# Text-Editor

# README-Generator

![License: MIT](https://img.shields.io/badge/License-MIT-success.svg)

## Description

This app is a text editor that runs in the browser. It uses WebPack to enable the app to meet PWA criteria to allow the site to be viewable offline. I incorporated social workers from the library Workbox to create data persistance and cacheing of information. It also allows you to store information with local storage and IndexDB as a redundancy in case one of those options are not supported by the browser.

## Table of Contents

[Usage](#usage)

[Installation](#installation)

[License](#License)

## Installation

To install the project the user must have Node.js on their local computer and once that is installed you can clone the repo in your terminal. Then once you clone it, you should install the dependencies from each package.json file, there are 3, and from there you can start your server by typing `npm start`.

## Usage

When you first open the page you will see the JATE text editor header will appear as the default text. That shows when nothing else has been inputted by the user. However, if you choose to erase it and start typing things of your own and the page will save and when you refresh the page the data will persist. If you choose to view the page offline you can press the `install` button and view the most recent change you made since pressing the button on your screen without needing to be in the browser.

## Technologies

| Technologies Used |
| ----------------- | 
| JavaScript        |
| WebPack           |
| Workbox           |
| Node.js           |    
| IndexDB           |
| HTML              |

## License

Copyright (c) [2022] [Kelly R. Cano]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
