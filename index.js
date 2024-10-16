function quest() {
    const lokasi = [
        "LAB RPL","LAB KOMP 1","LAB KOMP 3",
        "RUANG 31","RUANG 23","RUANG 24","KANTIN"
    ];
    const orang = [
       "Seno","Suci","Ajeng","Kayla",
       "bayu","iis","Nilna","Tiara",
       "Ahdan","Faradila","Salwa",
       "Indra","Sasika","Zuina",
       "Aan","Ade","Maya","Luna",
       "aboy","Sifa","Devi","Anggun",
       "Amir","Dea","Resti","Fisma",
       "Acil", "Egi","Argi","Adrian",
       "Nanda", "Rifki", "Jimmy","Gilang",
       "Holis", "dudi"
      
    ];
    const barang = [
        "Pulpen","Penghapus","Tipe X",
        "Spidol","Tas","Bebas"
    ];

    const RandomLokasi = lokasi[Math.floor(Math.random() * lokasi.length)];
    const RandomOrang = orang[Math.floor(Math.random() * orang.length)];
    const RandomBarang = barang[Math.floor(Math.random() * barang.length)];

    const pertanyaan =`${RandomOrang}: Harus Pergi ke ${RandomLokasi} Dan Harus Membawa ${RandomBarang} Dan Diam Selama 2mnt.`;
    document.getElementById('pertanyaan').textContent = pertanyaan;
}
