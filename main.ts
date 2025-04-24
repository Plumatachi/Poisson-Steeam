document.addEventListener("DOMContentLoaded", () => {
  // Sélectionner toutes les cartes
  const cards = document.querySelectorAll(".card");

  // Ajouter un événement de clic à chaque carte
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // Récupérer l'ID du membre à partir de l'attribut data
      const memberId = card.getAttribute("data-member");

      // Rediriger vers la page du membre
      window.location.href = `member${memberId}.html`;
    });
  });
});
