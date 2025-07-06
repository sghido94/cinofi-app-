
import React from 'react';
import type { Chapter } from '../types';
import ModuleCard from './ModuleCard';
import GlossaryView from './GlossaryView';

interface ChapterViewProps {
  chapter: Chapter;
}

const ChapterView: React.FC<ChapterViewProps> = ({ chapter }) => {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">{chapter.title}</h1>
        <p className="mt-2 text-lg text-slate-600">{chapter.subtitle}</p>
        <div className="mt-4 h-1 w-24 bg-indigo-500 rounded-full"></div>
      </header>
      
      <div className="space-y-8">
        {chapter.modules.map((module, index) => (
          <ModuleCard 
            key={module.id} 
            module={module} 
            moduleNumber={index + 1}
            glossary={chapter.glossary || []}
          />
        ))}
      </div>

      <GlossaryView glossary={chapter.glossary || []} />
    </div>
  );
};

export default ChapterView;
