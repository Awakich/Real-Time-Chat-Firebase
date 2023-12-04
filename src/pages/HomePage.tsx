import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../features/useAuth'
import { useAppDispatch } from '../app/hooks'
import { removeUser } from '../features/userSlice'
import Chat from '../entities/Chat'
import styles from '../app/home.module.scss'

const HomePage: FC = () => {
    const { isAuth, email } = useAuth()
    const dispatch = useAppDispatch()

    return isAuth ? (
        <div className={styles.welcome_block}>
            <p className={styles.welcome}>Hi, {email}</p>
            <button className={styles.button} onClick={() => dispatch(removeUser())}>Would you like Log out from {email}?</button>
            <Chat />
        </div>
    ) : (
        <div className={styles.button_group}>
            <Link to="/login" >
                <button className={styles.button}>Login</button >
            </Link >

            <Link to="/register" >
                <button className={styles.button}>Register</button>
            </Link>
        </div >
    )
}

export default HomePage