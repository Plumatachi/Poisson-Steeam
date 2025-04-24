document.addEventListener("DOMContentLoaded", () => {
  // Ajout de logs pour le débogage
  console.log("Script TypeScript chargé");

  // Sélectionner toutes les cartes
  const cards = document.querySelectorAll(".card");
  console.log(`Nombre de cartes trouvées: ${cards.length}`);

  // Ajouter un événement de clic à chaque carte
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // Récupérer l'ID du membre à partir de l'attribut data
      const memberId = card.getAttribute("data-member");
      console.log(`Card clicked, navigating to member${memberId}.html`);

      // Rediriger vers la page du membre
      window.location.href = `member${memberId}.html`;
    });
  });
});
