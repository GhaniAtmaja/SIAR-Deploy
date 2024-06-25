import Image from 'next/image';
import ReactPlayer from 'react-player';

import SimpleCard from '@/components/cards/SimpleCard';
import Typography from '@/components/typography/Typography';

type StatusContentType = {
  name: string;
  description: string;
  file?: string;
  photo?: string;
  video?: string;
};

export default function StatusContent(props: StatusContentType) {
  return (
    <SimpleCard className='h-full w-full'>
      <div className='flex flex-col gap-2'>
        <Typography variant='b1'>{props.name}</Typography>
        <Typography variant='b2' color='secondary'>
          {props.description}
        </Typography>
        {props.file && (
          <a href={props.file} target='_blank' rel='noreferrer'>
            <Typography variant='b2' color='primary'>
              Lihat File
            </Typography>
          </a>
        )}
        {props.photo && (
          <Image src={props.photo} alt='photo' width={300} height={300} />
        )}
        {props.video && (
          <ReactPlayer url={props.video} controls width='100%' height='250px' />
        )}
      </div>
    </SimpleCard>
  );
}
