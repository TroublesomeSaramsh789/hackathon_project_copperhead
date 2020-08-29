import React, { PureComponent } from 'react';
import style from './main-App.module.scss';
import Querry from '../../Component/UI/Querry/querry';
//images
import art from '../../assets/app-images/Art.jpg';
import business from '../../assets/app-images/Business.jpg';
import help from '../../assets/app-images/help.jpg';
import leader from '../../assets/app-images/leader.jpg';
import math from '../../assets/app-images/math.jpg';
import problemSolving from '../../assets/app-images/ProblemSolving.png';
import readingWriting from '../../assets/app-images/reading-writing.jpg';
import science from '../../assets/app-images/science.jpg';
import social from '../../assets/app-images/social.jpg';
import teach from '../../assets/app-images/teach.jpg';
import tech from '../../assets/app-images/Tech.jpg';
// import Card from '../../Component/UI/card';

const stuff = [
  {
    name: 'Art',
    source: art,
    title: 'Art',
  },
  {
    name: 'Business',
    source: business,
    title: 'Business',
  },
  {
    name: 'Helping',
    source: help,
    title: 'Helping',
  },
  {
    name: 'Leadership',
    source: leader,
    title: 'Leadership',
  },
  {
    name: 'Maths',
    source: math,
    title: 'Maths',
  },
  {
    name: 'Problem Solving',
    source: problemSolving,
    title: 'ProblemSolving',
  },
  {
    name: 'Reading Writing',
    source: readingWriting,
    title: 'ReadingWriting',
  },
  {
    name: 'Science',
    source: science,
    title: 'Science',
  },
  {
    name: 'Being Social',
    source: social,
    title: 'BeingSocial',
  },
  {
    name: 'Teaching',
    source: teach,
    title: 'Teaching',
  },
  {
    name: 'Technology',
    source: tech,
    title: 'Technology',
  },
];

class Start extends PureComponent {
  state = {
    show: false,
    userData: [],
    IT: false,
    Medical: false,
    Engineering: false,
    LAW: false,
    Management: false,
    CA: true,
    Art: true,
  };

  Result = null;
  // Result
  result = () => {
    if (this.state.userData.includes('Tech')) {
      this.setState({ IT: true });
    }
    if (this.state.userData.includes('Help')) {
      this.setState({ Medical: true });
    }
    if (this.state.userData.includes('ProblemSolver')) {
      this.setState({ IT: true });
      this.setState({ Management: true });
    }
    if (
      this.state.userData.includes('ProblemSolver') &&
      this.state.userData.includes('Maths')
    ) {
      this.setState({ CA: true });
      this.setState({ Engineering: true });
      this.setState({ IT: true });
    }
    if (this.state.userData.includes('Art')) {
      this.setState({ Art: true });
    }
    if (this.state.userData.includes('Business')) {
      this.setState({ Business: true });
    }
  };

  offArrayMap = () => {
    this.setState({ show: !this.state.show });
    const userData = this.state.userData;
    const start = this.result;
    start();
  };
  render() {
    let ArrayMap = stuff.map((prop) => (
      <Querry
        source={prop.source}
        question={`Are You Intrested In ${prop.name} ?`}
        true={() => {
          this.state.userData.push(prop.title);
          console.log(this.state.userData);
        }}
      />
    ));
    if (this.state.show) {
      ArrayMap = (
        <div className={style.fail}>
          <h1>
            <span>Sorry, We couldn't complete our project in time.</span>
          </h1>{' '}
          <h3>
            This Page was suppose to give you suggestion what subjects might of
            been your intrest or Skill you can learn to make your gifts a
            professtion carrier based on those following parameters.
          </h3>
        </div>
      );
    }

    // const it =this.state.IT ? (<div> <Card name={' BIT(Bachelor of Information Technology)'} />
    //                           <Card name={' BCA(Bachelors of Computer Application)'} />
    //                           <Card name={' Bsc.CSIT(Bachelor of Computer Science)'} />
    //                           <Card name={' BIM(Bachelor of Information Management)'} /> ): null
    // </div>

    return (
      <div className={style.mainApp}>
        {ArrayMap}

        <div className={style.btn}>
          <button onClick={this.offArrayMap}>Find Out The Result</button>
        </div>
        {/* {it} */}
      </div>
    );
  }
}
export default Start;
