import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>
        <img src="/icons/home.png" alt="Home" style={styles.icon} />
        <span>Home</span>
      </Link>
      <Link to="/about" style={styles.link}>
        <img src="/icons/about.png" alt="About" style={styles.icon} />
        <span>About</span>
      </Link>
    </nav>
  );
}

// CSS styles
const styles = {
  navbar: {
    display: 'flex',
    gap: '20px', // Adds space between Home and About
    padding: '10px',
    background: '#333',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px', // Space between icon and text
    fontSize: '18px',
  },
  icon: {
    width: '24px', // Icon size
    height: '24px',
  },
};

export default Navbar;