import React from 'react';
import dayjs from 'dayjs';

import { TCharacterPreview } from '../types';
import { getStatusColor } from '../helper';
import { CharacterEpisodes } from './index';

type TCharacterPreviewCardProps = {
  character: TCharacterPreview;
};

function CharacterPreviewCard({
  character
}: TCharacterPreviewCardProps): React.JSX.Element {
  return (
    <div className='preview-card'>
      <img
        src={character.image}
        alt={character.name}
        className='preview-card__image'
      />

      <div className='preview-card__header'>
        <div className='preview-card__header-name'>{character.name}</div>
      </div>

      // TODO Body toggle
      <div className='preview-card__body'>
        <div className='preview-card__details'>
          <div className='preview-card__detail'>
            <strong>Species:</strong> {character.species}
          </div>
          <div className='preview-card__detail'>
            <strong>Type:</strong> {character.type || 'N/A'}
          </div>
          <div className='preview-card__detail'>
            <strong>Gender:</strong> {character.gender}
          </div>
          <div className='preview-card__detail preview-card__link'>
            <strong>Origin:</strong>{' '}
            <a
              href={character.origin.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {character.origin.name}
            </a>
          </div>
          <div className='preview-card__detail preview-card__link'>
            <strong>Location:</strong>{' '}
            <a
              href={character.location.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {character.location.name}
            </a>
          </div>
        </div>

        <div className='preview-card__episodes-container'>
          <div className='preview-card__episodes-header'>Episodes</div>
          <div className='preview-card__episodes'>
            <CharacterEpisodes episodes={character.episode} />
          </div>
        </div>
      </div>

      <div className='preview-card__bottom'>
        <div
          className='preview-card__bottom-status'
          style={{ color: getStatusColor(character.status) }}
        >
          {character.status}
        </div>
        <div className='preview-card__bottom-created'>
          Created: {dayjs(character.created).format('DD.MM.YYYY')}
        </div>
      </div>
    </div>
  );
}

export default CharacterPreviewCard;
