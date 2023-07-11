import { css } from '../../../styled-system/css'
import meat from '../../assets/meet.svg'
import swissTransfer from '../../assets/swiss-transfer.svg'
import kpaste from '../../assets/kpaste.svg'
import { useOutsideClick } from '../../hooks/useOutsideClick';

type Props = {
  isPopupOpen: boolean
  setIsPopupOpen: (open: boolean) => void
}

const Popup = ({isPopupOpen, setIsPopupOpen}: Props) => {
  const ref = useOutsideClick(() => {
    setIsPopupOpen(!isPopupOpen)
    console.log('Clicked outside of MyComponent');
  });

  return (
    <div className={css({ width: '328px', backgroundColor: '#ffffff', color: '#333333', border: 'none', borderRadius: '10px', boxShadow: '0 1px 10px #00000026', fontFamily: 'Roboto, sans-serif', position: 'absolute', top: '76px', right: '0', _after: { content: '""', position: 'absolute', bottom: '99%', right: '7.5%', marginRight: '-5px', borderWidth: '10px', borderStyle: 'solid', borderColor: 'transparent transparent #FFF transparent'}, zIndex: '10' })}>
      <div className={css({ marginBlock: '24px', borderRadius: '10px' })} ref={ref}>
        <div className={css({ paddingInline: '24px' })}>
          <div className={css({ marginBottom: '16px', color: 'rgb(133, 162, 182)', textTransform: 'uppercase', textAlign: 'left', fontSize: '12px', })}>
            Applications
          </div>
          <div className={css({  display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'auto', gap: '16px 12px' })}>
            <a href="#" className={css({ display: 'flex', flexDirection: 'column', textDecoration: 'none'})}>
              <img className={css({ width: '44px', height: '44px', padding: '4px', borderRadius: '4px', alignSelf: 'center' })} src={meat} alt="" />
              <span className={css({ marginTop: '8px', color: '#333333', fontSize: '12px', textAlign: 'center' })}>
                kMeet
              </span>
            </a>
            <a href="#" className={css({ display: 'flex', flexDirection: 'column', textDecoration: 'none'})}>
              <img className={css({ width: '44px', height: '44px', padding: '4px', borderRadius: '4px', alignSelf: 'center' })} src={swissTransfer} alt="" />
              <span className={css({ marginTop: '8px', color: '#333333', fontSize: '12px', textAlign: 'center' })}>
                Swisstransfer
              </span>
            </a>
            <a href="#" className={css({ display: 'flex', flexDirection: 'column', textDecoration: 'none'})}>
              <img className={css({ width: '44px', height: '44px', padding: '4px', borderRadius: '4px', alignSelf: 'center' })} src={kpaste} alt="" />
              <span className={css({ marginTop: '8px', color: '#333333', fontSize: '12px', textAlign: 'center' })}>
                kPaste
              </span>
            </a>
          </div>
        </div>
        <div className={css({ padding: '24px 24px 0' })}>
          <div className={css({ marginBottom: '16px', color: 'rgb(133, 162, 182)', textTransform: 'uppercase', textAlign: 'left', fontSize: '12px', })}>
            Produits
          </div>
          <a href="" className={css({ display: 'flex', alignItems: 'center', marginBottom: '20px', color: 'rgb(0, 152, 255)', textDecoration: 'none', fontSize: '12px' })}>
            Découvrir nos produits
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;