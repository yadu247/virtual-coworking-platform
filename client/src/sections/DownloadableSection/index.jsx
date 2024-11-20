import { useState } from 'react';
import Button from '../../components/Button';
import axios from '../../utils/axios';

import './downloadable-section.css';

const DownloadableSection = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  const onFormDataChange = (key, e) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const onClickDownload = async () => {
    await axios.post('/form', formData);
  };

  return (
    <div className="downloadable-section">
      <div className="downloadable-section-container">
        <div className="content">
          <h2>FREE GUIDE</h2>
          <h1>8 Secrets to Doing Work That Matters</h1>
          <div className="points">
            <p>
              <i class="fa-solid fa-check"></i>Focus on what's important
            </p>
            <p>
              <i class="fa-solid fa-check"></i>Make massive progress
            </p>
            <p>
              <i class="fa-solid fa-check"></i>Actually get the work done
            </p>
          </div>
          <div className="form">
            <input
              onChange={e => {
                onFormDataChange('firstname', e);
              }}
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={e => {
                onFormDataChange('lastname', e);
              }}
              type="text"
              placeholder="Last Name"
            />
            <input
              onChange={e => {
                onFormDataChange('email', e);
              }}
              type="text"
              placeholder="Email Address"
            />
          </div>
          <Button
            text="DOWNLOAD THE GUIDE"
            icon={<i class="fa-solid fa-down-long"></i>}
            onClick={onClickDownload}
          />
        </div>
        <div className="illustration">
          <img
            src="./illustration-downloadable-section.png"
            alt="Book illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadableSection;
