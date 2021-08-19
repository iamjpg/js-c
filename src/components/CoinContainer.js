import { container } from '../css-modules/CoinContainer.module.css';

import BitcoinLogo from '../static/svg/btc.png';
import EthereumLogo from '../static/svg/eth.png';
import StellarLogo from '../static/svg/xlm.png';
import XrpLogo from '../static/svg/xrp.png';
import DogeLogo from '../static/svg/doge.png';

export const CoinContainer = () => {
  return (
    <>
      <div className={container}>
        <img src={BitcoinLogo} width={50} alt='Bitcoin Logo' />
        <img src={EthereumLogo} width={50} alt='Eth Logo' />
        <img src={StellarLogo} width={50} alt='Stellar Logo' />
        <img src={XrpLogo} width={50} alt='Ripple Logo' />
        <img src={DogeLogo} width={50} alt='Dogecoin Logo' />
      </div>
    </>
  );
};
