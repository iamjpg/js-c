import { container } from '../css-modules/LandingPad.module.css';

const LandingPad = () => {
  return (
    <>
      <div className={container}>
        {/* Output API Results from drag here. */}
        Drag a crypto icon to this container to return current data.
      </div>
    </>
  );
};

export default LandingPad;
