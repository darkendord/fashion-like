import './App.css';

function App() {
  return (
      <article className='hero'>

        <div className='loginpage'>
          <header className="lpsection1">
            <h1>
              Fashion Like 
            </h1>
            <h2>
              Connect with people who love fashion and everything the world fashion has to offer.
            </h2>
          </header>

          <section className="lpsection2">
            <form className="login-form">
              
              <div className="loginsection1 ">
                <div className="credentials " >
                  <input className="" type="text" name="username" placeholder="Username"/>
                </div>
                <div className="" data-validate="Password is required">
                  <input className="" type="password" name="pass" placeholder="Password"/>
                </div>
              </div>

              <div className="loginsection2 px2">
                <section className="rememberme">
                  <input className="" id="ckb1" type="checkbox" name="remember-me"/>
                  <label className="txt1" for="ckb1">
                  Remember me
                  </label>
                </section>

                <section>
                  <a href="#" className="forgotlink txt1 link-btn">
                  Forgot?
                  </a>
                </section>
              </div>

              <div className="loginsection3">
                <button className="login-form-btn btn">
                Login
                </button>
              </div>

              <div className="loginsection4 px2">
                <span className="txt2">
                Not a member?
                </span>
                <a href="#" className="txt2 link-btn">
                Sign up now
                </a>
              </div>

            </form>
          </section>
        </div>
      </article>
  );
}

export default App;
