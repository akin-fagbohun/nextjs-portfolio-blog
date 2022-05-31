import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  return (
    <nav>
      <div className={styles.nav_group}>
        <ul className={styles.nav_links}>
          <li>
            <Link
              href="https://akin-fagbohun.netlify.app/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              end
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="https://akin-fagbohun.netlify.app/about-me"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="https://akin-fagbohun.netlify.app/contact"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
