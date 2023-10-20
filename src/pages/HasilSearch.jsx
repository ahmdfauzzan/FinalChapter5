import React, { useState } from "react";
import { useMovieDataQuerySearch } from "../services/API-BINAR/get-data-movie-search-binar";
import { useLocation, useNavigate } from "react-router-dom";

export const HasilSearch = () => {
  const [PageNow, setPageNow] = useState(1);
  const location = useLocation();
  const { query } = location.state;
  const navigate = useNavigate();

  const { data: search, isLoading } = useMovieDataQuerySearch({
    page: PageNow,
    query: query,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(search);

  const renderMovie = () => {
    if (!search.data || search.data.length === 0) {
      return <p>No results found.</p>;
    }
    return search?.data?.map((value) => (
      <div
        key={value.id}
        className="w-[20rem] h-[35rem] mt-5 mx-4 flex flex-col hover:border border-emerald-50  "
        onClick={() => {
          navigate(`/Render/${value.id}`, {
            state: {
              idMovie: value.id,
            },
          });
        }}
      >
        <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt={value.title} className="w-full h-auto" />
        <h2 className="mt-2 text-center ">{value.title}</h2>
      </div>
    ));
  };

  // console.log('Data yang diterima dari MovieList:', query);
  console.log(search);

  return (
    <div className=" bg-black h-full">
      <div className="flex justify-between items-center px-20">
        <h1 className="text-white text-[2rem] font-bold">{query}</h1>
        <a href="/dashboard" className="text-white absolute top-2 right-2 bg-red-500 p-2 rounded-full">
          Back to Home
        </a>
      </div>
      <div className="flex flex-wrap justify-center text-center text-white">{renderMovie()}</div>
    </div>
  );
};
