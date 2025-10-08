
import Link from 'next/link';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer';
import styles from '../styles/404.module.css';

function NotFoundPage() {
  return (
    <div className={styles.page_container}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.message}>Oops! The page you are looking for does not exist.</p>
        <Link href="/">
          <a className={styles.homeLink}>Go back to the homepage</a>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
