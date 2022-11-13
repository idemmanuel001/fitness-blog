import { useState, useEffect } from 'react';
import Image from 'next/image';
import flowerPhoto from '../public/images/flower-photo.webp';
import { getAuthour } from '../lib/fetchData';
import SocialMedia from '../components/SocialMedia';
import { MdOutlineMarkEmailRead } from 'react-icons/md';



const contact = ({ author }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [genericErrorMsg, setGenericErrorMsg] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [success, setSuccess] = useState(false);

    /* valid email regex pattern */
    const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    // const genericErrorStyles = ;

    const handleNameChange = (event) => {
        setName(event.target.value);
        setNameError(false);
        setGenericErrorMsg(false);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailError(false);
        setGenericErrorMsg(false);
    };
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
        setMessageError(false);
        setGenericErrorMsg(false);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        /* checking the value of the fields and updatng the state accordingly */
        if (!name) setNameError(true);
        if (!email) setEmailError(true);
        if (emailRegex.test(email) === false) setEmailError(true);
        if (!message) setMessageError(true);

        if ((name === '') || (email === '') || (emailRegex.test(email) === false) || (message === '')) {
            setGenericErrorMsg(true);
        }

        if (!nameError && !emailError && emailRegex.test(email) && !messageError) setSuccess(true);

        setName('');
        setEmail('');
        setMessage('');
    };

    useEffect(() => {
        if (success) {
            setTimeout(() => setSuccess(false), 2500);
        }
    });

    return (
        <div className='w-full px-6 py-3 text-raisin-black'>
            <div className='flex flex-col items-center justify-center max-w-4xl mx-auto mt-2 mb-6 md:mb- md:flex-row'>
                <div className='flex flex-col items-start justify-center w-full mb-4 md:mr-8 md:mb-0'>

                    <div className='mb-3'>
                        <h1 className='text-xl font-bold uppercase md:text-2xl'>Hello, do you want to talk?</h1>
                        <p className="my-2 font-semibold">If you want to contact me, offer an advertisement or a collaboration, you can write me here</p>
                    </div>

                    <div className="flex flex-col items-start justify-center w-full px-4 py-3 mb-3 border-2 border-dashed md:mb-2 bg-light-brown border-dashed-border h-fit">
                        <h2 className='w-full mb-2 text-lg font-bold uppercase'>send me a message</h2>

                        {/* form validation generic error message*/}
                        <p className={`mb-2 text-sm font-semibold text-red-500 ${genericErrorMsg ? 'block' : 'hidden'}`}>
                            One or more field/s is empty, please enter the correct data
                        </p>

                        {/* form submited successfully message*/}
                        <p className={`mb-2 text-sm font-semibold items-center justify-center text-green-500 ${success ? 'flex' : 'hidden'}`}>
                            <MdOutlineMarkEmailRead className='w-8 h-8 md:mr-1' />Submited successfully, thanks for dropping by.
                        </p>

                        <form className='grid w-full grid-cols-2 grid-rows-5 mb-3 md:mb-5 gap-x-3 gap-y-3'>
                            {/* name field */}
                            <div
                                className={`col-span-2 row-span-1 border shadow-inner focus-within:border-none md:col-span-1 ${nameError ? 'border-red-500' : 'border-gray-400'}`}
                            >
                                <label className='sr-only' htmlFor="name"></label>
                                <input
                                    className='w-full h-full p-2 bg-lavender focus:outline-dark-green'
                                    onChange={handleNameChange}
                                    value={name}
                                    type='text'
                                    id='name'
                                    placeholder='name' />
                            </div>

                            {/* email field*/}
                            <div
                                className={`col-span-2 row-span-1 border shadow-inner focus-within:border-none md:col-span-1 ${emailError ? 'border-red-500' : 'border-gray-400'}`}
                            >
                                <label className='sr-only' htmlFor="email"></label>
                                <input
                                    className='w-full h-full p-2 bg-lavender focus:outline-dark-green'
                                    onChange={handleEmailChange}
                                    value={email}
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='email' />
                            </div>

                            {/* message field */}
                            <div
                                className={`col-span-2 row-span-3  border shadow-inner focus-within:border-none ${messageError ? 'border-red-500' : 'border-gray-400'}`}
                            >
                                <label className='sr-only' htmlFor="message"></label>
                                <textarea
                                    className={`w-full h-full p-2 border resize-none bg-lavender focus:outline-dark-green `}
                                    onChange={handleMessageChange}
                                    value={message}
                                    name="message"
                                    id="message"
                                    placeholder='message'
                                >
                                </textarea>
                            </div>

                            {/* submit button */}
                            <button
                                className='uppercase col-span-1 transition duration-300 hover:text-raisin-black hover:cursor-pointer row-span-1 px-2 py-0.5 font-bold bg-dark-green text-lavender'
                                type="submit"
                                onClick={(event) => formSubmitHandler(event)}
                            > send</button>
                        </form>

                        <SocialMedia author={author} />
                    </div>

                </div>
                <div className='relative hidden md:block h-96 w-full md:max-w-sm aspect-[16/9]'>
                    <Image
                        src={flowerPhoto}
                        alt='flower photo'
                        layout='fill'
                        placeholder='blur'
                        quality={30}
                        objectFit='cover'
                        objectPosition='center center'
                    />
                </div>
            </div>
        </div>
    );
};

export default contact;


export async function getStaticProps() {
    const author = (await getAuthour() || []);

    return {
        props: { author }
    };

}