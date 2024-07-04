class SegmentedButton {
    constructor(element, onChange) {
        this.element = element;
        this.onChange = onChange;
        this.selectedIndex = 0;
        this.buttons = this.element.querySelectorAll("*");
        this.buttons[0].classList.add("selected")
        this.buttons.forEach((button, index) => {
            button.onclick = () => {

                this.buttons[this.selectedIndex].classList.remove("selected");
                this.selectedIndex = index;
                button.classList.add("selected");
                this.onChange(this.selectedIndex);
            }
        })
    }
}

var elements = document.querySelectorAll(".segmented-button");
var buttons = [];
for (var i = 0; i < elements.length; i++) {
    buttons = new SegmentedButton(elements[i], visualizeNewSection)
}
