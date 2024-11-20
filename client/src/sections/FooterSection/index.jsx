import Button from '../../components/Button';

import './footer-section.css';

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="footer-section-container">
        <h1>Questions? Let's Talk.</h1>
        <p>
          We'll help you determine if Motivated Mornings is the right fit for
          you and answer any of your questions.
        </p>
        <Button text="Let's Talk" bgcolor="#EDC444" color="#363636" />
        <div className="social-media-icons">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <p>Email: hello@motivatedmornings.work</p>
        <p>
          &#169; 2020 Motivated Mornings, Inc. All rights reserved. Site by
          Knapsack.
        </p>
        <p>guidelines privacy terms members</p>
      </div>
      <div className="help-btn-container">
        <Button
          text="Help"
          bgcolor="#EDC444"
          color="#363636"
          icon={<i class="fa-regular fa-circle-question"></i>}
        />
      </div>
    </div>
  );
};

export default FooterSection;
