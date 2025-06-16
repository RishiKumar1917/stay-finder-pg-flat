// Image slider functionality
const images1 = [
    "https://i.ibb.co/6cfg4FHH/Whats-App-Image-2025-04-07-at-13-02-26-7da3e286.jpg",
    "https://i.ibb.co/4RQsmL13/Whats-App-Image-2025-04-07-at-13-02-26-79abf23b.jpg",
    "https://i.ibb.co/1FjcMG7/Whats-App-Image-2025-04-07-at-13-02-26-d1ee0a4f.jpg"
  ];
  
  const images2 = [
    "https://i.ibb.co/HTSC1yvX/Whats-App-Image-2025-04-07-at-13-02-26-e2241df2.jpg",
    "https://i.ibb.co/9kn4Q1Tc/Whats-App-Image-2025-04-07-at-13-02-28-1aab4dcb.jpg",
    "https://i.ibb.co/qtgQZ92/Whats-App-Image-2025-04-07-at-13-02-28-62494ca6.jpg"
  ];
  
  let index = 0;
  
  setInterval(() => {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
  
    if (img1 && img2) {
      img1.src = images1[index];
      img2.src = images2[index];
      index = (index + 1) % images1.length;
    }
  }, 3000);
  