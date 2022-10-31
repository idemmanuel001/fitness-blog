import { useState } from 'react';
import { getAllPosts, getAllTags } from '../../lib/fetchData';
import PostPreview from '../../components/PostPreview';


const Tags = ({ posts, tags }) => {
    const [currentPosts, setCurrentPosts] = useState(posts);

    if (currentPosts.length < 1) {
        return (
            <div className='w-full max-w-4xl mx-auto h-72-vh py-6 lg:px-0 px-4 text-raisin-black'>
                <h1 className='font-bold text-2xl md:text-3xl  capitalize'> No Post for this tag now</h1>
                <p className='font-semibold text md:text-lg mt-2'> please come back later</p>
            </div>
        );
    }

    return (
        <div className='w-full min-h-screen py-6 px-4'>

            <div className='mx-auto  w-full max-w-4xl'>
                <h1 className='font-bold text-2xl md:text-3xl capitalize text-raisin-black'>
                    Posts About #{tags}
                </h1>
                <div className='flex flex-col mt-4 w-full items-start'>
                    {currentPosts.map(post => {
                        return (
                            <PostPreview key={post.slug} post={post} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};


export default Tags;

export async function getStaticProps({ params }) {
    const allPosts = (await getAllPosts() || []);
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