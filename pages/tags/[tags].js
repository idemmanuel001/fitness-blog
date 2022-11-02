import Link from 'next/link';
import { getAllPosts, getAllTags } from '../../lib/fetchData';
import PostPreview from '../../components/PostPreview';


const Tags = ({ posts, allTags, tags }) => {

    if (posts.length < 1) {
        return (
            <div className='w-full max-w-4xl mx-auto py-6 lg:px-0 px-4 text-raisin-black'>
                <h1 className='font-bold text-2xl md:text-3xl  capitalize'> No Post for #{tags}</h1>
                <p className='font-semibold text md:text-lg mt-2'> please follow one of the #tags below for more posts</p>
                <ul className='my-2 md:my-3 flex flex-col flex-wrap items-start justify-center'>
                    {allTags.map(tag => {
                        return (
                            <Link
                                href={`/tags/${tag.tags}`}
                                passHref
                                key={tag.tags}>
                                <li className='underline cursor-pointer transition duration-300 text-raisin-black font-semibold hover:text-dark-green'>#{tag.tags}</li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        );
    }

    return (
        <div className='w-full min-h-screen py-4 md:py-6 px-4'>

            <div className='mx-auto  w-full max-w-4xl'>
                <h1 className='font-bold w-11/12 mx-auto md:w-full text-2xl md:text-3xl capitalize text-raisin-black'>
                    Posts About #{tags}
                </h1>
                <div className='flex flex-col my-4 w-full items-start justify-start'>
                    {posts.map(post => {
                        return (
                            <PostPreview key={post.slug} post={post} />
                        );
                    })}
                </div>

                <div className='my-2 md:my-4 w-11/12 mx-auto md:w-full' >
                    <h3 className='mb-1 text-lg font-bold'>check out some #tags below</h3>
                    <ul className='flex flex-col flex-wrap items-start justify-center'>
                        {allTags.map(tag => {
                            return (
                                <Link
                                    href={`/tags/${tag.tags}`}
                                    passHref
                                    key={tag.tags}>
                                    <li className='underline cursor-pointer transition duration-300 text-raisin-black font-semibold hover:text-dark-green'>#{tag.tags}</li>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tags;

export async function getStaticProps({ params }) {
    const allPosts = (await getAllPosts() || []);
    const allTags = (await getAllTags() || []);

    const tags = params.tags;

    /* A function to pull out the posts for the current tag */
    const getTagPosts = (posts) => {
        let newArray = [];
        posts.forEach(post => {
            /*Spreading the post tag items into a single array of items */
            let items = [...post['tagsCollection']['items']];

            /*Adding the post items that contains the current tag to a new array */
            items.filter(item => {
                if (item['tags'].includes(tags)) {
                    newArray.push(post);
                }
            });
        });
        return (
            newArray
        );
    };

    const posts = getTagPosts(allPosts);

    return {
        props: {
            posts,
            allTags,
            tags
        }
    };
}

export async function getStaticPaths() {
    const allTags = (await getAllTags() || []);

    /* generating the paths for the tags */
    const paths = allTags.map(tags => {
        return {
            params: { tags: tags.tags }
        };
    });

    return {
        paths,
        fallback: false
    };
}