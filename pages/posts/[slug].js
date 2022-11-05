import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getAllPosts, getSimilarPosts } from '../../lib/fetchData';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PostPreview from '../../components/PostPreview';



const Post = ({ post, similarPosts }) => {
    const { title, image, content, tagsCollection, categgories } = post[0];

    console.log(post);
    console.log(similarPosts);
    return (
        <div className='w-full py-3 px-4'>
            <div className='w-full mx-auto'>
                <h1>{title}</h1>

                <div className='relative md:float-left block aspect-[16/9] md:h-60 '>
                    <Image
                        src={image.url}
                        alt={image.title}
                        layout='fill'
                        quality={30}
                        objectFit='cover'
                        objectPosition='center center'
                    />
                </div>

                <div>
                    {documentToReactComponents(content.json)}
                </div>

                <ul>
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
                <div>
                    <h2>
                        You can also read more
                    </h2>

                    <div>
                        {similarPosts.map(post => {
                            return (
                                <PostPreview post={post} />
                            );
                        })}
                    </div>
                </div>
            </div>


            {/* Read More Section */}

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