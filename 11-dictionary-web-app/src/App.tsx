import { useState } from "react";
import { Header, Search, DisplayDetails } from "components";

interface Phonetic {
  audio: string;
  text: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: { definition: string; example: string }[];
  synonyms: string[];
  antonyms: string[];
}

export interface WordDetails {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  synonyms: string[];
  sourceUrls: string[];
}

const App = () => {
  const [wordDetails, setWordDetails] = useState<WordDetails>();
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchWord = e.currentTarget.searchInput.value;
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`,
      );
      const data = await response.json();
      setWordDetails(data[0]);
      console.log(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 text-gray-500">
      <Header />
      <Search onSearch={handleSearch} />

      {wordDetails?.word && <DisplayDetails wordDetails={wordDetails} />}
    </div>
  );
};

export default App;
