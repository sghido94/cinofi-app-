
import React from 'react';
import type { Module, GlossaryTerm } from '../types';
import Quiz from './Quiz';
import { LightbulbIcon } from './icons';
import { LinkedText } from '../utils/textUtils';

interface ModuleCardProps {
  module: Module;
  moduleNumber: number;
  glossary: GlossaryTerm[];
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, moduleNumber, glossary }) => {
  return (
    <div className="bg-white border border-slate-200/80 rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-slate-800">
          <span className="text-indigo-600">Modulo {moduleNumber}:</span> {module.title}
        </h2>
        
        <div className="mt-4 flex items-start gap-3 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
          <LightbulbIcon className="w-6 h-6 text-indigo-500 shrink-0 mt-1"/>
          <div>
            <h3 className="font-semibold text-indigo-800">Obiettivo</h3>
            <p className="text-sm text-indigo-700 mt-1">
              <LinkedText text={module.objective} glossary={glossary} />
            </p>
          </div>
        </div>
      </div>
      
      <div className="px-6 pb-6 space-y-4">
        {module.lessons.map(lesson => (
          <div key={lesson.id}>
            <h4 className="font-semibold text-lg text-slate-700">{lesson.title}</h4>
            <ul className="mt-2 space-y-2 list-disc list-inside text-slate-600">
              {lesson.points.map((point, index) => (
                <li key={index} className="pl-2">
                  <LinkedText text={point} glossary={glossary} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-slate-50/70 p-6 border-t border-slate-200/80">
        <Quiz exam={module.exam} glossary={glossary} />
      </div>
    </div>
  );
};

export default ModuleCard;
