import styles from '../styles/footer.module.css';
import { GithubLogo } from './icons/GithubLogo';
import { NorthcodersLogo } from './icons/NorthcodersLogo';
import { LinkedInLogo } from './icons/LinkedInLogo';

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer_group}>
        <a
          target="_blank"
          href="https://github.com/akin-fagbohun"
          rel="noreferrer"
        >
          <div className={styles.footer_links}>
            <GithubLogo />
            {/* <a
            target="_blank"
            href="https://github.com/akin-fagbohun"
            rel="noreferrer"
            > */}
            GitHub
            {/* </a> */}
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/akinfagbohun/"
          rel="noreferrer"
        >
          <div className={styles.footer_links}>
            <LinkedInLogo />
            LinkedIn
          </div>
        </a>
        <a target="_blank" href="https://northcoders.com/" rel="noreferrer">
          <div className={styles.footer_links}>
            <NorthcodersLogo />
            Northcoders
          </div>
        </a>
        <small className={styles.copyright}>
          © Akin Fagbohun. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
