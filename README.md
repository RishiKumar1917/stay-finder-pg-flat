# 🏠 Stay Finder | Student PG & Flat Locator

Stay Finder is a sleek, modern, web-based platform designed specifically for students and faculty near the **UPES Bidholi** and **Kandoli** campuses to discover, compare, and locate verified PGs, hostels, flats, and local essential services (gyms, medical stores, shops).

> [!TIP]
> This repository has been fully reorganized into a clean, modern, and modular structure. You can run it instantly on your local browser with zero setup.

---

## ✨ Features

- **📍 Dynamic Map Integration**: Search locations dynamically. The map automatically shifts zoom and coordinates in real time to the selected student neighborhoods.
- **🔍 Smart Autocomplete Suggestions**: Instant search bar suggestions as you type, directing you straight to the corresponding properties.
- **📸 Local Image Previews**: A smooth image slider displaying high-resolution room conditions (bedroom, drawer space, bathrooms) using local assets.
- **🎨 Premium Responsive UI**: Upgraded styling using a slate, indigo, and amber color system, custom typography (Outfit & Plus Jakarta Sans), sleek shadows, and glassmorphism.
- **📂 Clean Directory Architecture**: Properly separated files into styles, scripts, component fragments, tests, and assets.

---

## 📸 Sample Screenshot

![Stay Finder Screenshot](https://github.com/user-attachments/assets/cae3298f-c9c9-4a5f-9dd8-bed5ebf189df)

---

## 📂 Folder Structure

```
stay-finder-pg-flat/
├── index.html                  # Main homepage (consolidated & responsive)
├── search.html                 # Dynamic map & listings search page
├── README.md                   # Project documentation
├── css/
│   └── styles.css              # Premium custom variables, layout, & utility styling
├── js/
│   ├── main.js                 # Homepage logic (image slider & autocomplete search)
│   └── search.js               # Search page logic (dynamic map updates & query parser)
├── assets/
│   ├── images/                 # Room & accommodation assets
│   │   ├── Room1.jpg
│   │   ├── Room2.png
│   │   ├── Bathroom1.jpg
│   │   ├── Bathroom2.png
│   │   ├── Drawer1.jpg
│   │   └── Drawer2.png
│   └── screenshots/            # Repository visual documentation
│       ├── Preview.png
│       └── image.png
├── components/                 # Reusable HTML layout pieces (header, footer)
│   ├── header.html
│   └── footer.html
├── test/
│   └── tests.js                # Node.js assertion tests (runnable unit tests)
└── archive/                    # Deprecated / original development files
```

---

## 🛠️ Tech Stack

*   **Markup**: HTML5 (Semantic and accessible layout)
*   **Styling**: Vanilla CSS3 (Custom design system with CSS Variables, Flexbox, Grid, & Transitions)
*   **Interactivity**: Modern ES6+ JavaScript (CORS-free static file execution)
*   **Testing**: Node.js Native Test Runner (Assert module)

---

## 🚀 How to Run Locally

### 1. Direct Browser Launch
Simply double-click on `index.html` in your file explorer to open the site directly in any web browser. 

> [!NOTE]
> All scripts and resources are structured locally, meaning they run flawlessly on local `file://` protocols with zero configuration.

### 2. Local HTTP Server (Recommended)
If you want to run it via an HTTP server (e.g., using VS Code's **Live Server** extension or Python):
```bash
# Using Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

---

## 🧪 Running Unit Tests

This project includes a native Node.js test suite for checking validation logic:
```bash
# Run tests directly using Node.js
node test/tests.js
```

---

## 👨‍💻 Author

Developed by **Rishi Kumar** & 
             **Aditya Mehta**
