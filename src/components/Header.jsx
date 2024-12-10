import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-4 md:px-20 py-4'>
      <div className='text-indigo-500' id='logo'>
        <a href='https://www.diseasefix.com' target='_blank'>
          <img src='/logo-df.png' className='h-8 md:h-12 mx-auto md:mx-0' />
        </a>
      </div>
      <div className='space-x-6'>
        <Link to='/' className='text-sm text-gray-500 font-semibold'>
          Doctors
        </Link>
      </div>
    </header>
  )
}

export default Header
