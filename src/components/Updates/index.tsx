import { UpdatesItens } from '../../data/updatesItens';

import './styles.css';

export function Updates() {
  return (
    <div className="updatesContainer">
      {UpdatesItens.map((item, key) => (
        <div key={key} className="updateItem">
          <img src={item.img} alt={item.name} />

          <div className="not1">
            <div style={{ marginBottom: '0.5rem' }}>
              <span>{item.name} {' '}</span>
              <span>{item.not1}</span>
            </div>

            <span>{item.time}</span>
          </div>

        </div>
      ))}
    </div>
  )
}