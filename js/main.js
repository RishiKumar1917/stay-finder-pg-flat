// Stay Finder - Main JS (Homepage Slider & Search Autocomplete)

// 1. Slider Functionality
const images1 = [
  "assets/images/Room1.jpg",
  "assets/images/Drawer1.jpg",
  "assets/images/Bathroom1.jpg"
];

const images2 = [
  "assets/images/Room2.png",
  "assets/images/Drawer2.png",
  "assets/images/Bathroom2.png"
];

let index = 0;

function startSlider() {
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");

  if (img1 && img2) {
    // Set initial images
    img1.src = images1[index];
    img2.src = images2[index];

    setInterval(() => {
      index = (index + 1) % images1.length;
      img1.src = images1[index];
      img2.src = images2[index];
    }, 3000);
  }
}

// 2. Search Autocomplete Suggestions
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
      if (searchInput) searchInput.value = loc;
      list.innerHTML = "";
      // Redirect to search.html with query parameter
      window.location.href = `search.html?q=${encodeURIComponent(loc)}`;
    };
    list.appendChild(li);
  });
}

function hideSuggestions() {
  setTimeout(() => {
    const list = document.getElementById("suggestions-list");
    if (list) list.innerHTML = "";
  }, 200); // slight delay to allow click event to register
}

function clearSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const list = document.getElementById("suggestions-list");
  if (list) list.innerHTML = "";
}

// Initialize when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  startSlider();

  // Add event listener to search input if it exists
  const searchInput = document.getElementById("searchInput");
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