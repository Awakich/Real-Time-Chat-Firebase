import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../features/useAuth'
import { useAppDispatch } from '../app/hooks'
import { removeUser } from '../features/userSlice'

const HomePage: FC = () => {
    const { isAuth, email } = useAuth()
    const dispatch = useAppDispatch()

    return isAuth ? (
        <div>
            <p>Hi, {email}</p>
            <button onClick={() => dispatch(removeUser())}>Would you like Log out from {email}?</button>
        </div>
    ) : (
        <div>
            <Link to="/login" >
                <button>Login</button >
            </Link >

            <Link to="/register" >
                <button>Register</button>
            </Link>
        </div >
    )
}

export default HomePage