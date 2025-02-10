import React from 'react';

import { TCharacter } from '../types';
import { CharacterCardItem, CharacterEpisodes } from './index';

type TCharacterCardProps = {
  character: TCharacter;
};

function CharacterCard({ character }: TCharacterCardProps): React.JSX.Element {
  return (
    <div className='character-card'>
      <h2 className='character-card__title'>{character.name}</h2>

      <div className='character-card__content'>
        <div className='character-card__left-section'>
          <div className='character-card__detail'>
            <CharacterCardItem label='Status' value={character.status} />
            <CharacterCardItem label='Species' value={character.species} />
            {character.type && (
              <CharacterCardItem label='Type' value={character.type} />
            )}
            <CharacterCardItem label='Gender' value={character.gender} />

            <CharacterCardItem
              label='Origin'
              value={character.origin.name}
              url={character.origin.url}
            />
            <CharacterCardItem
              label='Location'
              value={character.location.name}
              url={character.location.url}
            />
            <CharacterCardItem
              label='More Info'
              value='Link'
              url={character.url}
            />
          </div>
        </div>

        <div className='character-card__right-section'>
          <img
            alt={`${character.name} preview`}
            className='character-card__character-image'
            src={character.image}
          />
        </div>
      </div>

      <div className='character-card__additional-info'>
        <div className='character-card__episodes-header'>Episodes</div>
        <div className='character-card__episodes-container'>
          <CharacterEpisodes episodes={character.episode} showEpisodeLabel />
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
