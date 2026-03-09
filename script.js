// Scroll Suave para Links Internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Efeito de aparecer header ao rolar
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(9, 9, 9, 0.95)";
    header.style.padding = "15px 5%";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
  } else {
    header.style.background = "transparent";
    header.style.padding = "20px 5%";
    header.style.boxShadow = "none";
  }
});
// Função para garantir abertura do Instagram no App (especialmente Android)
function abrirInstagram(e) {
  e.preventDefault();
  const username = "apexagncy";
  const appUrl = `instagram://user?username=${username}`;
  const webUrl = `https://www.instagram.com/${username}`;

  // Tenta abrir o App
  window.location.href = appUrl;

  // Se em 500ms o app não abrir, ele joga para o navegador (Fallback)
  setTimeout(() => {
    window.open(webUrl, "_blank");
  }, 500);
}
