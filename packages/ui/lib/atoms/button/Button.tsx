import { useMemo } from 'react';
import { ButtonStyle, ButtonType } from 'devextreme/common';
import { default as DXButton } from 'devextreme-react/button';

import'./Button.scss'

export type ButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';
  styling?: 'outlined' | 'filled' | 'text';
  onClick?: () => void;
} & React.PropsWithChildren;

export const Button = ({ 
  disabled,
  loading,
  icon,
  variant,
  styling,
  children,
  onClick
}: ButtonProps): React.ReactElement => {

  const buttonStyle: ButtonStyle = useMemo(() => {
    switch (styling) {
      case 'outlined':
        return 'outlined';
      case 'filled':
        return 'contained';
      case 'text':
        return 'text';
      default:
        return variant === 'secondary'
          || variant === 'info' 
          || variant === 'warning' ? 'text' : 'contained';
    }
  }, [styling, variant]);

  const type: ButtonType = useMemo(() => {
    switch (variant) {
      case 'primary':
        return 'default';
      case 'secondary':
        return 'default';
      case 'danger':
        return 'danger';
      case 'success':
        return 'success';
      case 'warning':
        return 'danger';
      case 'info':
        return 'default';
      default:
        return 'default';
    }
  }, [variant]);

  return (
    <DXButton
      disabled={disabled || loading}
      icon={icon}
      stylingMode={buttonStyle}
      type={type}
      onClick={onClick}
    >
      {children}
    </DXButton>
  )
}
