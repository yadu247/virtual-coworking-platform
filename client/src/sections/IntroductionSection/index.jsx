import Button from '../../components/Button';

import './introduction-section.css';

const IntroductionSection = () => {
  return (
    <div className="introduction-section">
      <div className="introduction-section-container">
        <div className="illustration">
          <img
            src="./illustration-introduction-section.png"
            alt="Office illustration"
          />
        </div>
        <div className="content">
          <h1>
            Tired of not
            <br />
            finishing that script?
          </h1>
          <div className="points">
            <p>
              <i class="fa-solid fa-xmark"></i>Hitting snooze
            </p>
            <p>
              <i class="fa-solid fa-xmark"></i>Endless procrastinating
            </p>
            <p>
              <i class="fa-solid fa-xmark"></i>Never finding the time
            </p>
            <p>
              <i class="fa-solid fa-xmark"></i>Missing goals
            </p>
          </div>
          <Button text="Start Your Free Trial" />
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
