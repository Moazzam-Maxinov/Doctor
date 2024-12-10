const DoctorCardShimmer = () => {
  return Array.from({ length: 6 }).map((el, i) => {
    return (
      <div key={i} className='flex flex-row border rounded-lg p-4 bg-white animate-pulse'>
        {/* Profile Image Shimmer */}
        <div className='w-28 h-28 rounded-full bg-gray-300'></div>

        <div className='ml-4 flex flex-col gap-8 flex-grow'>
          <div className='flex flex-col flex-grow'>
            {/* Name Shimmer */}
            <div className='h-5 w-3/4 rounded bg-gray-300 mb-2'></div>

            {/* Speciality Shimmer */}
            <div className='h-4 w-1/2 rounded bg-gray-300 mb-4'></div>

            {/* Experience and Address Shimmers */}
            <div className='flex flex-col gap-2 text-gray-500 text-xs mt-2'>
              {/* Experience Shimmer */}
              <div className='flex flex-row items-center justify-start gap-1'>
                <div className='h-3 w-3 bg-gray-300 rounded-full'></div>
                <div className='h-4 w-1/2 bg-gray-300 rounded'></div>
              </div>

              {/* Address Shimmer */}
              <div className='flex flex-row items-start justify-start gap-1'>
                <div className='h-3 w-3 bg-gray-300 rounded-full'></div>
                <div className='h-4 w-3/4 bg-gray-300 rounded'></div>
              </div>
            </div>
          </div>

          {/* Button Shimmer */}
          <div className='text-right'>
            <div className='h-10 w-28 bg-gray-300 rounded-lg'></div>
          </div>
        </div>
      </div>
    )
  })
}

export default DoctorCardShimmer
