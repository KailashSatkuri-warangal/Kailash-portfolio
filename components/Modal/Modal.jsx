import React, { useState, useEffect } from 'react';
import styles from '../../styles/Modal.module.css';
import { ExperienceList } from '../../data/Experience';
import { ProjectsList } from '../../data/Projects';

const generateSummary = () => {
    const education = "Kailash Satkuri's resume highlights a Bachelor of Technology in Computer Science from SR University (CGPA 8.3/10.0).";

    const monosageExperience = ExperienceList.find(exp => exp.company === "MONOSAGE");
    const experienceDetails = monosageExperience 
        ? `During the internship at ${monosageExperience.company}, Kailash ${monosageExperience.activities.toLowerCase()}, built a client project with web programming and MySQL, and contributed to a car rental website.`
        : "Experience as a Software Engineer Intern.";

    const skills = "Technical skills include Python, Java, C, HTML, CSS, Bootstrap, Jupyter Notebook, Google Colab, Git, Visual Studio, Figma, AI Development (AI, ML, NLP), and databases like MySQL, MongoDB, and Firebase.";

    const projectSummary = `Key projects include a Customer Review Analysis application (95% accuracy in sentiment analysis), a Crop Detection application (95% accuracy in real-time classification using CNN), and a Car Rental Website.`;

    const achievements = "Achievements include a Certificate of Appreciation for Academic Excellence, AWS Academy Cloud Foundations certification, and Meta Certified: Full-Stack Engineer.";

    return `${education}\n\n${experienceDetails}\n\n${skills}\n\n${projectSummary}\n\n${achievements}`;
};

function Modal({ isOpen, onClose }) {
    const [summary, setSummary] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const fullSummary = generateSummary();
            const words = fullSummary.split(' ');
            let currentSummary = '';
            let wordIndex = 0;
            setIsTyping(true);

            const intervalId = setInterval(() => {
                if (wordIndex < words.length) {
                    currentSummary += words[wordIndex] + ' ';
                    setSummary(currentSummary);
                    wordIndex++;
                } else {
                    clearInterval(intervalId);
                    setIsTyping(false);
                }
            }, 100); // Adjust the speed of typing here

            return () => clearInterval(intervalId);
        } else {
            setSummary(''); 
        }
    }, [isOpen]);

    useEffect(() => {
        const handleBodyScroll = () => {
            document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        };

        handleBodyScroll();

        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const resumeUrl = "https://drive.google.com/file/d/1Cbf8dA1I3lI6DQPXQgfkPNPcwyIlS7iL/preview";

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalMainContent}>
                    <div className={styles.resumeContainer}>
                        <iframe src={resumeUrl} className={styles.resumeFrame} title="Resume Preview"></iframe>
                    </div>
                    <div className={styles.summaryContainer}>
                        <h3>About Me</h3>
                        <pre className={styles.summaryText}>
                            {summary}
                            {isTyping && <span className={styles.blinkingCursor}></span>}
                        </pre>
                    </div>
                </div>
            </div>
            <button className={styles.closeButton} onClick={onClose}>&times;</button>
        </div>
    );
}

export default Modal;
