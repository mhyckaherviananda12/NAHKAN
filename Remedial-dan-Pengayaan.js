document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("penilaian-container");

const daftarPenilaian = [
    { id: "1", icon: "", title: "Pendidikan Pancasila" },
    { id: "1.2", icon: "", title: "Bahasa Indonesia" },
    { id: "1.3", icon: "", title: "Matematika" },
    { id: "1.4", icon: "", title: "Ilmu Pengetahuan Alam dan Sosial" },
    { id: "1.5", icon: "", title: "Seni Musik" },
    { id: "1.6", icon: "", title: "Seni Tari" },
    { id: "1.7", icon: "", title: "Seni Rupa" },
    { id: "1.8", icon: "", title: "Seni Teater" },
];

  daftarPenilaian.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = `${item.icon} ${item.title}`;
    div.onclick = () => bukaPenilaian(item.id);
    container.appendChild(div);
  });
});
