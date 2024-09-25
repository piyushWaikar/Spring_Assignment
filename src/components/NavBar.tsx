import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex gap-8'>
        <Link to='/analytic' className={`hover:animate-bounce duration-200`} >Analytics</Link>
        <Link to='/commit' className='hover:animate-bounce duration-200'>Commit</Link>
        <Link to='/Upgrade' className='hover:animate-bounce duration-200'>upgrade</Link>
    </div>
  )
}

export default NavBar