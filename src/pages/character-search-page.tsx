import { useState } from 'react';

import {
  CharacterPreviewCard,
  CharacterSearchBar,
  LoadingSpinner
} from '../components';
import { TCharacterPreview } from '../types';

function CharacterSearchPage() {
  const [charactersPreview, setCharactersPreview] = useState<
    TCharacterPreview[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearchResults = (results: TCharacterPreview[]) => {
    setCharactersPreview(results);
    setError(null);
  };

  const onStartLoading = () => {
    setLoading(true);
    setError(null);
  };

  const onStopLoading = () => {
    setLoading(false);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setCharactersPreview([]);
  };

  return (
    <div className='character-search-page-container'>
      <CharacterSearchBar
        onSearchResults={handleSearchResults}
        onStartLoading={onStartLoading}
        onStopLoading={onStopLoading}
        onError={handleError}
      />
      {loading && <LoadingSpinner />}
      {error && <p className='error-message'>{error}</p>}
      <div className='preview-card-container' style={{ minHeight: '200px' }}>
        {charactersPreview.map((character) => (
          <CharacterPreviewCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default CharacterSearchPage;
