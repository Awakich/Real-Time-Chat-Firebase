import { FC, Fragment } from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../entities/SignUp'

const RegisterPage: FC = () => {
    return (
        <Fragment>
            <h1>Register</h1>
            <SignUp />

            <p>
                Already have an account? <Link to='/login'>Log in</Link>
            </p>
        </Fragment>
    )
}

export default RegisterPage