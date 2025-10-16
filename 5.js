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

// === FITUR 2: Style & Animation ===
const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach((btn) => {
  const msg = btn.nextElementSibling;

  btn.addEventListener("click", () => {
    msg.classList.add("show");
    msg.textContent = "Terima kasih sudah membeli! ";

    setTimeout(() => {
      msg.classList.remove("show");
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
