import { useAppSelector } from "../app/hooks";
import { userSelector } from "./userSlice";

export const useAuth = () => {
    const { email, id, token } = useAppSelector(userSelector);

    return {
        isAuth: !!email,
        email,
        id,
        token
    }
}