const PopularSpecialty = () => {
  const specialties = [
    { name: 'Family Medicine', icon: '/specialty/family-medicine.png' },
    { name: 'Internal Medicine', icon: '/specialty/internal-medicine.png' },
    { name: 'Dentistry', icon: '/specialty/dentistry.png' },
    { name: 'Orthopedic Surgery', icon: '/specialty/orthopedic-surgery.png' },
    { name: 'Obstetrics Gynecology', icon: '/specialty/obstetrics-gynecology.png' },
    { name: 'Dermatology', icon: '/specialty/dermatology.png' },
  ]

  return (
    <div className='max-w-6xl mx-auto py-12 md:py-20 px-4'>
      <h2 className='text-4xl font-bold text-gray-900'>Popular Specialties</h2>

      {/* Specialties Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-12'>
        {specialties.map((specialty, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='bg-[#2da99f] rounded-full w-24 h-24 flex items-center justify-center'>
              <img src={specialty.icon} alt={specialty.name} />
            </div>
            <p className='text-sm mt-4'>{specialty.name}</p>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className='mt-10'>
        <a href='#' className='text-blue-800 font-medium text-sm hover:underline'>
          View All Specialties →
        </a>
      </div>
    </div>
  )
}

export default PopularSpecialty
