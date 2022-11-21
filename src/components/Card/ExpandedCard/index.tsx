import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import Chart from 'react-apexcharts';
import { AiOutlineClose } from 'react-icons/ai';

import { CardProps } from '../index';

import './styles.css';

interface ExpandedCardProps extends CardProps {
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export function ExpandedCard({ barValue, color, icon, series, setExpanded, title, value }: ExpandedCardProps) {
  const modifiedSerie = series as [
    {
      name: string;
      data: [];
    }
  ]

  const options = {
    chart: {
      type: 'area',
      height: 'auto',
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35,
      },
    },
    fill: {
      colors: ['#fff'],
      type: 'gradient',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      colors: ['white'],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
  } as ApexCharts.ApexOptions;

  return (
    <motion.div
      className='expandedCardContainer'
      style={{
        background: color.backGround,
        boxShadow: color.boxShadow,
      }}
      layoutId='expandableCard'
    >
      <div style={{ alignSelf: 'flex-end', cursor: 'pointer', color: '#fff' }}>
        <AiOutlineClose onClick={() => setExpanded(false)} />
      </div>

      <span>{title}</span>

      <div className="expandedChartContainer">
        <Chart series={modifiedSerie} type='area' options={options} />
      </div>

      <span>Last 24 hours</span>
    </motion.div>
  )
}