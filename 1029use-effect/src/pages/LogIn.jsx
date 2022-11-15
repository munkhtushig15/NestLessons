import React, { PureComponent } from 'react'
import Activities from '../components/Activities'
import ActivitiesTwo from '../components/ActivitiesTwo'
import Comments from '../components/Comments'
import Footer from '../components/Footer'

export class LogIn extends PureComponent {
  render() {
    return (
      <div>
        <Activities Texts={"Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."} 
        Title="Your Hub for teamwork" Image={require('../images/niceOne.png')}/>
        <ActivitiesTwo TextsTwo={"Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."} 
        TitleTwo="Simple task management" ImageTwo={require('../images/niceTwo.png')}/>
        <Activities Texts={"Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."} 
        Title="Scheduling that actually works" Image={require('../images/niceThree.png')}/>
        <Comments />
        <Footer />
      </div>
    )
  }
}

export default LogIn