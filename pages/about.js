import Image from 'next/image';
import { getAuthour } from '../lib/fetchData';
import SocialMedia from '../components/SocialMedia';


const about = ({ author }) => {

    return (
        <div className='w-full py-3 px-6 text-raisin-black'>
            <div className='flex w-full max-w-4xl mx-auto flex-col md:flex-row '>
                <div className='w-full max-w-2xl mb-2'>
                    <h1 className='my-3 text-xl uppercase font-bold md:mb-6 md:text-3xl'>HI! I AM {author.name}, AND I'M GLAD TO SEE YOU HERE</h1>
                    <p className='text-lg ' >
                        {author.bio}
                    </p>
                </div>

                <div className='my-2 w- md:ml-10 max-w-lg'>
                    <div className='my-1 relative aspect-[6/9] md:max-w-md md:w-full md:h-56'>
                        <Image
                            src={author.image.url}
                            alt={author.image.title}
                            layout='fill'
                            quality={30}
                            objectFit='cover'
                            objectPosition='center center'
                        />
                    </div>

                    <SocialMedia author={author} />
                </div>
            </div>

        </div>
    );
};

export default about;

export async function getStaticProps() {

    /* Fetching Author data at built time */
    const author = (await getAuthour() || []);


    return {
        props: { author }
    };
}