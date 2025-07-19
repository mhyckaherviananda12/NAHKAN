function bukaPenilaian(tipe) {
  const penilaianLink = {
    "one": "bulan.html", // Pastikan jalur ini benar
    "1.2": "https://drive.google.com/file/d/1IGfLwfCXzqa3H8iCLbbtMEm-D0We07V1/view?usp=sharing",
    "1.3": "https://drive.google.com/file/d/1j2mfdT4ZiNMNOx0RGKHjjmTLC0iT3tCg/view?usp=sharingr",
    "1.4": "https://drive.google.com/file/d/1-N9iMXMJb12XqkbRN6ehNVoFfvGoc7S_/view?usp=sharing",
    "1.5": "https://drive.google.com/file/d/1zNE6bZ3gE8BQzm-VId8tDPqU1EvN8_Un/view?usp=sharing",
    "1.6": "https://drive.google.com/file/d/1YyIKNijALaBPjDs0grrlI-PNTz2YXmBe/view?usp=sharing",
    "1.7": "https://drive.google.com/file/d/1WgjtWYI8UZm-RBtGSL1ZQrCjv8Y7uJq_/view?usp=sharing",
    "1.8": "https://drive.google.com/drive/folders/1_9VfW6I0VI-IgVfmE1zxUhgM7IoSaVtw?usp=sharing",
    "1.9": "buku-penerimaan-rapor.html",
    "1.10": "https://drive.google.com/file/d/1kM9n_fPsBn2x0efWv-r8V9sBwiU5RCRQ/view?usp=sharing",
    "1.11": "Remedial-dan-Pengayaan.html",
    "1.12": "https://drive.google.com/file/d/1XVFRrlha9agVKXOn3mk1UOYaSUxDeOob/view?usp=sharing",
  };

  if (penilaianLink[tipe]) {
    window.location.href = penilaianLink[tipe];
  } else {
    alert("Link belum tersedia.");
  }
}
