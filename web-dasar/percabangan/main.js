
// Percabangan: satu kondisi (if/else)
// Coba ubah umur menjadi 15 untuk melihat hasil yang berbeda.
const umur = 18;

if (umur >= 17) {
    console.log("Kamu sudah cukup umur untuk membuat KTP.");
} else {
    console.log("Kamu belum cukup umur untuk membuat KTP.");
}

// Percabangan: beberapa kondisi (if/else if/else)
// Kondisi diperiksa dari atas. Hanya cabang pertama yang cocok dijalankan.
// Coba nilai 90, 75, atau 50.
const nilai = 75;

if (nilai >= 85) {
    console.log("Nilai kamu A.");
} else if (nilai >= 70) {
    console.log("Nilai kamu B.");
} else {
    console.log("Kamu perlu belajar lagi.");
}

// Menggabungkan kondisi dengan AND (&&)
// Kedua kondisi harus benar agar mendapat diskon.
const punyaKartuMember = true;
const totalBelanja = 120000;

if (punyaKartuMember && totalBelanja >= 100000) {
    console.log("Kamu mendapat diskon 10%.");
} else {
    console.log("Kamu belum mendapat diskon.");
}

// Percabangan switch-case: memilih menu berdasarkan nilai yang sama persis
// Coba ubah pilihanMenu menjadi 1, 2, 3, atau 4.
const pilihanMenu = 2;

switch (pilihanMenu) {
    case 1:
        console.log("Kamu memilih nasi goreng.");
        break;

    case 2:
        console.log("Kamu memilih mi ayam.");
        break;

    case 3:
        console.log("Kamu memilih bakso.");
        break;

    default:
        console.log("Menu tidak tersedia.");
        // Jika tidak ada case yang cocok.
}

// Perulangan while: menampilkan angka 1 sampai 5
// While mengulang selama kondisi bernilai true.
let angka = 1;

while (angka <= 5) {
    console.log("Perulangan ke-" + angka);
    angka++; // Tambah 1 agar kondisi akhirnya false dan perulangan berhenti.
}

console.log("Perulangan selesai.");
