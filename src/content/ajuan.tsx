export type AjuanDataType = {
  id: number;
  nama: string;
  xpReward: number;
  koinReward: number;
  status: 'waiting' | 'gifted' | 'accepted' | 'completed';
  image: string;
  address: string;
  produk: ProdukAjuanType[];
  dokumen: DokumenAjuanType[];
};

type ProdukAjuanType = {
  id: string;
  name: string;
  description: string;
  image: string;
};

type DokumenAjuanType = {
  name: string;
  image: string;
};

export const AJUAN_CONTENT: AjuanDataType[] = [
  {
    id: 2,
    nama: 'Bakso Cak Nano',
    xpReward: 400,
    koinReward: 1345,
    status: 'waiting',
    image: '/images/sertifikasi/bakso-cak-nano.png',
    address: 'Jl. Teknik Sipil No.i / 16, Keputih, Kec. Sukolilo, Surabaya',
    produk: [
      {
        id: '2p',
        name: 'Pentol Bakso',
        description:
          'Merupakan pentol pada bakso yang dijual dengan bahan daging sapi dan campuran tepung',
        image: '/images/sertifikasi/pentol-bakso.png',
      },
      {
        id: '2t',
        name: 'Tahu Bakso',
        description:
          'Merupakan tahu pada bakso yang dijual dengan bahan tahu asli dan campuran bakso',
        image: '/images/sertifikasi/tahu-bakso.png',
      },
    ],
    dokumen: [
      {
        name: 'Nomor Induk Berusaha',
        image: '/images/dummy/nib_adalah_contohnya.jpg',
      },
    ],
  },
  {
    id: 3,
    nama: 'Es Degan Semangat',
    xpReward: 350,
    koinReward: 1270,
    status: 'waiting',
    image: '/images/sertifikasi/es-degan.png',
    address: 'Jl. Teknik Sipil No.i / 16, Keputih, Kec. Sukolilo, Surabaya',
    produk: [
      {
        id: '3e',
        name: 'Es Degan',
        description:
          'Minuman utama yang dijual dengan bahan dasar kelapa muda dan gula',
        image: '/images/sertifikasi/es-degan-review.png',
      },
    ],
    dokumen: [
      {
        name: 'Nomor Induk Berusaha',
        image: '/images/dummy/nib_adalah_contohnya.jpg',
      },
    ],
  },
  {
    id: 1,
    nama: 'Kantin Kampus Plus',
    xpReward: 400,
    koinReward: 1345,
    status: 'completed',
    image: '/images/sertifikasi/umkm.png',
    address: 'Jl. Teknik Sipil No.i / 16, Keputih, Kec. Sukolilo, Surabaya',
    produk: [
      {
        id: '1t',
        name: 'Telur Dadar',
        description:
          'Merupakan telur dadar yang digoreng dengan bumbu tambahan hanya garam dan gula',
        image: '/images/sertifikasi/telur-dadar.png',
      },
      {
        id: '1s',
        name: 'Sayur Sop',
        description: 'Sayur sop sederhana wortel, sayur',
        image: '/images/sertifikasi/sop.png',
      },
    ],
    dokumen: [
      {
        name: 'Nomor Induk Berusaha',
        image: '/images/dummy/nib_adalah_contohnya.jpg',
      },
    ],
  },
];
