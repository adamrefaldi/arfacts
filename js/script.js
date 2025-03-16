const faktaList = [
  "Tahukah kamu? Jantung manusia bisa berdetak sekitar 100.000 kali per hari!",
  "Fakta unik: Air liur manusia bisa mengisi dua kolam renang sepanjang hidupnya!",
  "Ilmiah banget! Planet Venus berputar searah jarum jam, berbeda dari planet lain di tata surya.",
  "Menarik! Kucing memiliki lebih dari 32 otot di setiap telinganya untuk mendengar lebih baik.",
];

let index = 0;

function gantiFakta() {
  document.getElementById("fakta-text").textContent = faktaList[index];
  index = (index + 1) % faktaList.length;
}

gantiFakta();

setInterval(gantiFakta, 5000);
