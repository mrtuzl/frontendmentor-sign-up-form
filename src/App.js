import React from 'react';
import './App.css';
import icon from './icon-error.svg';


function App() {

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMail, setErrorMail] = React.useState("");
  const [error, setError] = React.useState("");


  function handleChangeName(event) {
    event.preventDefault();
    setFirstName(event.target.value);

  }

  function handleChangeLastName(event) {
    event.preventDefault();
    setLastName(event.target.value);

  }

  function handleChangeMail(event) {
    event.preventDefault();
    setMail(event.target.value);

  }

  function handleChangePassword(event) {
    event.preventDefault();
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (firstName.length === 0) {
      setError(true)
    }
    if (lastName.length === 0) {
      setError(true)
    }
    if (mail.match(pattern)) {
      setErrorMail(false)
    }
    else {
      setErrorMail(true)
    }
    if (password.length === 0) {
      setError(true)
    }
  }

  return (
    <div className="App">
          <div className='container'>
              <div className='sections'>
                  <div className='section1'>
                    <h1>Learn to code by watching others </h1>
                    <p> See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                  </div>
                  <div className='section2'>
                    <button className='tryit'> <span>Try it free 7 days </span> then $20/mo. thereafter </button>
                    <div className='form'>
                      <form onSubmit={handleSubmit}>
                     <div className={`input ${error&&firstName.length<=0 ? "empty-input" : "" }`}>  <input
                            type="text"
                            onChange={handleChangeName}
                            placeholder={` ${error&&firstName.length<=0 ? " " : "First Name" }`}
                            className={`text ${error&&firstName.length<=0 ? "empty" : ""}`}
                       />  <img src={icon} alt="error-icon" className={`warning ${error&&firstName.length<=0 ? "empty-i" : "" }`}/></div>
                       <p className={`warning ${error&&firstName.length<=0 ? "empty-p" : "" }`}> First Name cannot be empty</p>

                     <div className={`input ${error&&lastName.length<=0 ? "empty-input" : "" }`}>  <input
                        type="text"
                        onChange={handleChangeLastName}
                        placeholder={` ${error&&lastName.length<=0 ? " " : "Last Name" }`}
                        className="text"
                      />  <img src={icon} alt="error-icon" className={`warning ${error&&lastName.length<=0 ? "empty-i" : "" }`}/> </div>
                      <p className={`warning ${error&&lastName.length<=0 ? "empty-p" : "" }`}> Last Name cannot be empty</p>  
                      

                     <div className={`input ${error&&mail.length<=0 ? "empty-input" : "" }`}>  <input
                        type="text"
                        onChange={handleChangeMail}
                        placeholder={` ${error&&mail.length<=0 ? "email@example/com" : "Email Address" }`}
                        className="text"
                      />  <img src={icon} alt="error-icon" className={`warning ${error&&mail.length<=0 ? "empty-i" : "" }`}/>
                      </div>
                    <p className={`warning ${errorMail ? "empty-p" : "" }`}> Looks like this is not an email</p>
                     
                    <div className={`input ${error&&password.length<=0 ? "empty-input" : "" }`}> <input
                        type="password"
                        onChange={handleChangePassword}
                        className="text"
                        placeholder={` ${error&&password.length<=0 ? " " : "Password" }`}
                      />  <img src={icon} alt="error-icon" className={`warning ${error&&password.length<=0 ? "empty-i" : "" }`}/> </div>
   
                  <p className={`warning ${error&&password.length<=0? "empty-p" : "" }`}> Password cannot be empty</p>
                  <button className='claim' > CLAIM YOUR FREE TRAIL </button>
                  </form>
                   
   <p className='terms'>By clicking the button, you are agreeing to our  <span>Terms and Services </span> </p>
                    
                    </div>
                  </div>

              </div>
          </div>
    </div>
  );
}

export default App;
