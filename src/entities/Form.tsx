import { FC, useState } from 'react'
import styles from '../app/form.module.scss'

type formProps = {
    title: string,
    handleClick: (email: string, password: string) => void;
}

const Form: FC<formProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div className={styles.form}>
            <input className={styles.input} type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
            <input className={styles.input} type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />

            <button className={styles.button} onClick={() => handleClick(email, password)}>{title}</button>
        </div>
    )
}

export default Form;