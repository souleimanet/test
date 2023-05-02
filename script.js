// form 1
const form = document.querySelector('form');
const recapText = document.querySelector('#recap-text');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const type = document.querySelector('#type').value;
  const couleur = document.querySelector('#couleur').value;
  const finition = document.querySelector('#finition').value;

  const recapTextContent = `Vous avez choisi un véhicule de type ${type}, de couleur ${couleur}, avec une finition ${finition}.`;

  recapText.textContent = recapTextContent;
});

// form 2
document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    let nom = document.querySelector("#nom").value;
    let email = document.querySelector("#email").value;
    let question = document.querySelector("#question").value;

    if (nom === "" || email === "" || question === "" || !isValidEmail(email)) {
      event.preventDefault();
      alert("Veuillez remplir tous les champs obligatoires et saisir une adresse e-mail valide.");
    }
  });

  function isValidEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
