type StatusType = {
  id: string;
  statusType:
    | 'waiting'
    | 'inlocation'
    | 'document-checked'
    | 'video-taken'
    | 'photo-taken'
    | 'surveyed'
    | 'finished';
  name: string;
  description: string;
  isFinished: boolean;
  timeStamp: string;
  isChoosed: boolean;
  content: StatusContentType;
};

export type StatusContentType = {
  name: string;
  description: string;
  file?: string;
  photo?: string;
  video?: string;
};

type AjuanType = {
  id: string;
  status: StatusType[];
};

export const ALL_AJUAN_STATUS: AjuanType[] = [
  {
    id: '2p', //Bakso Cak Nano : pentol bakso
    status: [
      {
        id: '1',
        statusType: 'waiting',
        name: 'Menuju Lokasi',
        description:
          'Telah anda konfirmasi, segera menuju lokasi untuk melakukan pendampingan',
        isFinished: true,
        timeStamp: '11 Oktober 2023 12:00',
        isChoosed: true,
        content: {
          name: 'Menuju Lokasi',
          description:
            'Telah anda konfirmasi, segera menuju lokasi untuk melakukan pendampingan',
        },
      },
      {
        id: '2',
        statusType: 'inlocation',
        name: 'Sedang di Lokasi',
        description: 'Sedang melakukan pendampingan di lokasi',
        isFinished: true,
        timeStamp: '11 Oktober 2023 13:00',
        isChoosed: false,
        content: {
          name: 'Sedang di Lokasi',
          description: 'Sedang melakukan pendampingan di lokasi',
        },
      },
      {
        id: '3',
        statusType: 'document-checked',
        name: 'Dokumen Diperiksa',
        description: 'Dokumen telah diperiksa dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 14:00',
        isChoosed: false,
        content: {
          name: 'Dokumen Diperiksa',
          description: 'Dokumen telah diperiksa dan telah sesuai',
          file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        },
      },
      {
        id: '4',
        statusType: 'video-taken',
        name: 'Video diambil',
        description: 'Video telah diambil dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 15:00',
        isChoosed: false,
        content: {
          name: 'Video diambil',
          description: 'Video telah diambil dan telah sesuai',
          video: 'https://youtu.be/AwfjTJ6VbRg',
        },
      },
      {
        id: '5',
        statusType: 'photo-taken',
        name: 'Foto diambil',
        description: 'Foto telah diambil dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 16:00',
        isChoosed: false,
        content: {
          name: 'Foto diambil',
          description: 'Foto telah diambil dan telah sesuai',
          photo: '/images/sertifikasi/pentol-bakso.png',
        },
      },
      {
        id: '6',
        statusType: 'surveyed',
        name: 'Sudah Disurvei',
        description: 'Sudah disurvei dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 17:00',
        isChoosed: false,
        content: {
          name: 'Sudah Disurvei',
          description: 'Sudah disurvei dan telah sesuai',
        },
      },
      {
        id: '7',
        statusType: 'finished',
        name: 'Selesai',
        description: 'Ajuan telah selesai',
        isFinished: false,
        timeStamp: '11 Oktober 2023 18:00',
        isChoosed: false,
        content: {
          name: 'Selesai',
          description: 'Ajuan telah selesai',
        },
      },
    ],
  },
  {
    id: '2t', //Bakso Cak Nano : tahu bakso
    status: [
      {
        id: '1',
        statusType: 'waiting',
        name: 'Menuju Lokasi',
        description:
          'Telah anda konfirmasi, segera menuju lokasi untuk melakukan pendampingan',
        isFinished: true,
        timeStamp: '11 Oktober 2023 12:00',
        isChoosed: true,
        content: {
          name: 'Menuju Lokasi',
          description:
            'Telah anda konfirmasi, segera menuju lokasi untuk melakukan pendampingan',
        },
      },
      {
        id: '2',
        statusType: 'inlocation',
        name: 'Sedang di Lokasi',
        description: 'Sedang melakukan pendampingan di lokasi',
        isFinished: true,
        timeStamp: '11 Oktober 2023 13:00',
        isChoosed: false,
        content: {
          name: 'Sedang di Lokasi',
          description: 'Sedang melakukan pendampingan di lokasi',
        },
      },
      {
        id: '3',
        statusType: 'document-checked',
        name: 'Dokumen Diperiksa',
        description: 'Dokumen telah diperiksa dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 14:00',
        isChoosed: false,
        content: {
          name: 'Dokumen Diperiksa',
          description: 'Dokumen telah diperiksa dan telah sesuai',
          file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        },
      },
      {
        id: '4',
        statusType: 'video-taken',
        name: 'Video diambil',
        description: 'Video telah diambil dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 15:00',
        isChoosed: false,
        content: {
          name: 'Video diambil',
          description: 'Video telah diambil dan telah sesuai',
          video: 'https://youtu.be/AwfjTJ6VbRg',
        },
      },
      {
        id: '5',
        statusType: 'photo-taken',
        name: 'Foto diambil',
        description: 'Foto telah diambil dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 16:00',
        isChoosed: false,
        content: {
          name: 'Foto diambil',
          description: 'Foto telah diambil dan telah sesuai',
          photo: '/images/sertifikasi/tahu-bakso.png',
        },
      },
      {
        id: '6',
        statusType: 'surveyed',
        name: 'Sudah Disurvei',
        description: 'Sudah disurvei dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 17:00',
        isChoosed: false,
        content: {
          name: 'Sudah Disurvei',
          description: 'Sudah disurvei dan telah sesuai',
        },
      },
      {
        id: '7',
        statusType: 'finished',
        name: 'Selesai',
        description: 'Ajuan telah selesai',
        isFinished: false,
        timeStamp: '11 Oktober 2023 18:00',
        isChoosed: false,
        content: {
          name: 'Selesai',
          description: 'Ajuan telah selesai',
        },
      },
    ],
  },
  {
    id: '3e', //Es Degan Semangat : es degan
    status: [
      {
        id: '1',
        statusType: 'waiting',
        name: 'Menuju Lokasi',
        description:
          'Telah anda konfirmasi, segera menuju lokasi untuk melakukan pendampingan',
        isFinished: true,
        timeStamp: '11 Oktober 2023 12:00',
        isChoosed: true,
        content: {
          name: 'Menuju Lokasi',
          description:
            'Telah anda konfirmasi, segera menuju lokasi untuk melakukan pendampingan',
        },
      },
      {
        id: '2',
        statusType: 'inlocation',
        name: 'Sedang di Lokasi',
        description: 'Sedang melakukan pendampingan di lokasi',
        isFinished: true,
        timeStamp: '11 Oktober 2023 13:00',
        isChoosed: false,
        content: {
          name: 'Sedang di Lokasi',
          description: 'Sedang melakukan pendampingan di lokasi',
        },
      },
      {
        id: '3',
        statusType: 'document-checked',
        name: 'Dokumen Diperiksa',
        description: 'Dokumen telah diperiksa dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 14:00',
        isChoosed: false,
        content: {
          name: 'Dokumen Diperiksa',
          description: 'Dokumen telah diperiksa dan telah sesuai',
          file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        },
      },
      {
        id: '4',
        statusType: 'video-taken',
        name: 'Video diambil',
        description: 'Video telah diambil dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 15:00',
        isChoosed: false,
        content: {
          name: 'Video diambil',
          description: 'Video telah diambil dan telah sesuai',
          video: 'https://youtu.be/nQM6KpRosPk',
        },
      },
      {
        id: '5',
        statusType: 'photo-taken',
        name: 'Foto diambil',
        description: 'Foto telah diambil dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 16:00',
        isChoosed: false,
        content: {
          name: 'Foto diambil',
          description: 'Foto telah diambil dan telah sesuai',
          photo: '/images/sertifikasi/es-degan-review.png',
        },
      },
      {
        id: '6',
        statusType: 'surveyed',
        name: 'Sudah Disurvei',
        description: 'Sudah disurvei dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 17:00',
        isChoosed: false,
        content: {
          name: 'Sudah Disurvei',
          description: 'Sudah disurvei dan telah sesuai',
        },
      },
      {
        id: '7',
        statusType: 'finished',
        name: 'Selesai',
        description: 'Ajuan telah selesai',
        isFinished: false,
        timeStamp: '11 Oktober 2023 18:00',
        isChoosed: false,
        content: {
          name: 'Selesai',
          description: 'Ajuan telah selesai',
        },
      },
    ],
  },
  {
    id: '1t', //Kantin Kampus Plus : telur dadar
    status: [
      {
        id: '1',
        statusType: 'waiting',
        name: 'Menuju Lokasi',
        description:
          'Telah anda konfirmasi, segera menuju lokasi untuk melakukan pendampingan',
        isFinished: true,
        timeStamp: '11 Oktober 2023 12:00',
        isChoosed: true,
        content: {
          name: 'Menuju Lokasi',
          description:
            'Telah anda konfirmasi, segera menuju lokasi untuk melakukan pendampingan',
        },
      },
      {
        id: '2',
        statusType: 'inlocation',
        name: 'Sedang di Lokasi',
        description: 'Sedang melakukan pendampingan di lokasi',
        isFinished: true,
        timeStamp: '11 Oktober 2023 13:00',
        isChoosed: false,
        content: {
          name: 'Sedang di Lokasi',
          description: 'Sedang melakukan pendampingan di lokasi',
        },
      },
      {
        id: '3',
        statusType: 'document-checked',
        name: 'Dokumen Diperiksa',
        description: 'Dokumen telah diperiksa dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 14:00',
        isChoosed: false,
        content: {
          name: 'Dokumen Diperiksa',
          description: 'Dokumen telah diperiksa dan telah sesuai',
          file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        },
      },
      {
        id: '4',
        statusType: 'video-taken',
        name: 'Video diambil',
        description: 'Video telah diambil dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 15:00',
        isChoosed: false,
        content: {
          name: 'Video diambil',
          description: 'Video telah diambil dan telah sesuai',
          video: 'https://youtu.be/GruTJjuBf44',
        },
      },
      {
        id: '5',
        statusType: 'photo-taken',
        name: 'Foto diambil',
        description: 'Foto telah diambil dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 16:00',
        isChoosed: false,
        content: {
          name: 'Foto diambil',
          description: 'Foto telah diambil dan telah sesuai',
          photo: '/images/sertifikasi/telur-dadar.png',
        },
      },
      {
        id: '6',
        statusType: 'surveyed',
        name: 'Sudah Disurvei',
        description: 'Sudah disurvei dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 17:00',
        isChoosed: false,
        content: {
          name: 'Sudah Disurvei',
          description: 'Sudah disurvei dan telah sesuai',
        },
      },
      {
        id: '7',
        statusType: 'finished',
        name: 'Selesai',
        description: 'Ajuan telah selesai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 18:00',
        isChoosed: false,
        content: {
          name: 'Selesai',
          description: 'Ajuan telah selesai',
        },
      },
    ],
  },
  {
    id: '1s', //Kantin Kampus Plus : sayur sop
    status: [
      {
        id: '1',
        statusType: 'waiting',
        name: 'Menuju Lokasi',
        description:
          'Telah anda konfirmasi, segera menuju lokasi untuk melakukan pendampingan',
        isFinished: true,
        timeStamp: '11 Oktober 2023 12:00',
        isChoosed: true,
        content: {
          name: 'Menuju Lokasi',
          description:
            'Telah anda konfirmasi, segera menuju lokasi untuk melakukan pendampingan',
        },
      },
      {
        id: '2',
        statusType: 'inlocation',
        name: 'Sedang di Lokasi',
        description: 'Sedang melakukan pendampingan di lokasi',
        isFinished: true,
        timeStamp: '11 Oktober 2023 13:00',
        isChoosed: false,
        content: {
          name: 'Sedang di Lokasi',
          description: 'Sedang melakukan pendampingan di lokasi',
        },
      },
      {
        id: '3',
        statusType: 'document-checked',
        name: 'Dokumen Diperiksa',
        description: 'Dokumen telah diperiksa dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 14:00',
        isChoosed: false,
        content: {
          name: 'Dokumen Diperiksa',
          description: 'Dokumen telah diperiksa dan telah sesuai',
          file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        },
      },
      {
        id: '4',
        statusType: 'video-taken',
        name: 'Video diambil',
        description: 'Video telah diambil dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 15:00',
        isChoosed: false,
        content: {
          name: 'Video diambil',
          description: 'Video telah diambil dan telah sesuai',
          video: 'https://youtu.be/GruTJjuBf44',
        },
      },
      {
        id: '5',
        statusType: 'photo-taken',
        name: 'Foto diambil',
        description: 'Foto telah diambil dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 16:00',
        isChoosed: false,
        content: {
          name: 'Foto diambil',
          description: 'Foto telah diambil dan telah sesuai',
          photo: '/images/sertifikasi/sop.png',
        },
      },
      {
        id: '6',
        statusType: 'surveyed',
        name: 'Sudah Disurvei',
        description: 'Sudah disurvei dan telah sesuai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 17:00',
        isChoosed: false,
        content: {
          name: 'Sudah Disurvei',
          description: 'Sudah disurvei dan telah sesuai',
        },
      },
      {
        id: '7',
        statusType: 'finished',
        name: 'Selesai',
        description: 'Ajuan telah selesai',
        isFinished: true,
        timeStamp: '11 Oktober 2023 18:00',
        isChoosed: false,
        content: {
          name: 'Selesai',
          description: 'Ajuan telah selesai',
        },
      },
    ],
  },
];
