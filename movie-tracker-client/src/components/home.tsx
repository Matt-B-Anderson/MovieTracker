import React, { useContext, useEffect, useState } from "react";
import Movies from "./Movies";
import { MovieContext } from "../context/MovieProvider";
import { MovieContextType } from "../@types/movie";

export default function Home() {
  const { personsMovies, getPerson, personId, getPersonsMovies } = useContext(MovieContext) as MovieContextType;
  const [personName, setPersonName] = useState<string>();

  useEffect(() => {
    getPersonsMovies(personId)
  }, [personId])

  function handleSubmit(e) {
    e.preventDefault()
    getPerson(personName)
  }

  return (
    <div>
      <div>
        <h1>Search for an Actor/Actress</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name of Actor or Actress"
            value={personName}
            onChange={e => setPersonName(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
      <div className="movie-container">
        {personsMovies !== undefined ? <Movies /> : <></>}
      </div>
    </div>
  );
}
