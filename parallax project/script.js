let text = document.getElementById('text');
let cloud = document.getElementById("cloud");
let mountain = document.getElementById('mountain');
let grass = document.getElementById('grass');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    let scale = 1 + value * 0.0005; // adjust 0.0005 to control zoom speed
  if (scale < 0.6) scale = 0.6; // prevent it from getting too small

  mountain.style.transform = `scale(${scale})`;
    text.style.marginTop = value*1.5+'px';
    // mountain.style.left = value*-1+'px';
})