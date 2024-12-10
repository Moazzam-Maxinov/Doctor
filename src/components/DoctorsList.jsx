import { useEffect, useState } from 'react'
import DoctorCard from './DoctorCard'
import DoctorCardShimmer from './DoctorCardShimmer'

const DoctorsList = () => {
  const [doctorsData, setDoctorsData] = useState([])

  useEffect(() => {
    fetch('https://rarespeak.com/wp-json/jet-cct/doctors')
      .then((res) => res.json())
      .then((data) => setDoctorsData(data))
  }, [])
  return (
    <div className='max-w-7xl mx-auto pb-12'>
      <div className='grid grid-col-1 md:grid-cols-3 gap-4'>
        {!doctorsData.length ? (
          <DoctorCardShimmer />
        ) : (
          doctorsData.map((doctor) => (
            <DoctorCard
              key={doctor._ID}
              name={doctor.doctor_name}
              image={doctor.doctor_image}
              speciality={doctor.expertise_speciality}
              address={doctor.doctor_address}
              experience={doctor.years_of_experience}
              slug={doctor.doctor_url_slug}
              data={doctor}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default DoctorsList
