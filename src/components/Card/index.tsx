import { Dispatch, SetStateAction, useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import Chart from 'react-apexcharts';
import { AiOutlineClose } from 'react-icons/ai';

import 'react-circular-progressbar/dist/styles.css';
import './styles.css';

interface CardProps {
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

export function Card({ barValue, color, icon, series, title, value }: CardProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard
          icon={icon}
          value={value}
          barValue={barValue}
          color={color}
          series={series}
          title={title}
          setExpanded={setExpanded}
        />
      ) : (
        <CompactCard
          icon={icon}
          value={value}
          barValue={barValue}
          color={color}
          series={series}
          title={title}
          setExpanded={setExpanded}
        />
      )}
    </AnimateSharedLayout>
  )
}

interface CompactCardProps extends CardProps {
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

function CompactCard({ icon, value, barValue, color, series, title, setExpanded }: CompactCardProps) {
  return (
    <motion.div
      className='compactCardContainer'
      style={{
        background: color.backGround,
        boxShadow: color.boxShadow,
      }}
      onClick={() => setExpanded(true)}
      layoutId='expandableCard'
    >
      <div className="radialBar">
        <CircularProgressbar
          value={barValue}
          text={`${barValue}%`}
        />
        <span>{title}</span>
      </div>

      <div className="detail">
        {icon}
        <span>{value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  )
}

interface ExpandedCardProps extends CardProps {
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

function ExpandedCard({ barValue, color, icon, series, setExpanded, title, value }: ExpandedCardProps) {
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
      <div>
        <AiOutlineClose onClick={() => setExpanded(false)} />
      </div>

      <span>{title}</span>

      <div className="expandedChartContainer">
        <Chart series={series} type='area' options={options} />
      </div>

      <span>Last 24 hours</span>
    </motion.div>
  )
}