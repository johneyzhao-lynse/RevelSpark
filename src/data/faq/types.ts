import { Language } from '../constants';

export interface FAQItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string | React.ReactNode>;
  promoted?: boolean;
}

export interface FAQSection {
  id: string;
  title: Record<Language, string>;
  icon: string; // lucide icon name
  description: Record<Language, string>;
  items: FAQItem[];
}

export interface FAQCategory {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  sections: FAQSection[];
}

// ── Categories Data ────────────────────────────────────────────
