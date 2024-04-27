import { ICharacter } from "../types/character";
import "./styles.scss";

interface DropdownItemProps {
  character: ICharacter;
  onChange: (character: ICharacter, state: boolean) => any;
  isSelected: boolean;
  searchTerm: string;
}

export const DropdownItem = ({
  character,
  onChange,
  isSelected,
  searchTerm,
}: DropdownItemProps) => {
  const highlightSearchTerm = (text: string) => {
    return text.split(new RegExp(`(${searchTerm})`, "gi")).map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span style={{ fontWeight: "900" }} key={index}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="dropdown-item">
      <input
        type="checkbox"
        onChange={(e) => onChange(character, e.target.checked)}
        checked={isSelected}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onChange(character, !isSelected);
          }
        }}
      />
      <div className="dropdown-item-content">
        <img src={character.image} />
        <div className="dropdown-item-content-info">
          <span className="character-name">
            {highlightSearchTerm(character.name)}
          </span>
          <span className="character-episodes">
            {character.episode.length} Episodes
          </span>
        </div>
      </div>
    </div>
  );
};
