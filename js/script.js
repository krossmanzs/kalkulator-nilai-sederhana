function hitungNilai() {
  // Deklarasi konstanta untuk bobot nilai dan batas kelulusan
  const BOBOT_TUGAS = 0.3;
  const BOBOT_UTS = 0.3;
  const BOBOT_UAS = 0.4;
  const BATAS_KELULUSAN = 60;

  // Mengambil nilai dari input pengguna pada form
  let nilaiTugas = parseFloat(document.getElementById("tugas").value);
  let nilaiUTS = parseFloat(document.getElementById("uts").value);
  let nilaiUAS = parseFloat(document.getElementById("uas").value);

  // Memvalidasi bahwa input adalah angka antara 0 dan 100
  if (
    isNaN(nilaiTugas) ||
    isNaN(nilaiUTS) ||
    isNaN(nilaiUAS) ||
    nilaiTugas < 0 ||
    nilaiTugas > 100 ||
    nilaiUTS < 0 ||
    nilaiUTS > 100 ||
    nilaiUAS < 0 ||
    nilaiUAS > 100
  ) {
    alert("Masukkan nilai antara 0 dan 100 untuk semua komponen.");
    return; // Menghentikan eksekusi jika ada nilai yang tidak valid
  }

  // Menghitung nilai akhir sebagai rata-rata tertimbang dari nilai Tugas, UTS, dan UAS
  let nilaiAkhir =
    nilaiTugas * BOBOT_TUGAS + nilaiUTS * BOBOT_UTS + nilaiUAS * BOBOT_UAS;

  // Menentukan nilai huruf berdasarkan rentang nilai akhir
  let nilaiHuruf;
  if (nilaiAkhir >= 90) {
    nilaiHuruf = "A";
  } else if (nilaiAkhir >= 80) {
    nilaiHuruf = "B";
  } else if (nilaiAkhir >= 70) {
    nilaiHuruf = "C";
  } else if (nilaiAkhir >= 60) {
    nilaiHuruf = "D";
  } else {
    nilaiHuruf = "E";
  }

  // Menentukan status lulus atau gagal berdasarkan batas kelulusan
  let lulus = nilaiAkhir >= BATAS_KELULUSAN;

  // Menampilkan hasil perhitungan nilai akhir, nilai huruf, dan status lulus/gagal
  const hasilDiv = document.getElementById("hasil");
  hasilDiv.innerHTML = `
        <p>Nilai Akhir: ${nilaiAkhir.toFixed(2)}</p>
        <p>Nilai Huruf: ${nilaiHuruf}</p>
        <p>Status: ${lulus ? "Lulus" : "Gagal"}</p>
    `;

  // Mengubah kelas CSS hasilDiv untuk memberi warna sesuai status kelulusan
  hasilDiv.className = "result-section " + (lulus ? "pass" : "fail");
}
