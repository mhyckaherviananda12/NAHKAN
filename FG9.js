document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("penilaian-container");

  const daftarPenilaian = [
    { id: "one", icon: "", title: "Buku Absensi Murid" },
    { id: "1.2", icon: "", title: "Buku Tamu" },
    { id: "1.3", icon: "", title: "Buku Inventaris Kelas" },
    { id: "1.4", icon: "", title: "Jadwal Pelajaran" },
    { id: "1.5", icon: "", title: "Grafik Data Murid" },
    { id: "1.6", icon: "", title: "Tata Tertib Kelas" },
    { id: "1.7", icon: "", title: "Buku Mutasi Murid" },
    { id: "1.8", icon: "", title: "Biodata Murid" },
    { id: "1.9", icon: "", title: "Buku Penerimaan dan Penyerahan Rapor" },
    { id: "1.10", icon: "", title: "Buku Notulen Rapat" },
    { id: "1.11", icon: "", title: "Remedial dan Pengayaan" },
    { id: "1.12", icon: "", title: "Lembar Pengesahan" },
  ];

  daftarPenilaian.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = `${item.icon} ${item.title}`;
    div.onclick = () => bukaPenilaian(item.id);
    container.appendChild(div);
  });
});
