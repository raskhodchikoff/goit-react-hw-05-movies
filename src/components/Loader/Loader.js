import { RotatingLines } from 'react-loader-spinner';

import { Spinner } from './Loader.styled';

const Loader = () => {
  return (
    <Spinner>
      <RotatingLines
        strokeColor="#82919F"
        strokeWidth="5"
        animationDuration="0.75"
        width="256"
        visible={true}
      />
    </Spinner>
  );
};

export default Loader;
