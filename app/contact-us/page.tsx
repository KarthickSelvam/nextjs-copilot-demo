import React, { useState } from 'react';
import { Button } from '../../stories/Button';
import { Input } from '../../stories/Input';

const ContactUsPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email && password;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="contact-us-container">
      <form className="contact-us-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" disabled={!isFormValid} label="Submit" />
      </form>
    </div>
  );
};

export default ContactUsPage;
