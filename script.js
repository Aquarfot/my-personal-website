// const h4 = document.createElement("h4");
// h4.textContent = "Connecticut Born, Colorado Sworn";
// document.querySelector("body").appendChild(h4);

let highlightItem = document.getElementById("copyrightInfo");
copyrightInfo.addEventListener("mouseover", function(event) {
    event.target.style.color = "green";
    setTimeout(function() {
        event.target.style.color = " ";
    }, 500);
}, false);

