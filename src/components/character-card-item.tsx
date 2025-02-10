import React from 'react';

type TCharacterCardItemProps = {
  label: string;
  value: string | number;
  url?: string;
};

function CharacterCardItem({
  label,
  value,
  url
}: TCharacterCardItemProps): React.JSX.Element {
  return (
    <div className='character-card__item'>
      <strong>{label}:</strong>{' '}
      {url ? (
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='character-card__item--link'
        >
          {value}
        </a>
      ) : (
        value
      )}
    </div>
  );
}

export default CharacterCardItem;
