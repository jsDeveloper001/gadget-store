import { useContext } from 'react';
import { AuthContext } from '../Services/FirebaseAuthProvider';

const useAuth = () => {
    const UserCredentials = useContext(AuthContext)
    return UserCredentials
};

export default useAuth;