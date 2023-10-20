import React, { useState } from 'react'
import { useMovieDataQuery } from '../../services/User/get-data-movie';
import { Carousel } from 'react-responsive-carousel';

export const Background = () => {
    const [PageNow, setPageNow] = useState(1);

  const { data: fetchUser } = useMovieDataQuery({
    page: PageNow,
  });

  const renderBackground = () => {
    return fetchUser?.results?.map((value) => (
        <div key={value.id} className="w-full h-[100vh] flex flex-col relative ">
            <div
          // className='w-full h-full bg-cover bg-center'
          className=" w-full relative bg bg-center bg-cover bg-no-repeat min-h-screen bg-blend-soft-light bg-gray-800"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${value.backdrop_path}')`,
          }}
        ></div>
        </div>
    ))
  }


  console.log(fetchUser)
  return (
    <div className='h-full w-full'>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}  showArrows={false} stopOnHover={false} showIndicators={false} transitionTime={2000} interval={8000}>
        {renderBackground()}
      </Carousel>

    </div>
  )
}
