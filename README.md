# Roulette Project
A similar roulette to other case opening sites. Not that much similar but i'm trying to make it looks better.
## Table of contents
* [Setup](#setup)
* [Options](#options)
* [Version](#version)
* [To-do](#to-do)
* [Features](#features)
## Setup
Paste this in head section:
```
<script src="https://raw.githubusercontent.com/yinee-c/roulette/main/roulette.js"></script>
```
and this at the end of body section:
```
    <script>
        var rol = new Roulette({});
        // Define here your own event listener and then add rol.start();
        document.getElementById('example').addEventListener('click', function() {
            rol.start();
        });
    </script>
```

That's all what you need to do!
## Options
{soon ._.}
## Version
Currently 1.1;
## To-do
* Cache DOM elements in js.
* More animations
* Better css.
* and more..
## Features
* Customizable options
* Random items
* Max chance
* Animation of rolling to the left
* and more soon
