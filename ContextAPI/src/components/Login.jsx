import React from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { setUser } = React.useContext(UserContext);

    const HandleSubmit = (e) => {
        // This prevents the default form submission behavior like page reload and route change
        e.preventDefault();
        setUser({ username, password });
    }
  return (
    <div>
        Login User
        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username" />

        {" "}

        <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password" />
        <button onClick={HandleSubmit}>Login</button>
    </div>
  )
}

export default Login