
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer';
import styles from '../styles/Contact.module.css';
import { useState } from 'react';
import Image from 'next/image';

const links = [
  {
    name: 'Gamil',
    icon: '/Contact/gmail.svg',
    link: 'mailto:satkurikailash@gmail.com'
  },
  {
    name: 'LinkedIn',
    icon: '/Contact/linkedin.svg',
    link: 'https://www.linkedin.com/in/satkuri-kailash/'
  },
  {
    name: 'Medium',
    icon: '/Contact/medium.svg',
    link: 'https://medium.com/@satkurikailash'
  },
  {
    name: 'GitHub',
    icon: '/Contact/github.svg',
    link: 'https://github.com/KailashSatkuri-warangal'
  },
  {
    name: 'Twitter',
    icon: '/Contact/twitter.svg',
    link: 'https://twitter.com/KSatkuri95221'
  },
];

function Link({ name, icon, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Image src={icon} alt={name} height={50} width={50}></Image>
    </a>
  );
}

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={styles.page_container}>
      <Navbar />
      <div className={styles.contact} id="contact">
        <div className={styles.left}>
          <h2>Get in touch</h2>
          <p>If you&apos;ve got a project in mind, why not get in touch. Let&apos;s work together.</p>
          <div className={styles.links}>
            {links.map(link => <Link key={link.name} name={link.name} icon={link.icon} link={link.link} />)}
          </div>
        </div>
        <div className={styles.right}>
          <h3>Contact Form</h3>
          <p>Feel free to reach out with any questions or collaboration ideas.</p>
          <span>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={(e) => { setName(e.target.value) }} />
          </span>
          <span>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={(e) => { setEmail(e.target.value) }} />
          </span>
          <span>
            <label htmlFor="message">Message</label>
            <textarea name="message" onChange={(e) => { setMessage(e.target.value) }} placeholder="Your message..."></textarea>
          </span>
          <a href={`mailto:satkurikailash@gmail.com?from=${email}&name=${name}&body=${message}`} className={styles.submit} >Submit</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
