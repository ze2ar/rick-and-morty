import React from 'react';

type TCharacterEpisodes = {
  episodes: string[];
  maxVisibleEpisodes?: number;
  showEpisodeLabel?: boolean;
};

function CharacterEpisodes({
  episodes,
  maxVisibleEpisodes = episodes.length,
  showEpisodeLabel = false
}: TCharacterEpisodes): React.ReactNode {
  if (!episodes || episodes.length === 0) return null;

  const visibleEpisodes = episodes.slice(0, maxVisibleEpisodes);
  const hasMore = episodes.length > maxVisibleEpisodes;

  return (
    <div className='character-episode'>
      {visibleEpisodes.map((episode, index) => (
        <a key={index} href={episode} target='_blank' rel='noopener noreferrer'>
          <span className='character-episode__item'>
            {showEpisodeLabel ? `Episode ${index + 1}` : index + 1}{' '}
          </span>
        </a>
      ))}
      {hasMore && (
        <span className='character-episode__item character-episode__item-more'>
          {showEpisodeLabel
            ? `+ more ${episodes.length - maxVisibleEpisodes}`
            : `+ ${episodes.length - maxVisibleEpisodes}`}{' '}
        </span>
      )}
    </div>
  );
}

export default CharacterEpisodes;
