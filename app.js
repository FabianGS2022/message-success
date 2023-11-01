const inicio = document.querySelector("#main");
const emailInput = document.getElementById("user_email");
const PrimerBtn = document.getElementById("Sus");
const mensaje = document.querySelector(".email_label span");

const iniciosuccess = document.querySelector("#main_success");
const mensaje_btn = document.getElementById("mensaje_btn");

function emailHandler() {
  let emailValue = emailInput.value;
  if (
    emailValue.includes("gmail.com") &&
    emailValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/)
  ) {
    inicio.style.display = "none";
    iniciosuccess.style.display = "flex";
    mensaje.style.display = "none";
  } else {
    emailInput.style.background = "#FFEBEE";
    mensaje.style.display = "unset";
  }
}
PrimerBtn.addEventListener("click", emailHandler);
mensaje_btn.addEventListener("click", () => {
  inicio.style.display = "flex";
  iniciosuccess.style.display = "none";
});
