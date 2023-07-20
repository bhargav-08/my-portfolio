import ProfileImg from '../../assets/home.jpg'
import ProfileImgSmall from '../../assets/home-small.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'

const Home = () => {
  return (
    <section className='home section grid'>
      <picture>
        <source
          className='home__img'
          media='(min-width: 768px)'
          srcSet={ProfileImg}
        />
        <img className='home__img' src={ProfileImgSmall} />
      </picture>
      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I'm Bhargav Chandpara.</span>
            <br />
            Web Developer
          </h1>
          <p className='home__description'>
            I am a diligent and driven student who possesses a deep enthusiasm
            for web development. I have a strong desire to enhance my abilities
            and acquire knowledge of emerging technologies, making me
            consistently open to opportunities for personal and professional
            growth in this domain. Being a proactive learner, I actively pursue
            challenges and thrive in collaborative team settings where I can
            both contribute my ideas and gain insights from others.
          </p>

          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              {' '}
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className='color__block'></div>
    </section>
  )
}

export default Home
