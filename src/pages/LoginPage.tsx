import { FC, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Login from '../entities/Login'

const LoginPage: FC = () => {
    return (
        <Fragment>
            <h1>Login</h1>
            <Login />
            <p>
                Or <Link to='/register'>Register</Link>
            </p>
        </Fragment>
    )
}

export default LoginPage