import React from "react";
import { useMovieDataQuery } from "../../services/User/get-data-movie";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useNavigate } from "react-router-dom";

export const Carasuel = (props) => {
  const navigate = useNavigate();
  const [PageNow, setPageNow] = useState(1);

  const { data: fetchUser } = useMovieDataQuery({
    page: PageNow,
  });

  

  const renderMovieList = () => {
    return fetchUser?.results?.map((value) => (
      <div key={value.id} className="w-full h-[100vh] flex flex-col relative">
        <div
          // className='w-full h-full bg-cover bg-center'
          className=" w-full relative bg bg-center bg-cover bg-no-repeat min-h-screen"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${value.backdrop_path}')`,
          }}
        >
          <div className=" flex justify-between px-10 p-2">
            <h1 className="font-bold text-[2em] text-red-600">MovieList</h1>
            {/* <input
              type="text"
              placeholder="What do you want to watch?"
              className=" bg-transparent border border-red-600 rounded-full w-80 focus:border-red-500 p-2"
            /> */}
            <div>
              <button className="bg-red-500 h-3/4 w-20  text-white rounded-full">
                login
              </button>
            </div>
          </div>

          <div className=" h-full w-[50%] ml-7 flex flex-col justify-center items-start space-y-3">
            <h2 className=" font-bold text-[2.5em] text-white ">
              {value.title}
            </h2>
            <h2 className="text-white text-start">{value.overview}</h2>
        
            <button
              onClick={() => {
                navigate(`/DetailMovie/${value.id}`, {
                  state: {
                    idMovie: value.id,
                  },
                });
              }}
              className="bg-red-500 rounded-full w-36 h-8 text-white font-bold"
            >
              detail
            </button>
          </div>
        </div>
      </div>
    ));
  };

  // console.log(fetchUser, "data")
  return (
    <div>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}  showArrows={false} stopOnHover={false}>
        {renderMovieList()}
      </Carousel>
    </div>
  );
};

/* <div className='border border-warning-900 w-full h-full relative bg-no-repeat bg-center bg-cover'>
      <img src="https://image.tmdb.org/t/p/original/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg" alt="" className="w-full h-full" />
    </div> */
