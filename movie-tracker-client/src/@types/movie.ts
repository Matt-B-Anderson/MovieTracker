export interface movie {
  poster_path: string,
  id: number,
  title: string,
  release_date: string
}

export type MovieContextType = {
  personsMovies: { cast: movie[] };
  personId: number
  getPerson: (person: string) => void;
  getPersonsMovies: (id: number) => void;
};
