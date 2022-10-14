import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment/moment';

const PostPreview = ({ post }) => {
    const {title, slug, image, publishedDate, excerpt} = post

    return (
            <div className="flex flex-col items-center justify-center w-full my-4 shadow-sm md:justify-start md:flex-row">
                <div className="relative block w-4/5 max-w-2xl border h-52 md:h-40 md:w-72">
                    <Image
                        src={image.url}
                        alt={image.title}
                        layout='fill' 
                        quality={30}
                        objectFit='cover'
                        objectPosition='center center'
                    />
                </div>

                <div className="flex flex-col items-start my-2 text-left sm:my-0 sm:justify-start w-4/5 md:w-full md:ml-4 md:items-start ">

                    <h2 className='mt-0 text-lg font-bold text-night-rider'> {title}</h2>
                    <p className="text-sm italic text-medium-black font-semibold">Published on: {moment(publishedDate).format('MMM DD, YYYY')}</p>
                    <p className="text-left text-sm text-medium-black md:my-1">{excerpt.slice(0, 130)}...</p>

                    <Link href={`/post/${slug}`} passHref>
                        <a className='underline text-sm text-medium-black hover:text-dark-green transition duration-300'>Read More</a>
                    </Link>

                </div>
            </div>
         
    );
};

export default PostPreview;
