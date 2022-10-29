import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';

const Header = () => {

    return (
        <header className='z-50 w-full h-10 px-4 py-4 mb-2 bg-white shadow md:h-12 md:shadow-md'>
            <div className='flex items-center justify-between w-full h-full max-w-4xl mx-auto'>

                <Link href='/' passhref className='w-full h-full'>
                    <div className="w-full">
                        <Image
                            src='/images/logo.svg'
                            alt='logo'
                            width='200'
                            height='30'
                            priority
                        />
                    </div>
                </Link>

                <Navigation />
            </div>


        </header>
    );
};

export default Header;