import React from "react";
import './PrivacyPage.css'
import config from "../../config.json"

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1 className="center-text">Privacy Policy for {config.appName}</h1>
      <p className="center-text">Last Updated: 25/01/2024</p>
      <div className="content">
        <p>
          <strong>1. Introduction</strong><br />
          Welcome to {config.appName}. By accessing our app, you agree to be bound by these Terms and Conditions.<br />
          <strong>2. Use of Our Service</strong><br />
          You agree to use our service legally and not to violate any applicable laws or regulations.<br />
          <strong>3. Intellectual Property Rights</strong><br />
          The content on our app, including text, graphics, logos, and software, is the property of {config.appName} and protected by copyright and intellectual property laws.<br />
          <strong>4. Your Content</strong><br />
          You retain all rights to any content you submit, post, or display on or through our service.<br />
          <strong>5. Account Termination</strong><br />
          We may terminate or suspend access to our service immediately, without prior notice, for any reason whatsoever, including without limitation if you breach the Terms.<br />
          <strong>6. Limitation of Liability</strong><br />
          Our app is provided "as is," and we shall not be liable for any direct, indirect, incidental, or consequential damages.<br />
          <strong>7. Changes to These Terms</strong><br />
          We reserve the right to modify these Terms at any time. We will provide notice of any changes by posting the new Terms on our app.<br />
          <strong>8. Contact Us</strong><br />
          If you have any questions about these Terms, please contact us at {config.contactEmail}.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
