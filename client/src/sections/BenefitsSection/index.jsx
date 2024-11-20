import Button from '../../components/Button';

import './benefits-section.css';

const BenefitsSection = () => {
  return (
    <div className="benefits-section">
      <div className="benefits-section-container">
        <div className="content">
          <h1>There's a better way.</h1>
          <div className="points">
            <p>
              <i class="fa-solid fa-circle-check"></i>Experiencing your habits
              transform
            </p>
            <p>
              <i class="fa-solid fa-circle-check"></i>Accessing tools, people,
              and expertise
            </p>
            <p>
              <i class="fa-solid fa-circle-check"></i>Seeing your work move
              forward
            </p>
          </div>
          <Button text="Start Your Free Trial" />
        </div>
        <div className="quote">
          <p>"Get more done before 9am than you used to get done all day."</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
