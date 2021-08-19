import { useEffect } from 'react';
import cn from 'classnames';
import { CoinContainer } from './components/CoinContainer';
import { LandingPad } from './components/LandingPad';
import { mainContainer } from './css-modules/Layout.module.css';

// https://api.coingecko.com/api/v3/coins/dogecoin

function App() {
  const testFetch = () => {
    fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (err) {
        console.warn('Something went wrong.', err);
      });
  };

  useEffect(() => {
    // testFetch();
  }, []);

  return (
    <>
      <div className={cn('container', mainContainer)}>
        <div className='row'>
          <h1>Bitcoin Drag n' Drop</h1>
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
