document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("penilaian-container");

 const daftarPenilaian = [
    { id: "1", icon: "", title: "Juli" },
    { id: "1.2", icon: "", title: "Agustus" },
    { id: "1.3", icon: "", title: "September" },
    { id: "1.4", icon: "", title: "Oktober" },
    { id: "1.5", icon: "", title: "November" },
    { id: "1.6", icon: "", title: "Desember" },
    { id: "1.7", icon: "", title: "Januari" },
    { id: "1.8", icon: "", title: "Februari" },
    { id: "1.9", icon: "", title: "Maret" },
    { id: "1.10", icon: "", title: "April" },
    { id: "1.11", icon: "", title: "Mei" },
    { id: "1.12", icon: "", title: "Juni" },
];

  daftarPenilaian.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = `${item.icon} ${item.title}`;
    div.onclick = () => bukaPenilaian(item.id);
    container.appendChild(div);
  });
});
