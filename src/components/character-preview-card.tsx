import React from 'react';
import dayjs from 'dayjs';

import { TCharacterPreviewCard } from '../types';

function CharacterPreviewCard(
  character: TCharacterPreviewCard
): React.JSX.Element {
  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'green';
      case 'dead':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <div className='preview-card'>
      <div className='preview-card__header'>
        <div className='preview-card__header-name'>{character.name}</div>
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
