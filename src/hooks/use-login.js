import { auth } from '../firebase/firebase';
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useLogin = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const firebaseLogin = (email, password) => {
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {

            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName
            }))
            history.push("/teslaaccount");
        }).catch(err => {
            alert(`Something went wrong! ${err.message}`)
        });
    }

    return firebaseLogin;
}

export default useLogin;
