import React, { useState, useRef, useEffect } from 'react';

import { TCharacterPreview } from '../types';
import { fetchCharactersByName } from '../services';

type TSearchBarProps = {
  onSearchResults: (characters: TCharacterPreview[]) => void;
  onStartLoading: () => void;
  onStopLoading: () => void;
  onError: (errorMessage: string) => void;
};

function CharacterSearchBar({
  onSearchResults,
  onStartLoading,
  onStopLoading,
  onError
}: TSearchBarProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    onSearchResults([]);

    if (value.length >= 3) {
      debounceTimeoutRef.current = setTimeout(async () => {
        onStartLoading();
        try {
          const results = await fetchCharactersByName(value);
          onSearchResults(results);
        } catch (error) {
          console.error('Error when searching for characters:', error);
          onError(
            'An error occurred while searching for characters. Please try again.'
          );
        } finally {
          onStopLoading();
        }
      }, 500);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearchResults([]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className='search-bar-container'>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Поиск персонажей...'
          value={searchTerm}
          onChange={handleInputChange}
          className='search-input'
          ref={inputRef}
        />
        {searchTerm && (
          <span
            className='clear-icon'
            onClick={handleClear}
            role='button'
            aria-label='Очистить'
          >
            ❌
          </span>
        )}
        <span className='search-icon'>🔍</span>
      </div>
    </div>
  );
}

export default CharacterSearchBar;
