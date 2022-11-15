import { useState, useEffect } from 'react';
import { MdOutlineMarkEmailRead } from 'react-icons/md';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [success, setSuccess] = useState(false);

  /* valid email regex pattern */
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

    if (!nameError && !emailError && emailRegex.test(email)) setSuccess(true);
    setName('');
    setEmail('');
  };

  /* Error text styles */
  const nameErrorStyles = `text-red-500 px-3 my-1 md:p-1 text-xs ${nameError ? ' block ' : 'hidden'}`;
  const emailErrorStyles = `text-red-500 px-3 my-1 md:p-1 text-xs ${emailError ? ' block ' : 'hidden'}`;

  /* Form successfully submited message styles */
  const successMessageStyles = `text-center text-dark-green font-semibold w-full text-sm max-w-lg flex flex-col items-center justify-center md:flex-row mt-2 ${success ? 'block' : 'hidden'}`;


  useEffect(() => {
    if (success) {
      setTimeout(() => setSuccess(false), 2500);
    }
  });


  return (
    <footer className="w-full h-fit relative bottom-0 left-0 right-0">
      <div className="flex flex-col items-center justify-center w-full px-6 py-6 bg-clear-day">
        <div className="flex flex-col items-center justify-center w-full h-full max-w-lg mb-4">
          <h2 className="w-full mb-2 font-bold text-center text-raisin-black">
            SUBSCRIBE AND DON'T MISS NEW ARTICLES
          </h2>

          <p className="text-sm text-center full">
            Please sign up for my email notification so you don't miss out when I post a new article. You may withdraw your consent any time by unsubscribing.
          </p>
        </div>

        {/* email list form */}
        <div className="flex flex-col items-center justify-center w-full">

          {/* successful form submission message */}
          <p className={successMessageStyles}>
            <MdOutlineMarkEmailRead className='w-8 h-8 md:mr-1' />Submited successfully, Thanks for subscribing.
          </p>

          <form
            className='flex flex-col items-center justify-center w-full max-w-lg mt-2 mb-6 md:flex-row md:items-start '
          >
            <div className="flex flex-col items-start w-full mb-3 md:w-32 md:mb-0 md:mr-4 ">
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
            <div className="flex flex-col items-start w-full mb-3 md:w-52 md:mb-0 md:mr-4 ">
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
              className='w-full p-3 text-sm font-semibold text-white transition duration-300 cursor-pointer md:py-1 hover:text-raisin-black md:px-3 md:w-28 bg-dark-green '
              onClick={(event) => formSubmitHandler(event)}
              type="submit">
              SEND
            </button>
          </form>
        </div>


      </div>
      <div className="flex items-center justify-center py-4 h-fit bg-raisin-black text-lavender ">
        <p className="w-full max-w-lg px-6 py-4 text-sm font-semibold text-center ">
          Built by Idoko Emmanuel, 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;