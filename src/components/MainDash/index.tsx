import { cardItens } from '../../data/cardItens';

import { Card } from '../Card';

import './styles.css';

export function MainDash() {
  return (
    <div className='mainDashContainer'>
      <h2>Dashboard</h2>

      <div className='cardContainer'>
        {cardItens.map((item, key) => (
          <div key={key} className="parentContainer">
            <Card
              title={item.title}
              color={item.color}
              barValue={item.barValue}
              value={item.value}
              icon={item.icon}
              series={item.series}
            />
          </div>
        ))}
      </div>
    </div>
  )
}