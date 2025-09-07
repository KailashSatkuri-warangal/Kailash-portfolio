import styles from '../../styles/Footer.module.css'; // correct path

const Footer = () => {
  const text = `© ${new Date().getFullYear()} Kailash. All rights reserved.`;

  return (
    <footer className={styles.footer}>
      <p className={styles.animatedText}>
        {text.split('').map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </p>
    </footer>
  );
};

export default Footer;
