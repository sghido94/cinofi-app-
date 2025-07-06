
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChapterView from './components/ChapterView';
import { courseData } from './data/courseData';
import type { Chapter } from './types';
import { BookIcon } from './components/icons';

const App: React.FC = () => {
  const [chapters] = useState<Chapter[]>(courseData);
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (chapters.length > 0) {
      setSelectedChapterId(chapters[0].id);
    }
  }, [chapters]);

  const selectedChapter = chapters.find(c => c.id === selectedChapterId) || null;

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar 
        chapters={chapters}
        selectedChapterId={selectedChapterId}
        onSelectChapter={(id) => {
          setSelectedChapterId(id);
          setSidebarOpen(false);
        }}
        isOpen={isSidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between p-4 bg-white border-b border-slate-200 lg:hidden">
            <div className="flex items-center gap-2">
                <BookIcon className="w-6 h-6 text-indigo-600"/>
                <h1 className="text-xl font-bold text-slate-800">Corso Cinofilo</h1>
            </div>
          <button onClick={() => setSidebarOpen(true)} className="p-2 text-slate-600 hover:text-slate-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            {selectedChapter ? (
                <ChapterView chapter={selectedChapter} />
            ) : (
                <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                        <BookIcon className="w-16 h-16 mx-auto text-slate-400" />
                        <h2 className="mt-4 text-2xl font-semibold text-slate-600">Seleziona un capitolo per iniziare</h2>
                        <p className="mt-2 text-slate-500">Scegli un argomento dalla barra laterale.</p>
                    </div>
                </div>
            )}
        </div>
      </main>
    </div>
  );
};

export default App;
