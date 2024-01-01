import { useState } from "react";
import { Header, Search, DisplayDetails, NotFound } from "components";
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
  const [wordDetails, setWordDetails] = useState<WordDetails | null>();
  const [notFound, setNotFound] = useState(false);
  const { darkMode, fontFamily, changeFont, toggleDarkMode } = useTheme();

  const handleSearch = async (searchWord: string) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`,
      );
      if (response.status >= 300) {
        throw new Error(`Request failed. status: ${response.status}`);
      }
      const data = await response.json();
      setWordDetails(data[0]);
      setNotFound(false);
    } catch (error) {
      setNotFound(true);
      setWordDetails(null);
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

      {notFound && <NotFound />}
    </div>
  );
};

export default App;
