import Image from 'next/image';
import { getAuthour } from '../lib/fetchData';
import SocialMedia from '../components/SocialMedia';


const about = ({ author }) => {
    console.log(author);

    return (
        <div>
            <div>
                <h1>HI! I AM {author.name}, AND I'M GLAD TO SEE YOU HERE</h1>
                <p>{author.bioPreview}</p>
            </div>

            <div>
                <div className='relative aspect-[6/9]'>
                    <Image
                        src={author.thumbnail.url}
                        alt={author.thumbnail.title}
                        layout='fill'
                        quality={30}
                        objectFit='cover'
                        objectPosition='center center'
                    />
                </div>

                <SocialMedia author={author} />
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