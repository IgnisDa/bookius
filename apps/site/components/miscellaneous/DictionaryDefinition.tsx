import { FC } from 'react';

type DictionaryDefinitionProps = {
  word: string;
  pronunciation: string;
  type?: string;
  meaning: string;
  example: string;
};

export const DictionaryDefinition: FC<DictionaryDefinitionProps> = ({
  word,
  pronunciation,
  type,
  meaning,
  example,
}) => {
  return (
    <div className="space-y-3 text-gray-700 lg:space-y-8 dark:text-primary-content">
      <div className="space-y-3">
        <div className="text-4xl font-semibold underline lg:text-6xl ">
          {word}
        </div>
        <div className="tracking-tighter lg:text-xl">{pronunciation}</div>
      </div>
      <div className="lg:text-xl">
        <div className="italic">{type ? type : 'noun'}</div>
        <div className="text-accent">{meaning}</div>
        <div className="font-semibold">"{example}"</div>
      </div>
    </div>
  );
};
