import React, { useState } from 'react';
import styles from '../../../styles/Profile.module.css';
import Role from './Role/Role';
import Modal from '../../Modal/Modal';

function ProfileText() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const downloadUrl = "https://drive.google.com/uc?export=download&id=1Cbf8dA1I3lI6DQPXQgfkPNPcwyIlS7iL";

    const handlePreviewClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={styles.profileText}>
                <h1>Hello</h1>
                <h2 style={{ marginBlockEnd: "5rem" }}>
                    I’m Kailash, <br />
                    A <Role /> <br />
                </h2>
                <div className={styles.buttonContainer}>
                    <a
                        href={downloadUrl}
                        download
                        className={styles.downloadButton}
                        rel="noreferrer"
                    >
                        Download
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={styles.icon}
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                    <a
                        href="#"
                        onClick={handlePreviewClick}
                        className={`${styles.downloadButton} ${styles.previewButton}`}
                    >
                        Preview
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className={styles.icon}>
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </a>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}

export default ProfileText;
