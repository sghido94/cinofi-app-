import React from 'react';
import type { GlossaryTerm } from '../types';
import { createGlossaryId } from '../utils/textUtils';
import { BookmarkIcon } from './icons';

interface GlossaryViewProps {
  glossary: GlossaryTerm[];
}

const GlossaryView: React.FC<GlossaryViewProps> = ({ glossary }) => {
  if (!glossary || glossary.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-slate-200">
      <div className="bg-white border border-slate-200/80 rounded-xl shadow-sm p-6 md:p-8">
        <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <BookmarkIcon className="w-8 h-8 text-indigo-600" />
          Glossario del Capitolo
        </h2>
        <dl className="mt-6 grid gap-y-4 gap-x-6">
          {glossary.map(item => (
            <div key={item.term} id={createGlossaryId(item.term)} className="scroll-mt-24 p-2 -m-2">
              <dt className="text-lg font-semibold text-slate-900">{item.term}</dt>
              <dd className="mt-1 text-slate-600">{item.definition}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default GlossaryView;
