var footer = document.querySelector("#homeFooter")
var container = document.getElementById("scrollArea");


container.onscroll = (ev, e) => {
    var scrollValue = ev.target.scrollTop;
    footer.style.setProperty("--offset", scrollValue - 20 + "px");
};