import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='nav-bar'>
      <div className='mu-logo'>
        <Link to="/"><img className ="mu-img-logo"src='https://www.mangalayatan.in/wp-content/uploads/2023/07/logo-final.png' alt='Logo' /></Link>
      </div>
      <div>
      <h1 className='nav-nam'>Souvenir</h1>
      </div>
      <div className='nav-links'>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faculty">Faculty</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Header;
