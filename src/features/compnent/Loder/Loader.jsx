// src/components/Loader.jsx
import { PacmanLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      backgroundColor: "#121212", zIndex: 9999
    }}>
      <PacmanLoader size={40} color="#6de75b" />
    </div>
  );
};

export default Loader;
