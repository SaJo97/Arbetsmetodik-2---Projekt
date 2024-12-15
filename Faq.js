// Hämta knappen
const callButton = document.querySelector(".contact-info button");

// Lägg till ett klick-event
callButton.addEventListener("click", () => {
  // Navigera till en "tel:"-länk för att ringa
  window.location.href = "tel:031123456";
});