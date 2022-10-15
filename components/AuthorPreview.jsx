import Image from 'next/image';

const AuthorPreview = ({ author }) => {
  const { name, thumbnail, bioPreview } = author;

  console.log(author);
  return (
    <div className='flex flex-col items-center w-full md:items-start'>
      <h2 className="mb-2 font-bold text-raisin-black">
        About Author
      </h2>

      <div className='relative block w-4/5 max-w-2xl border h-52 md:h-40 '>
        <Image
          src={thumbnail.url}
          alt={thumbnail.title}
          layout='fill'
          quality={30}
          objectFit='cover'
          objectPosition='center center'
        />
      </div>

      <p className="w-4/5 my-2 text-sm text-justify text-medium-black md:text-left">
        {bioPreview}
      </p>
    </div>
  );
};

export default AuthorPreview;