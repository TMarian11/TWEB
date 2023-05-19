import React, { useState, useEffect } from "react";

const UserInitial = [
    { username: "TMarian", password: "m11" },
    { username: "manghel", password: "123" },
    { username: "dorinl", password: "12345" },
];

const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [EsteLogat, setEsteLogat] = useState(false);
    const [users, SetareUser] = useState(UserInitial);

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            SetareUser([...users, ...JSON.parse(storedUsers)]);
        }
    }, [users]);

    const handleLogin = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const foundUser = users.find(
            (user) => user.username === username && user.password === password
        );
        if (foundUser) {
            setEsteLogat(true);
            localStorage.setItem("EsteLogat", "true");
            localStorage.setItem("user", JSON.stringify(foundUser));
            alert("Autentificare reușită");
        } else {
            alert("Login eșuat.Mai incearca");
        }
    };


    const handleLogout = () => {
        setEsteLogat(false);
        localStorage.setItem("EsteLogat", "false");
        alert("Succes la deconectare");
    };

    const renderLoginForm = () => {
        return (
<div className="container">
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Autentificare</button>
            </form>
            </div>
        );
    };

    const renderLogoutButton = () => {
        const storedUser = localStorage.getItem("user");
        const loggedInUser = storedUser ? JSON.parse(storedUser) : null;
        return (
            <div>
                <div>
                {loggedInUser && <p>User : {loggedInUser.username}</p>}
                <button onClick={handleLogout}>Ieșire</button>
                </div>
            </div>
        );
    };


    return <div>{EsteLogat ? renderLogoutButton() : renderLoginForm()}</div>;
};

export default App;