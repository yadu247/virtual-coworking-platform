import Button from '../../components/Button';

import './hero-section.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-container">
        <div className="content">
          <h1>
            Actually
            <br />
            do the work.
          </h1>
          <p>
            Accountability, community, and productivity coaching to help you
            start and finish the work.
          </p>
          <Button
            icon={<i class="fa-solid fa-play"></i>}
            text="See How It Works"
          />
        </div>
        <div className="illustration">
          <img
            src="./illustration-hero-section.png"
            alt="Office illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
