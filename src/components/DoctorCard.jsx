import { Link } from 'react-router-dom'

const DoctorCard = ({ name, image, speciality, address, experience, slug, data }) => {
  return (
    <Link
      to={`/doctor/${slug}`}
      state={data}
      className='flex flex-row border rounded-lg p-4 bg-white ease-in-out duration-500 hover:shadow-md'>
      <img
        src={image ? image : '/doctor-placeholder-image.webp'}
        alt={name}
        className='w-28 h-28 rounded-full border'
      />
      <div className='ml-4 flex flex-col gap-8 flex-grow'>
        <div className='flex flex-col flex-grow'>
          <h2 className='text-lg font-semibold'>{name}</h2>
          <p className='text-gray-600 text-sm mb-3'>
            {speciality
              .split('_')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
          </p>
          <div className='flex flex-col gap-2 text-gray-500 text-xs mt-2'>
            <div className='flex flex-row items-center justify-start gap-1'>
              <img src='/experience.png' className='w-3' />
              <p>{experience} Years Experience</p>
            </div>
            {/* <div className='flex flex-row items-center justify-start gap-1'>
              <img src='/language.png' className='w-3' />
              <p>{languages}</p>
            </div> */}
            {/* <div className='flex flex-row items-center justify-start gap-1'>
              <img src='/phone.png' className='w-3' />
              <p>{contact}</p>
            </div> */}
            <div className='flex flex-row items-start justify-start gap-1'>
              <img src='/address.png' className='w-3' />
              <p>{address}</p>
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className='text-right'>
          <Link
            to={`/doctor/${slug}`}
            state={data}
            className='bg-blue-500 text-white px-4 py-2 rounded-lg mb-2'>
            View Profile
          </Link>
          {/* {contact && (
              <a href={`tel:${contact}`} className='block text-blue-500 text-sm'>
                {contact}
              </a>
            )} */}
        </div>
      </div>
    </Link>
  )
}

export default DoctorCard
