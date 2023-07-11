import { css } from '../../../styled-system/css'
import logo from '../../assets/logo-infomaniak.svg'
import Language from './Language';
import TVASwitch from './TVASwitch';
import Tab from './TabLinks';
import MenuApplications from './MenuApplications';

const Header = () => {

  return (
    <header className={css({ height: '66px', backgroundColor: '#fff'})}>
      <nav className={css({ display: 'flex', alignItems: 'center', maxWidth: '1254px', height: '100%', marginInline: 'auto', paddingInline: '15px' })}>
        <div className={css({ width: '100%', display: 'flex', alignItems: 'center', position: 'relative' })}>
          <a href="">
            <img className={css({ height: '19.19px', marginRight: '40px' })} src={logo} alt="" />
          </a>
          <Tab />
          <div className={css({ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: 'auto' })}>
            <Language />
            <TVASwitch />
            <MenuApplications />
  
            <div className={css({ height: '66px', display: 'flex', alignItems: 'center' })}>
              <a href="" className={css({ height: '100%', display: 'flex',alignItems: 'center', color: '#0098ff', fontSize: '14px', fontWeight: '600', paddingInline: '12px', cursor: 'pointer' })}>
                Inscription
              </a>
              <a href="" className={css({ height: '100%', display: 'flex',alignItems: 'center', backgroundColor: '#0098ff', color: '#fff', fontSize: '14px', fontWeight: '600', paddingInline: '12px', cursor: 'pointer' })}>
                Connexion
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
