const Footer = () => {
  return (
    <footer className='bg-gray-200 shadow-md'>
      <div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8'>
        <p className='mt-8 text-base leading-6 text-center text-gray-400'>
          © {new Date().getFullYear()}{' '}
          <a
            href='https://www.diseasefix.com'
            className='no-underline'
            target='_blank'
            rel='noopener noreferrer'>
            DiseaseFix.
          </a>
          &nbsp;All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
