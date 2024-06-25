import Button from '@/components/buttons/Button';
import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

type StatusContent = {
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
  setChoosed: (value: string) => void;
};

export default function StatusTile(props: StatusContent) {
  return (
    <button
      className={
        props.isChoosed
          ? 'grid grid-cols-12 gap-2 rounded-lg bg-gray-200'
          : 'grid grid-cols-12 gap-2 rounded-lg'
      }
      onClick={() => props.setChoosed(props.id)}
    >
      <div className='flex flex-col col-span-5 gap-2 p-3'>
        <Typography variant='b1' className='text-center'>
          {props.timeStamp}
        </Typography>
      </div>
      <div
        className={
          props.isChoosed
            ? 'w-[2px] h-full bg-gray-500'
            : 'w-[2px] h-full bg-gray-300'
        }
      ></div>
      <div className='flex flex-col col-span-6 gap-2 p-3'>
        <Typography className='text-start' variant='b1'>
          {props.name}
        </Typography>
        <Typography className='text-start' variant='b2' color='secondary'>
          {props.description}
        </Typography>
        {props.isFinished ? (
          <Tag color='success' className='w-1/2'>
            Selesai
          </Tag>
        ) : (
          <Tag color='warning' className='w-1/2'>
            Belum Selesai
          </Tag>
        )}
        {!props.isFinished && (
          <Button variant='primary' className='w-fit'>
            Telah Diselesaikan
          </Button>
        )}
      </div>
    </button>
  );
}
