import { useState } from 'react';
import Link from 'next/link';


const TagsCloud = ({ tags }) => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className='flex flex-col items-center mt-2 mb-6 md:items-start '>
      <h2 className="mb-2 font-bold text-raisin-black">
        Tags Cloud
      </h2>
      <div className="flex flex-col md:items-start">

        {/* tags container */}
        <div className="inline-flex flex-wrap items-center justify-center md:justify-start">
          {viewMore ?
            /* renders all tags */
            tags.map(tag => {
              return (
                <Link key={tag.tags} href={`/tags/${tag.tags}`} passHref>
                  <span className="text-center cursor-pointer text-lavender bg-dark-green font-semibold rounded-sm py-0.5 px-1 mr-1 mb-1 text-sm align-middle ">
                    #{tag.tags}
                  </span>
                </Link>
              );
            }) :

            /* renders the first four tags */
            tags.slice(0, 4).map(tag => {
              return (
                <Link key={tag.tags} href={`/tags/${tag.tags}`} passHref>
                  <span className="text-center cursor-pointer text-lavender bg-dark-green text-sm font-semibold rounded-sm py-0.5 px-1 mr-1 mb-1 align-middle ">
                    #{tag.tags}
                  </span>
                </Link>
              );
            })
          }
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setViewMore(!viewMore)}
          className="text-sm text-center underline transition duration-300 cursor-pointer text-raisin-black hover:text-dark-green "
        >
          {viewMore ? 'view less' : 'view more'}
        </button>
      </div>

    </div>
  );
};

export default TagsCloud;