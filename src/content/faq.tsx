import { Briefcase, Coins, FileText, LucideIcon, User2 } from 'lucide-react';
import { IconType } from 'react-icons';

export type FAQContentType = {
  title: string;
  icon: IconType | LucideIcon;
  child: FAQItemType[];
};

export type FAQItemType = {
  title: React.ReactNode;
  description: React.ReactNode;
};

export const FAQ_CONTENT: FAQContentType[] = [
  {
    title: 'User Management',
    icon: User2,
    child: [
      {
        title: 'Bagaimana cara mengubah kata sandi?',
        description: (
          <>
            Caranya adalah dengan meng-klik bagian "<b>Ubah Sandi</b>"" di
            profil Anda, masukkan kata sandi lama, kemudian masukkan kata sandi
            baru yang Anda inginkan.
          </>
        ),
      },
      {
        title: 'Bagaimana cara mengubah kata sandi?',
        description: (
          <>
            Pada halaman login, klik "<b>Lupa Kata Sandi</b>". Ikuti instruksi
            yang diberikan untuk mereset kata sandi Anda.
          </>
        ),
      },
      {
        title: 'Bagaimana cara mengubah kata sandi?',
        description: (
          <>
            Di halaman profil Anda, klik "<b>Ubah Email</b>". Masukkan email
            baru dan konfirmasi dengan kata sandi Anda.
          </>
        ),
      },
      {
        title:
          'Bagaimana cara saya mengaktifkan autentikasi dua langkah untuk akun saya?',
        description: (
          <>
            Di halaman profil Anda, cari dan klik "<b>Pengaturan Keamanan</b>".
            Kemudian, ikuti petunjuk yang diberikan untuk mengaktifkan
            autentikasi dua langkah.
          </>
        ),
      },
    ],
  },
  {
    title: 'Misi & Penugasan',
    icon: Briefcase,
    child: [
      {
        title: 'Bagaimana saya mendapatkan misi baru?',
        description: (
          <>
            Misi baru akan muncul secara otomatis di dashboard Anda berdasarkan
            level dan area Anda. Pastikan Anda selalu mengecek dashboard.
          </>
        ),
      },
      {
        title: 'Apa itu XP dan bagaimana cara mendapatkannya?',
        description: (
          <>
            XP atau Experience Point adalah poin yang Anda dapatkan setiap kali
            menyelesaikan penugasan. Setiap penugasan memiliki jumlah XP
            tertentu yang akan ditambahkan ke akun Anda setelah penugasan
            selesai.
          </>
        ),
      },
    ],
  },
  {
    title: 'Sertifikasi UMKM & Produk',
    icon: FileText,
    child: [
      {
        title: 'Bagaimana proses sertifikasi UMKM?',
        description: (
          <>
            Setelah memilih UMKM yang ingin disertifikasi, ikuti langkah-langkah
            yang tertera di aplikasi. Pastikan semua data yang diperlukan sudah
            lengkap.
          </>
        ),
      },
      {
        title: 'Apa itu Lencana SIP dan bagaimana cara mendapatkannya?',
        description: (
          <>
            Lencana SIP adalah pengakuan atas keberhasilan Anda dalam
            menyertifikasi produk tertentu. Setiap kategori produk memiliki
            lencana tersendiri. Anda akan mendapatkan lencana setelah mencapai
            jumlah sertifikasi produk tertentu.
          </>
        ),
      },
      {
        title:
          'Bagaimana saya mengetahui kriteria produk yang memenuhi syarat sertifikasi halal?',
        description: (
          <>
            Di aplikasi SIAR Halal, ada bagian 'Kriteria Sertifikasi' di mana Anda
            bisa melihat semua kriteria yang harus dipenuhi oleh sebuah produk
            untuk mendapatkan sertifikasi halal. Pastikan produk yang ingin
            disertifikasi sesuai dengan kriteria yang telah ditetapkan.
          </>
        ),
      },
      {
        title:
          'Apa yang harus dilakukan jika ada kendala atau masalah selama proses sertifikasi?',
        description: (
          <>
            Jika Anda menghadapi kendala atau masalah selama proses sertifikasi,
            Anda dapat menghubungi tim support kami melalui fitur 'Bantuan' di
            aplikasi atau melalui email yang disediakan. Tim kami siap membantu
            Anda dalam menyelesaikan masalah yang dihadapi.
          </>
        ),
      },
    ],
  },
  {
    title: 'Surga Kuliner SIP & Koin SIP',
    icon: Coins,
    child: [
      {
        title: 'Apa fungsi Koin SIP dan bagaimana cara mendapatkannya?',
        description: (
          <>
            Koin SIP adalah mata uang virtual di SIPHALAL. Anda bisa
            mendapatkannya setiap kali berhasil menyertifikasi UMKM atau melalui
            sedekah dari user lain. Koin ini bisa digunakan untuk membeli
            ornamen di Surga Kuliner SIP Anda.
          </>
        ),
      },
      {
        title: 'Bagaimana saya mengutak-atik Surga Kuliner SIP saya?',
        description: (
          <>
            Di dashboard Anda, klik Surga Kuliner SIP. Di sana Anda bisa
            menambahkan atau mengubah ornamen dengan menggunakan Koin SIP.
          </>
        ),
      },
      {
        title:
          'Apakah ada batasan untuk menambahkan ornamen di Surga Kuliner SIP saya?',
        description: (
          <>
            Tidak ada batasan jumlah ornamen yang dapat Anda tambahkan di Surga
            Kuliner SIP Anda, namun pastikan Anda memiliki Koin SIP yang cukup
            untuk setiap pembelian ornamen.
          </>
        ),
      },
      {
        title: 'Adakah masa kadaluarsa untuk Koin SIP yang saya miliki?',
        description: (
          <>
            Tidak, Koin SIP yang Anda miliki tidak memiliki masa kadaluarsa dan
            dapat Anda gunakan kapan saja selama Anda aktif di aplikasi
            SIAR Halal.
          </>
        ),
      },
      {
        title:
          'Bagaimana cara saya tahu berapa banyak Koin SIP yang saya miliki saat ini?',
        description: (
          <>
            Anda bisa melihat jumlah Koin SIP Anda di bagian atas dashboard
            Anda, tepat di sebelah ikon Koin SIP. Selain itu, Anda juga dapat
            melihat riwayat transaksi dan pemberian Koin di bagian 'Riwayat Koin
            SIP'.
          </>
        ),
      },
    ],
  },
  {
    title: 'Social Influence & Interaksi dengan User Lain',
    icon: User2,
    child: [
      {
        title: 'Bagaimana saya bisa melihat leaderboard regional?',
        description: (
          <>
            Pada menu utama, klik 'Leaderboard Regional'. Anda akan melihat
            peringkat user berdasarkan aktivitas mereka di wilayah Anda.
          </>
        ),
      },
      {
        title: 'Bagaimana cara sedekah tugas ke user lain?',
        description: (
          <>
            Terdapat halaman sedekah tugas dan Anda akan menemukan pengisian
            form untuk memberikan tugas ke user yang diinginkan. Pastikan user
            lain tersebut sudah membuat akun di SIPHALAL.
          </>
        ),
      },
    ],
  },
];
