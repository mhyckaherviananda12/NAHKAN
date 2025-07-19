function bukaPenilaian(tipe) {
  const penilaianLink = {
    "1": "https://drive.google.com/file/d/16AQfyAN28W3Y-gsPqTIx4H47aB1jfkTL/view?usp=sharing", 
    "1.2": "https://drive.google.com/file/d/1qYVisC7VGw0fYaiugNuXq1DQZtJLuuvw/view?usp=sharing", // Agustus
    "1.3": "https://drive.google.com/file/d/1Iubpm46lTlnACUEN3EyQKGbipQtRWfEv/view?usp=sharing", // September
    "1.4": "https://drive.google.com/file/d/1PyRPKXqv9G-vRKv2Lyh9knCqFt9jwJp_/view?usp=sharing", // Oktober
    "1.5": "https://drive.google.com/file/d/1CZ9TThBEHHAUXT7v0rL_mUuKCq1S2pri/view?usp=sharing", // November
    "1.6": "https://drive.google.com/file/d/1VlxIcW8ZLsRJLoYZNOq1yfmKXijdL5PL/view?usp=sharing", // Desember
    "1.7": "https://drive.google.com/file/d/1z8_iwQGqWkEjlgGpXeISNgHft1WfNGPb/view?usp=sharing", // Januari
    "1.8": "https://drive.google.com/file/d/11p5ji0ufw_KT3CDX1e8G8GKvNL0tqNJc/view?usp=sharing", // Februari
    "1.9": "https://drive.google.com/file/d/1NhszeaYGWhigc0ZOmvjZC5kK13RGt0Du/view?usp=sharing", // Maret
    "1.10": "https://drive.google.com/file/d/1095LgOwPWqMek84kpRpa0kjW7I04j4Ks/view?usp=sharing", // April
    "1.11": "https://drive.google.com/file/d/1_TgFeLlWg-JQ4W8weRmSrQH_eGs0Wmjb/view?usp=sharing", // Mei
    "1.12": "https://drive.google.com/file/d/1DTpPKFHhDE-8mbW6sj3nvNIC2ThCiPQn/view?usp=sharing", // Juni
  };

  if (penilaianLink[tipe]) {
    console.log("Mengarahkan ke:", penilaianLink[tipe]); // Debugging
    window.location.href = penilaianLink[tipe];
  } else {
    alert("Link belum tersedia.");
  }
}