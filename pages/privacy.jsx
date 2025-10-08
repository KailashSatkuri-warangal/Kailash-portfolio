import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer';
import styles from '../styles/Privacy.module.css';

const Privacy = () => {
  return (
    <div className={styles.page_container}>
      <div className={styles.container}>
        <Navbar />
        <h1>Privacy Policy</h1>
        <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit this website.</p>

        <h2>Personal Information We Collect</h2>
        <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.</p>

        <h2>How We Use Your Personal Information</h2>
        <p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>

        <h2>Sharing Your Personal Information</h2>
        <p>We share your Personal Information with third parties to help us use your Personal Information, as described above. We also use Google Analytics to help us understand how our customers use the Site. You can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.</p>

        <h2>Your Rights</h2>
        <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>

        <h2>Changes</h2>
        <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>

        <h2>Contact Us</h2>
        <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at your-email@example.com.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
