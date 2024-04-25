import styles from "./css/loginSignup.module.css";
export default function LoginSignup() {
  return (
    <div className={styles.loginSignup}>
      <div className={styles.loginSignupContainer}>
        <h1>Sign Up</h1>
        <form className={styles.loginSignupFields}>
          <input type="text" placeholder=" Your Name" />
          <input type="text" placeholder="Email Adress" />
          <input type="password" placeholder="Password" />
          <button>Continue</button>
          <p className={styles.loginSignupLogin}>
            Already have an account? <span>Login here</span>
          </p>
        </form>
        <div className={styles.loginSignupAgree}>
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy. </p>
        </div>
      </div>
    </div>
  );
}
