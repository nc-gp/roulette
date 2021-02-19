(function() {
    var rol;

    this.Roulette = function() {

        this.version = "1.01";
        this.author = "yinee";
        this.rouletteActive = null;
        this.lastWin = null;
        this.speeds = {
            1: -5,
            10: -4,
            20: -3,
            30: -2,
            46: -1,
            50: 45,
            75: 42.5,
            100: 40,
            125: 37.5,
            150: 35,
            175: 32.5,
            200: 30,
            225: 27.5,
            250: 25,
            225: 22.5,
            300: 20,
            325: 17.5,
            350: 15,
            375: 12.5,
            400: 12,
            411: 11,
            420: 10,
            430: 5,
            490: 4,
            510: 3,
            530: 2,
            531: 1.5,
            550: 1,
            555: 0.5,
            559: 0.4,
            563: 0.3,
            566: 0.2,
            569: 0.1,
        };
        this.endX = 570;
        this.speed = 50;
        this.step = 0;
        this.movementX = 0;
        this.renderTime = 0;

        rol = this;

        // Default options.
        var defaultOptions = {
            timer: 20,
            maxChance: 100,
            containerId: 'container',
            slideContainerId: 'wrap',
            slideClassName: 'slide',
            lineId: 'line',
            itemsRender: 56,
            items: [
                [1, 49, "a"],
                [50, 100, "b"]
            ],
            outputWin: false,
            outputWinId: 'winContainer',
        }

        // {options} Costumizable options.
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaultOptions(defaultOptions, arguments[0])
        }
    }

    // Start function
    Roulette.prototype.start = function() {
        // Get DOM elements. (not cached. i'll fix in future)
        var container = document.getElementById(this.options.containerId);
        var slideContainer = document.getElementById(this.options.slideContainerId);
        var line = document.getElementById(this.options.lineId);
        var outputElement = null;
        // All missing elements.
        var elements = [];
        // Bool is one element is missing.
        var importantIsMissing = false;
        // Check if DOM elements exists.
        if (container === null) {
            elements.push("container")
            importantIsMissing = true;
        }
        if (slideContainer === null) {
            elements.push("slide container")
            importantIsMissing = true;
        }
        if (line === null) {
            console.warn("An non-important element 'line' is missing in HTML!");
        }
        if (importantIsMissing) {
            throw new Error("An important elements '" + elements + "' are missing in HTML!");
        }
        if (this.options.outputWin) {
            outputElement = document.getElementById(this.options.outputWinId);
            if (outputElement === null) {
                throw new Error("An outputWinId is missing in HTML!");
            }
        }
        // Resets settings/Clear slide container.
        this.rouletteActive = true;
        slideContainer.innerHTML = "";
        this.reset();
        this.renderTime++;
        // Render items.
        for (var i = 0; i < this.options.itemsRender; i++) {
            var num = parseInt(~~(Math.random() * this.options.maxChance) + 1),
                slideElement = document.createElement("div"),
                inElement = document.createElement("span"),
                inner = null;

            this.options.items.forEach(item => {
                if (num >= item[0] && num <= item[1]) inner = item[2];
            });

            var cell = document.createTextNode(inner);
            inElement.appendChild(cell);
            slideElement.className = this.options.slideClassName;
            slideElement.appendChild(inElement);
            slideContainer.appendChild(slideElement);
        }
        // Some.
        var slides = document.getElementsByClassName(rol.options.slideClassName);
        this.lastWin = slides[54].cloneNode(true);
        // Start interval
        var roll = setInterval(function(rol) {
            rol.movementX += rol.speed;
            rol.step++;
            slideContainer.style["right"] = rol.movementX + "px";
            if (rol.speeds.hasOwnProperty(rol.step)) rol.speed = rol.speeds[rol.step];
            if (rol.step >= rol.endX) {
                rol.rouletteActive = false;
                if (rol.options.outputWin) {
                    outputElement.appendChild(rol.lastWin);
                }
                clearInterval(roll);
            }
        }, this.options.timer, rol);
    }

    Roulette.prototype.reset = function() {
        this.speed = 50;
        this.step = 0;
        this.movementX = 0;
    }

    // Yep.
    Roulette.prototype.info = function() {
        console.log("%cPlugin version: " + this.version + "\nAuthor: " + this.author + "\nOpen source!", "color: aqua; font-size: 21px;")
    }

    function extendDefaultOptions(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }
})();