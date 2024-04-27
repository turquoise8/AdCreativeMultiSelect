import { CaretDownIcon } from "../../assets/CaretDownIcon";
import { SelectedItemPill } from "../SelectedItemPill/SelectedItemPill";
import { ICharacter } from "../types/character";
import "./styles.scss";

interface CharacterSearchInputProps {
  selectedCharacters: ICharacter[];
  setSelectedCharacters: (characters: ICharacter[]) => void;
  setSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
}

export const CharacterSearchInput = ({
  selectedCharacters,
  setSelectedCharacters,
  setSearchTerm,
  searchTerm,
}: CharacterSearchInputProps) => {
  return (
    <div className="character-input-container">
      <div className="selected-characters-container">
        {selectedCharacters.map((character, index) => {
          return (
            <SelectedItemPill
              key={character.id}
              character={character}
              onDelete={(character: any) => {
                setSelectedCharacters(
                  selectedCharacters.filter(
                    (selectedCharacter) => selectedCharacter !== character
                  )
                );
              }}
              tabIndex={index + 1}
            />
          );
        })}
      </div>

      <input
        type="text"
        className="character-search-input"
        placeholder="Search a character..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: selectedCharacters.length === 0 ? "100%" : "fit-content",
        }}
      />

      <div
        className="dropdown-icon-container"
        style={{ transform: searchTerm ? "rotate(0deg)" : "rotate(180deg)" }}
      >
        <CaretDownIcon />
      </div>
    </div>
  );
};
