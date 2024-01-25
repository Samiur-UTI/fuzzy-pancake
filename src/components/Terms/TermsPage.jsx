import React from 'react';
import './TermsPage.css'
import config from "../../config.json"

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions">
      <h1 className="center-text">Terms and Conditions for {config.appName}</h1>
      <p className="center-text">Last Updated: 25/01/2024</p>
      <div className="content">
        <p>
          <strong>1. Acceptance of Terms</strong><br />
          By accessing and using {config.appName}, you agree to comply with these Terms and Conditions.<br />
          <strong>2. Changes to Terms</strong><br />
          We reserve the right to modify these terms at any time. Your continued use of {config.appName} signifies your acceptance of any changes.<br />
          <strong>3. Use License</strong><br />
          {config.appName} grants you a limited license to access and use our services for personal, non-commercial purposes.<br />
          <strong>4. User Conduct</strong><br />
          You agree to use {config.appName} only for lawful purposes and not to engage in any activity that interferes with or disrupts the services.<br />
          <strong>5. Termination</strong><br />
          We may terminate or suspend your access to our services for any breach of these terms without notice.<br />
          <strong>6. Disclaimer of Warranties</strong><br />
          {config.appName} is provided "as is" without any warranties of any kind.<br />
          <strong>7. Limitation of Liability</strong><br />
          In no event shall {config.appName} be liable for any damages arising from the use of the service.<br />
          <strong>8. Governing Law</strong><br />
          These terms will be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.<br />
          <strong>9. Contact Information</strong><br />
          If you have any questions about these terms, please contact us at {config.contactEmail}.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
