const locations = [
    "Bidholi",
    "Kandoli",
    "Upper Kandoli",
    "Lower Kandoli",
    "Dunga",
    "Pondha",
    "Prem Nagar",
    "UPES Main Campus"
  ];
  
  function showSuggestions(value) {
    const list = document.getElementById("suggestions-list");
    list.innerHTML = "";
  
    if (value.trim() === "") return;
  
    const filtered = locations.filter(loc => 
      loc.toLowerCase().includes(value.toLowerCase())
    );
  
    filtered.forEach(loc => {
      const li = document.createElement("li");
      li.textContent = loc;
      li.onclick = () => {
        document.getElementById("searchInput").value = loc;
        list.innerHTML = "";
        // Optional: redirect or search logic
      };
      list.appendChild(li);
    });
  }
  
  function hideSuggestions() {
    setTimeout(() => {
      document.getElementById("suggestions-list").innerHTML = "";
    }, 200); // slight delay to allow click
  }
  
  function clearSearch() {
    document.getElementById("searchInput").value = "";
    document.getElementById("suggestions-list").innerHTML = "";
  }
  