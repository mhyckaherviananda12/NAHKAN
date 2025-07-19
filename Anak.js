function bukaLinkGuru(id) {
const guruLinks = {
  G1: "Pancasila/G1.html",
  G2: "Bahasa-Indonesia/G2.html",
  G3: "Matematika/G3.html",
  G4: "IPAS/G4.html",
  G5: "Seni-Musik/G5.html",
  G6: "Seni-Tari/G6.html",
  G7: "Seni-Rupa/G7.html",
  G8: "Seni-Teater/G8.html",
  G9: "Penunjang/G9.html",
};


  if (guruLinks[id]) {
    window.location.href = guruLinks[id];
  } else {
    alert("Link belum tersedia.");
  }
}
