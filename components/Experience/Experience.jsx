import React from 'react'
import styles from '../../styles/Experience.module.css'
import {ExperienceList} from "../../data/Experience"
import Icon from './Icon/Icon'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {

    return (
        <div className={`${styles.experience} glass-panel section-spacing`} name="experience" id="experience">
                <h1>Work Experience</h1>
                <p>These are the organizations I have had the privilege of working with.</p>
                <div className={styles.experience_cards_section}>
                    <VerticalTimeline>
                    {ExperienceList.map((job,index) => 
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid var(--glass-border)', color: '#fff', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'}}
                            contentArrowStyle={{ borderRight: `7px solid var(--glass-border)` }}
                            date={`${job.from} - ${job.to}`}
                            iconStyle={{ background: 'rgba(255,255,255)', color: '#fff' }}
                            icon={<Icon url={job.logo} className={styles.rounded} />}
                        >
                            <h3 className="vertical-timeline-element-title">{job.company}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{job.role}</h4>
                            <p>{job.activities}</p>
                        </VerticalTimelineElement>
                    )}
                    </VerticalTimeline>
                </div>
        </div>
    )
}

export default Experience