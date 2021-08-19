import { container, headline } from '../css-modules/LandingPad.module.css';

const LandingPad = () => {
  return (
    <>
      <h5 className={headline}>Drag Crypto Logo Here</h5>
      <div className={container}>
        {/* Output API Results from drag here. */}
      </div>
    </>
  );
};

export default LandingPad;
