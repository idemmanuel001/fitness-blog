import Image from 'next/image';
import flowerPhoto from '../public/images/flower-photo.webp';


const contact = () => {
    return (
        <div className='w-full px-6 py-3 text-raisin-black'>
            <div className='flex flex-col items-center justify-center max-w-4xl mx-auto mt-2 mb-6 md:mb- md:flex-row'>
                <div className='flex flex-col items-start justify-center w-full mb-4 md:mr-8 md:mb-0'>

                        <div className='mb-3'>
                            <h1 className='text-xl font-bold uppercase md:text-2xl'>Hello, do you want to talk?</h1>
                            <p className="my-2 font-semibold">If you want to contact to me, offer an advertisement or a collaboration, you can write me here</p>
                        </div>

                        <div className="flex flex-col items-start justify-center w-full px-4 py-3 mb-3 border-2 border-dashed md:mb-2 bg-light-brown border-dashed-border h-fit">
                            <h2 className='w-full mb-2 text-lg font-bold uppercase'>send me a message</h2>
                           
                            <form className='grid w-full grid-cols-2 grid-rows-5 gap-x-3 gap-y-3'>
                                <input 
                                className='col-span-2 row-span-1 p-2 border border-gray-400 md:col-span-1 bg-lavender focus:outline-dark-green' 
                                type='text' 
                                name='name' 
                                id='name'
                                placeholder='name' />

                                <input 
                                className='col-span-2 row-span-1 p-2 border border-gray-400 md:col-span-1 bg-lavender focus:outline-dark-green ' 
                                type='email' 
                                name='email' 
                                id='email' 
                                placeholder='email'/>

                                <textarea 
                                className='col-span-2 row-span-3 p-2 border border-gray-400 bg-lavender focus:outline-dark-green ' 
                                name="message" 
                                id="message" 
                                cols="20" 
                                rows="5"
                                placeholder='message'
                                >
                                </textarea>

                                <button 
                                className='uppercase col-span-1 row-span-1 px-2 py-0.5 font-bold bg-dark-green text-lavender'
                                type="submit">send</button>
                            </form>
                        </div>

                </div>
                <div className='relative h-96 w-full max-w-sm aspect-[16/9]'>
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