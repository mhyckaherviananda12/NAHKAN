function bukaPenilaian(tipe) {
  const penilaianLink = {
    "1": "https://drive.google.com/file/d/1zFgD_snC_zhBFoZGenIaH_RVUJcn48EX/view?usp=sharing", 
    "1.2": "https://drive.google.com/file/d/1mBYqv_1tRdnIPjwJK5sFD2I-pTQVZqU6/view?usp=sharing", 
    "1.3": "https://drive.google.com/file/d/1wGULNzd1OcTVYp_oZuebo-NqTQQ6AXNp/view?usp=sharing", 
    "1.4": "https://drive.google.com/file/d/1zKcEaBMSWTsHSqxTNWhjDLIbPWkppSHD/view?usp=sharing", 
  };

  if (penilaianLink[tipe]) {
    console.log("Mengarahkan ke:", penilaianLink[tipe]); // Debugging
    window.location.href = penilaianLink[tipe];
  } else {
    alert("Link belum tersedia.");
  }
}