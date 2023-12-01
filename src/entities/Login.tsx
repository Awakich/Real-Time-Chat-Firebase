import { FC } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Form from './Form'
import { useAppDispatch } from '../app/hooks'
import { setUser } from '../features/userSlice'
import { useNavigate } from 'react-router-dom'

const Login: FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({ email: user.email, id: user.uid, token: user.refreshToken }))
                navigate("/")
            })
            .catch(() => alert("Invalid user"))
    }

    return (
        <div>
            <Form title={"sign in"} handleClick={handleLogin} />
        </div>
    )
}

export default Login