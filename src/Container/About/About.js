import React from 'react';
import style from './about.module.scss';
import sameep from '../../assets/images/sameep.jpg';
import me from '../../assets/images/me.jpg';
const about = (props) => {
  return (
    <React.Fragment>
      <div className={style.about}>
        <h1>Contact Us to Learn More</h1>
        <p>
          We are Developers trying to make this world a better place to be right
          now.
        </p>
        <div className={style.cardParent}>
          <div className={style.card}>
            <div className={style.imgcard}>
              <img src={me} alt='' />
            </div>

            <h2>Saramsh Shrestha</h2>
            <div className='link'>
              <a href='https://www.facebook.com/profile.php?id=100011637709886'>
                Facebook
              </a>
              <a href='https://github.com/TroublesomeSaramsh789'>Github</a>
              <a href='https://www.instagram.com/saramshtroublesome/'>
                Instagram
              </a>
            </div>
          </div>

          <div className={style.card}>
            <div>
              <img src={sameep} alt='' />
            </div>
            <h2>Samip Gautam</h2>
            <div className='link'>
              <a href='https://www.facebook.com/samip.gautam.10'>Facebook</a>
              <a href='https://github.com/SameepGautam'>Github</a>
              <a href='https://www.instagram.com/sameep.gautam/'>Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default about;
