import styles from '../Skills/SkillsStyles.module.css';
import SkillList from '../../Common/SkillList';
import CircleWhite from '../../assets/assets/Circle.svg';
import CircleBlack from '../../assets/assets/Circle.svg';
import { useTheme } from '../../Common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const circle = theme === 'light' ? CircleWhite : CircleBlack;

  return (
    <section id="skills" className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <h2 className="sectionSubTitle">Design Skills</h2>
      <br/><br/>
      <div className={styles.skillList}>
        <SkillList src={circle} skill="User Research" />
        <SkillList src={circle} skill="User Testing and Feedback" />
        <SkillList src={circle} skill="Communication and collaboration" />
        <SkillList src={circle} skill="Resposive design" />
        <SkillList src={circle} skill="Information architecture" />
        <SkillList src={circle} skill="Wireframing and prototyping" />
        <SkillList src={circle} skill="Visual Design" />
        <SkillList src={circle} skill="Problem solving" />
      </div>
      <br/>
      <hr />
      <br/>
      <h2 className="sectionSubTitle">Design Tools</h2>
      <br/><br/>
      <div className={styles.skillList}>
        <SkillList src={circle} skill="Figma" />
        <SkillList src={circle} skill="Adobe Photoshop" />
        <SkillList src={circle} skill="Adobe Illustrator" />
        <SkillList src={circle} skill="Miro" />
        <SkillList src={circle} skill="Canva" />
      </div>
      <br/>
      <hr />
      <br/>
      <h2 className="sectionSubTitle">Soft Skills</h2>
      <br/><br/>
      <div className={styles.skillList}>
        <SkillList src={circle} skill="Critical thinking" />
        <SkillList skill="Decision making" />
        <SkillList src={circle} skill="Communication" />
        <SkillList src={circle} skill="Public speaking" />
        <SkillList src={circle} skill="Collaboration" />
        <SkillList src={circle} skill="Empathy " />
        <SkillList src={circle} skill="Problem-Solving " />
        <SkillList src={circle} skill="Teamwork " />
        <SkillList src={circle} skill="Conflict Resolution " />
        <SkillList src={circle} skill="Self-Awareness " />
        <SkillList src={circle} skill="Adaptability " />
      </div>
      <br/>
      <hr />
      <br/>
      <h2 className="sectionSubTitle">Language Skills</h2>
      <br/><br/>
      <div className={styles.skillList}>
        <SkillList src={circle} skill="English (Upper Intermediate)" />
        <SkillList src={circle} skill="Hindi (Pre Intermediate)" />
        <SkillList src={circle} skill="Kannada (Pre Intermediate)" />
        <SkillList src={circle} skill="Telugu (Native, vocal)" />
        <SkillList src={circle} skill="Tamil (Native, vocal)" />
      </div>
      <br/>
      <hr />
      <br/>
      <h2 className="sectionSubTitle">Coding Languages</h2>
      <br/><br/>
      <div className={styles.skillList}>
        <SkillList src={circle} skill="HTML" />
        <SkillList src={circle} skill="CSS" />
        <SkillList src={circle} skill="Java" />
      </div>
    </section>
  );
}

export default Skills;