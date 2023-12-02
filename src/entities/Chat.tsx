import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addMessage, fetchMessages, messagesSelector } from '../features/messagesSlice';
import { useAuth } from '../features/useAuth';

const Chat: FC = () => {
  const { email } = useAuth()
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
    <div>

      {messages.map(({ id, message }) => (
        <div key={id}>{message}</div>
      ))}

      <div >
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <button onClick={handleSubmit}>Отправить</button>
      </div>
    </div>
  )
};

export default Chat;
