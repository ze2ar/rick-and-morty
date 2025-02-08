import { CharacterPreviewCard } from './components';
import { charactersPreview } from './mocks';

function App() {
  return (
    <>
      <div className={'preview-card-container'}>
        {charactersPreview.map((card) => (
          <CharacterPreviewCard
            key={card.id}
            id={card.id}
            name={card.name}
            status={card.status}
            created={card.created}
          />
        ))}
      </div>
    </>
  );
}

export default App;
