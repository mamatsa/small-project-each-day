import { WordDetails } from "App";
import { IconNewWindow } from "./svg";

interface DisplayDetailsProps {
  wordDetails: WordDetails;
}

const DisplayDetails = ({ wordDetails }: DisplayDetailsProps) => {
  return (
    <div className="space-y-8">
      {/* Word, phonetic and audio */}
      <div>
        <h1 className="text-[32px] font-bold md:mb-1 md:text-5xl">
          {wordDetails.word || ""}
        </h1>
        <p className="text-purple md:text-lg">
          {wordDetails.phonetics[1]?.text || ""}
        </p>
      </div>

      {wordDetails.meanings.map((meaning) => (
        <div key={meaning.partOfSpeech}>
          {/* Part of speech */}
          <div className="flex items-center gap-4 pb-8">
            <h2 className="text-lg font-bold italic md:text-2xl">
              {meaning.partOfSpeech}
            </h2>
            <div className="h-px w-full bg-gray-200 dark:bg-gray-400"></div>
          </div>

          {/* Definitions */}
          <h3 className="pb-4 text-gray-300 md:text-lg">Meaning</h3>
          <ul className="list-disc space-y-3 pl-4 text-[15px] leading-relaxed text-purple md:text-[17px]">
            {meaning.definitions.map((definitionItem) => (
              <li key={definitionItem.definition}>
                <span className="text-gray-500 dark:text-white">
                  {definitionItem.definition}
                </span>
              </li>
            ))}
          </ul>

          {/* Examples */}
          <ul className="mt-3 space-y-3 text-[15px] leading-relaxed md:text-[17px]">
            {meaning.definitions.map((definitionItem) => {
              return definitionItem.example ? (
                <li key={definitionItem.example} className="text-gray-300">
                  {definitionItem.example && `"${definitionItem.example}"`}
                </li>
              ) : (
                ""
              );
            })}
          </ul>

          {/* Synonyms */}
          {meaning.synonyms?.length > 0 && (
            <div className="mt-6 flex gap-6 md:gap-7 md:text-lg">
              <h3 className=" text-gray-300">Synonyms</h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[...new Set(meaning.synonyms)].map((synonym) => (
                  <span key={synonym} className="font-bold text-purple">
                    {synonym}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Antonyms */}
          {meaning.antonyms?.length > 0 && (
            <div className="mt-6 flex gap-6 md:gap-7 md:text-lg">
              <h3 className=" text-gray-300">Antonyms</h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[...new Set(meaning.antonyms)].map((antonym) => (
                  <span key={antonym} className="font-bold text-purple">
                    {antonym}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Source link*/}
      <div className="flex flex-wrap items-center gap-5 border-t border-t-gray-200 py-6 dark:border-t-gray-400">
        <h3 className="text-gray-300 underline">Source</h3>
        <a
          href={wordDetails.sourceUrls[0]}
          target="_blank"
          className="flex items-center gap-2 underline"
        >
          {wordDetails.sourceUrls[0]} <IconNewWindow />
        </a>
      </div>
    </div>
  );
};

export default DisplayDetails;
