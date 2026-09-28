document.getElementById("ano").textContent = new Date().getFullYear();
document.querySelectorAll('a[target="_blank"]').forEach(a => {
  a.setAttribute("rel", "noopener noreferrer");
});