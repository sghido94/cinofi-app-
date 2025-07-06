
import React, { useState } from 'react';
import type { Exam, GlossaryTerm } from '../types';
import { ChevronDownIcon, CheckCircleIcon } from './icons';
import { LinkedText } from '../utils/textUtils';

interface QuizProps {
  exam: Exam;
  glossary: GlossaryTerm[];
}

const Quiz: React.FC<QuizProps> = ({ exam, glossary }) => {
  const [revealedAnswers, setRevealedAnswers] = useState<number[]>([]);
  const [userAnswers, setUserAnswers] = useState<{[key: number]: string}>({});

  const toggleAnswer = (id: number) => {
    setRevealedAnswers(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleAnswerChange = (id: number, value: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div>
      <h3 className="text-xl font-bold text-slate-800">{exam.title}</h3>
      <p className="text-sm text-slate-500 mt-1">Mettiti alla prova! Scrivi la tua risposta e poi verificala.</p>
      <div className="mt-6 space-y-4">
        {exam.questions.map((q, index) => {
          const isRevealed = revealedAnswers.includes(q.id);
          return (
            <div key={q.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm">
              <div className="p-4">
                <p className="font-semibold text-slate-700">
                  <span className="font-bold">{index + 1}.</span> <LinkedText text={q.questionText} glossary={glossary} />
                </p>
                <div className="mt-3">
                  <label htmlFor={`answer-${q.id}`} className="sr-only">La tua risposta</label>
                  <textarea
                    id={`answer-${q.id}`}
                    rows={3}
                    className="w-full p-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-slate-400 text-slate-700 bg-white"
                    placeholder="Scrivi qui la tua risposta..."
                    value={userAnswers[q.id] || ''}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    aria-label={`Risposta alla domanda ${index + 1}`}
                  />
                </div>
              </div>
              
              <div className="border-t border-slate-200 px-4 py-2 bg-slate-50/70">
                <button
                  onClick={() => toggleAnswer(q.id)}
                  className="flex items-center justify-between w-full text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                  aria-expanded={isRevealed}
                  aria-controls={`answer-panel-${q.id}`}
                >
                  <span>{isRevealed ? 'Nascondi Risposta Corretta' : 'Mostra Risposta Corretta'}</span>
                  <ChevronDownIcon className={`w-5 h-5 transition-transform ${isRevealed ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {isRevealed && (
                <div 
                  id={`answer-panel-${q.id}`}
                  className="border-t border-slate-200 p-4 bg-green-50 border-l-4 border-l-green-400"
                  role="region"
                >
                  <div className="flex items-start gap-3">
                     <CheckCircleIcon className="w-5 h-5 text-green-600 shrink-0 mt-0.5"/>
                     <div>
                       <h4 className="font-semibold text-green-900">Risposta Corretta</h4>
                       <p className="text-sm text-green-800 mt-1">
                         <LinkedText text={q.answerText} glossary={glossary} />
                       </p>
                     </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
