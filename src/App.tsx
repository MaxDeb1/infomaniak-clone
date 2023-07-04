import { css } from '../styled-system/css'
import Header from './components/Header'
import datacenter from './assets/header-datacenter.webp'

function App() {
  
  return (
    <>
      <Header />
      <section className={css({ height: '647px' })}>
        <div className={css({ height: '647px', clipPath: 'ellipse(105% 66% at 50% 33%)' })}>
          <img src={datacenter} alt="" className={css({ height: '100%', objectFit: 'cover' })}/>
        </div>
      </section>
    </>
  )
}

export default App
