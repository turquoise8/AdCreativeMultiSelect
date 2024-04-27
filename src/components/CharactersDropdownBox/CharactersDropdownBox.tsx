import { DropdownItem } from "../DropdownItem/DropdownItem";
import { ICharacter } from "../types/character";
import "./styles.scss";

interface CharactersDropdownBoxProps {
  loading: boolean;
  error: any;
  charactersData: ICharacter[];
  searchTerm: string;
  selectedCharacters: ICharacter[];
  setSelectedCharacters: (characters: ICharacter[]) => void;
}

export const CharactersDropdownBox = ({
  loading,
  error,
  charactersData,
  searchTerm,
  selectedCharacters,
  setSelectedCharacters,
}: CharactersDropdownBoxProps) => {
  const handleOnChange = (character: any, state: boolean) => {
    if (state) {
      setSelectedCharacters([...selectedCharacters, character]);
    } else {
      setSelectedCharacters(
        selectedCharacters.filter(
          (selectedCharacter) => selectedCharacter.id !== character.id
        )
      );
    }
  };

  return (
    <div className="characters-dropdown">
      <div className="dropdown-content-container">
        {loading && <span className="loading-indicator" />}

        {error && <span>Error fetching data</span>}

        {charactersData && charactersData.length === 0 && (
          <span>No results found...</span>
        )}

        {charactersData &&
          charactersData?.map((character: any) => {
            return (
              <DropdownItem
                key={character.id}
                character={character}
                searchTerm={searchTerm}
                isSelected={selectedCharacters.some(
                  (selectedCharacter) => selectedCharacter.id === character.id
                )}
                onChange={(character: any, state: boolean) =>
                  handleOnChange(character, state)
                }
              />
            );
          })}
      </div>
    </div>
  );
};
