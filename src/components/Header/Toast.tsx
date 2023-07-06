import { css } from '../../../styled-system/css'
import toast, { Toast } from 'react-hot-toast';
import success from '../../assets/success.svg'
import close from '../../assets/close.svg'

const Toast = ({t, tva} : {t: Toast, tva: boolean}) => {
  return (
    <>
      <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' })}>
        <div className={css({ height: '100%', paddingBlock: '3px' })}>
          <img className={css({ width:"35px" })} src={success} alt="" />
        </div>
        <div className={css({ padding: '5px 0 5px 5px' })}>
          <span className={css({ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem', fontWeight: 'bold' })}>
            Prix mis à jour
          </span>
          <p className={css({ paddingBlock: '0.4rem 0.6rem', fontSize: '0.625rem' })}>L'ensemble des prix sont maintenant affichés en <span className={css({ fontWeight: 'bold' })}>{ tva ? 'Hors Taxes (HT)' : 'Toute Taxes Comprises (TTC)'}</span></p>
        </div>
        <div className={css({ height: '100%', paddingBlock: '5px' })}>
          <button
            className={css({ width:"16px", height: '16px', cursor: 'pointer' })}
            onClick={() => toast.dismiss(t.id)}
          >
            <img src={close} alt="" />
          </button>
        </div>
        <div className={css({ width: '100%', height: '5px', position: 'absolute', bottom: 0, left: 0, backgroundColor: 'gray.200' })}>
          <div className={css({ width: '100%', height: '100%', backgroundColor: '#0098ff', borderRadius: '100vmax',  transformOrigin: 'left center', animation: 'roundtime calc(3500 * 1ms) linear forwards' })} />
        </div>
      </div>
    </>
  );
};

export default Toast;