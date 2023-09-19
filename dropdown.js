// Hent alle elementer med class "droparrow"
var droparrows = document.querySelectorAll(".droparrow");

// Lyt til klik på hver droparrow
droparrows.forEach(function(droparrow) {
    droparrow.addEventListener("click", function() {
        // Find det overordnede element med class "keywords"
        var keywordContainer = this.parentElement;

        // Toggle class "open" på det overordnede element
        keywordContainer.classList.toggle("open");
    });
});