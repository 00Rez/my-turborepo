import styles from './Button.module.scss'

export type ButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';
  styling?: 'outlined' | 'filled' | 'text';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
} & React.PropsWithChildren;

export const Button = ({ 
  disabled,
  loading,
  type,
  variant,
  styling,
  children,
  onClick
}: ButtonProps): React.ReactElement => {
  return (
    <button
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
      className={[styles.button, variant ? styles[variant] : styles.primary, styling ? styles[styling] : styles.filled].join(' ')}
    >
      {children}
    </button>
  )
}

Button.displayName = "Button";
