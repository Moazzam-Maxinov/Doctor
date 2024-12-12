import Hero from './Hero'
import DoctorsList from './DoctorsList'
import PopularSpecialty from './PopularSpecialty'

const Home = () => {
  return (
    <main className='bg-white'>
      <Hero />
      <PopularSpecialty />
      <DoctorsList />
    </main>
  )
}

export default Home
