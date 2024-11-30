import styles from './HeroStyles.module.css'
import heroImage from '../../assets/assets/funnyboilol.jpg';
import sun from '../../assets/assets/sun.svg';
import moon from '../../assets/assets/moon.svg';
import Twittericon from '../../assets/assets/twitter-6.svg';
import Linkedinicon from '../../assets/assets/linkedin-icon.svg';
import Behanceicon from '../../assets/assets/behance_logo_Blue.svg';
import cv from '../../assets/assets/Resume1.pdf';
import { useTheme } from '../../Common/ThemeContext';

function Hero() {

    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;

  return (
    <section id="hero" className={styles.container}>
        <div>
            <img className={styles.Hero} src={heroImage} alt="profile pic, tharush S" />
            <img className={styles.colorMode} src={themeIcon} alt="color mode  icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.infp}>
            <h1>Tharush</h1><h2>Somashekar</h2>
            <h3>User experience</h3><h3>designer</h3>
            <span>
                <a href='https://x.com/'>
                    <img src={Twittericon} alt='Twitter'/>
                </a>
                <a href='https://www.linkedin.com/in/tharushsomashekar/'>
                    <img src={Linkedinicon} alt='Linkedin'/>
                </a>
                <a href='https://www.behance.net/TharushSomashekar'>
                    <img src={Behanceicon} alt='behance'/>
                </a>
            </span>
            <p><b>“Design isn’t finished until</b></p>
            <p><b>somebody is using it.”,</b></p>
            <br></br>
            <a href={cv} download>
                <button className="hover">Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero
