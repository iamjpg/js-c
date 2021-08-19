import cn from 'classnames';
import { CoinContainer } from './components/CoinContainer';
import { LandingPad } from './components/LandingPad';
import { mainContainer } from './css-modules/Layout.module.css';

function App() {
  return (
    <>
      <div className={cn('container', mainContainer)}>
        <div className='row'>
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
