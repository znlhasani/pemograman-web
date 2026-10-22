// Literal adalah nilai yang ditulis langsung di dalam kode.
const literalDenganPetikGanda = "Halo, dunia!";
const literalDenganPetikTunggal = "Belajar JavaScript";

// Backslash (\\) melakukan escaping agar tanda petik menjadi bagian dari string.
const kutipan = "Dia berkata: 'Halo!'";

// Escape sequence umum: \n untuk baris baru dan \\ untuk karakter backslash.
const teksDuaBaris = "Baris pertama\nBaris kedua";
const alamatFolder = "Folder\\Dokumen";

// Template literal menggunakan backtick dan menyisipkan ekspresi dengan ${...}.
const nama = "Elliot";
const sapaan = `Halo, ${nama}!`;
document.getElementById("literal-output").textContent =
  `${literalDenganPetikGanda} — ${literalDenganPetikTunggal}`;
document.getElementById("escape-output").textContent =
  `${kutipan}\n${teksDuaBaris}\n${alamatFolder}`;
document.getElementById("template-output").textContent = sapaan;



console.log(sapaan);

const namadepan = "Edlliot";
const namabelakang = "Alderson";

const fullname = namadepan.concat(" + ", namabelakang);

console.log(fullname);


// operasi string

// operasi string

// char at
let dataMhs = "doni mahasiswa teknik informatika";
console.log(dataMhs);
console.log(dataMhs.charAt(3));

// concat
let namaDepan = "doni";
let namaBelakang = "dino";
let namaLengkap = namaDepan.concat(" ", namaBelakang);
console.log(namaLengkap);

// indexOf
console.log(dataMhs.indexOf('m'));

// substring
console.log(dataMhs.substring(5, 15));
console.log(dataMhs.substring(15, 5));

// slice
console.log(dataMhs.slice(5, 15));
console.log(dataMhs.slice(15, 5)); // data kosong 