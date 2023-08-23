import { forwardRef } from 'react'
import Link from 'next/link'

import { Feather, Home } from '@/components/icons'
import Heading from '@/components/Heading'
import DroneIcon from '@/components/icons/DroneIcon'
import OrderIcon from '@/components/icons/OrderIcon'

interface ISidebar {
  collapsed: boolean
}

const Sidebar = forwardRef(
  ({ collapsed }: ISidebar, sidebarRef: React.Ref<HTMLElement>) => (
    <nav
      ref={sidebarRef}
      className={`min-h-screen w-64 border-r border-gray-200 bg-white px-5 py-7 dark:border-gray-700 dark:bg-gray-800 ${
        collapsed ? 'ml-0 sm:-ml-64' : '-ml-64 sm:ml-0'
      } transition-spacing duration-300 ease-in-out motion-reduce:transition-none sm:duration-500`}
    >
      <Link href='/' aria-label='Go to the dashboard' passHref>
        <div className='flex items-center justify-center space-x-3'>
          <DroneIcon width={40} height={40} color="#0490C9"/>
          <Heading tag='h3' className="text-sky-500">Drone System</Heading>
        </div>
      </Link>

      <div
        className='mt-12'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
      >
        <div role='none'>
          <Link
            href='/'
            className='flex items-center space-x-4 px-3 py-2 text-lg hover:opacity-75'
            role='menuitem'
            passHref
          >
            <Home width={30} height={30} />
            <span>Home</span>
          </Link>
          <Link
            href='/drones'
            className='flex items-center space-x-4 px-3 py-2 text-lg hover:opacity-75'
            role='menuitem'
            passHref
          >
            <DroneIcon width={30} height={30} />
            <span>Drones</span>
          </Link>
          <Link
            href='/orders'
            className='flex items-center space-x-4 px-3 py-2 text-lg hover:opacity-75'
            role='menuitem'
            passHref
          >
            <OrderIcon width={30} height={30} />
            <span>Orders</span>
          </Link>
        </div>
      </div>
    </nav>
  )
)

Sidebar.displayName = 'Sidebar'

export default Sidebar
