import React, { useContext, useEffect, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import Movies from "./Movies";
import { MovieContext } from "../context/MovieProvider";
import { MovieContextType } from "../@types/movie";

export default function Home() {
  const {
    personsMovies,
    getPerson,
    personId,
    //getPersonsMovies,
    setPersonsMovies } = useContext(
      MovieContext
    ) as MovieContextType;
  const [personName, setPersonName] = useState<string>();

  useEffect(() => {
    if (localStorage.getItem("personName") === null || localStorage.getItem("personName") === undefined || localStorage.getItem("personName") === '') {
      localStorage.clear()
      return;
    } else setPersonName(localStorage.getItem("personName"))

    if (localStorage.getItem("personsMovie") === null || localStorage.getItem("personsMovies") === undefined) {
      return;
    } else setPersonsMovies(JSON.parse(localStorage.getItem("personsMovies")))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // useEffect(() => {
  //   let id: any;

  //   if (localStorage.getItem("personId") === null || localStorage.getItem("personId") === undefined) {
  //     id = personId
  //     return;
  //   } else id = localStorage.getItem("personId")
  //   getPersonsMovies(id);

  //   const input: HTMLInputElement = document.querySelector("input");
  //   const placeholderLength: number = input.getAttribute("placeholder").length;
  //   input.setAttribute("size", `${placeholderLength}`);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [personId]);

  function handleSubmit(e) {
    e.preventDefault();
    getPerson(personName);
  }

  function handleChange(e) {
    setPersonName(e.target.value)
    localStorage.setItem('personName', e.target.value)
  }

  return (
    <div className="h-full">
      <h1>Search for an Actor/Actress</h1>
      <div className="p-2 inline-flex">
        <Input
          type="text"
          name="name"
          placeholder="Enter Name of Actor or Actress"
          value={personName}
          onChange={(e) => handleChange(e)}
        />
        <Button color="success" onClick={handleSubmit} onKeyDown={handleSubmit}>
          Search
        </Button>
      </div>
      <div className="h-full">
        {personsMovies !== undefined ? <Movies /> : <></>}
      </div>
    </div>
  );
}
