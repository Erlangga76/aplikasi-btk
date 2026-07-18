// ==========================================
// DATABASE LOKASI
// ==========================================
const dbLokasi = [
    { lokasi: "Alun-alun Ponorogo", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Ampel Pasar", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Bale Benih", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Baturetno Pasar", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Bejen", ukuran: "4x6", model: "Back Light", zona: "Zona B" },
    { lokasi: "Blotongan", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Bulakrejo", ukuran: "4x6", model: "Back Light", zona: "Zona B" },
    { lokasi: "Bunder Pasar", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Bunderan Kartosuro 4x6", ukuran: "4x6", model: "Back Light", zona: "Zona A" },
    { lokasi: "Bunderan Kartosuro 5x10", ukuran: "5x10", model: "Front Light", zona: "Zona A" },
    { lokasi: "Cawas", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Cembengan", ukuran: "2x4", model: "Front Light", zona: "Zona A" },
    { lokasi: "Cepogo 1", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Cepogo 2", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Cepogo Pasar", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Dagen", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Delanggu H", ukuran: "4x6", model: "Back Light", zona: "Zona A" },
    { lokasi: "Delanggu V", ukuran: "4x6", model: "Back Light", zona: "Zona A" },
    { lokasi: "Dr. Oen", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Eromoko", ukuran: "4x6", model: "Back Light", zona: "Zona C" },
    { lokasi: "Exit Tol Klodran 4x6", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Exit Tol Klodran 5x10", ukuran: "5x10", model: "Front Light", zona: "Zona A" },
    { lokasi: "Exit Tol Klodran 6x12", ukuran: "6x12", model: "Front Light", zona: "Zona A" },
    { lokasi: "Gemolong", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Gentan", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Gravista", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Gumpang", ukuran: "5x10", model: "Front Light", zona: "Zona A" },
    { lokasi: "Jatinom", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Jembatan Jurug", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Jetis Ponorogo Pasar", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Jombang", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Jongke", ukuran: "4x6", model: "Back Light", zona: "Zona A" },
    { lokasi: "Jongke Pasar", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Juwiring", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Kabangan", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Kacangan", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Kapten Mulyadi", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Kediri", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Kedunglumbu 2x4", ukuran: "2x4", model: "Front Light", zona: "Zona A" },
    { lokasi: "Kedunglumbu 4x6", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Kemudo", ukuran: "5x10", model: "Front Light", zona: "Zona C" },
    { lokasi: "Ketandan", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Klegen", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Komplang", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Kopral Sayom", ukuran: "2x4", model: "Front Light", zona: "Zona B" },
    { lokasi: "Kota Barat", ukuran: "5x10", model: "Front Light", zona: "Zona A" },
    { lokasi: "Kras Kediri Pasar", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Lumbung Batik", ukuran: "2x4", model: "Front Light", zona: "Zona A" },
    { lokasi: "Madiun", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Magetan", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Manahan", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Mangkunegaran", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Mangkuyudan", ukuran: "3x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Matesih", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Mengkreng", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Mojogedang", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Mrican", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Ngadirojo", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Ngadirojo Pasar", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Nganjuk", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Ngasem", ukuran: "5x10", model: "Front Light", zona: "Zona A" },
    { lokasi: "Ngawi", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Ngemplak Tulungangung Pasar", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Ngujang", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Ngunut Tulungagung", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Nguter", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Nogosari", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Nusukan Pasar", ukuran: "5x10", model: "Front Light", zona: "Zona A" },
    { lokasi: "Pabelan", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Paldaplang", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Palur Plaza", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Papahan", ukuran: "5x10", model: "Front Light", zona: "Zona B" },
    { lokasi: "Patung Tembak Tipes", ukuran: "5x10", model: "Front Light", zona: "Zona A" },
    { lokasi: "Pedan", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Pengging", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Penggung", ukuran: "5x10", model: "Front Light", zona: "Zona A" },
    { lokasi: "Perempatan Colomadu", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Phiadeva", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Pilangsari", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Pracimantoro Pasar", ukuran: "5x10", model: "Front Light", zona: "Zona C" },
    { lokasi: "Prempatan Baturetno", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Pungkruk", ukuran: "4x8", model: "Front Light", zona: "Zona C" },
    { lokasi: "Purwodadi", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Rajawali 4x6", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Rosin", ukuran: "5x10", model: "Front Light", zona: "Zona A" },
    { lokasi: "Sambi Kediri Pasar", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Sambi Pasar ", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Sawit", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Sidoharjo Pasar", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "SMA 7", ukuran: "2x4", model: "Front Light", zona: "Zona A" },
    { lokasi: "SMA Warga", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Solo Safari", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Sondokoro", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Songgorunggi", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Sumberlawang", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Sunggingan 4x6 Pasar ", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Sunggingan 5x10 Pasar ", ukuran: "5x10", model: "Front Light", zona: "Zona B" },
    { lokasi: "Taman Pancasila", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Tawangmangu", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Te'an", ukuran: "4x8", model: "Front Light", zona: "Zona C" },
    { lokasi: "Terminal Seloaji", ukuran: "4x6", model: "Front Light", zona: "Zona C" },   
    { lokasi: "Terminal Sukoharjo 4x6", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Terminal Sukoharjo 5x10", ukuran: "5x10", model: "Front Light", zona: "Zona B" },
    { lokasi: "Terminal Tamanan", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Tingkir", ukuran: "2x4", model: "Back Light", zona: "Zona C" },
    { lokasi: "Trenggalek", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Tuban", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Tugu Berlian", ukuran: "4x8", model: "Front Light", zona: "Zona B" },
    { lokasi: "Tugu Trenggalek", ukuran: "4x6", model: "Front Light", zona: "Zona C" },
    { lokasi: "Tulung", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "UMS", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "UNS", ukuran: "3x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "VB Pasar Kembang", ukuran: "1x3", model: "Back Light", zona: "Zona A" },
    { lokasi: "VB Salatiga", ukuran: "1x2", model: "Back Light", zona: "Zona C" },
    { lokasi: "VB UMS", ukuran: "1x3", model: "Back Light", zona: "Zona A" },
    { lokasi: "Waringinrejo", ukuran: "2x4", model: "Front Light", zona: "Zona A" },
    { lokasi: "Wedi Ps ", ukuran: "4x6", model: "Front Light", zona: "Zona B" },
    { lokasi: "Wonorejo", ukuran: "4x6", model: "Front Light", zona: "Zona A" },
    { lokasi: "Yos Sudarso", ukuran: "4x6", model: "Back Light", zona: "Zona A" }
];

// ==========================================
// DATABASE HARGA MATRIKS
// ==========================================
const dbHarga = {
    "1x2": {
        "Front Light": { "Pasang": { "Zona A": 40000, "Zona B": 60000, "Zona C": 80000 }, "Bongkar": { "Zona A": 20000, "Zona B": 30000, "Zona C": 40000 }, "Bongkar Pasang": { "Zona A": 50000, "Zona B": 75000, "Zona C": 100000 } },
        "Back Light": { "Pasang": { "Zona A": 60000, "Zona B": 90000, "Zona C": 120000 }, "Bongkar": { "Zona A": 25000, "Zona B": 37500, "Zona C": 50000 }, "Bongkar Pasang": { "Zona A": 70000, "Zona B": 105000, "Zona C": 140000 } },
        "Semua": { "Pasang Putihan": { "Zona A": 10000, "Zona B": 15000, "Zona C": 20000 }, "Service Besar": { "Zona A": 10000, "Zona B": 15000, "Zona C": 20000 } }
    },
    "1x3": {
        "Front Light": { "Pasang": { "Zona A": 40000, "Zona B": 60000, "Zona C": 80000 }, "Bongkar": { "Zona A": 20000, "Zona B": 30000, "Zona C": 40000 }, "Bongkar Pasang": { "Zona A": 60000, "Zona B": 90000, "Zona C": 120000 } },
        "Back Light": { "Pasang": { "Zona A": 60000, "Zona B": 90000, "Zona C": 120000 }, "Bongkar": { "Zona A": 25000, "Zona B": 37500, "Zona C": 50000 }, "Bongkar Pasang": { "Zona A": 80000, "Zona B": 120000, "Zona C": 160000 } },
        "Semua": { "Pasang Putihan": { "Zona A": 20000, "Zona B": 30000, "Zona C": 40000 }, "Service Besar": { "Zona A": 20000, "Zona B": 30000, "Zona C": 40000 } }
    },
    "2x4": {
        "Front Light": { "Pasang": { "Zona A": 50000, "Zona B": 75000, "Zona C": 100000 }, "Bongkar": { "Zona A": 25000, "Zona B": 37500, "Zona C": 50000 }, "Bongkar Pasang": { "Zona A": 75000, "Zona B": 112000, "Zona C": 150000 } },
        "Back Light": { "Pasang": { "Zona A": 75000, "Zona B": 112000, "Zona C": 150000 }, "Bongkar": { "Zona A": 30000, "Zona B": 45000, "Zona C": 60000 }, "Bongkar Pasang": { "Zona A": 100000, "Zona B": 150000, "Zona C": 200000 } },
        "Semua": { "Pasang Putihan": { "Zona A": 30000, "Zona B": 45000, "Zona C": 60000 }, "Service Besar": { "Zona A": 30000, "Zona B": 45000, "Zona C": 60000 } }
    }, 
    "3x6": {
        "Front Light": { "Pasang": { "Zona A": 70000, "Zona B": 105000, "Zona C": 140000 }, "Bongkar": { "Zona A": 30000, "Zona B": 45000, "Zona C": 60000 }, "Bongkar Pasang": { "Zona A": 90000, "Zona B": 135000, "Zona C": 180000 } },
        "Back Light": { "Pasang": { "Zona A": 85000, "Zona B": 127000, "Zona C": 170000 }, "Bongkar": { "Zona A": 35000, "Zona B": 52500, "Zona C": 70000 }, "Bongkar Pasang": { "Zona A": 115000, "Zona B": 172000, "Zona C": 230000 } },
        "Semua": { "Pasang Putihan": { "Zona A": 40000, "Zona B": 60000, "Zona C": 80000 }, "Service Besar": { "Zona A": 40000, "Zona B": 60000, "Zona C": 80000 } }
    },
    "4x6": {
        "Front Light": { "Pasang": { "Zona A": 90000, "Zona B": 135000, "Zona C": 180000 }, "Bongkar": { "Zona A": 35000, "Zona B": 52500, "Zona C": 70000 }, "Bongkar Pasang": { "Zona A": 120000, "Zona B": 180000, "Zona C": 240000 } },
        "Back Light": { "Pasang": { "Zona A": 110000, "Zona B": 165000, "Zona C": 220000 }, "Bongkar": { "Zona A": 40000, "Zona B": 60000, "Zona C": 80000 }, "Bongkar Pasang": { "Zona A": 130000, "Zona B": 195000, "Zona C": 260000 } },
        "Semua": { "Pasang Putihan": { "Zona A": 50000, "Zona B": 75000, "Zona C": 100000 }, "Service Besar": { "Zona A": 50000, "Zona B": 75000, "Zona C": 100000 } }
    },
    "4x8": {
        "Front Light": { "Pasang": { "Zona A": 100000, "Zona B": 150000, "Zona C": 200000 }, "Bongkar": { "Zona A": 45000, "Zona B": 67500, "Zona C": 90000 }, "Bongkar Pasang": { "Zona A": 130000, "Zona B": 195000, "Zona C": 260000 } },
        "Back Light": { "Pasang": { "Zona A": 115000, "Zona B": 172500, "Zona C": 230000 }, "Bongkar": { "Zona A": 50000, "Zona B": 75000, "Zona C": 100000 }, "Bongkar Pasang": { "Zona A": 140000, "Zona B": 210000, "Zona C": 280000 } },
        "Semua": { "Pasang Putihan": { "Zona A": 70000, "Zona B": 105000, "Zona C": 140000 }, "Service Besar": { "Zona A": 70000, "Zona B": 105000, "Zona C": 140000 } }
    }, 
    "5x10": {
        "Front Light": { "Pasang": { "Zona A": 120000, "Zona B": 180000, "Zona C": 240000 }, "Bongkar": { "Zona A": 50000, "Zona B": 75000, "Zona C": 100000 }, "Bongkar Pasang": { "Zona A": 170000, "Zona B": 255000, "Zona C": 340000 } },
        "Back Light": { "Pasang": { "Zona A": 150000, "Zona B": 225000, "Zona C": 300000 }, "Bongkar": { "Zona A": 50000, "Zona B": 75000, "Zona C": 100000 }, "Bongkar Pasang": { "Zona A": 200000, "Zona B": 300000, "Zona C": 400000 } },
        "Semua": { "Pasang Putihan": { "Zona A": 90000, "Zona B": 135000, "Zona C": 180000 }, "Service Besar": { "Zona A": 90000, "Zona B": 135000, "Zona C": 180000 } }
    },  
    "6x12": {
        "Front Light": { "Pasang": { "Zona A": 130000, "Zona B": 195000, "Zona C": 260000 }, "Bongkar": { "Zona A": 60000, "Zona B": 90000, "Zona C": 120000 }, "Bongkar Pasang": { "Zona A": 180000, "Zona B": 270000, "Zona C": 360000 } },
        "Back Light": { "Pasang": { "Zona A": 160000, "Zona B": 240000, "Zona C": 320000 }, "Bongkar": { "Zona A": 70000, "Zona B": 105000, "Zona C": 140000 }, "Bongkar Pasang": { "Zona A": 210000, "Zona B": 315000, "Zona C": 420000 } },
        "Semua": { "Pasang Putihan": { "Zona A": 90000, "Zona B": 135000, "Zona C": 180000 }, "Service Besar": { "Zona A": 90000, "Zona B": 135000, "Zona C": 180000 } }          
    },
    "Semua": {
        "Semua": {
            "Service Kecil": { "Zona A": 25000, "Zona B": 25000, "Zona C": 25000 },
            "Service Sedang": { "Zona A": 35000, "Zona B": 35000, "Zona C": 35000 }
        }
    }
};

const tarifZonaMakan = { "Zona A": 15000, "Zona B": 17500, "Zona C": 20000 };

// ==========================================
// 1. INISIALISASI DATA & MEMORI LOKAL
// ==========================================
let masterLogKerja = JSON.parse(localStorage.getItem("simpananDataBTK")) || [];

// Ambil element HTML secara konsisten
const selectLokasi = document.getElementById('PilihLokasi');
const selectJenis = document.getElementById('PilihJenis');
const inputTanggal = document.getElementById('PilihTanggal');
const inputLembur = document.getElementById('InputLembur');

// Eksekusi otomatis saat halaman web dibuka
window.onload = function() {
    if(inputTanggal) inputTanggal.value = new Date().toISOString().split('T')[0];
    
    if (selectLokasi) {
        // Isi dropdown secara dinamis
        selectLokasi.innerHTML = '<option value="">-- Pilih Lokasi --</option>';
        dbLokasi.forEach(item => {
            selectLokasi.add(new Option(`${item.lokasi} (${item.zona})`, item.lokasi));
        });
        
        // Pasang Event Listener agar harga ter-update live saat input berubah
        selectLokasi.addEventListener('change', hitungHargaLive);
        if (selectJenis) selectJenis.addEventListener('change', hitungHargaLive);
        if (inputLembur) inputLembur.addEventListener('input', hitungHargaLive);
        
        if (inputTanggal) {
            inputTanggal.addEventListener('change', function() {
                if (inputLembur) inputLembur.value = 0;
                hitungHargaLive();
            });
        }

        // Event listener untuk checkbox para pekerja
        document.querySelectorAll('input[name="pekerja_check"]').forEach(cb => {
            cb.addEventListener('change', hitungHargaLive);
        });

        // Jalankan render awal
        renderTabelLogKerja();
        hitungHargaLive();
        generateSlipGaji();
    }
};

// ==========================================
// 2. LOGIKA UTAMA: PERHITUNGAN LIVE HARGA
// ==========================================
function hitungHargaLive() {
    if (!selectLokasi || !selectLokasi.value) return null;

    const namaLokasi = selectLokasi.value;
    const dataObj = dbLokasi.find(item => item.lokasi === namaLokasi);
    if (!dataObj) return null;

    const ukuran = dataObj.ukuran;
    const zona = dataObj.zona;
    const modelBawaan = dataObj.model;
    const jenisKerja = selectJenis ? selectJenis.value : "Pasang";
    const tglAktif = inputTanggal ? inputTanggal.value : new Date().toISOString().split('T')[0];
    const jamLemburInput = inputLembur ? (parseFloat(inputLembur.value) || 0) : 0;
    
    let hargaBoronganTotal = 0;
    let keyUkuran = ukuran;
    let keyModel = modelBawaan;

    // Menangani pencocokan struktur bercabang pada matriks harga 'Semua'
    if (jenisKerja === "Service Kecil" || jenisKerja === "Service Sedang") {
        keyUkuran = "Semua";
        keyModel = "Semua";
    } else if (jenisKerja === "Pasang Putihan" || jenisKerja === "Service Besar") {
        keyModel = "Semua";
    }

    const dataUkuran = dbHarga[keyUkuran] || {};
    const dataModel  = dataUkuran[keyModel] || {};
    const dataKerja  = dataModel[jenisKerja] || {};
    
    hargaBoronganTotal = dataKerja[zona] || 0;

    const checkedPekerja = document.querySelectorAll('input[name="pekerja_check"]:checked');
    const jumlahPekerja = checkedPekerja.length || 1;
    const bagiPerOrang = Math.round(hargaBoronganTotal / jumlahPekerja);
    const uangMakanEstimasi = tarifZonaMakan[zona] || 0;
    
    // Perhitungan Gaji Pokok Harian (Minggu dan Sabtu = Rp 0, Hari biasa = Rp 75.000)
    const parts = tglAktif.split('-');
    const objekTanggal = new Date(parts[0], parts[1] - 1, parts[2]);
    const hariAngka = objekTanggal.getDay(); 
    const gapokLive = (hariAngka === 0 || hariAngka === 6) ? 0 : 75000;

    const uangLemburOrang = jamLemburInput * 10000;
    const totalTerimaOrang = bagiPerOrang + gapokLive + uangMakanEstimasi + uangLemburOrang;

    // Tampilkan hasil kalkulasi ke elemen teks UI di HTML
    const elTotal = document.getElementById('live_borongan_total');
    const elEcer = document.getElementById('live_borongan_ecer');
    const elMakan = document.getElementById('live_uang_makan');
    const elLembur = document.getElementById('live_lembur_ecer');
    const elTerima = document.getElementById('live_total_terima');

    if(elTotal) elTotal.innerText = `Rp ${hargaBoronganTotal.toLocaleString('id-ID')}`;
    if(elEcer) elEcer.innerText = `Rp ${bagiPerOrang.toLocaleString('id-ID')}`;
    if(elMakan) elMakan.innerText = `Rp ${uangMakanEstimasi.toLocaleString('id-ID')}`;
    if(elLembur) elLembur.innerText = `Rp ${uangLemburOrang.toLocaleString('id-ID')}`;
    if(elTerima) elTerima.innerText = `Rp ${totalTerimaOrang.toLocaleString('id-ID')}`;

    return { hargaBoronganTotal, bagiPerOrang, zona, ukuran, model: modelBawaan, jenisKerja, jamLembur: jamLemburInput };
}

// ==========================================
// 3. LOGIKA FORM LOG & PENYIMPANAN DATA
// ==========================================
function tambahKeLogKerja() {
    const checkedBoxes = document.querySelectorAll('input[name="pekerja_check"]:checked');
    if (checkedBoxes.length === 0) {
        alert("Silakan pilih minimal 1 pekerja!");
        return;
    }
    
    const listPekerja = Array.from(checkedBoxes).map(cb => cb.value);
    const dataKalkulasi = hitungHargaLive();
    if (!dataKalkulasi) return;

    masterLogKerja.push({
        id: Date.now(),
        tanggal: inputTanggal.value,
        lokasi: selectLokasi.value,
        ukuran: dataKalkulasi.ukuran,
        zona: dataKalkulasi.zona,
        model: dataKalkulasi.model,
        jenisPekerjaan: dataKalkulasi.jenisKerja,
        jamLembur: Number(dataKalkulasi.jamLembur) || 0,
        pekerja: listPekerja,
        hargaBoronganTotal: dataKalkulasi.hargaBoronganTotal,
        bagiPerOrang: dataKalkulasi.bagiPerOrang
    });

    // Auto-save ke LocalStorage
    localStorage.setItem("simpananDataBTK", JSON.stringify(masterLogKerja));

    renderTabelLogKerja();
    generateSlipGaji();
    hitungHargaLive();
    showToast(`Sukses! Pekerjaan di "${selectLokasi.value}" telah ditambahkan.`);
}

function renderTabelLogKerja() {
    const tableBody = document.getElementById('log-table-body');
    if (!tableBody) return;

    if (masterLogKerja.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: #999;">Belum ada data pekerjaan dimasukkan.</td></tr>`;
        return;
    }
    
    tableBody.innerHTML = masterLogKerja.map((log, idx) => {
        const pekerjaBadges = log.pekerja.map(p => `<span class="badge">${p}</span>`).join(' ');
        return `
            <tr>
                <td>${idx + 1}</td>
                <td>${log.tanggal}</td>
                <td><b>${log.lokasi}</b> <span style="color:#e67e22;">(${log.zona})</span></td>
                <td>${log.ukuran} - ${log.model}</td>
                <td>${log.jenisPekerjaan}</td>
                <td style="font-weight:bold; text-align:center;">${log.jamLembur} Jam</td>
                <td>${pekerjaBadges}</td>
                <td>Rp ${log.hargaBoronganTotal.toLocaleString('id-ID')}</td>
                <td style="font-weight:bold; color: #18bc9c;">Rp ${log.bagiPerOrang.toLocaleString('id-ID')}</td>
                <td><button onclick="hapusLogKerja(${log.id})" style="color:red; background:none; border:none; cursor:pointer;">Hapus</button></td>
            </tr>
        `;
    }).join('');
}

function hapusLogKerja(id) {
    if (confirm("Apakah Anda yakin ingin menghapus baris data ini?")) {
        masterLogKerja = masterLogKerja.filter(item => item.id !== id);
        localStorage.setItem("simpananDataBTK", JSON.stringify(masterLogKerja));
        renderTabelLogKerja();
        generateSlipGaji();
        hitungHargaLive();
    }
}

function resetSemua() {
    if (confirm("⚠️ PERINGATAN! Semua data log kerja sementara akan dihapus permanen. Anda yakin?")) {
        localStorage.removeItem("simpananDataBTK");
        masterLogKerja = [];
        renderTabelLogKerja();
        generateSlipGaji();
        hitungHargaLive();
    }
}

// ==========================================
// 4. FITUR TAMBAHAN: SLIP GAJI & NOTIFIKASI
// ==========================================
function showToast(pesan) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerText = pesan;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// GENERATOR SLIP GAJI DENGAN STRUKTUR GRID KOMPAK (MAKS 3 KOLOM)
function generateSlipGaji() {
    const filterPekerja = document.getElementById('PilihPekerjaSlip').value;
    const containerSlip = document.getElementById('containerSlipGaji');
    containerSlip.innerHTML = "";

    // Daftar master pekerja untuk looping berkala
    const semuaPekerjaList = ["Ambar", "Agus", "Komari"];
    
    // Tentukan pekerja mana saja yang harus di-render struknya
    const pekerjaYangDibuat = (filterPekerja === "SEMUA_PEKERJA") ? semuaPekerjaList : [filterPekerja];
    const tglCetakTeks = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

    let adaDataDibuat = false;

    pekerjaYangDibuat.forEach(namaPekerja => {
        const kerjaanPegawai = masterLogKerja.filter(log => log.pekerja.includes(namaPekerja));
        
        // Lewati jika filter "Semua" diaktifkan tapi pekerja terkait tidak punya log kerja sama sekali
        if (kerjaanPegawai.length === 0 && filterPekerja === "SEMUA_PEKERJA") return;

        adaDataDibuat = true;
        let totalBoronganOrang = 0;
        const dataHarian = {};

       // Loop susun data tabel item slip
        let tabelRowsHTML = kerjaanPegawai.map(log => {
            totalBoronganOrang += log.bagiPerOrang;
            if (!dataHarian[log.tanggal]) {
                dataHarian[log.tanggal] = { zona: [], listLembur: [] };
            }
            dataHarian[log.tanggal].zona.push(log.zona);
            dataHarian[log.tanggal].listLembur.push(Number(log.jamLembur) || 0);

            // === TAMBAHAN UNTUK MENDETEKSI HARI ===
            const parts = log.tanggal.split('-'); // Memecah YYYY-MM-DD
            const objekTanggal = new Date(parts[0], parts[1] - 1, parts[2]);
            const hariAngka = objekTanggal.getDay(); // Mendapatkan index hari (0-6)
            const namaHariList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
            const namaHariTeks = namaHariList[hariAngka]; // Mengambil nama hari
            // ======================================

            return `
                <tr>
                    <!-- Kolom tanggal dengan nama hari yang dicetak tebal (bold) -->
                    <td><b>${namaHariTeks}</b>, ${log.tanggal}</td>
                    <td><b>${log.lokasi}</b><br><small>${log.ukuran} - ${log.model} [${log.zona}]</small></td>
                    <td>${log.jenisPekerjaan}</td>
                    <td style="text-align: right; font-weight: 500;">Rp ${log.bagiPerOrang.toLocaleString('id-ID')}</td>
                </tr>
            `;
        }).join('');

        if(kerjaanPegawai.length === 0) {
            tabelRowsHTML = `<tr><td colspan="4" style="text-align: center; color: #aaa; font-style: italic;">Belum ada riwayat kerja.</td></tr>`;
        }

        // Hitung parameter biaya terakumulasi harian
        let totalUangMakan = 0, totalUangLembur = 0, totalGapok = 0, jumlahHariGapok = 0, totalJamLembur = 0;
        
        Object.keys(dataHarian).forEach(tgl => {
            const info = dataHarian[tgl];
            const parts = tgl.split('-');
            const objekTanggal = new Date(parts[0], parts[1] - 1, parts[2]); 
            const hariAngka = objekTanggal.getDay();
            
            if (hariAngka !== 0 && hariAngka !== 6) {
                totalGapok += 75000;
                jumlahHariGapok++;
            }

            let zonaTerjauh = "Zona A";
            if (info.zona.includes("Zona C")) zonaTerjauh = "Zona C";
            else if (info.zona.includes("Zona B")) zonaTerjauh = "Zona B";
            totalUangMakan += (tarifZonaMakan[zonaTerjauh] || 0);

            const jamLemburTerkunci = Math.max(...info.listLembur) || 0;
            totalUangLembur += (jamLemburTerkunci * 10000);
            totalJamLembur += jamLemburTerkunci;
        });

        const grandTotalBersih = totalBoronganOrang + totalGapok + totalUangMakan + totalUangLembur;

        // Cetak blok HTML Struk Slip Kompak Ke Grid
        const slipHTML = `
            <div class="slip-wrapper">
                <div class="slip-title" style="display: flex; align-items: center; justify-content: center; gap: 10px; text-align: left;">
                    <img src="https://lh3.googleusercontent.com/d/17OX8Y_lr3lMI6np3jXhlb0lr5myvLu5Q" alt="Logo DMJ" style="height: 30px; width: auto; border-radius: 4px;">
                    <div>
                        <h3 style="margin: 0; font-size: 11px;">PT. DINAMIS MEDIAJATENG</h3>
                        <p style="margin: 1px 0 0 0; font-size: 7px;">SLIP GAJI & BIAYA TENAGA KERJA (BTK)</p>
                    </div>
                </div>
                <div class="slip-divider"></div>
                
                <div class="slip-meta">
                    <div>
                        <div class="meta-label">Petugas Lapangan (PIC)</div>
                        <div class="meta-value">${namaPekerja}</div>
                    </div>
                    <div class="meta-box-right">
                        <div class="meta-label">Periode / Total Lembur</div>
                        <div class="meta-value">
                            <span>${tglCetakTeks}</span> / <span style="color: #ef4444;">${totalJamLembur} Jam</span>
                        </div>
                    </div>
                </div>
                <div class="slip-divider"></div>
                
                <div class="meta-label">Daftar Pekerjaan Yang Diselesaikan:</div>
                <table class="slip-table">
                    <thead>
                        <tr>
                            <th>Tanggal</th>
                            <th>Lokasi & Spesifikasi</th>
                            <th>Jenis Kerja</th>
                            <th style="text-align: right;">Upah</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tabelRowsHTML}
                    </tbody>
                </table>
                <div class="slip-divider"></div>

                <div class="slip-calc-row">
                    <span>Total Upah Borongan BTK (${kerjaanPegawai.length} Job)</span>
                    <span style="color: #1e293b; font-weight: 600;">Rp ${totalBoronganOrang.toLocaleString('id-ID')}</span>
                </div>
                <div class="slip-calc-row">
                    <span>Gaji Pokok Harian (${jumlahHariGapok} hr Efektif)</span>
                    <span style="color: #1e293b; font-weight: 600;">Rp ${totalGapok.toLocaleString('id-ID')}</span>
                </div>
                <div class="slip-calc-row">
                    <span>Uang Makan Harian (Evaluasi Zona)</span>
                    <span style="color: #1e293b; font-weight: 600;">Rp ${totalUangMakan.toLocaleString('id-ID')}</span>
                </div>
                <div class="slip-calc-row">
                    <span>Total Uang Lembur (Kalender)</span>
                    <span style="color: #1e293b; font-weight: 600;">Rp ${totalUangLembur.toLocaleString('id-ID')}</span>
                </div>

                <div class="slip-total-box">
                    <div class="total-box-left">
                        <div class="main-lbl">TERIMA BERSIH (SATUAN)</div>
                        <div class="sub-lbl">Hasil Penjumlahan Borongan + Net Harian</div>
                    </div>
                    <div class="total-box-right">Rp ${grandTotalBersih.toLocaleString('id-ID')}</div>
                </div>

                <div class="slip-footer">
                    <div>
                        <div>Penerima</div>
                        <div class="signature-space">${namaPekerja}</div>
                    </div>
                    <div>
                        <div>Kep. Produksi</div>
                        <div class="signature-space">Satya - Admin BTK</div>
                    </div>
                </div>
            </div>
        `;
        containerSlip.innerHTML += slipHTML;
    });

    if(!adaDataDibuat) {
        containerSlip.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #aaa; font-style: italic; padding: 20px;">Belum ada riwayat kerja di log untuk ditampilkan.</div>`;
    }
}