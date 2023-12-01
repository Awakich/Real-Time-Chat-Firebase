import { FC, useState } from 'react'

type formProps = {
    title: string,
    handleClick: (email: string, password: string) => void;
}

const Form: FC<formProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />

            <button onClick={() => handleClick(email, password)}>{title}</button>
        </div>
    )
}

export default Form;