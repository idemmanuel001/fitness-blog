import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getAllPosts, getSimilarPosts } from '../../lib/fetchData';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PostPreview from '../../components/PostPreview';
import { Slide, Fade } from "react-awesome-reveal";




const Post = ({ post, similarPosts }) => {

    if (!post && !similarPosts) return (
        <Fade triggerOnce='true' delay={100} duration={1000} damping={0.15}>
            <div className='h-32 md:h-56 w-full text-raisin-black flex flex-col items-center justify-center font-bold '>
                <h1 className='text-xl uppercase mb-2'>Page does not exist</h1>
                <p className='text-lg capitalize'>Redirecting back to homepage...</p>
            </div>
        </Fade>
    );

    if (post && similarPosts) {

        const { title, image, content, tagsCollection, categgories } = post[0];

        return (
            <div className='blog-post w-full px-6 py-3 text-raisin-black'>
                <div className='w-full max-w-4xl mx-auto'>
                    <Fade triggerOnce='true' cascade='true' delay={100} duration={1000} damping={0.15}>
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
                    </Fade>

                    {/* Similar posts */}

                    {similarPosts.length > 0 && (
                        <div className='my-6'>
                            <h2 className='text-xl font-bold'>
                                You Can Also Read:
                            </h2>

                            <div className='flex flex-col items-center md:justify-start' >
                                {similarPosts.map(post => {
                                    return (
                                        <Slide key={post.slug} triggerOnce='true' direction='up' delay={50} duration={500} damping={0.3}>
                                            <PostPreview key={post.slug} post={post} />
                                        </Slide>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        );
    }
};

export default Post;

export async function getStaticProps({ params }) {
    const post = (await getPostBySlug(params.slug) || []);
    const postCategory = post[0]?.categories['slug'];
    const similarPosts = (await getSimilarPosts(postCategory, params.slug) || []);

    /* redirecting back to homepage if the path does not exist */
    if (!post.length || !postCategory.length) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {
            post,
            similarPosts,
            revalidate: 1,
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
        fallback: true
    };
}