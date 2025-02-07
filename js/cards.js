document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            // Cierra cualquier otra card expandida antes de abrir una nueva
            document.querySelectorAll(".card.expanded").forEach(expandedCard => {
                if (expandedCard !== this) {
                    expandedCard.classList.remove("expanded");
                }
            });

            // Expande o colapsa la card actual
            this.classList.toggle("expanded");
        });
    });
});
