import styles from '../components/footer.module.css';
import { GithubLogo } from './icons/GithubLogo';
import { NorthcodersLogo } from './icons/NorthcodersLogo';
import { LinkedInLogo } from './icons/LinkedInLogo';

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer_group}>
        <div className={styles.footer_links}>
          <a
            target="_blank"
            href="https://github.com/akin-fagbohun"
            rel="noreferrer"
          >
            <GithubLogo />
          </a>
          <a
            target="_blank"
            href="https://github.com/akin-fagbohun"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className={styles.footer_links}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/akinfagbohun/"
            rel="noreferrer"
          >
            <LinkedInLogo />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/akinfagbohun/"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className={styles.footer_links}>
          <a target="_blank" href="https://northcoders.com/" rel="noreferrer">
            <NorthcodersLogo />
          </a>
          <a target="_blank" href="https://northcoders.com/" rel="noreferrer">
            Northcoders
          </a>
        </div>
        <small className={styles.copyright}>
          © Akin Fagbohun. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
