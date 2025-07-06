import React from 'react';
import type { GlossaryTerm } from '../types';

/**
 * Creates a robust, URL-friendly slug for a glossary term to be used as an anchor ID.
 * It handles accented characters, special symbols, and ensures a clean format.
 * @param term The glossary term string.
 * @returns A slugified string.
 */
export const createGlossaryId = (term: string): string => {
  const normalizedTerm = term
    .normalize("NFD") // Decompose accented chars (e.g., "é" -> "e" + "´")
    .replace(/[\u0300-\u036f]/g, ""); // Remove the diacritic marks

  return `glossary-${normalizedTerm
    .toLowerCase()
    .replace(/[\s/()]+/g, '-')      // Replace spaces, slashes, parentheses with a hyphen
    .replace(/[^a-z0-9-]/g, '')     // Remove any remaining non-alphanumeric characters except hyphens
    .replace(/-+/g, '-')            // Collapse consecutive hyphens
    .replace(/^-|-$/g, '')}`;         // Remove leading or trailing hyphens
};


interface LinkedTextProps {
  text: string;
  glossary: GlossaryTerm[];
}

/**
 * A component that renders text and transforms any glossary terms into interactive buttons.
 * Clicking a term smoothly scrolls the page to its definition in the glossary and highlights it.
 */
export const LinkedText: React.FC<LinkedTextProps> = ({ text, glossary }) => {
  if (!glossary || glossary.length === 0 || !text) {
    return <>{text}</>;
  }

  const handleGlossaryLinkClick = (term: string) => {
    const elementId = createGlossaryId(term);
    const element = document.getElementById(elementId);
    if (element) {
      // Scroll the element into the center of the viewport
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Add a temporary highlight class for visual feedback
      element.classList.add('highlight-term');
      setTimeout(() => {
        element.classList.remove('highlight-term');
      }, 2000); // Highlight lasts for 2 seconds
    }
  };
  
  // Create a map for quick, case-insensitive lookups.
  const termMap = new Map<string, GlossaryTerm>();
  // Escape special regex characters in terms.
  const escapedTerms = glossary.map(g => {
    termMap.set(g.term.toLowerCase(), g);
    return g.term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  });

  // Create a single regex to find all terms, using word boundaries.
  // The 'i' flag makes it case-insensitive, 'g' makes it global.
  const regex = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
  
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        // Matched parts are at odd indices
        const lowerCasePart = part.toLowerCase();
        if (index % 2 === 1 && termMap.has(lowerCasePart)) {
          const termData = termMap.get(lowerCasePart)!;
          return (
            <button
              key={index}
              onClick={() => handleGlossaryLinkClick(termData.term)}
              className="text-indigo-600 font-semibold hover:underline decoration-2 decoration-indigo-300/50 underline-offset-2 transition-colors bg-transparent border-none p-0 m-0 cursor-pointer text-left"
              style={{ display: 'inline', verticalAlign: 'baseline' }}
            >
              {part}
            </button>
          );
        }
        // Return regular text parts as-is
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
};
