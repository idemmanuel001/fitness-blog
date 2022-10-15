import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import PostLists from '../components/PostList';
import HeroBgImage from '../public/images/fruit-drink-hero-img.jpg';
import { getAllPosts, getAllCategpries, getAllTags, getAuthour } from '../lib/fetchData';
import SocialMedia from '../components/SocialMedia';
import TagsCloud from '../components/TagsCloud';
import AuthorPreview from '../components/AuthorPreview';




const Home = (props) => {
  const { posts, categories, tags, author } = props;
  console.log(posts);

  return (
    <div className="w-full min-h-screen py-2">
      <Head>
        <title>Jessica Peterson - Fitness Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full mb-2'>

        {/* Hero Section Main Contaiiner */}
        <div className='relative flex flex-col items-center justify-center flex-1 w-full px-2 text-center ' >


          {/* Hero Background Image Container */}
          <div
            className='relative w-full h-80-vh -z-10'
          >
            <Image
              src={HeroBgImage}
              alt='hero background image'
              priority='true'
              layout='fill'
              objectFit='cover'
              objectPosition='center center'
              quality={60}
              placeholder='blur'
            />
          </div>

          {/* Hero section Overlay container */}
          <section className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
            <div className='flex flex-col items-center justify-center w-10/12 max-w-lg px-4 py-4 mx-auto text-center bg-lavender text-raisin-black md:py-8 bg-opacity-95'>

              <h1 className='text-lg font-semibold md:text-xl'>TAKE PART IN A 30-DAY DETOX MARATHON</h1>

              <p className='px-4 my-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nisi provident
                magnam porro, consectetur non sed id blanditiis hic temporibus? </p>

              <Link href='#' passhref>
                <button className='px-6 py-2 bg-dark-green text-lavender '>I Am Interested</button>
              </Link>
            </div>

          </section>
        </div>


        {/* Blog Post Section */}
        <section className="flex flex-col items-center w-full max-w-4xl py-6 mx-auto md:items-start md:py-8 md:flex-row">
          <PostLists posts={posts} categories={categories} />


          {/* Aside Section */}
          <aside className='flex flex-col items-center justify-start w-full h-full px-4 md:basis-1/3 md:items-start'>

            <SocialMedia author={author} />
            <TagsCloud tags={tags} />
            <AuthorPreview />
          </aside>
        </section>

      </main>


    </div>
  );
};


export default Home;


export async function getStaticProps() {

  /* Fetching data at built time */
  const posts = (await getAllPosts() || []);
  const categories = (await getAllCategpries() || []);
  const tags = (await getAllTags() || []);
  const author = (await getAuthour() || []);


  return {
    props: { posts, categories, tags, author }
  };
}