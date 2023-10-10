let cel = document.querySelector("#celsius>input");
let fah = document.querySelector("#fahrenheit>input");
let kel = document.querySelector("#kelvin>input");
let btn = document.querySelector(".btn>button");

function eraseText(){
  cel.value = '';
  fah.value = '';
  kel.value = '';
}

cel.addEventListener('input', function(){
  kel.value = (parseFloat(cel.value) + 273.15).toFixed(2);
  fah.value = ((parseFloat(cel.value) * 9 / 5) + 32).toFixed(2);
})
fah.addEventListener('input', function(){
  kel.value = ((parseFloat(fah.value) - 32) * 5 / 9 + 273.15).toFixed(2);
  cel.value = ((parseFloat(fah.value) - 32) * 5 / 9).toFixed(2);
})
kel.addEventListener('input', function(){
  fah.value = ((parseFloat(kel.value) - 273.15) * 9 / 5 + 32).toFixed(2);
  cel.value = (parseFloat(kel.value) - 273.15).toFixed(2);
})

