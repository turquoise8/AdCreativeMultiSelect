import { CloseIcon } from "../../assets/CloseIcon";
import { ICharacter } from "../types/character";
import "./styles.scss";

interface SelectedItemPillProps {
  character: ICharacter;
  onDelete: (character: ICharacter) => void;
  tabIndex: number;
}

export const SelectedItemPill = ({
  character,
  onDelete,
  tabIndex,
}: SelectedItemPillProps) => {
  return (
    <div className="selected-item-pill">
      <span>{character.name}</span>
      <div
        className="close-button"
        onClick={() => {
          onDelete(character);
        }}
        tabIndex={tabIndex}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onDelete(character);
          }
        }}
      >
        <CloseIcon />
      </div>
    </div>
  );
};
