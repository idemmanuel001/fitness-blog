import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaPinterest } from 'react-icons/fa';

const SocialMedia = ({ facebook, instagram, youtube, twitter, pinterest }) => {
  return (
    <div className='flex items-center justify-center w-full my-2 md:justify-start md:mt-0 md:items-start text-raisin-black '>
      <a
        className='flex items-center justify-center w-8 h-8 mr-2 cursor-pointer md:justify-start'
        target="_blank" rel="noreferrer noopener"
        href={facebook}>
        <FaFacebookF />
      </a>
      <a
        className='flex items-center justify-center w-8 h-8 mr-2 cursor-pointer md:justify-start'
        target="_blank" rel="noreferrer noopener"
        href={instagram}>
        <FaInstagram />
      </a>
      <a
        className='flex items-center justify-center w-8 h-8 mr-2 cursor-pointer md:justify-start'
        target="_blank" rel="noreferrer noopener"
        href={youtube}>
        <FaYoutube />
      </a>
      <a
        className='flex items-center justify-center w-8 h-8 mr-2 cursor-pointer md:justify-start'
        target="_blank" rel="noreferrer noopener"
        href={twitter}>
        <FaTwitter />
      </a>
      <a
        className='flex items-center justify-center w-8 h-8 mr-2 cursor-pointer md:justify-start'
        target="_blank" rel="noreferrer noopener"
        href={pinterest}>
        <FaPinterest />
      </a>
    </div>
  );
};

export default SocialMedia;