import styles from "./Registration.module.css";
const Registration = () => {
  return (
    <div className={styles.registration}>
      <div className={styles.registration_container}>
        <h2>Register Here</h2>
        {/* onSubmit={handleSubmit} */}
        <form className={styles.form}>
          <div className={styles.form_group}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              required
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              required
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              // value={formData.password}
              // onChange={handleChange}
              required
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              maxLength="10"
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit phone number"
              // value={formData.phone}
              // onChange={handleChange}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="batch">Batch</label>
            <select
              id="batch"
              name="batch"
              // value={formData.batch}
              // onChange={handleChange}
              required
            >
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
            <select
              id="branch"
              name="branch"
              // value={formData.branch}
              // onChange={handleChange}
              required
            >
              <option value="">Select Branch</option>
              <option value="CSE">Computer Science & Engineering</option>
              <option value="ECE">
                Electronics & Communication Engineering
              </option>
              <option value="ME">Mechanical Engineering</option>
              <option value="EE">Electrical Engineering</option>
              <option value="CE">Civil Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="CHE">Instrumentation Engineering</option>
            </select>
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
