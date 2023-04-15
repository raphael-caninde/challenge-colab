import { getUsersQtd } from '../../services/fetchUser';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IUsers } from '../../interfaces/IUser';
import { Autoplay, Navigation } from 'swiper';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import 'swiper/css';
import 'swiper/css/navigation';

export function Carousel() {
  const { data } = useQuery<{ results: IUsers[] }>('users-qtd', getUsersQtd);
  const { setUser } = useContext(AppContext);

  function handleUserStorage(users: IUsers) {
    setUser?.([users]);
  }

  return (
    <div className='flex w-5/6 md:w-[40rem] sm:w-3/4 h-52 my-2 shadow-2xl'>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        navigation
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}>
        {data?.results.map((users: IUsers) => (
          <SwiperSlide
            className='flex justify-around items-center'
            key={users.login.uuid}>
            <div
              className='text-center cursor-grab w-40'
              onClick={() => handleUserStorage(users)}>
              <img
                src={users.picture.large}
                alt='picture profile'
                className='w-full rounded-md'
              />
              <p>
                {users.name.first} {users.name.last}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
