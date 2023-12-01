import { FC } from 'react'
import Form from './Form'
import { useAppDispatch } from '../app/hooks'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { setUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom'

const SignUp: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
            dispatch(setUser({ email: user.email, id: user.uid, token: user.refreshToken }))
            navigate("/")
        }
        )
    }

    return (
        <Form title={"register"} handleClick={handleRegister} />
    )
}

export default SignUp