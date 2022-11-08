import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getAllPosts, getSimilarPosts } from '../../lib/fetchData';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PostPreview from '../../components/PostPreview';



const Post = ({ post, similarPosts }) => {
    const { title, image, content, tagsCollection, categgories } = post[0];


    return (
        <div className='w-full px-6 py-3 text-raisin-black'>
            <div className='w-full max-w-4xl mx-auto'>
                <h1 className='my-3 text-xl font-bold md:mb-6 md:text-4xl'>{title}</h1>

                <div className='relative md:float-left block aspect-[16/9] md:h-60 md:shadow-sm md:mr-5  '>
                    <Image
                        src={image.url}
                        alt={image.title}
                        layout='fill'
                        quality={30}
                        objectFit='cover'
                        objectPosition='center center'
                    />
                </div>

                <div className='my-4 md:my-0 '>
                    {documentToReactComponents(content.json)}
                </div>

                <ul className='mb-3 md:my-2'>
                    {tagsCollection.items.map(tag => {
                        return (
                            <Link key={tag.tags} href={`/tags/${tag.tags}`} passHref>
                                <span className="text-center cursor-pointer text-lavender bg-dark-green font-semibold rounded-sm py-0.5 px-1 mr-1 mb-1 text-sm align-middle ">
                                    #{tag.tags}
                                </span>
                            </Link>
                        );
                    })}
                </ul>

                {/* Similar posts */}
                <div className='my-6'>
                    <h2 className='text-xl font-bold'>
                        You Can Also Read
                    </h2>

                    <div className='flex flex-col items-center md:justify-start' >
                        {similarPosts.map(post => {
                            return (
                                <PostPreview key={post.slug} post={post} />
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Post;

export async function getStaticProps({ params }) {
    const post = (await getPostBySlug(params.slug) || []);
    const postCategory = post[0].categories['slug'];
    const similarPosts = (await getSimilarPosts(postCategory, params.slug) || []);

    return {
        props: {
            post,
            similarPosts
        }
    };
};


export async function getStaticPaths() {
    const allPosts = (await getAllPosts() || []);

    /* generating the paths for the slugs */
    const paths = allPosts.map(post => {
        return {
            params: { slug: post.slug }
        };
    });

    return {
        paths,
        fallback: false
    };
}