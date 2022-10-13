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

  return (
    <div className='flex flex-col w-full md:grow md:mr-12 px-2 md:items-start md:justify-center'>

      <Categories filterItems={filterItems} categories={categories} renderedPosts={renderedPosts} />

      {renderedPosts.map(post => {

        return (
          <Fragment key={'pos'}>
            <PostPreview post={post} />
          </Fragment>
        );
      })}
    </div>
  );

};

export default PostLists;