import { IIcon } from './types'

const Home = ({ width, height }: IIcon) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={width}
    height={height}
    fill='none'
    stroke='currentColor'
    strokeWidth='1'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
    <polyline points='9 22 9 12 15 12 15 22'></polyline>
  </svg>
)

export default Home
