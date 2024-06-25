import SimpleCard from '@/components/cards/SimpleCard';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

type KoinOfferType = {
  name: string;
  price: number;
  image: string;
};

const KOINOFFERS: KoinOfferType[] = [
  {
    name: '100 Koin SIP',
    price: 10000,
    image: '/images/tawaran/coin-pack-1.png',
  },
  {
    name: '300 Koin SIP',
    price: 20000,
    image: '/images/tawaran/coin-pack-2.png',
  },
  {
    name: '500 Koin SIP',
    price: 30000,
    image: '/images/tawaran/coin-pack-3.png',
  },
  {
    name: '1000 Koin SIP',
    price: 40000,
    image: '/images/tawaran/coin-pack-4.png',
  },
  {
    name: '2000 Koin SIP',
    price: 50000,
    image: '/images/tawaran/coin-pack-5.png',
  },
];

export default function KoinOfferSection() {
  return (
    <div className='flex flex-col gap-4'>
      <Typography variant='h2'>Pilih Paket Koin</Typography>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {KOINOFFERS.map((offer: KoinOfferType, index: number) => (
          <button key={index}>
            <SimpleCard className='flex flex-col gap-4 hover:bg-blue-100'>
              <Typography variant='h5'>{offer.name}</Typography>
              <NextImage
                src={offer.image}
                alt={offer.name}
                layout='fill'
                className='aspect-square relative rounded-xl'
              />
              <Typography variant='b1' color='secondary'>
                Rp {offer.price.toLocaleString()}
              </Typography>
            </SimpleCard>
          </button>
        ))}
      </div>
    </div>
  );
}
