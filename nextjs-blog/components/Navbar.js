import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <div className={styles.nav_group}>
        <ul className={styles.nav_links}>
          <li className={router.pathname == '/' ? `${styles.nav_focus}` : ''}>
            <Link href="https://akin-fagbohun.netlify.app/">Home</Link>
          </li>
          <li
            className={
              router.pathname == '/about-me' ? `${styles.nav_focus}` : ''
            }
          >
            <Link href="https://akin-fagbohun.netlify.app/about-me">About</Link>
          </li>
          <li className={router.pathname == '/' ? `${styles.nav_focus}` : ''}>
            <Link href="/">Blog</Link>
          </li>
          <li
            className={
              router.pathname == '/contact' ? `${styles.nav_focus}` : ''
            }
          >
            <Link href="https://akin-fagbohun.netlify.app/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
