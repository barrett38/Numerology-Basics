window.onload = function () {
  const data = JSON.parse(localStorage.getItem("data"));
  document.getElementById("data").textContent = JSON.stringify(data);
};
