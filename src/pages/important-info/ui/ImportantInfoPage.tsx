import React from 'react'
import { Link } from 'react-router-dom'

import { routeNames } from 'app/routes/config'

export const ImportantInfoPage: React.FC = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>ImportantInfoPage</h1>
      <Link
        className='text-sky-400 px-4 py-2 rounded hover:bg-gray-700'
        to={routeNames.minorInfo}
      >
        Minor
      </Link>
      <Link
        className='text-sky-400 px-4 py-2 rounded hover:bg-gray-700'
        to={routeNames.home}
      >
        Home
      </Link>
    </div>
  )
}

export default ImportantInfoPage
