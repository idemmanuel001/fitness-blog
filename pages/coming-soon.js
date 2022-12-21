import { Fade } from "react-awesome-reveal";


const ComingSoon = () => {
    return (
        <Fade triggerOnce='true' delay={100} duration={1000} damping={0.15}>
            <div className='w-full px-6 py-3 text-raisin-black'>
                <div className='w-full mx-auto max-w-4xl flex flex-col items-center my-16 justify-center text-center leading-loose'>
                    <h1 className='text-2xl md:text-4xl font-bold uppercase'>
                        Registration for the marathon has ended!
                    </h1>
                    <p className='text-lg md:text-xl font-semibold capitalize my-3'>please come back later to register</p>
                </div>
            </div>
        </Fade>
    );
};

export default ComingSoon;