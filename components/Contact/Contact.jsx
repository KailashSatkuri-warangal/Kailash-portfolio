import { useState } from 'react';
import styles from '../../styles/Contact.module.css';
import Image from 'next/image';

const links = [
  { name: 'Gmail', icon: '/Contact/gmail.svg', link: 'mailto:satkurikailash@gmail.com' },
  { name: 'LinkedIn', icon: '/Contact/linkedin.svg', link: 'https://www.linkedin.com/in/satkuri-kailash/' },
  { name: 'Medium', icon: '/Contact/medium.svg', link: 'https://medium.com/@satkurikailash' },
  { name: 'GitHub', icon: '/Contact/github.svg', link: 'https://github.com/KailashSatkuri-warangal' },
  { name: 'Twitter', icon: '/Contact/twitter.svg', link: 'https://twitter.com/KSatkuri95221' },
];

function Link({ name, icon, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" style={{ flexShrink: 0 }}>
      <Image src={icon} alt={name} height={32} width={32} />
    </a>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Hi Kailash,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.open(`mailto:satkurikailash@gmail.com?subject=${subject}&body=${body}`, '_self');
    
    setStatus("sent");
    setName(""); setEmail(""); setMessage("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <div className={`${styles.contact} glass-panel section-spacing`} id="contact">
      <div className={styles.left}>
        <h2>Get in touch</h2>
        <p>Got a project in mind or just want to chat? I&apos;d love to hear from you. Drop me a message and I&apos;ll get back within 24 hours.</p>
        <div className={styles.links}>
          {links.map(link => <Link key={link.name} name={link.name} icon={link.icon} link={link.link} />)}
        </div>
      </div>
      <div className={styles.right}>
        <h3>Send a Message</h3>
        <form onSubmit={handleSubmit}>
          <span>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" />
          </span>
          <span>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="your@email.com" />
          </span>
          <span>
            <label htmlFor="message">Message</label>
            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Tell me about your project..." rows={4}></textarea>
          </span>
          <button type="submit" className={styles.submit}>
            {status === "sent" ? "✓ Opening Email!" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
