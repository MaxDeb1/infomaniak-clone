import { css } from '../styled-system/css'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
    </>
  )
}

export default App
