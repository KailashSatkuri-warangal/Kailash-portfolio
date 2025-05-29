import styles from '../../../styles/Projects.module.css';
import Image from 'next/image'

function Card({key,index,name,description,image,github,hosted,host_link}) {
    
    return (
        <div className={styles.card} style={{flexDirection:index%2?'row':'row-reverse'}}>
            <div className={styles.left}>
                <h2>{name}</h2>
                <p>{description}</p>
                <div className={styles.button_section}>
                    {github?<a href={github} target="_blank" without title="View the source code of the project" rel="noreferrer" >Source Code</a>:""}
                    <a href={host_link} target="_blank" without title="View the working of the project" rel="noreferrer"  style={{display:hosted?'block':'none'}}>See Live</a>
                </div>
            </div>
            <div className={styles.right} style={{textAlign:index%2?'right':'left'}}>
                <Image src={image} height={300} width={550} />
            </div>
        </div>
    )
}

export default Card
