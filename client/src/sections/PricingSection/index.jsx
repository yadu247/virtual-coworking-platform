import Button from '../../components/Button';

import './pricing-section.css';

const PricingSection = () => {
  return (
    <div className="pricing-section">
      <div className="head">
        <h1>Start with a free trial. Change your plan anytime.</h1>
      </div>
      <div className="pricing-section-container">
        <div className="pricing-card">
          <h1>MoMo</h1>
          <h2>$49/mo.</h2>
          <p>
            Get the motivation and accountability you need to get real work
            done.
          </p>
        </div>
        <div className="pricing-card">
          <h1>MoMo Pro</h1>
          <h2>$399/mo.</h2>
          <p>
            Take it to the next level with your own personal productivity coach.
          </p>
        </div>
      </div>
      <Button text="View Plans Details" />
    </div>
  );
};

export default PricingSection;
