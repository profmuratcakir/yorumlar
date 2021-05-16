const yorumlar = [
  {
    id: 1,
    ad: "Ayşe Yılmaz",
    meslek: "Web Tasarımcı",
    resim:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    yorum: "Oldukça Kullanıcı Dostu..",
  },
  {
    id: 2,
    ad: "Canan Zengin",
    meslek: "Grafik Tasarımcı",
    resim:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    yorum: "Tebrikler Çok Başarılı Bir Uygulama :)",
  },
  {
    id: 3,
    ad: "Ahmet Çakır",
    meslek: "Stajer",
    resim:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    yorum: "Güzel ama geliştirilmesi gerekiyor.",
  },
];

// Bilgilere Erişim
const resim = document.querySelector(".resim");
const yazar = document.getElementById("yazar");
const meslek = document.getElementById("meslek");
const yorum = document.getElementById("açıklama");

// Buttonlara Erişim
const geriButton = document.querySelector(".fa-chevron-left");
const ileriButton = document.querySelector(".fa-chevron-right");
const rasgeleBtn = document.querySelector(".btn-outline-info");
let index = 0;

// Sayfa açılırken ilk kişiyi göster
document.getElementById("body").onload = function () {
  kişiGöster(index);
};

// Seçilen Kişiyi Göster
function kişiGöster(index) {
  const kişi = yorumlar[index];
  resim.src = kişi.resim;
  yazar.innerHTML = kişi.ad;
  meslek.textContent = kişi.meslek;
  yorum.innerHTML = kişi.yorum;
}

// Bir sonraki kişiyi göster (İleri Butonuna basıldığında!)
ileriButton.addEventListener("click", function () {
  index++;
  if (index > yorumlar.length - 1) {
    index = 0;
  }
  kişiGöster(index);
});

// Bir önceki kişiyi göster (geri butonuna basıldığında!)
geriButton.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = yorumlar.length - 1;
  }
  kişiGöster(index);
});

rasgeleBtn.addEventListener("click", function () {
  index = Math.round(Math.random() * (yorumlar.length - 1));
  kişiGöster(index);
});
