// === FITUR: Lihat Detail Produk ===
const detailButtons = document.querySelectorAll(".detail-btn");

detailButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const detail = btn.nextElementSibling;
    detail.classList.toggle("hidden");
    btn.textContent = detail.classList.contains("hidden")
      ? "Lihat Detail"
      : "Sembunyikan Detail";
  });
});

// === FITUR 2: Style & Animation (Beli Sekarang dengan Fade Animasi per-produk) ===
const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // cari elemen pesan yang ada tepat setelah tombol
    const msg = btn.nextElementSibling;
    if (!msg) return;

    // pastikan menghapus 'hidden' agar element dapat muncul
    msg.classList.remove("hidden");

    // pakai requestAnimationFrame agar browser menerapkan perubahan display terlebih dahulu
    // sebelum menambahkan kelas .show (supaya transition opacity bekerja)
    requestAnimationFrame(() => {
      msg.classList.add("show");
      msg.textContent = "Terima kasih sudah membeli!";
    });

    // setelah 2 detik, hilangkan kelas show (fade out)
    setTimeout(() => {
      msg.classList.remove("show");
      // setelah transition opacity selesai (0.8s di CSS), kembalikan 'hidden'
      // gunakan timeout sedikit lebih lama dari durasi transition untuk aman
      setTimeout(() => {
        msg.classList.add("hidden");
        // opsional: kosongkan text jika mau
        // msg.textContent = "";
      }, 900);
    }, 2000);
  });
});

// === FITUR: Tampilkan Nomor di Halaman About ===
const showNumberBtn = document.getElementById("showNumberBtn");
const phoneNumber = document.getElementById("phoneNumber");

if (showNumberBtn) {
  showNumberBtn.addEventListener("click", () => {
    phoneNumber.classList.toggle("hidden");
    showNumberBtn.textContent = phoneNumber.classList.contains("hidden")
      ? "Lihat Nomor Kontak"
      : "Sembunyikan Nomor";
  });
}
