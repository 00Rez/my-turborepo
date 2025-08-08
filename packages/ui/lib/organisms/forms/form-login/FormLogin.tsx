import { Button } from "../../../atoms/button";
import { InputText } from "../../../molecules/inputs/input-text";
import styles from "./FormLogin.module.css";

export interface FormLoginProps {
  onSubmit: (ev: React.FormEvent<HTMLFormElement>) => void;
  onResetPassword: () => void;
  onSignUp: () => void;
  error?: string;
}

export const FormLogin = ({ onSubmit, onResetPassword, onSignUp, error }: FormLoginProps): React.ReactElement => {
  return (
    <div className={styles.formLogin}>
      <h1 className={styles.title}>Sign In</h1>

      {error && <p className={styles.errorText}>{error}</p>}

      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputs}>
          <InputText
            label="Email or username"
            name="email"
            type="email"
            required
          />
          <InputText
            label="Password"
            name="password"
            type="password"
            required
          />
        </div>
        <div className={styles.actions}>
          <Button
            type="submit"
          >
            Sign In
          </Button>
          <Button
            type="button"
            onClick={onSignUp}
            variant="secondary"
          >
            Sign Up
          </Button>
          <Button
            type="button"
            onClick={onResetPassword}
            styling="text"
          >
            Forgot Password?
          </Button>
        </div>
      </form>
    </div>
  )
};
