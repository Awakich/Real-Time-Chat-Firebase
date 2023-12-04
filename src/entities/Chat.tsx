import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addMessage, fetchMessages, messagesSelector } from '../features/messagesSlice';
import { useAuth } from '../features/useAuth';
import styles from '../app/chat.module.scss'

const Chat: FC = () => {
  const { email, id } = useAuth()
  const { messages, loading } = useAppSelector(messagesSelector);
  const dispatch = useAppDispatch()
  const [userInput, setUserInput] = useState<string>("")

  useEffect(() => {
    dispatch(fetchMessages())
  }, [dispatch])

  const handleSubmit = async () => {
    if (userInput.trim() !== '') {
      dispatch(addMessage(email, userInput));
      setUserInput('');
    }
  };

  if (loading) return <div>Loading...</div>

  return (
    <div className={styles.chat}>

      {messages.map((message) => (
        <div className={styles.chat_item} key={message.id}>
          <p className={message.id === id ? styles.chat_item_active : styles.chat_item_unactive}>{message.message}</p>
        </div>
      ))}

      <div className={styles.chat_input}>
        <input className={styles.input} type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <button className={styles.button} onClick={handleSubmit}>Отправить</button>
      </div>
    </div>
  )
};

export default Chat;
