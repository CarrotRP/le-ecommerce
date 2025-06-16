import './LogReg.css';

function LogReg(props) {

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
                        <p>Mobile number</p>
                        <input type="text" placeholder='Enter phone number' />
                    </div>
                    <div className="password">
                        <p>Password</p>
                        <input type="password" placeholder='Enter password' />
                    </div>
                    <button>LOGIN</button>
                    <a href="#">Forgot your password?</a>
                    <p style={{ textAlign: 'center' }}>OR</p>
                    <a href='#'>New to Le E-commerce? Register</a>
                </section>
                <section className="register-content" ref={props.registerRef}>
                    <div className='role'>
                        <p>Role(Required)</p>
                        <span className='seller'>
                            <input type="radio" id="seller" value='seller' name="role" />
                            <label htmlFor="seller">Seller</label>
                        </span>
                        <span className='buyer'>
                            <input type="radio" id="buyer" value='buyer' name="role" />
                            <label htmlFor="buyer">Buyer</label>
                        </span>
                    </div>
                    <div className="name">
                        <span className="firstname">
                            <label htmlFor="firstname">First name</label>
                            <input type="text" id="firstname" placeholder='Enter first name' />
                        </span>
                        <span className="lastname">
                            <label htmlFor="lastname">Last name</label>
                            <input type="text" id="lastname" placeholder='Enter last name' />
                        </span>
                    </div>
                    <div className="number">
                        <label htmlFor="number">Mobile number</label>
                        <input type="text" id="number" placeholder='Enter phone number' />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="mail" id="email" placeholder='Enter email' />
                    </div>
                    <div className="location">
                        <div className="select-wrapper">
                            <select name="country" id="country">
                                <option value="Cambodia">Cambodia</option>
                            </select>
                        </div>
                        <div className="select-wrapper">
                            <select name="province" id="province">
                                <option value="Kandal">Kandal</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Siem Reab">Siem Reab</option>
                            </select>
                        </div>
                    </div>
                    <button>CREATE ACCOUNT</button>
                    <p style={{ textAlign: 'center', marginTop: '10px' }}>OR</p>
                    <a href='#'>Already have an account? Login</a>
                </section>
            </div>
        </div>
    );
}

export default LogReg;