const DoctorBio = ({ about }) => {
  return (
    <>
      {about && (
        <div className='mx-auto bg-white shadow-md rounded-lg border mt-6'>
          {/* Title Section */}
          <div className='bg-blue-100 px-6 py-5 flex items-center mb-4'>
            <h2 className='text-3xl font-medium text-gray-800'>About</h2>
          </div>

          {/* Overview Content */}
          <div
            className='doctor-bio-section text-gray-700 text-justify px-6 pb-6'
            dangerouslySetInnerHTML={{ __html: about.replace(/\\n/g, '') }}></div>

          {/* View Less Button */}
          {/* <div className='mt-4 text-blue-500 text-sm cursor-pointer'>
        <span className='material-icons text-sm align-middle'>expand_less</span>
        <span className='ml-1'>View less</span>
      </div> */}
        </div>
      )}
    </>
  )
}

export default DoctorBio
