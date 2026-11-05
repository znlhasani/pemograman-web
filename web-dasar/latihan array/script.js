// getElementById menggunakan nama id tanpa tanda #.
const form = document.getElementById("form-latihan");
const input = document.getElementById("arimatika");
const daftar = document.getElementById("daftar");

form.addEventListener("submit", function (event) {
  // Cegah halaman reload saat form dikirim.
  event.preventDefault();

  const teks = input.value.trim();

  // Jangan tambahkan input kosong atau yang hanya berisi spasi.
  if (teks === "") {
    input.focus();
    return;
  }

  // Buat elemen li dan isi dengan teks, bukan HTML.
  const item = document.createElement("li");
  item.textContent = teks + " ";

  const tombolDelete = document.createElement("button");
  tombolDelete.type = "button";
  tombolDelete.textContent = "Delete";
  tombolDelete.setAttribute("aria-label", `Hapus ${teks}`);

  // Setiap tombol hanya menghapus item tempat tombol itu berada.
  tombolDelete.addEventListener("click", function () {
    item.remove();
  });

  item.appendChild(tombolDelete);
  daftar.appendChild(item);

  // Kosongkan input agar siap untuk item berikutnya.
  input.value = "";
  input.focus();
});