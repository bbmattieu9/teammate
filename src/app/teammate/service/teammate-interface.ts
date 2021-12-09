export interface Teammate {
  id: number | null;
  firstname: string;
  lastname: string;
  role: string;
  employmentDate: string;
  salary: number;
  description: string;
  starRating: number;
  imageUrl: string;
  category: string;
  contactInfo: {} | null;
}
