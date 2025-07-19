document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("penilaian-container");

 const daftarPenilaian = [
    { id: "1", icon: "", title: "Lembar Bukti Pengembalian Rapor Semester Satu" },
    { id: "1.2", icon: "", title: "Lembar Bukti Penyerahan Rapor Semester Satu" },
    { id: "1.3", icon: "", title: "Lembar Bukti Pengembalian Rapor Semester Dua" },
    { id: "1.4", icon: "", title: "Lembar Bukti Penyerahan Rapor Semester Dua" },
];

  daftarPenilaian.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = `${item.icon} ${item.title}`;
    div.onclick = () => bukaPenilaian(item.id);
    container.appendChild(div);
  });
});
