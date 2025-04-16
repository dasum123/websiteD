import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>
        <img src="/home.png" alt="Home" style={styles.icon} />
        <span>Home</span>
      </Link>
      <Link to="/about" style={styles.link}>
        <img src="about.png" alt="About" style={styles.icon} />
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
    background: '#32CD32', // Purple background
    borderBottom: '1px solid #ddd',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
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