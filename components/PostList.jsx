import { Fragment, useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import Categories from './Categories';
import { data } from './MockData';

/* Extracting the list of category from the data and puting it 
 in an array of unique set of values*/
let allCategories = ['all', ...new Set(data.map(dataItem => dataItem.category))];

const PostLists = () => {
  const [posts, setPosts] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const [numberOfPosts, setNumberOfPosts] = useState(data.length);

  /* Filter items based on categories */
  const filterItems = (category) => {
    if (category === 'all') {
      setPosts(data);
      return;
    }
    const newPosts = data.filter(dataItem => {
      return (
        dataItem.category === category
      );
    });
    setPosts(newPosts);

  };

  return (
    <div className='flex flex-col w-full md:grow md:mr-12 px-2 md:items-start md:justify-center'>

      <Categories categories={categories} data={data} filterItems={filterItems} />


      {posts.map(post => {
        const { id, title, category, img, content } = post;
        return (
          <Fragment key={id}>
            <BlogPost post={post} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default PostLists;