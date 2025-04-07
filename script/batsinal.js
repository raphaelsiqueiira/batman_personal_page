document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn-batsinal");
  const overlay = document.getElementById("batsinal-overlay");
  const audio = document.getElementById("batsinal-audio");
  const batsinal = document.getElementById("batsinal-content");

  btn.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      alert("O Batsinal só pode ser ativado em dispositivos maiores!");
      return;
    }
    overlay.style.display = "flex";
    audio.currentTime = 0;
    audio.play();

    // ⚡ Ativa animação
    batsinal.classList.remove("animar-batsinal");
    void batsinal.offsetWidth;
    batsinal.classList.add("animar-batsinal");

    setTimeout(() => {
      overlay.style.display = "none";
      audio.pause();

      batsinal.classList.remove("animar-batsinal");
    }, 60000);
  });
});
