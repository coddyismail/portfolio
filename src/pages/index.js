
import { useState, useEffect } from 'react';
import Footer from '../component/Footer';
import Head from 'next/head';
import { FaTelegramPlane } from 'react-icons/fa';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { ToastContainer, toast } from 'react-toastify';
import { TbBrandDatabricks } from "react-icons/tb";
import 'react-toastify/dist/ReactToastify.css';

import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaStar, FaDatabase, FaJs, FaCode,
  FaPalette, FaInstagram, FaGithub, FaReddit, FaGit, 
} from 'react-icons/fa';
import {
  SiMongodb, SiTypescript, SiExpress, SiTailwindcss
} from 'react-icons/si';
import { BiMoviePlay, } from 'react-icons/bi';
import { AiOutlineAudio } from 'react-icons/ai';
import { BsBrush, BsTranslate } from 'react-icons/bs';
import { SlMagicWand } from 'react-icons/sl';
import { FaRegObjectGroup } from 'react-icons/fa6';

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
   const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
         toast.success('✅ Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
          toast.error('⚠️ Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    }
  };
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="portfolio-container skeleton-loading">
        {/* Navigation Skeleton */}
        <nav className="navbar skeleton-nav">
          <div className="logo skeleton-box" style={{width: '100px', height: '30px'}}></div>
          <div className="hamburger">
            <div className="bar skeleton-box"></div>
            <div className="bar skeleton-box"></div>
            <div className="bar skeleton-box"></div>
          </div>
        </nav>

        {/* Hero Section Skeleton */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="intro-text">
              <span className="skeleton-box" style={{width: '60px', height: '20px'}}></span>
              <h1 className="skeleton-box" style={{width: '150px', height: '50px', margin: '10px 0'}}></h1>
            </div>
            <p className="hero-description skeleton-box" style={{width: '250px', height: '30px'}}></p>
            <div className="hero-buttons">
              <div className="skeleton-box" style={{width: '150px', height: '40px'}}></div>
            </div>
          </div>
          <div className="hero-image">
            <div className="skeleton-box" style={{width: '350px', height: '350px', borderRadius: '50%'}}></div>
          </div>
        </section>

        {/* About Me Skeleton */}
        <section className="content-section">
          <h2 className="skeleton-box" style={{width: '150px', height: '40px'}}></h2>
          <p className="skeleton-box" style={{width: '100%', height: '20px', marginBottom: '10px'}}></p>
          <p className="skeleton-box" style={{width: '100%', height: '20px'}}></p>
        </section>

        {/* Skills Section Skeleton */}
        <section className="skills-section">
          <h2 className="skeleton-box" style={{width: '120px', height: '40px'}}></h2>
          <div className="skills-grid">
            {[1, 2, 3].map((item) => (
              <div className="skill-category skeleton-box" key={item} style={{height: '200px'}}></div>
            ))}
          </div>
        </section>

        {/* Other Sections Skeleton */}
        {[1, 2].map((item) => (
          <section className="content-section" key={item}>
            <h2 className="skeleton-box" style={{width: '200px', height: '40px'}}></h2>
            <p className="skeleton-box" style={{width: '100%', height: '20px', marginBottom: '10px'}}></p>
            <p className="skeleton-box" style={{width: '100%', height: '20px'}}></p>
          </section>
        ))}

        {/* Newsletter Skeleton */}
        <section className="newsletter-section">
          <div className="newsletter-embed skeleton-box" style={{height: '200px'}}></div>
        </section>

        {/* Contact Section Skeleton */}
        <section className="contact-section">
          <h2 className="skeleton-box" style={{width: '180px', height: '40px', margin: '0 auto'}}></h2>
          <div className="contact-form skeleton-box" style={{height: '400px', marginTop: '30px'}}></div>
        </section>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Ismail | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    ></motion.div>
      <div className="portfolio-container">
        {/* Navigation */}
      <nav className="navbar">
      <div className="logo">
        <span className="ll">I</span>smail.
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#branding" onClick={() => setIsOpen(false)}>Branding</a>
        <a href="#agency" onClick={() => setIsOpen(false)}>Agency</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        <a href="#contact" className="hire-me-btn" onClick={() => setIsOpen(false)}>Hire Me</a>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>

        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="intro-text">
              <span>I Am</span>
              <h1>Ismail</h1>
            </div>
            <p className="hero-description text-xl font-medium">
              <Typewriter
                words={[
                  'Web Developer',
                  'Video Editor',
                  'Graphic Designer',
                  'Content Creator',
                  'Freelancer',
                ]}
                loop={0} // 0 = infinite
                cursor
                cursorStyle="•"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>
            <div className="hero-buttons">
              <a
                href='https://github.com/coddyismail'
                className='primary-btn'
                target='_blank'
                rel='noopener noreferrer'
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="ismail_pfp.jpg"
              alt="Ismail"
              className="profile-image"
            />
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="content-section">
          <h2>About Me</h2>
          <p>
            I'm a Computer Science student and self-taught web developer with a passion for video editing and graphic design.<br /> While mastering algorithms and data structures by day, I channel my creativity into building beautiful digital experiences by night.
          </p>
          <p>
            I'm currently focused on growing my web design agency to help small businesses build functional yet visually stunning websites,  <br />
            applying both my technical knowledge and artistic eye to every project.
          </p>
          {/* <p>
            Personal Touch: I'm passionate about content creation and sharing my journey as a CS student-turned-developer to help others bridge the gap between technical skills and creative expression.
          </p> */}
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {/* Web Development Column */}
            <div className="skill-category">
              <h3 className="skill-heading">
                <FaCode className="skill-icon" /> Web Development
              </h3>
              <ul className="skill-list">
                <li><FaHtml5 className="skill-icon html-icon" /> HTML5</li>
                <li><FaCss3Alt className="skill-icon css-icon" /> CSS3</li>
                <li><FaJs className="skill-icon js-icon" /> JavaScript</li>
                <li><FaReact className="skill-icon react-icon" /> React</li>
                <li><FaNodeJs className="skill-icon node-icon" /> Node.js</li>
                <li><SiMongodb className="skill-icon mongo-icon" /> MongoDB</li>
                <li><SiTypescript className="skill-icon ts-icon" /> TypeScript</li>
                <li><SiExpress className="skill-icon express-icon" /> Express.js</li>
              </ul>
            </div>

            {/* Video Editing Column */}
            <div className="skill-category">
              <h3 className="skill-heading">
                <BiMoviePlay className="skill-icon" /> Video Editing
              </h3>
              <ul className="skill-list">
                <li><AiOutlineAudio className="skill-icon" /> Storytelling</li>
                <li><BsBrush className="skill-icon" /> Motion Graphics</li>
                <li><SlMagicWand className="skill-icon" /> Visual Effects</li>
              </ul>
            </div>
{/* Data Engineer */}
            <div className="skill-category">
              <h3 className="skill-heading">
                <TbBrandDatabricks className="skill-icon" /> Data Engineer
              </h3>
              <ul className="skill-list">
                <li><FaPython className="skill-icon" /> Python</li>
                <li><FaStar className="skill-icon" /> PySpark</li>
                <li><FaDatabase className="skill-icon" /> SQl</li>
                {/* <li><FaLogo className="skill-icon" /> SQL</li> */}
              </ul>
            </div>
            {/* Graphic Design Column */}
            <div className="skill-category">
              <h3 className="skill-heading">
                <FaPalette className="skill-icon" /> Graphic Design
              </h3>
              <ul className="skill-list">
                <li><FaRegObjectGroup className="skill-icon" /> Branding</li>
                <li><FaInstagram className="skill-icon" /> Social Media Visuals</li>
                {/* <li><FaLogo className="skill-icon" /> Social Media Logos</li> */}
              </ul>
            </div>
          </div>

           
          {/* </div> */}

          
          {/* version Control  */}
            <div className="skill-category">
              <h3 className="skill-heading">
                <BiMoviePlay className="skill-icon" /> Version Control
              </h3>
              <ul className="skill-list">
                <li><FaGithub className="skill-icon" id='github'/> GitHub</li>
                <li><FaGit className="skill-icon" /> Git</li>
                
              </ul>
            </div>

            
          <p className="skills-mindset">
            <strong>Startup Mindset:</strong> I focus on self-learning and building things from the ground up.
          </p>
        </section>

        {/* Personal Branding Section */}
      <section id="branding" className="content-section">
  <h2>Personal Branding</h2>
  <p>
    I create coding meme content that turns everyday developer struggles into laughter. From debugging disasters to sleepless deployment nights, I capture it all through humor.
  </p>
  <p>
    With over 30+ memes and some crossing 800k+ views, my content connects deeply with the coding community by keeping things both relatable and real.
  </p>
</section>



        {/* Web Design Agency Section */}
        <section id="agency" className="content-section">
          <h2>Web Design Agency</h2>
          <p>
            My agency helps startups build modern, mobile-first, and conversion-focused websites. We focus on creating visually appealing and highly functional web designs that resonate with the brand.
          </p>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="newsletter-section">
          <div className="newsletter-container">
            <div className="newsletter-embed">
              <div className="newsletter-header">
                <h3>✨ Ismail's Dev Digest</h3>
                <p>Join  developers getting weekly tips</p>
              </div>

              <form
                action="https://formspree.io/f/mjkwegzj"
                method="POST"
                className="newsletter-form"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className='submit'>Subscribe</button>
              </form>

              <div className="newsletter-footer">
                <span>No spam • Unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2 className='h2'>Contact Me</h2>
          {/* <p>Get In Touch With Me.</p> */}

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input className='form' type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="FIRST NAME" required />
            <input className='form' type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="LAST NAME" required />
          </div>
          <div className="form-group">
            <input className='form' type="email" name="email" value={formData.email} onChange={handleChange} placeholder="EMAIL" required />
            <input className='form' type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="PHONE NUMBER" required />
          </div>
          <div className="form-group">
            <textarea className='form' name="message" value={formData.message} onChange={handleChange} placeholder="WHAT DO YOU HAVE IN MIND" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
          </div>
  <ToastContainer position="top-right" autoClose={3000} />
          <div className="contact-info">
         
            <p>📧 <a href="mailto:coderismail@proton.com">Mail ME</a></p>
            <p>🏠 Pune | India</p>
          </div>

          <div className="social-icons">
            <a className='insta' href="https://www.instagram.com/coderismail" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a className='git' href="https://github.com/coddyismail" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a className='reddit' href="https://www.reddit.com/user/coder_ismail" target="_blank" rel="noopener noreferrer" aria-label="Reddit">
              <FaReddit />
            </a>
             <a href="https://t.me/coder_ismail" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane className="social-icon" />
        </a>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}