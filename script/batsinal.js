document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn-batsinal");
  const overlay = document.getElementById("batsinal-overlay");
  const audio = document.getElementById("batsinal-audio");
  const batsinal = document.getElementById("batsinal-content");

  function encerrarBatsinal() {
    overlay.style.display = "none";
    audio.pause();
    batsinal.classList.remove("animar-batsinal");
  }

  btn.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      alert("O Batsinal só pode ser ativado em dispositivos maiores!");
      return;
    }

    overlay.style.display = "flex";
    audio.currentTime = 0;
    audio.play();

    batsinal.classList.remove("animar-batsinal");
    void batsinal.offsetWidth;
    batsinal.classList.add("animar-batsinal");

    // Timer de 60 segundos
    const timeoutId = setTimeout(() => {
      encerrarBatsinal();
    }, 60000);

    // Permite cancelar ao clicar em qualquer lugar do overlay
    overlay.onclick = () => {
      clearTimeout(timeoutId);
      encerrarBatsinal();
    };
  });
});
