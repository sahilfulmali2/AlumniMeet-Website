import styles from "./Registration.module.css";
const Registration = () => {
  return (
    <div className={styles.registration}>
      <div className={styles.registration_container}>
        <h2>Register Here</h2>
        {/* onSubmit={handleSubmit} */}
        <form  className={styles.form}>
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
              // value={formData.phone}
              // onChange={handleChange}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="batch">Batch</label>
            <input
              type="text"
              id="batch"
              name="batch"
              // value={formData.password}
              // onChange={handleChange}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="branch">Branch</label>
            <input
              type="text"
              id="branch"
              name="branch"
              // value={formData.password}
              // onChange={handleChange}
              required
            />
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
