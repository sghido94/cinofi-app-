
export interface Question {
  id: number;
  questionText: string;
  answerText: string;
}

export interface Exam {
  title: string;
  questions: Question[];
}

export interface Lesson {
  id: string;
  title: string;
  points: string[];
}

export interface Module {
  id: number;
  title: string;
  objective: string;
  lessons: Lesson[];
  exam: Exam;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  modules: Module[];
  glossary?: GlossaryTerm[];
}
