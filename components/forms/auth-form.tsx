import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../../styles/auth-form.module.scss';
import LoginForm from '../login-form';
import SignupForm from '../signup-form';

export default function AuthForm() {
  const [isSigningUp, setSigningUp] = useState(false);
  const animationTimeout = 500;

  return (
    <div id={styles['animation-container']}>
      <CSSTransition
        in={isSigningUp}
        classNames={{
          enter: styles['form-primary-enter'],
          enterActive: styles['form-enter-active'],
          exit: styles['form-exit'],
          exitActive: styles['form-primary-exit-active'],
        }}
        unmountOnExit
        timeout={animationTimeout}
      >
        <SignupForm />
      </CSSTransition>

      <CSSTransition
        in={!isSigningUp}
        classNames={{
          enter: styles['form-secondary-enter'],
          enterActive: styles['form-enter-active'],
          exit: styles['form-exit'],
          exitActive: styles['form-secondary-exit-active'],
        }}
        unmountOnExit
        timeout={animationTimeout}
      >
        <LoginForm
          registerButtonClickCallback={(value: boolean) => {
            setSigningUp(value);
          }}
        />
      </CSSTransition>
    </div>
  );
}
