import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { GiMoneyStack } from 'react-icons/gi';
import { BsFillFileEarmarkSpreadsheetFill } from 'react-icons/bs';

interface CardItensProps {
  title: string;
  color: {
    backGround: string;
    boxShadow: string;
  };
  barValue: number;
  value: string;
  icon: React.ReactNode;
  series: [
    {
      name: string;
      data: Number[];
    }
  ]
}

export const cardItens = [
  {
    title: 'Sales',
    color: {
      backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
      boxShadow: '0rem 0.625rem 1.25rem 0rem #e0c6f5',
    },
    barValue: 70,
    value: '25,970',
    icon: <RiMoneyDollarCircleLine />,
    series: [
      {
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: 'Revenue',
    color: {
      backGround: 'linear-gradient(180deg, #ff919d 0%, #fc929d 100%)',
      boxShadow: '0rem 0.625rem 1.25rem 0rem #fdc0c7',
    },
    barValue: 80,
    value: '14,270',
    icon: <GiMoneyStack />,
    series: [
      {
        name: 'Revenue',
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: 'Expenses',
    color: {
      backGround: 'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)',
      boxShadow: '0rem 0.625rem 1.25rem 0rem #f9d59b',
    },
    barValue: 60,
    value: '4,270',
    icon: <BsFillFileEarmarkSpreadsheetFill />,
    series: [
      {
        name: 'Expenses',
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
] as CardItensProps[];