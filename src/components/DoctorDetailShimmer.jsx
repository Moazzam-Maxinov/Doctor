const DoctorDetailShimmer = () => {
  return (
    <div className='animate-pulse'>
      {/* Header Section */}
      <div className='bg-blue-50 p-6 relative'>
        <div className='flex items-center'>
          <div className='w-32 h-32 bg-gray-200 rounded-full border-4 border-white'></div>
          <div className='ml-4 space-y-3'>
            <div className='w-48 h-6 bg-gray-200 rounded'></div>
            <div className='w-32 h-4 bg-gray-200 rounded'></div>
          </div>
        </div>
      </div>

      {/* Body Section */}
      <div className='p-6 space-y-4'>
        <div className='flex flex-row items-center gap-3'>
          <div className='w-5 h-5 bg-gray-200 rounded'></div>
          <div className='w-40 h-4 bg-gray-200 rounded'></div>
        </div>
        <div className='flex flex-row items-center gap-3'>
          <div className='w-5 h-5 bg-gray-200 rounded'></div>
          <div className='w-64 h-4 bg-gray-200 rounded'></div>
        </div>
        <div className='flex flex-row items-center gap-3'>
          <div className='w-5 h-5 bg-gray-200 rounded'></div>
          <div className='w-48 h-4 bg-gray-200 rounded'></div>
        </div>
        <div className='flex flex-row items-center gap-3'>
          <div className='w-5 h-5 bg-gray-200 rounded'></div>
          <div className='w-56 h-4 bg-gray-200 rounded'></div>
        </div>
      </div>

      {/* About Section */}
      <div className='mx-auto bg-white shadow-md rounded-lg border mt-6'>
        <div className='bg-blue-100 px-6 py-5 flex items-center mb-4'>
          <div className='w-24 h-6 bg-gray-200 rounded'></div>
        </div>
        <div className='px-6 pb-6 space-y-3'>
          <div className='w-full h-4 bg-gray-200 rounded'></div>
          <div className='w-3/4 h-4 bg-gray-200 rounded'></div>
          <div className='w-full h-4 bg-gray-200 rounded'></div>
          <div className='w-1/2 h-4 bg-gray-200 rounded'></div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDetailShimmer
