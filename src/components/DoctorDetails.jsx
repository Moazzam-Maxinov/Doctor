import { useLocation, useParams } from 'react-router-dom'
import DoctorBio from './DoctorBio'
import DoctorDetailProfile from './DoctorDetailProfile'
import { useEffect, useState } from 'react'
import DoctorDetailShimmer from './DoctorDetailShimmer'

const DoctorDetails = () => {
  const params = useParams()
  const doctorName = params.doctor

  const { state } = useLocation()

  // console.log(state)

  const [doctorData, setDoctorData] = useState(null)
  const [notFound, setNotFound] = useState(false)

  //   console.log(doctorData)

  function updateDoctorData(data) {
    setDoctorData({
      image: data.doctor_image,
      name: data.doctor_name,
      speciality: data.expertise_speciality,
      experience: data.years_of_experience,
      language: data.doctor_languages_spoken,
      phone: data.doctor_phone_number,
      address: data.doctor_address,
      about: data.doctor_bio,
    })
  }

  useEffect(() => {
    if (state) {
      updateDoctorData(state)
      return
    }

    fetch(`https://rarespeak.com/wp-json/jet-cct/doctors/?doctor_url_slug=${doctorName}`)
      .then((res) => {
        if (!res.ok) throw new Error('Doctor not found')
        return res.json()
      })
      .then(([data]) => {
        updateDoctorData(data)
      })
      .catch((err) => setNotFound(true))
  }, [doctorName, state])

  if (notFound) {
    return <div>Doctor Not Found</div>
  }
  return (
    <div className='max-w-4xl mx-auto py-12'>
      {doctorData === null ? (
        <DoctorDetailShimmer />
      ) : (
        <>
          <DoctorDetailProfile
            image={doctorData.image}
            name={doctorData.name}
            speciality={doctorData.speciality}
            experience={doctorData.experience}
            language={doctorData.language}
            phone={doctorData.phone}
            address={doctorData.address}
          />
          <DoctorBio about={doctorData.about} />
        </>
      )}
    </div>
  )
}

export default DoctorDetails
