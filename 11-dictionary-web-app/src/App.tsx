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
  const [darkMode, setDarkMode] = useState(false);
  const [fontFamily, setFontFamily] = useState<"sans" | "serif" | "mono">(
    "sans",
  );

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

  const handleFontChange = (font: "sans" | "serif" | "mono") => {
    setFontFamily(font);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen p-6 font-${fontFamily} ${
        darkMode ? "dark bg-gray-700 text-white" : "text-gray-500"
      }`}
    >
      <Header
        onDarkModeToggle={handleDarkModeToggle}
        onFontChange={handleFontChange}
        fontFamily={fontFamily}
      />
      <Search onSearch={handleSearch} />

      {wordDetails?.word && <DisplayDetails wordDetails={wordDetails} />}
    </div>
  );
};

export default App;
