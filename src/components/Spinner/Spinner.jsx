import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <Loader
        type="Circles"
        color="rgb(85, 85, 240)"
        height={80}
        width={80}
      />
    </div>
  );
};

export default Spinner;
