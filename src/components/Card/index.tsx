import { useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';

import { CompactCard } from './CompactCard';
import { ExpandedCard } from './ExpandedCard';

import 'react-circular-progressbar/dist/styles.css';

export interface CardProps {
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

