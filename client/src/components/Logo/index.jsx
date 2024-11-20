import './logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-image-container">
        <img src="./logo.png" alt="Logo" />
      </div>
      <div className="logo-text-container">
        <p className="heading">MOTIVATED</p>
        <p className="description">mornings</p>
      </div>
    </div>
  );
};

export default Logo;
