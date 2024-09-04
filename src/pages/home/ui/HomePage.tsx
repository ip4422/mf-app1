import { Link } from 'react-router-dom'

import { routeNames } from 'app/routes/config'

export const HomePage: React.FC = () => {
  return (
    <div>
      <section className='my-8'>some content</section>
      <section className='my-8'>some content</section>
      <section className='my-8'>
        <Link
          to={routeNames.importantInfo}
          className='text-sky-400 px-4 py-2 rounded hover:bg-gray-700'
        >
          Important
        </Link>
      </section>
      <section className='my-8'>
        <Link
          to={routeNames.minorInfo}
          className='text-sky-400 px-4 py-2 rounded hover:bg-gray-700'
        >
          Minor
        </Link>
      </section>
    </div>
  )
}

export default HomePage
