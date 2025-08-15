document.addEventListener("DOMContentLoaded", () => {
  const roles = ["Software Developer", "Diseñador UX/UI", "Full Stack Dev"];
  const roleElement = document.querySelector(".sidebar__profile-role");
  let index = 0;

  setInterval(() => {
    // Animar hacia arriba
    roleElement.style.opacity = "0";
    roleElement.style.transform = "translateY(-100%)";

    setTimeout(() => {
      // Cambiar el texto después de que se vaya
      index = (index + 1) % roles.length;
      roleElement.textContent = roles[index];

      // Volver a animar hacia posición original
      roleElement.style.opacity = "1";
      roleElement.style.transform = "translateY(0)";
    }, 1000);
  }, 3000);
});
