class AnimatedPlaceHolder {

    constructor(parent, numberOfChild, delay, duration) {

        this.container = parent.appendChild(document.createElement("div"));
        this.container.classList.add("placeholder")

        var totalChild = 0;
        if (numberOfChild == undefined) {
            totalChild = 3;
        }

        for (var i = 0; i < totalChild; i++) {
            var item = this.container.appendChild(document.createElement("div"));
            item.classList.add("spinner-item");


            if (delay) {
                item.style.setProperty('--delay', delay);
            } else {
                item.style.setProperty('--delay', (0.15 * i) + "s");
            }

            if (duration) {
                item.style.setProperty('--duration', duration);
            }
            else {
                item.style.setProperty('--duration', "1.6s")
            }
        }

    }

    hide() {
        this.container.classList.add("hidden")
    }
}
