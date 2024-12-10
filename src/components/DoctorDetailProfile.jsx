const DoctorDetailProfile = ({ image, name, speciality, experience, language, phone, address }) => {
  return (
    <div className='mx-auto bg-white shadow-md rounded-lg border overflow-hidden'>
      {/* Header Section */}
      <div className='bg-blue-50 p-6 relative'>
        <div className='flex items-center'>
          <img
            src={image ? image : '/doctor-placeholder-image.webp'}
            alt={name}
            className='w-32 h-32 rounded-full border-4 border-white'
          />
          <div className='ml-4'>
            <h1 className='text-4xl font-semibold text-blue-800'>{name}</h1>
            <p className='text-gray-600 text-lg'>{speciality}</p>
          </div>
        </div>
      </div>

      {/* Body Section */}
      <div className='p-6'>
        {/* <div className='flex items-center space-x-4'>
          <div className='flex items-center text-yellow-500'>
            <span className='text-xl font-semibold'>5.0</span>
            <div className='ml-2 flex'>
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} className='w-5 h-5 fill-current' viewBox='0 0 20 20'>
                  <polygon points='10 1.5 12.5 7.5 19 7.5 14 11.5 16 17.5 10 13.5 4 17.5 6 11.5 1 7.5 7.5 7.5' />
                </svg>
              ))}
            </div>
          </div>
          <a href='#' className='text-blue-500 text-sm underline'>
            (3 Ratings)
          </a>
          <a href='#' className='text-blue-500 text-sm underline'>
            Leave a review
          </a>
          <a href='#' className='text-blue-500 text-sm underline'>
            Save Provider
          </a>
        </div> */}

        <div className='space-y-2 text-lg'>
          {experience && (
            <div className='flex flex-row items-center justify-start gap-3'>
              <img src='/experience.png' className='w-5' />
              <p>{experience} Years Experience</p>
            </div>
          )}
          {language && (
            <div className='flex flex-row items-center justify-start gap-3'>
              <img src='/language.png' className='w-5' />
              <p>{language}</p>
            </div>
          )}
          {phone && (
            <div className='flex flex-row items-center justify-start gap-3'>
              <img src='/phone.png' className='w-5' />
              <p>{phone}</p>
            </div>
          )}
          {address && (
            <div className='flex flex-row items-center justify-start gap-3'>
              <img src='/address.png' className='w-5' />
              <p>{address}</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      {/* <div className='bg-blue-100 p-4 text-center'>
        <button
          className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'
          onClick={() => window.open('tel:8443698545')}>
          (844) 369-8545
        </button>
      </div> */}
    </div>
  )
}

export default DoctorDetailProfile
