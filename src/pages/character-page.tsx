import { useState, useEffect } from 'react';

import { TCharacter } from '../types';
import { fetchCharacterById } from '../services';
import { CharacterCard, LoadingSpinner } from '../components';

function CharacterPage() {
  const id = 1;
  const [character, setCharacter] = useState<TCharacter | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        setLoading(true);
        const characterData = await fetchCharacterById(Number(id));
        setCharacter(characterData);
        setError(null);
      } catch (err) {
        console.error('Error fetching character data:', err);
        setError('Failed to upload character data');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCharacterData();
    }
  }, [id]);

  return (
    <div className='character-page'>
      {loading && <LoadingSpinner />}
      {error && <p className='error-message'>{error}</p>}
      {!loading && !error && !character && <p>The character was not found</p>}
      {!loading && !error && character && (
        <CharacterCard character={character} />
      )}
    </div>
  );
}

export default CharacterPage;
