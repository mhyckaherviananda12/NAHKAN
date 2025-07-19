function jalankanFiturGuru() {
  const guruContainer = document.getElementById("guru-container");

const fiturGuru = [
  { id: "G1", icon: "", title: "Pendidikan Pancasila" },
  { id: "G2", icon: "", title: "Bahasa Indonesia" },
  { id: "G3", icon: "", title: "Matematika" },
  { id: "G4", icon: "", title: "Ilmu Pengetahuan Alam dan Sosial" },
  { id: "G5", icon: "", title: "Seni Musik" },
  { id: "G6", icon: "", title: "Seni Tari" },
  { id: "G7", icon: "", title: "Seni Rupa" },
  { id: "G8", icon: "", title: "Seni Teater" },
  { id: "G9", icon: "", title: "Administrasi Kelas" },
];


  fiturGuru.forEach(fitur => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = `${fitur.icon} ${fitur.title}`;
    card.onclick = () => bukaLinkGuru(fitur.id);
    guruContainer.appendChild(card);
  });
}
