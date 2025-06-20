import { useState } from 'react';
import './LogReg.css';

function LogReg(props) {
    //for login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //for signup
    const [regUsername, setRegUsername] = useState('');
    const [regPw, setRegPw] = useState('');
    const [confirmPw, setConfirmPw] = useState('');
    const [role, setRole] = useState('');
    const [country, setCountry] = useState('cambodia');
    const [province, setProvince] = useState('Kandal');

    const [err, setError] = useState('');

    const handleLoginNavClick = () => {
        props.loginRef.current.style.display = 'flex';
        props.registerRef.current.style.display = 'none';

        props.setActiveTab('login')
    }
    const handleRegisterNavClick = () => {
        props.loginRef.current.style.display = 'none';
        props.registerRef.current.style.display = 'flex';

        props.setActiveTab('register');
    }

    const handleLoginClick = () => {
        console.log(username, password)
        if(username && password){
            fetch('http://localhost:3000/user/login', {
                method: "POST",
                body: JSON.stringify({username, password}),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(data => {
                props.dispatch({type: 'LOGIN', payload: data.user});
            });
        }
    }

    const handleRegisterClick = () => {

        if (regUsername && regPw && confirmPw && role) {
            console.log('yeh', regUsername, regPw, confirmPw, country, province)
            if (regPw === confirmPw) {
                console.log('yeh');
                
                fetch('http://localhost:3000/user/signup', {
                    method: 'POST',
                    body: JSON.stringify({
                        username: regUsername,
                        password: regPw,
                        role, country, province
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                .then(data => {
                    if(data.success){
                        handleLoginNavClick();  
                    }});
            } else{
                console.log('pw not match');
                
            }
        } else{
            console.log('no');
        }
    }

    return (
        <div className="logreg-popup" ref={props.logregPopupRef}>
            <div className="logreg-content" ref={props.logregContentRef}>
                <div className="logreg-head">
                    <h2 style={props.activeTab == 'login' ? { borderBottom: '4px solid black' } : null} onClick={handleLoginNavClick}>LOGIN</h2>
                    <h2 style={props.activeTab == 'register' ? { borderBottom: '4px solid black' } : null} onClick={handleRegisterNavClick}>REGISTER</h2>
                    <button className='close' onClick={props.handleLogRegClose}>&#215;</button>
                </div>
                <section className="login-content" ref={props.loginRef}>
                    <div className="number">
                        <p>Username</p>
                        <input type="text" placeholder='Enter username' value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="password">
                        <p>Password</p>
                        <input type="password" placeholder='Enter password' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button onClick={handleLoginClick}>LOGIN</button>
                    <a href="#">Forgot your password?</a>
                    <p style={{ textAlign: 'center' }}>OR</p>
                    <a href='#'>New to Le E-commerce? Register</a>
                </section>
                <section className="register-content" ref={props.registerRef}>
                    <div className='role'>
                        <p>Role(Required)</p>
                        <span className='seller'>
                            <input type="radio" id="seller" value='seller' name="role" onChange={e => setRole(e.target.value)} />
                            <label htmlFor="seller">Seller</label>
                        </span>
                        <span className='buyer'>
                            <input type="radio" id="buyer" value='buyer' name="role" onChange={e => setRole(e.target.value)} />
                            <label htmlFor="buyer">Buyer</label>
                        </span>
                    </div>
                    {/* <div className="name">
                        <span className="firstname">
                            <label htmlFor="firstname">First name</label>
                            <input type="text" id="firstname" placeholder='Enter first name' />
                        </span>
                        <span className="lastname">
                            <label htmlFor="lastname">Last name</label>
                            <input type="text" id="lastname" placeholder='Enter last name' />
                        </span>
                    </div> */}
                    <div className="number">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder='Enter username' value={regUsername} onChange={e => setRegUsername(e.target.value)} />
                    </div>
                    <div className="email">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder='Enter password' value={regPw} onChange={e => setRegPw(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="confirmPw">Confirm Password</label>
                        <input type="password" id="confirmPw" placeholder='Enter confirm password' value={confirmPw} onChange={e => setConfirmPw(e.target.value)} />
                    </div>
                    <div className="location">
                        <div className="select-wrapper">
                            <select name="country" id="country" value={country} onChange={e => setCountry(e.target.value)}>
                                <option value="cambodia">Cambodia</option>
                            </select>
                        </div>
                        <div className="select-wrapper">
                            <select name="province" id="province" value={province} onChange={e => setProvince(e.target.value)}>
                                <option value="Kandal">Kandal</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Siem Reab">Siem Reab</option>
                            </select>
                        </div>
                    </div>
                    <button onClick={handleRegisterClick}>CREATE ACCOUNT</button>
                    <p style={{ textAlign: 'center', marginTop: '10px' }}>OR</p>
                    <a href='#'>Already have an account? Login</a>
                </section>
            </div>
        </div>
    );
}

export default LogReg;