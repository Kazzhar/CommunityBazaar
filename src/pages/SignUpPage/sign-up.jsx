import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js'
import './sign-up.css'
const supabaseUrl = 'https://pibocyssfkqnnshfrnnc.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpYm9jeXNzZmtxbm5zaGZybm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5MzY2MTgsImV4cCI6MTk5NzUxMjYxOH0.5xAH9Q8HoUuAi49RczmiS28E3b7pcGjEGb453HLVpZc'

const supabase = createClient(supabaseUrl, supabaseKey)
function SignUpForm() {
  const [name, setName] = useState('');
  const [adhaarNumber, setAdhaarNumber] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAdhaarNumberChange = (event) => {
    setAdhaarNumber(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !adhaarNumber || !dob || !gender || !image) {
      alert('Please fill out all fields');
      return;
    }
    if (!image.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }
    event.preventDefault();
    // Here you can add the code to send the data to the server
    // using fetch() or Axios
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} required/>
      </label>
      <br />
      <label>
        Adhaar Number:
        <input type="text" value={adhaarNumber} onChange={handleAdhaarNumberChange} required/>
      </label>
      <br />
      <label>
        Date of Birth:
        <input type="date" value={dob} onChange={handleDobChange} required/>
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={handleGenderChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Image of Adhaar Card:
        <input type="file" onChange={handleImageChange} required/>
      </label>
      <br />
      <button type="submit">Upload</button>
    </form>
  );
}

export default SignUpForm;
