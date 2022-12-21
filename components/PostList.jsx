import { useState } from 'react';
import Categories from './Categories';
import PostPreview from './PostPreview';
import { Slide } from "react-awesome-reveal";



const PostLists = ({ posts, categories }) => {
  const [renderedPosts, setRenderedPosts] = useState(posts);


  /* Filter items based on categories */
  const filterItems = (category) => {
    if (category.slug === 'all') {
      setRenderedPosts(posts);
      return;
    }
    const newPosts = posts.filter(blogItem => {
      return (
        category.slug === blogItem.categories.slug
      );
    });
    setRenderedPosts(newPosts);
  };


  if (renderedPosts.length < 1) {
    return (
      <div className='flex flex-col w-full md:grow md:mr-12 md:items-start md:justify-center'>
        <Categories filterItems={filterItems} categories={categories} renderedPosts={renderedPosts} />
        <Slide direction='up' delay={50} duration={500} >
          <h2 className='mt-10 mb-24 text-base font-bold text-center md:text-lg md:my-4 text-night-rider'>No Post For This Category</h2>
        </Slide >

      </div>
    );
  }


  return (
    <div className='flex flex-col w-full md:grow md:mr-12 md:items-start md:justify-center'>

      <Categories filterItems={filterItems} categories={categories} renderedPosts={renderedPosts} />

      {renderedPosts.length > 0 &&
        renderedPosts.map(post => {
          return (
            <Slide key={post.slug} triggerOnce='true' direction='up' delay={50} duration={500} damping={0.3}>
              <PostPreview post={post} />
            </Slide>
          );
        })}

    </div>
  );

};

export default PostLists;