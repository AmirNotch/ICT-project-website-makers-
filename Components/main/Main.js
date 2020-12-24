import React from 'react'
import Features from './Features'
import Feedback from './Feedback'
import AboutUS from './AboutUs'

// feedbck & author pictures
import FirstImg from '../../images/undraw_gift_card_6ekc.svg'
import SecondImg from '../../images/undraw_metrics_gtu7.svg'
import Simson from '../../images/person_4.jpg'
import Kimberly from '../../images/person_1.jpg'
import { OurWorkers } from './OurWorkers'

function Main() {
  const featuresArr = [
    {
      id: 1,
      icon: <i class="fas fa-female"></i>,
      title: 'Marketing Consulting',
      desc: 'Products are also important in the website and the no of products will also increase or decrease website package pricing so firstly count how many products you need in the website and make a products folder in your PC and add all products in it so you will come to know how many products you want in your website',
      link: '/',
    },
    {
      id: 2,
      icon: <i class="fas fa-home"></i>,
      title: 'Hosting',
      desc: 'The website design need some online space that is called hosting server. So, you must need hosting server for your website to make it live for the whole world. There are different charges for the hosting servers according to the disk space, CPU, Bandwidth, Email Accounts and many more..',
      link: '/',
    },
    {
      id: 3,
      icon: <i class="fas fa-paint-brush"></i>,
      title: 'Design',
      desc: 'Choose our web design services, and your business can count on 100 percent transparency. From our personalized quotes to our initial designs, our team provides your company with complete access to our web design pricing and strategies.',
      link: '/',
    },
    {
      id: 4,
      icon: <i class="fab fa-facebook"></i>,
      title: 'SMM',
      desc: 'Whether they’re searching on their tablet, smartphone, or desktop, users rely on search to find what they’re looking for, from services to products. That’s why Google processes more than two trillion searches a year, and why 80 percent of users turn to search when they need something.',
      link: '/',
    },
    {
      id: 5,
      icon: <i class="fas fa-mobile-alt"></i>,
      title: 'Mobile application',
      desc: 'There are a lot of variables that change the price of a website in Dubai. Yes, mobile friendly website has different packages and for the desktop website its cost is different. The decision is yours to find the best charges for the website design and development in dubai.',
      link: '/',
    },
    {
      id: 6,
      icon: <i class="fas fa-laptop"></i>,
      title: 'Digital Marketing',
      desc: 'Whether you’re an ecommerce store, brick-and-mortar business, or service provider, our designers can create the webpages that your company needs to reach, inform, and convert your target audience. As a full-service digital marketing agency, we also offer content marketing services to enhance your strategy..',
      link: '/',
    },
  ]
  const feedbackArr = [
    {
      id: 1,
      imgSrc: FirstImg,
      title: 'Communicate and gather feedback',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.',
      // author data for card
      author: {
        photo: Simson,
        name: 'Grey Simpson',
        workPlace: 'Co-Founder, XYZ Inc',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?',
      },
    },
    {
      id: 2,
      imgSrc: SecondImg,
      title: 'Communicate and gather feedback',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.',
      // author data for card
      author: {
        photo: Kimberly,
        name: 'Kimberly Gush',
        workPlace: 'Co-Founder, XYZ Inc',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?',
      },
    },
  ]

  return (
    <main className="main">
      {/* title */}
      <div className="container py-5">
        <div className="col-md-6 offset-md-3 text-center">
          <h2 className="font-weight-bold mb-3 title">Our services</h2>
          <p className="text-secondary">
            Level up your business with WebsiteMaker
          </p>
        </div>
      </div>

      {/* featres */}
      {/* each Feature box has mb 80px that is why this section does not has py-5 -> (pt-5)  */}
      <section className="pt-5" id="featurs">
        <div className="container">
          <div className="row">
            <Features featuresList={featuresArr} />
          </div>
        </div>
      </section>

      {/* feedback */}
      <section className="py-5">
        <div className="container">
          <Feedback feedbackList={feedbackArr} />
        </div>
      </section>

      {/* about us */}
      <section className="py-5 bg-light" id="aboutUs">
        <div className="container">
          <h2 className="text-capitalize font-weight-bold text-center mb-5 title">about us</h2>
          <AboutUS />
        </div>
      </section>

      {/* our workers */}
      <section className="py-5 bg-white" id="ourWorkers">
        <div className="container">
          <h2 className="text-capitalize font-weight-bold text-center mb-5 title">Our Workers</h2>
          <OurWorkers />
        </div>
      </section>
    </main>
  )
}
export default Main
