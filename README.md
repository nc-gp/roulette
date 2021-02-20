# Roulette Project
A similar roulette to other case opening sites. Not that much similar but i'm trying to make it looks better.
## Table of contents
* [Setup](#setup)
* [Options](#options)
* [Examples of Stylesheets](#example)
* [Preview](#preview)
* [Version](#version)
* [To-do](#to-do)
* [Features](#features)
## Setup
Paste this in head section:
```html
<script src="https://raw.githubusercontent.com/yinee-c/roulette/main/roulette.js"></script>
```
and this at the end of body section:
```html
    <script>
        var rol = new Roulette({});
        // Define here your own event listener and then add rol.start();
        document.getElementById('example').addEventListener('click', function() {
            rol.start();
        });
    </script>
```
last one in body, where you want:
```html
    <div id="roulette"></div>
```
You can also costumize id of this element.
That's all what you need to do!
## Options
You don't need to set every option in init function. Roulette have default options.
| Option | Description | Default | Type |
| ------ | ------ | ------ |
| timer | The time, in milliseconds (thousandths of a second) | 20 | Number |
| maxChance | Max random chance number for items | 100 | Number |
| element | Id name for element | roulette | String |
| itemsRender | Items to renderer | 56 | Number |
| items | Your items | [[1, 49, "a"],[50, 100, "b"]] | Object |
| outputWin | After roll is done output a win item | false | Boolean |
## Example
Click link below!
 - [CSS](https://github.com/yinee-c/roulette/edit/main/roulette.css)
## Preview
A gif preview!
![](preview.gif)
## To-do
* I'll update soon ._.
## Features
* Auto-update (never miss an update!) checker if you want this script on your server.
* Costumizable options
* Custom CSS
* Random items render
* Max chance
* I'll update soon ._.
