import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { css } from '../../../styled-system/css'

const Switch = () => {
  const [ tva, setTva ] = useState(false)
  const notify = () => toast.success((t) => (
    <div>
      <span className={css({ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '1rem', fontWeight: 'bold' })}>
        Prix mis à jour
        <button 
          className={css({ cursor: 'pointer' })}
          onClick={() => toast.dismiss(t.id)}
        >X</button>
      </span>
      <p className={css({ paddingBlock: '0.5rem', fontSize: '0.75rem' })}>L'ensemble des prix sont maintenant affichés en <span className={css({ fontWeight: 'bold' })}>{ tva ? 'Hors Taxes (HT)' : 'Toute Taxes Comprises (TTC)'}</span></p>
    </div>
  ),
  {
    duration: 4000,
    style: {
      width: '280px',
    },
  });
  const handleClick = () => {
    setTva(!tva)
    notify()
  }

  return (
    <div className={css({ height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '25px', backgroundColor: '#f2f4f6', borderRadius: '100px', fontSize: '8px', position: 'relative' })}>
      <div className={css({ width: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px', backgroundColor: "#0098ff", color: '#fff', borderRadius: '100px', position: 'absolute', left: '0', transform: tva ? 'translatex(60px)' : undefined, transition: 'all .2s ease' })}>
        {tva ? "TTC" : "HT"}
      </div>
      <div 
        className={css({ width: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px', cursor: 'pointer' })}
        onClick={handleClick}
      >HT</div>
      <div
        className={css({ width: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px', cursor: 'pointer' })}
        onClick={handleClick}
      >TTC</div>
      <Toaster />
    </div>
  );
};

export default Switch;
