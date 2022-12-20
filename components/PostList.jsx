import { Fragment, useState } from 'react';
import Categories from './Categories';
import PostPreview from './PostPreview';


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

        <h2 className='my-4 text-lg font-bold text-center text-night-rider'>No Post For This Category</h2>
      </div>
    );
  }


  return (
    <div className='flex flex-col w-full md:grow md:mr-12 md:items-start md:justify-center'>

      <Categories filterItems={filterItems} categories={categories} renderedPosts={renderedPosts} />

      {renderedPosts.length > 0 &&
        renderedPosts.map(post => {
          return (
            <Fragment key={post.slug}>
              <PostPreview post={post} />
            </Fragment>
          );
        })}

    </div>
  );

};

export default PostLists;