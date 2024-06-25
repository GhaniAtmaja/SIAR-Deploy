import { useState } from 'react';

import { ALL_AJUAN_STATUS, StatusContentType } from '@/content/status';
import StatusContent from '@/pages/ajuan/components/StatusContent';
import StatusTile from '@/pages/ajuan/components/StatusTile';

type PropsType = {
  id_product?: string;
};

export default function StatusListSection(props: PropsType) {
  const idProduct = props.id_product || '1t';
  const filterStatus =
    ALL_AJUAN_STATUS.find((ajuan) => ajuan.id === idProduct) ||
    ALL_AJUAN_STATUS[0];

  const [statusData, setStatusData] = useState(filterStatus.status);
  const setChoosedStatus = (value: string) => {
    setStatusData(
      statusData.map((status) => {
        if (status.id === value) {
          return { ...status, isChoosed: true };
        } else {
          return { ...status, isChoosed: false };
        }
      }),
    );
    chooseContent(value);
  };

  const [contentData, setContentData] = useState<StatusContentType>(
    filterStatus.status[0].content,
  );
  const chooseContent = (value: string) => {
    setContentData(
      filterStatus.status.find((status) => status.id === value)?.content ||
        filterStatus.status[0].content,
    );
  };

  return (
    <div className='overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='flex flex-col max-h-[60vh] overflow-auto'>
        {statusData.map((status) => (
          <StatusTile
            key={status.id}
            id={status.id}
            statusType={status.statusType}
            name={status.name}
            description={status.description}
            isFinished={status.isFinished}
            timeStamp={status.timeStamp}
            isChoosed={status.isChoosed}
            setChoosed={setChoosedStatus}
          />
        ))}
      </div>
      <StatusContent
        name={contentData.name}
        description={contentData.description}
        file={contentData.file}
        photo={contentData.photo}
        video={contentData.video}
      />
    </div>
  );
}
