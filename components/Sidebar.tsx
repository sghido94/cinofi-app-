
import React from 'react';
import type { Chapter } from '../types';
import { BookIcon } from './icons';

interface SidebarProps {
  chapters: Chapter[];
  selectedChapterId: number | null;
  onSelectChapter: (id: number) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ chapters, selectedChapterId, onSelectChapter, isOpen, setIsOpen }) => {
  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <BookIcon className="w-8 h-8 text-indigo-400"/>
          <h1 className="text-2xl font-bold text-white">Corso Cinofilo</h1>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <span className="px-2 text-xs font-semibold tracking-wider text-slate-400 uppercase">Capitoli</span>
        <ul>
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <button
                onClick={() => onSelectChapter(chapter.id)}
                className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors duration-200 ${
                  selectedChapterId === chapter.id
                    ? 'bg-indigo-600 text-white font-semibold shadow-lg'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <span className={`flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full ${ selectedChapterId === chapter.id ? 'bg-white text-indigo-600' : 'bg-slate-700 text-slate-200'}`}>{chapter.id}</span>
                <span>{chapter.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-slate-700/50 text-center">
        <p className="text-xs text-slate-500">© 2024 - Corso Interattivo</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile-first: overlay for small screens */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <aside
        className={`fixed top-0 left-0 w-72 h-full bg-slate-800 text-white z-50 transform transition-transform duration-300 ease-in-out lg:static lg:transform-none lg:w-80 lg:shrink-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;
