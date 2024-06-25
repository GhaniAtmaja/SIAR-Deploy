import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons';

export const labels = [
  {
    value: 'food1',
    label: 'Food1',
  },
  {
    value: 'food2',
    label: 'Food2',
  },
  {
    value: 'food3',
    label: 'Food3',
  },
];

export const statuses = [
  {
    value: 'todo',
    label: 'Todo',
    icon: CircleIcon,
  },
  {
    value: 'in progress',
    label: 'In Progress',
    icon: StopwatchIcon,
  },
  {
    value: 'done',
    label: 'Done',
    icon: CheckCircledIcon,
  },
  {
    value: 'canceled',
    label: 'Canceled',
    icon: CrossCircledIcon,
  },
];

export const pendampingan = [
  {
    label: 'Ichlas',
    value: 'ichlas',
    icon: ArrowDownIcon,
  },
  {
    label: 'Fico',
    value: 'fico',
    icon: ArrowRightIcon,
  },
  {
    label: 'Ghani',
    value: 'ghani',
    icon: ArrowUpIcon,
  },
];
