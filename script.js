function LearnMore(element) {
    var x = element.nextElementSibling
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} 