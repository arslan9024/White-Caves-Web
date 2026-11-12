export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  dealsCount?: number;
  social: {
    linkedin?: string;
    twitter?: string;
    email: string;
    whatsapp?: string;
  };
}
