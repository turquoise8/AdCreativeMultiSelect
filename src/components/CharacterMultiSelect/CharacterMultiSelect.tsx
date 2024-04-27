import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../queries/characters";
import { CharacterSearchInput } from "../CharacterSearchInput/CharacterSearchInput";
import { CharactersDropdownBox } from "../CharactersDropdownBox/CharactersDropdownBox";
import "./styles.scss";

export const CharacterMultiSelect = () => {
  const [selectedCharacters, setSelectedCharacters] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debounceSearchTerm = useDebounce(searchTerm, 500);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name: debounceSearchTerm },
  });

  useEffect(() => {
    setSearchTerm(debounceSearchTerm);
  }, [debounceSearchTerm]);

  return (
    <div className="character-multiselect-container">
      <CharacterSearchInput
        selectedCharacters={selectedCharacters}
        setSelectedCharacters={setSelectedCharacters}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      {searchTerm && (
        <CharactersDropdownBox
          loading={loading}
          error={error}
          charactersData={data?.characters.results}
          searchTerm={searchTerm}
          selectedCharacters={selectedCharacters}
          setSelectedCharacters={setSelectedCharacters}
        />
      )}
    </div>
  );
};
