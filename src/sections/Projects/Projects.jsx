import styles from '../Projects/ProjectsStyles.module.css';
import eyetracking from '../../assets/assets/Eyetracker.png'
import NcertPic from '../../assets/assets/NCERT_RTS_cover_PNG.png'
import YoutubePic from '../../assets/assets/YouTube_recomendation_system_SDB_cover.svg';
import ProjectCard from '../../Common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={eyetracking}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Omnichannel eyetracking"
          p="Webcam based eyetracker"
        />
        <ProjectCard
          src={NcertPic}
          link="https://www.behance.net/gallery/209834483/NCERT-rebranding-activity"
          h3="NCERT"
          p="Rebranding"
        />
        <ProjectCard
          src={YoutubePic}
          link="https://www.behance.net/gallery/209841117/Case-study-Youtube-recomendation-system"
          h3="Youtube"
          p="SDB blueprint"
        />
      </div>
    </section>
  );
}

export default Projects;