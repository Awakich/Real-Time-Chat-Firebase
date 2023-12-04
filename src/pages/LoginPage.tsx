import { FC } from 'react'
import { Link } from 'react-router-dom'
import Login from '../entities/Login'
import styles from '../app/login.module.scss'

const LoginPage: FC = () => {
    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <Login />
            <p className={styles.login_text}>
                Or <Link to='/register'>Register</Link>
            </p>
        </div>
    )
}

export default LoginPage