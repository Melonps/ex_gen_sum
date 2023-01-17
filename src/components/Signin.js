import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import React,{ useState } from 'react';

const Signin = () => {
    const navigate= useNavigate();
    const [error, setError] = useState('');
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, provider).then((result) => {
                console.log(result);
            })
            navigate('/go');
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };

    return (
        <div>
            <h1>ログイン</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={handleLogin}>Googleログイン</button>
        </div>
    );
};

export default Signin;