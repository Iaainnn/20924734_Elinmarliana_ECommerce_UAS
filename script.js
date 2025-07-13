function tambahKeKeranjang(nama, harga) {
    // Ambil data keranjang dari localStorage
    let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  
    // Tambah produk ke array keranjang
    keranjang.push({ nama, harga });
  
    // Simpan kembali ke localStorage
    localStorage.setItem('keranjang', JSON.stringify(keranjang));
  
    // Notifikasi
    alert(`${nama} telah ditambahkan ke keranjang!`);
  }
  