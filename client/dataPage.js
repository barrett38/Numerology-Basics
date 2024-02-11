window.onload = function () {
  // Check if the page was reloaded
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    // Clear all data from localStorage
    localStorage.clear();

    // Redirect to index.html
    window.location.href = "index.html";
  } else {
    // Existing code to display data
    const data = JSON.parse(localStorage.getItem("data"));
    document.getElementById("data").textContent = JSON.stringify(data);

    // Add a history entry and change the URL to prevent going back
    window.history.pushState(null, "", window.location.href);
  }

  // When the user tries to go back, redirect to index.html
  window.onpopstate = function () {
    window.location.href = "index.html";
  };
};
