import Image from 'next/image';
import Link from 'next/link';

const PostPreview = ({ post }) => {

    return (
            <div className="flex flex-col items-center justify-center md:justify-start w-full  my-4 sm:flex-row shadow-sm">
                <div className="relative block h-40 w-72 sm:w-56 border">
                    <Image
                        src='/images/banana.jpg'
                        alt={post.title}
                        layout='fill' 
                        quality={30}
                        objectFit='cover'
                        objectPosition='center center'
                    />
                </div>
                <div className="flex flex-col items-start my-2  sm:my-0 text-left sm:justify-start w-72 sm:ml-4 md:items-start sm:self-start">
                    <h2 className='text-lg font-bold mt-0 text-night-rider'> {post.title} </h2>
                    <p className="text-left text-medium-black md:my-1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, corporis.</p>
                    <Link href={""} passHref>
                        <a className='underline text-medium-black'>Read More</a>
                    </Link>

                </div>
            </div>
         
    );
};

export default PostPreview;
