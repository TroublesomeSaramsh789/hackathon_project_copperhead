import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Component/UI/Button/button';
import style from './home.module.scss';
import TitleBg from '../../Component/UI/Title/title_one';
import TitleSm from '../../Component/UI/Title/title_two';
import bgImg from '../../assets/images/home-background.png';
const home = (props) => {
  return (
    <React.Fragment>
      <div className={style.homeInfo}>
        <TitleSm>
          <h3>Study Your Hobbies</h3>
        </TitleSm>
        <TitleBg>Discover Your Carrier</TitleBg>
        <div className={style.BUTTON}>
          <div className={style.Quote}>
            <TitleSm>
              The Goal In Life Is Not To Attain Some Imaginary Ideal; It Is To
              Find And Fully Use Our Gifts. <em>- GAY HENDRICKS</em>
            </TitleSm>
          </div>
          <Button>
            <Link to='./start'>
              <p>Start Now</p>
            </Link>
          </Button>
        </div>
        <div className={style.bg}>
          <img src={bgImg} alt='' />
        </div>
      </div>
    </React.Fragment>
  );
};
export default home;
