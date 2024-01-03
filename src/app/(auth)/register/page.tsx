import styles from './Register.module.css'
import RegisterForm from '@/components/registerForm/RegisterForm';

const RegisterPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <RegisterForm />
        </div>
      </div>
    );
  };

export default RegisterPage