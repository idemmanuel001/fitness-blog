import { useState, useEffect } from 'react';
import {MdOutlineMarkEmailRead} from 'react-icons/md'

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [success, setSuccess] = useState(false);


  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

  const handleNamechange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };
  const handleEmailchange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!name) setNameError(true);
    if (!email) setEmailError(true);
    if (emailRegex.test(email) === false) setEmailError(true);

    if(!nameError && !emailError && emailRegex.test(email)) setSuccess(true)
    setName('');
    setEmail('');
  };

  /* Error text styles */
  const nameErrorStyles = `text-red-500 px-3 my-1 md:p-1 text-xs ${nameError ? ' block ' : 'hidden'}`;
  const emailErrorStyles = `text-red-500 px-3 my-1 md:p-1 text-xs ${emailError ? ' block ' : 'hidden'}`;

  /* Form successfully submited message styles */
  const successMessageStyles = `text-center text-dark-green font-semibold w-11/12 text-sm max-w-lg flex flex-col items-center justify-center md:flex-row mt-2 ${success ? 'block' : 'hidden'}`


  useEffect(()=>{
   if(success){
     setTimeout(()=> setSuccess(false), 2500)
   }
  })


  return (
    <footer className="w-full h-fit">
      <div className="flex flex-col justify-center items-center px-4 py-6 w-full bg-clear-day">
        <div className="w-11/12 h-full max-w-lg flex flex-col justify-center mb-4 items-center">
          <h2 className="mb-2 font-bold text-center w-11/12 text-raisin-black">
            SUBSCRIBE AND DON'T MISS NEW ARTICLES
          </h2>

          <p className="text-center text-sm w-11/12">
            Please sign up for my email notification so you don't miss out when I post a new article. You may withdraw your consent any time by unsubscribing.
          </p>
        </div>

        {/* email list form */}
        <div className="flex flex-col items-center w-full justify-center">

          {/* successful form submission message */}
          <p className={successMessageStyles}>
          <MdOutlineMarkEmailRead className='w-8 h-8 md:mr-1' />Submited successfully, Thanks for subscribing.
          </p>

          <form
            className='flex flex-col w-full max-w-lg  md:flex-row items-center md:items-start justify-center mb-6 mt-2 '
          >
            <div className="flex flex-col w-11/12 md:w-32 mb-3 md:mb-0 items-start md:mr-4 ">
              <label className='sr-only' htmlFor="name"></label>
              <input
                className='bg-white  w-full text-dark-gray p-3 text-sm  md:py-1 md:px-1.5 shadow-inner'
                type="text"
                name="name"
                width={20}
                id="name"
                placeholder="Name"
                value={name}
                onChange={handleNamechange}
                required />
              <p className={nameErrorStyles}>please enter a name</p>

            </div>
            <div className="flex flex-col md:w-52 w-11/12 mb-3 md:mb-0 items-start md:mr-4 ">
              <label className='sr-only' htmlFor="email"></label>
              <input
                className='bg-white w-full  text-dark-gray p-3 md:py-1 md:px-1.5 text-sm shadow-inner'
                type="email"
                name="email"
                width={40}
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailchange}
                required />
              <p className={emailErrorStyles}>please enter a valid email</p>
            </div>

            <button
              className='md:py-1 p-3 transition duration-300 hover:text-raisin-black md:px-3 w-11/12 md:w-28 bg-dark-green text-white text-sm font-semibold '
              onClick={(event) => formSubmitHandler(event)}
              type="submit">
              SEND
            </button>
          </form>
        </div>


      </div>
      <div className="flex justify-center items-center h-fit py-4 bg-raisin-black text-lavender ">
        <p className="text-center max-w-lg w-11/12 text-sm py-4 font-semibold px-4 ">
          Built by Idoko Emmanuel, 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;