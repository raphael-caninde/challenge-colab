import { IUsers } from '../../interfaces/IUser';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faHouse,
  faEnvelope,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

interface UserProps {
  user: IUsers;
}

export function UserCard({ user }: UserProps) {
  return (
    <div className='h-[28rem] w-11/12 lg:w-3/5 md:w-3/4 sm:w-4/5  bg-white shadow-lg rounded-md mt-10'>
      <div
        key={user?.login.uuid}
        className='flex flex-col gap-3 justify-around items-center
            md:flex-row h-full w-full py-4'>
        <img
          src={user.picture.large}
          alt=''
          className='rounded-full w-60'
        />
        <div
          className='flex flex-col items-center gap-4 w-full md:w-2/4 lg:w-3/4
          h-full p-2 overflow-y-auto'>
          <p className='font-extralight text-2xl text-center md:text-5xl'>
            {user.name.first} {user.name.last}
          </p>
          <p className='-mt-1'>
            {user?.dob.age} age {user?.gender} - {user?.nat}
          </p>
          <div className='w-full px-2'>
            <p className='text-justify'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              quas incidunt tempore illo totam mollitia optio, molestias
              inventore quod a, fuga at blanditiis aperiam doloribus sunt quam
              ratione aliquam soluta. Fugiat earum aut quis ad labore quod saepe
              minus beatae repellendus sit fuga voluptatem facilis eligendi,
              porro deserunt dolore eos? Nihil repellat at dolorum corporis.
              Labore numquam voluptate quam ipsa?
            </p>
          </div>
          <div className='flex flex-col gap-2 w-full text-justify'>
            <p>
              <FontAwesomeIcon
                icon={faCalendar}
                size='lg'
                className='mr-2 text-indigo-800'
              />
              {moment(user.dob.date).format('LL')}
            </p>
            <p>
              <FontAwesomeIcon
                icon={faEnvelope}
                size='lg'
                className='mr-2 text-indigo-800'
              />
              {user?.email}
            </p>
            <p>
              <FontAwesomeIcon
                icon={faPhone}
                size='lg'
                className='mr-2 text-indigo-800'
              />
              {user?.cell}
            </p>
            <p>
              <FontAwesomeIcon
                icon={faHouse}
                size='lg'
                className='mr-2 text-indigo-800'
              />
              {user.location.street.name} - {user.location.city} -
              {user.location.state}
            </p>
          </div>
          <div className='flex justify-center w-full gap-4 mt-6'>
            <Link to='https://www.linkedin.com/company/colabapp/'>
              <FontAwesomeIcon
                icon={faLinkedin}
                size='2xl'
                className='mr-2 cursor-pointer text-blue-500'
              />
            </Link>
            <Link to='https://www.instagram.com/colabapp/'>
              <FontAwesomeIcon
                icon={faInstagram}
                size='2xl'
                className='mr-2 cursor-pointer text-red-500'
              />
            </Link>
            <FontAwesomeIcon
              icon={faFacebook}
              size='2xl'
              className='mr-2 cursor-pointer text-blue-500'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
