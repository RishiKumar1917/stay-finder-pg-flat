// Stay Finder - Search Page Logic

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

// 1. Update Google Map embed dynamically based on location query
function updateMap(query) {
  const mapIframe = document.getElementById("map-iframe");
  if (mapIframe) {
    // Construct search URL for Google Maps embed
    const mapUrl = `https://www.google.com/maps?q=PG+Hostel+near+${encodeURIComponent(query)}&output=embed`;
    mapIframe.src = mapUrl;
  }
}

// 2. Autocomplete Suggestions
function showSuggestions(value) {
  const list = document.getElementById("suggestions-list");
  if (!list) return;
  list.innerHTML = "";

  if (value.trim() === "") return;

  const filtered = locations.filter(loc => 
    loc.toLowerCase().includes(value.toLowerCase())
  );

  filtered.forEach(loc => {
    const li = document.createElement("li");
    li.textContent = loc;
    li.onclick = () => {
      const searchInput = document.getElementById("searchInput");
      if (searchInput) {
        searchInput.value = loc;
        // Update URL query parameters without reloading the page
        const newUrl = `${window.location.pathname}?q=${encodeURIComponent(loc)}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
        
        // Update map
        updateMap(loc);
      }
      list.innerHTML = "";
    };
    list.appendChild(li);
  });
}

function hideSuggestions() {
  setTimeout(() => {
    const list = document.getElementById("suggestions-list");
    if (list) list.innerHTML = "";
  }, 200);
}

function clearSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const list = document.getElementById("suggestions-list");
  if (list) list.innerHTML = "";
  
  // Default map view
  updateMap("UPES Bidholi");
  
  // Clean URL query
  const cleanUrl = window.location.pathname;
  window.history.pushState({ path: cleanUrl }, '', cleanUrl);
}

// Initialize search page
document.addEventListener("DOMContentLoaded", () => {
  // Grab search query from URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('q');
  
  const searchInput = document.getElementById("searchInput");
  
  if (query) {
    if (searchInput) searchInput.value = query;
    updateMap(query);
  } else {
    // Default location on load
    updateMap("UPES Bidholi");
  }

  // Setup Event Listeners
  if (searchInput) {
    searchInput.addEventListener("input", (e) => showSuggestions(e.target.value));
    searchInput.addEventListener("focus", (e) => showSuggestions(e.target.value));
    searchInput.addEventListener("blur", hideSuggestions);
  }
  
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", clearSearch);
  }
});