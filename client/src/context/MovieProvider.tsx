import * as React from "react";
import axios from "axios";
import { MovieContextType } from "../@types/movie";

export const MovieContext = React.createContext<MovieContextType | null>(null);

const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [personsMovies, setPersonsMovies] = React.useState<MovieContextType["personsMovies"]>();
    const [personId, setPersonId] = React.useState<number>();
    const getPerson = async (person: string) => {
        axios
            .get(`/api/person/${encodeURIComponent(person)}`)
            .then((res) => {
                decodeURI(person);
                const decoded = decodeURI(person)
                const finalString = decoded.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
                res.data.results.forEach(person => {
                    if (person.name === finalString) {
                        setPersonId(person.id)
                        axios
                            .get(`/api/person/${person.id}/movies`).then((res) => {
                                setPersonsMovies(res.data)

                                localStorage.setItem("personsMovies", res.data)
                            })
                    } else return;
                })
            });
    };

    return (
        <MovieContext.Provider value={{ personId, getPerson, personsMovies, setPersonsMovies }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;
