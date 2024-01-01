import { useState } from "react";
import { Header, Search, DisplayDetails } from "components";
import { useTheme } from "hooks";

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
  const { darkMode, fontFamily, changeFont, toggleDarkMode } = useTheme();

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
    <div
      className={`min-h-screen p-6 font-${fontFamily} ${
        darkMode ? "dark bg-gray-700 text-white" : "text-gray-500"
      }`}
    >
      <Header
        onDarkModeToggle={toggleDarkMode}
        onFontChange={changeFont}
        fontFamily={fontFamily}
        darkMode={darkMode}
      />
      <Search onSearch={handleSearch} />

      {wordDetails?.word && <DisplayDetails wordDetails={wordDetails} />}
    </div>
  );
};

export default App;
