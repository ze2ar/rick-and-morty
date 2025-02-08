import { CharacterPreviewCard } from './components';
import { charactersPreview } from './mocks';

function App() {
  return (
    <>
      <div className={'preview-card-container'}>
        {charactersPreview.map((character) => (
          <CharacterPreviewCard key={character.id} character={character} />
        ))}
      </div>
    </>
  );
}

export default App;
