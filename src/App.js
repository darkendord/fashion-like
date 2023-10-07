import './App.css';
import './Components/Footer'
import Footer from './Components/Footer';

function App() {
  return (
      <article className='hero'>

        <div className='loginpage'>
          <header className="lpsection1">
            <h1>
              Fashion Like 
            </h1>
            <h3>
              Connect with people who love fashion and everything the world fashion has to offer.
            </h3>
          </header>

          <section className="lpsection2">
            <form className="login-form">
              
              <div className="loginsection1 ">
                <div className="credentials px3" >
                  <input className="" type="text" name="username" placeholder="Username"/>
                </div>
                <div className="" data-validate="Password is required">
                  <input className="" type="password" name="pass" placeholder="Password"/>
                </div>
              </div>

              <div className="loginsection2 ">
                <section className="rememberme">
                  <input className="" id="ckb1" type="checkbox" name="remember-me"/>
                  <label className="txt1" for="ckb1">
                  Remember me
                  </label>
                </section>

                <section>
                  <a href="#" className="link txt1 link-btn">
                  Forgot?
                  </a>
                </section>
              </div>

              <div className="loginsection3">
                <button className="login-form-btn btn">
                Log In
                </button>
              </div>

              <div className="loginsection4">
                <span className="txt2">
                Not a member?
                </span>
                <a href="#" className="txt2 link-btn">
                Sign up now
                </a>
              </div>

            </form>
          </section>

          <section className='lpsection3'>
            <div>
              <a href="#" className="link standardlink">Create a Page</a> for a celebrity, brand or business.
            </div>
          </section>
        </div>
        <footer>
          <Footer/>
        </footer>

      </article>
  );
}

export default App;
