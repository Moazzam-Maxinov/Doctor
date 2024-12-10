const Hero = () => {
  return (
    <div className='bg-[#0f766e] text-white py-12 md:py-20 flex flex-col items-start md:items-center justify-center px-4'>
      <div className='text-left md:text-center'>
        <h1 className='text-4xl md:text-7xl font-semibold md:font-bold'>
          Find a <span className='underline underline-offset-4 decoration-green-300'>Doctor</span>
        </h1>
        <p className='text-lg md:text-2xl mt-2'>The right care, right at your fingertips</p>
      </div>

      <div className='bg-white rounded-lg shadow-lg mt-8 p-6 w-full max-w-5xl'>
        <div className='text-black text-xl font-semibold mb-4'>Find a Doctor</div>
        <div className='flex flex-col md:flex-row items-center gap-4 flex-wrap'>
          {/* Search Input */}
          <div className='w-full md:flex-1 relative'>
            <input
              type='text'
              placeholder='Doctors, conditions, or procedures'
              className='w-full border border-gray-300 rounded-lg py-3 pl-4 pr-10 text-gray-700 focus:ring-1 focus:ring-[#0f766e] focus:outline-none'
            />
          </div>

          {/* Location Input */}
          <div className='w-full md:w-1/3 relative'>
            <input
              id='location-input'
              type='text'
              placeholder='Colony, KS'
              className='w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 text-gray-700 focus:ring-1 focus:ring-[#0f766e] focus:outline-none'
            />
            <label
              htmlFor='location-input'
              className='absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer'>
              <img className='w-5 h-5' src='/searchbar-location.png' alt='location icon' />
            </label>
          </div>

          {/* Search Button */}
          <button className='bg-[#139f94] hover:bg-[#0f766e] py-3 px-3 rounded-lg hidden md:block'>
            <img className='w-6 h-6' src='/search.png' alt='search icon' />
          </button>
        </div>

        <div className='flex flex-wrap gap-4 md:gap-6 mt-6 text-[#0f766e] text-sm px-0 md:px-5'>
          <button className='hover:underline'>Family Medicine</button>
          <button className='hover:underline'>Pediatrics</button>
          <button className='hover:underline'>Dentistry</button>
          <button className='hidden md:block hover:underline'>Orthopedic Surgery</button>
          <button className='hover:underline'>+ More</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
