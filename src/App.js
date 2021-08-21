import cn from 'classnames';
import CoinContainer from './components/CoinContainer';
import LandingPad from './components/LandingPad';
import { mainContainer } from './css-modules/Layout.module.css';

function App() {
  return (
    <>
      <div className={cn('container', mainContainer)}>
        <div className='row'>
          <h1>Crypto Drag n' Drop</h1>
          <p>
            Step right up and drag a crypto-currency to the landing pad to
            return data!
          </p>
          <div className='twelve columns'>
            <CoinContainer />
            <LandingPad />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
