const Card = props => {
  const { name, image, rarity, artist } = props;

  const rarityClass = () => {
    switch (rarity) {
      case 'Common':
        return 'common';
      case 'Uncommon':
        return 'uncommon';
      case 'Rare':
        return 'rare';
      case 'Legendary':
        return 'legendary';
      default:
        return '';
    }
  };

  return (
    <div
      className='bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg'
      style={{
        width: '300px',
        margin: '8px'
      }}
    >
      <div id='header' className='flex-col'>
        <img alt={name} className='w-45 rounded-md m-auto' src={image} />
        <div id='body' className='flex flex-col ml-5'>
          <h4 id='name' className='text-xl font-semibold mb-2'>
            {name}
          </h4>

          <p className={rarityClass()}>{rarity}</p>

          <div
            className='flex mt-5'
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            }}
          >
            <img
              alt='avatar'
              className='w-6 rounded-full border-2 border-gray-300'
              src='https://picsum.photos/seed/picsum/200'
            />
            <p className='ml-3'>{artist}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
