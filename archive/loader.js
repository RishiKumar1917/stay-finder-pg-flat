fetch('header.html').then(res => res.text()).then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  });
  
  fetch('main.html').then(res => res.text()).then(data => {
    document.getElementById('main-content').innerHTML = data;
  });
  
  fetch('footer.html').then(res => res.text()).then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });
  