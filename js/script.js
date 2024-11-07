function hitungNilai() {
  const BOBOT_TUGAS = 0.3;
  const BOBOT_UTS = 0.3;
  const BOBOT_UAS = 0.4;
  const BATAS_KELULUSAN = 60;

  // Ambil nilai dari input
  let nilaiTugas = parseFloat(document.getElementById("tugas").value);
  let nilaiUTS = parseFloat(document.getElementById("uts").value);
  let nilaiUAS = parseFloat(document.getElementById("uas").value);

  // Validasi input
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
    return;
  }

  // Hitung nilai rata-rata tertimbang
  let nilaiAkhir =
    nilaiTugas * BOBOT_TUGAS + nilaiUTS * BOBOT_UTS + nilaiUAS * BOBOT_UAS;

  // Tentukan nilai huruf
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

  // Tentukan status lulus/gagal
  let lulus = nilaiAkhir >= BATAS_KELULUSAN;

  // Tampilkan hasil
  const hasilDiv = document.getElementById("hasil");
  hasilDiv.innerHTML = `
        <p>Nilai Akhir: ${nilaiAkhir.toFixed(2)}</p>
        <p>Nilai Huruf: ${nilaiHuruf}</p>
        <p>Status: ${lulus ? "Lulus" : "Gagal"}</p>
    `;

  // Beri warna berdasarkan status
  hasilDiv.className = "result-section " + (lulus ? "pass" : "fail");
}
