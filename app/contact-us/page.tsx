"use client";

import React, { useState } from "react";
import { Input } from "../../stories/Input";
import { Button } from "../../stories/Button";

// ContactUsPage component definition
const ContactUsPage = () => {
  // State hooks for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Form submitted for ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md">
        <h1 className="text-center text-2xl font-bold mb-4">Contact Us</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {/* Email input field */}
          <Input
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* Password input field */}
          <Input
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex items-center justify-between">
            {/* Submit button */}
            <Button type="submit" label="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
