import axios from "axios";
import { useState } from "react";
import styles from "./Registration.module.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    batch: "",
    branch: "",
    profession: "",
    company: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(" https://alumnimeet-website.onrender.com/register", formData);
      alert("Registration successful!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Registration failed! Please check console for details.");
    }
  };

  return (
    <div className={styles.registration}>
      <div className={styles.registration_container}>
        <h2>Register Here</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="mobile">Mobile</label>
            <input type="tel" id="mobile" name="mobile" maxLength="10" pattern="[0-9]{10}" value={formData.mobile} onChange={handleChange} required />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="batch">Batch</label>
            <select id="batch" name="batch" value={formData.batch} onChange={handleChange} required>
              <option value="">Select Batch</option>
              {Array.from({ length: 10 }, (_, i) => {
                const year = 2005 - i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>

          <div className={styles.form_group}>
            <label htmlFor="branch">Branch</label>
            <select id="branch" name="branch" value={formData.branch} onChange={handleChange} required>
              <option value="">Select Branch</option>
              <option value="CSE">Computer Science & Engineering</option>
              <option value="ECE">Electronics & Communication Engineering</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="EE">Electrical Engineering</option>
              <option value="CE">Civil Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="CHE">Instrumentation Engineering</option>
            </select>
          </div>

          <div className={styles.form_group}>
            <label htmlFor="profession">Profession</label>
            <input type="text" id="profession" name="profession" value={formData.profession} onChange={handleChange} required />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required />
          </div>

          <button type="submit" className={styles.submit_button}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
