import { connect } from 'react-redux';
import { container, headline } from '../css-modules/LandingPad.module.css';

const NoResults = () => {
  return (
    <div>Please drag a crypto coin into this container to return data.</div>
  );
};

const DisplayCryptoResults = (props) => {
  return <>{/* Output API Results */}</>;
};

const LandingPad = (props) => {
  const { name } = props;

  return (
    <>
      <h5 className={headline}>Drag Crypto Logo Here</h5>
      <div className={container}>
        {name === null ? <NoResults /> : <DisplayCryptoResults props={props} />}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const {
    name,
    description,
    images,
    homepageUrl,
    currentPriceUsd,
    marketCapUsd,
  } = state.crypto;

  return {
    name,
    description,
    images,
    homepageUrl,
    currentPriceUsd,
    marketCapUsd,
  };
};

export default connect(mapStateToProps, null)(LandingPad);
