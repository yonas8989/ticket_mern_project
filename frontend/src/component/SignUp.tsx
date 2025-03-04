
import styles from "../css/SignUp.module.css";
import { InputField } from "./InputField";
import { SocialLoginButton } from "./SocialLoginButton";
import { Divider } from "./Divider";

export default function SignUp() {
  return (
    <main className={styles.container}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/9d39457702b8a488bb0c0e116497bfdd310ce14bef9333e79222404874508811?placeholderIfAbsent=true"
        alt="Logo"
        className={styles.logo}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Sign up</h1>

        <form className={styles.form}>
          <InputField
            label="Email"
            placeholder="example@gmail.com"
            type="email"
          />

          <InputField
            label="Create a password"
            placeholder="must be 8 characters"
            type="password"
            showIcon
          />

          <InputField
            label="Confirm password"
            placeholder="repeat password"
            type="password"
            showIcon
          />

          <button type="submit" className={styles.submitButton}>
            signup
          </button>
        </form>
        <p className={styles.loginLink}>
          Already have an account? <strong>Log in</strong>
        </p>
      </div>
    </main>
  );
}
