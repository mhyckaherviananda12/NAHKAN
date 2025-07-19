function bukaPenilaian(tipe) {
  const penilaianLink = {
    "1": "https://drive.google.com/file/d/1OsMHl2y4_rT-64nDtx_KR2s8Mwaxi7Pa/view?usp=sharing", 
    "1.2": "https://drive.google.com/file/d/1VXulY4bd-SuaJVBG78IMFsyUxOln7wtM/view?usp=sharing", 
    "1.3": "https://drive.google.com/file/d/1iMFfrMn1p86PFNkrj7Xz4ZtninCCxW7G/view?usp=sharing", 
    "1.4": "https://drive.google.com/file/d/1GKokr5LewFYSGcyym-tjcRgeudK6OKRq/view?usp=sharing", 
    "1.5": "https://drive.google.com/file/d/1eJ4Fny_QE75C83ehJn-W1csbPZexDZQK/view?usp=sharing", 
    "1.6": "https://drive.google.com/file/d/12h2gzZHD20bulNgjQSW8IytSAv_imEb_/view?usp=sharing", 
    "1.7": "https://drive.google.com/file/d/1dfj6Gsl5s23RcMXmsuCkodBtSsjTRcJe/view?usp=sharing", 
    "1.8": "https://drive.google.com/file/d/1LOxr7s3OFH2wRxZvscSGXnEtk9ZYlSLK/view?usp=sharing", 
  };

  if (penilaianLink[tipe]) {
    console.log("Mengarahkan ke:", penilaianLink[tipe]); // Debugging
    window.location.href = penilaianLink[tipe];
  } else {
    alert("Link belum tersedia.");
  }
}