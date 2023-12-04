import { FC } from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../entities/SignUp'
import styles from '../app/login.module.scss'

const RegisterPage: FC = () => {
    return (
        <div className={styles.login}>
            <h1>Register</h1>
            <SignUp />

            <p className={styles.login_text}>
                Already have an account? <Link to='/login'>Log in</Link>
            </p>
        </div>
    )
}

export default RegisterPage