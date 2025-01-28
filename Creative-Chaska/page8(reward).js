const offers = [
    {
      title: "10% Off Your Favorite Food",
      description: "Enjoy a 10% discount on your favorite items from our menu.",
      expiry: "Offer valid till 31st January 2025."
    },
    {
      title: "Buy One Get One Free",
      description: "Order any Chaat and get another absolutely free!",
      expiry: "Hurry, valid till stocks last."
    },
    {
      title: "Free Dessert on Orders Above ₹200",
      description: "Spend ₹200 or more and get a free dessert of your choice.",
      expiry: "Offer valid on weekends only."
    }
  ];
  
  const offersContainer = document.getElementById("offers");
  
  offers.forEach((offer) => {
    const offerCard = document.createElement("div");
    offerCard.className = "offer-card";
  
    offerCard.innerHTML = `
      <div class="offer-title">${offer.title}</div>
      <div class="offer-description">${offer.description}</div>
      <div class="offer-expiry">${offer.expiry}</div>
    `;
  
    offersContainer.appendChild(offerCard);
  });