import { Outlet } from 'react-router-dom'

const RootLayout: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 text-gray-900'>
      <main className='container mx-auto p-4'>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
