import { useState } from 'react';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import { css } from '../../../styled-system/css'
import Toast from './Toast';

const Switch = () => {
  const [ tva, setTva ] = useState(false)
  const notify = () => toast((t) => (
    <Toast t={t} tva={tva}/>
  ),
  {
    duration: 2500,
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
      <Toaster>
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible ? 'custom-enter 0.2s ease' : 'custom-exit 0.2s ease',
            }}
          />
        )}
      </Toaster>
    </div>
  );
};

export default Switch;
