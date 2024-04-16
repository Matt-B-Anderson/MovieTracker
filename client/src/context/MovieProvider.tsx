import * as React from "react";
import axios from "axios";
import { MovieContextType } from "../@types/movie";

export const MovieContext = React.createContext<MovieContextType | null>(null);

const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [personsMovies, setPersonsMovies] = React.useState<MovieContextType["personsMovies"]>();
  const [personId, setPersonId] = React.useState<number>();
  const getPerson = async (person: string) => {
    axios
      .get(`https://movie-tracker-b85347f296a8.herokuapp.com/${person}`, {
        headers: {
          AccessControlAllowOrigin: "*",
        },
      })
      .then((res) => {
        decodeURI(person);
        const decoded = decodeURI(person)
        const finalString = decoded.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        res.data.results.forEach(person => {
          if (person.name === finalString) {
            setPersonId(person.id)
            axios
              .get(`https://movie-tracker-b85347f296a8.herokuapp.com/${person.id}/movies`, {
                headers: {
                  AccessControlAllowOrigin: "*",
                },
              }).then((res) => {
                setPersonsMovies(res.data)

                localStorage.setItem("personsMovies", res.data)
              })
          } else return;
        })
      });
  };

  // const getPersonsMovies = (id: number) => {
  //   axios
  //     .get(`http://localhost:9000/api/person/${id}/movies`, {
  //       headers: {
  //         AccessControlAllowOrigin: "*",
  //       },
  //     }).then((res) => {
  //       setPersonsMovies(res.data)

  //       localStorage.setItem("personsMovies", res.data)
  //     })
  // }
  return (
    <MovieContext.Provider value={{ personId, getPerson, personsMovies, setPersonsMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
