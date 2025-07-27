import React from 'react';
import './index.css';

function App() {
  return (
    <>
      <header className="flex justify-between items-center max-md:flex-wrap">
        <div className="flex items-center gap-2">
          <img loading="lazy" src="/logo.png" className="shrink-0 header-logo-icon" alt="SpectoV logo" />
          <div className="text-white font-bold spectov-logo-text">SpectoV</div>
        </div>
        <nav className="flex gap-3.5 items-center text-lg text-white max-md:flex-wrap">
          <a href="#" className="header-nav-link">Sign in</a>
          <a href="#" className="header-nav-link">Sign up</a>
        </nav>
      </header>

      <main>
        <section className="relative">
            <div className="main-hero-section-container">
                <div className="main-image-video-wrapper">
                    <img src="/sankalp.png" alt="Sankalp Image" className="main-image" />
                    <br />
                    <video controls autoPlay loop muted className="main-video">
                        <source src="/spec-vid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>

        <section className="training-program-section">
            <div className="training-program-container">
                <div className="training-program-content">
                    <div className="training-program-text">
                        <h2 className="training-program-title">Transform Your Future</h2>
                        <h3 className="training-program-subtitle">Comprehensive Training Program</h3>
                        <p className="training-program-description">
                            Embark on a transformative journey with our industry-leading training program. 
                            Designed by experts, our curriculum bridges the gap between academic learning 
                            and real-world application, ensuring you're ready for the challenges of tomorrow's tech landscape.
                        </p>
                        <div className="training-program-features">
                            <div className="feature-item">
                                <div className="feature-icon">✨</div>
                                <span>Expert-led curriculum</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🚀</div>
                                <span>Hands-on projects</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🎯</div>
                                <span>Industry certification</span>
                            </div>
                        </div>
                        <button className="training-program-cta">Start Your Journey</button>
                    </div>
                    <div className="training-program-visual">
                        <div className="training-visual-container">
                            <img src="/exp.png" alt="Training Program" className="training-image" />
                            <div className="floating-elements">
                                <div className="floating-element element-1"></div>
                                <div className="floating-element element-2"></div>
                                <div className="floating-element element-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="live-contests-section">
            <div className="live-contests-container">
                <h2 className="live-contests-title">Live Contests</h2>
                <div className="contests-grid">
                    <div className="contest-card">
                        <div className="contest-card-header">
                            <div className="contest-status live">LIVE</div>
                            <div className="contest-date">Sep 22, 2024</div>
                        </div>
                        <h3 className="contest-title">Sankalp Contest 2</h3>
                        <div className="contest-time">
                            <span className="time-label">Start:</span> 14:00 PM
                            <span className="time-separator">-</span>
                            <span className="time-label">End:</span> 15:00 PM
                        </div>
                        <button className="contest-card-button">Show Result</button>
                    </div>
                    
                    <div className="contest-card">
                        <div className="contest-card-header">
                            <div className="contest-status upcoming">UPCOMING</div>
                            <div className="contest-date">Sep 23, 2024</div>
                        </div>
                        <h3 className="contest-title">Sankalp Contest 3</h3>
                        <div className="contest-time">
                            <span className="time-label">Start:</span> 14:00 PM
                            <span className="time-separator">-</span>
                            <span className="time-label">End:</span> 15:00 PM
                        </div>
                        <button className="contest-card-button">Show Result</button>
                    </div>
                    
                    <div className="contest-card">
                        <div className="contest-card-header">
                            <div className="contest-status completed">COMPLETED</div>
                            <div className="contest-date">Sep 24, 2024</div>
                        </div>
                        <h3 className="contest-title">Sankalp Contest 4</h3>
                        <div className="contest-time">
                            <span className="time-label">Start:</span> 14:00 PM
                            <span className="time-separator">-</span>
                            <span className="time-label">End:</span> 15:00 PM
                        </div>
                        <button className="contest-card-button">Show Result</button>
                    </div>
                </div>
            </div>
            
            <div className="microsoft-logo-section">
                <img src="/micro.png" alt="Microsoft Logo" className="microsoft-logo" />
                <p className="trusted-text">Trusted by the world's most ambitious teams.</p>
            </div>
        </section>

        <section className="feature-cards-section">
            <div className="feature-cards-container">
                <div className="feature-card learn-card layout-text-left">
                    <div className="feature-card-content">
                        <h3 className="feature-card-title">LEARN</h3>
                        <h4 className="feature-card-subtitle">Expanding Horizons</h4>
                        <p className="feature-card-description">
                            At Spectov, continuous learning is at the heart of our culture.
                            We believe that staying ahead in the tech industry requires constant knowledge 
                            acquisition and skill development. Our team members are encouraged to pursue, new 
                            learning opportunities, from formal education and certifications to on-the-job 
                            training and knowledge sharing sessions. By fostering a learning environment, we
                            ensure that our team remains at the cutting edge of technologyready to tackle any
                            challenge with fresh perspectives and advanced skills.
                        </p>
                    </div>
                    <div className="feature-card-visual">
                        <img src="/learn.png" alt="Learn - Expanding Horizons" className="feature-card-image" />
                    </div>
                </div>
                
                <div className="feature-card innovate-card layout-image-left">
                    <div className="feature-card-visual">
                        <img src="/innovate.png" alt="Innovate - Unleashing Potential" className="feature-card-image" />
                    </div>
                    <div className="feature-card-content">
                        <h3 className="feature-card-title">INNOVATE</h3>
                        <h4 className="feature-card-subtitle">Unleashing Potential</h4>
                        <p className="feature-card-description">
                            Innovation drives everything we do at Spectov. We are committed to pushing the 
                            boundaries of technology and developing creative solutions. that address real-world
                            problems. Our innovative spirit is fueled by curiosity and a passion for discovery.
                            Whether it's through pioneering AI applications, developing state-of-the-art AR/VR 
                            experiences, or crafting advanced full stack solutions, we strive to break new
                            ground and deliver transformative results. Our culture of innovation empowers
                            our team to think boldly and execute brilliantly
                        </p>
                    </div>
                </div>
                
                <div className="feature-card learn-card layout-text-left">
                    <div className="feature-card-content">
                        <h3 className="feature-card-title">GROW</h3>
                        <h4 className="feature-card-subtitle">Empowering Success</h4>
                        <p className="feature-card-description">
                            Growth is the ultimate goal at Spectov, not just for our company, 
                            but for our clients and our team members. We aim to foster an environment where 
                            everyone can thrive and achieve their full potential. This means providing ample 
                            opportunities for professional development, encouraging career advancement, and 
                            supporting personal growth. For our clients, we focus on delivering scalable 
                            solutionsthat enable their businesses to expand and succeed in a competitive 
                            market. At Spectov, growth is a shared journey of success and continuous improvement.
                        </p>
                    </div>
                    <div className="feature-card-visual">
                        <img src="/learn.png" alt="Learn - Expanding Horizons" className="feature-card-image" />
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-black py-16 px-5">
            <div className="codehelp-container">
                <div className="left-section">
                    <div className="who-are-we">Who are We</div>
                    <h2 className="main-title">Empowering Coders, Enabling Dreams</h2>
                    <p className="description">At SpectoV Pvt Ltd, we are committed to creating an environment that fosters innovation, learning, and professional growth. Our training programs are designed to bridge the gap between academic learning and industry requirements, ensuring our interns are well-prepared to tackle real-world challenges.</p>
                    <button className="connect-button">Let's Connect</button>
                </div>
                <div className="right-section">
                    <div className="carousel-container">
                        <div className="carousel-track">
                            <div className="feature">
                                <div className="icon">
                                    <img src="/icons/ai_ml_icon.png" alt="AI & ML Icon" />
                                </div>
                                <div>
                                    <h3>Artificial Intelligence </h3>
                                    <p className="description-grey">At Spectov, we leverage the power of Artificial Intelligence to transform data into actionable insights. Our AI team specializes in developing intelligent systems that can automate processes, enhance decision-making, and deliver personalized experiences. From machine learning models to natural language processing, we are at the forefront of AI innovation.</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="icon">
                                    <img src="/icons/app_dev_icon.png" alt="App Dev Icon" />
                                </div>
                                <div>
                                    <h3>App Development</h3>
                                    <p className="description-grey">Spectov’s App Development team is dedicated to creating user-friendly and high-performing mobile and web applications. We cover the entire development lifecycle, from concept and design to deployment and maintenance. Our apps are built with the latest technologies and best practices, ensuring they are secure, scalable, and tailored to meet our clients' specific needs.</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="icon">
                                    <img src="/icons/ai_ml_icon.png" alt="Data Science Icon" />
                                </div>
                                <div>
                                    <h3>AR/VR</h3>
                                    <p className="description-grey">Spectov is pioneering the future with cutting-edge AR and VR technologies. Our experts create immersive experiences that blend the physical and digital worlds. From virtual training simulations to augmented reality applications, we provide innovative solutions that redefine how users interact with technology</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="icon">
                                    <img src="/icons/app_dev_icon.png" alt="Cyber Security Icon" />
                                </div>
                                <div>
                                    <h3>CFull Stack Developer</h3>
                                    <p className="description-grey">Our Full Stack Development team at Spectov excels in creating robust and scalable web applications. With expertise in both front-end and back-end technologies, our developers build seamless and efficient systems. Whether it's developing responsive interfaces or designing complex server-side logic, we ensure that our solutions meet the highest standards of performance and usability.</p>
                                </div>
                            </div>
                            
                            <div className="feature">
                                <div className="icon">
                                    <img src="/icons/ai_ml_icon.png" alt="AI & ML Icon" />
                                </div>
                                <div>
                                    <h3>Artificial Intelligence </h3>
                                    <p className="description-grey">At Spectov, we leverage the power of Artificial Intelligence to transform data into actionable insights. Our AI team specializes in developing intelligent systems that can automate processes, enhance decision-making, and deliver personalized experiences. From machine learning models to natural language processing, we are at the forefront of AI innovation.</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="icon">
                                    <img src="/icons/app_dev_icon.png" alt="App Dev Icon" />
                                </div>
                                <div>
                                    <h3>App Development</h3>
                                    <p className="description-grey">Spectov’s App Development team is dedicated to creating user-friendly and high-performing mobile and web applications. We cover the entire development lifecycle, from concept and design to deployment and maintenance. Our apps are built with the latest technologies and best practices, ensuring they are secure, scalable, and tailored to meet our clients' specific needs.</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="icon">
                                    <img src="/icons/ai_ml_icon.png" alt="Data Science Icon" />
                                </div>
                                <div>
                                    <h3>AR/VR</h3>
                                    <p className="description-grey">Spectov is pioneering the future with cutting-edge AR and VR technologies. Our experts create immersive experiences that blend the physical and digital worlds. From virtual training simulations to augmented reality applications, we provide innovative solutions that redefine how users interact with technology</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="icon">
                                    <img src="/icons/app_dev_icon.png" alt="Cyber Security Icon" />
                                </div>
                                <div>
                                    <h3>FullStack Development</h3>
                                    <p className="description-grey">Our Full Stack Development team at Spectov excels in creating robust and scalable web applications. With expertise in both front-end and back-end technologies, our developers build seamless and efficient systems. Whether it's developing responsive interfaces or designing complex server-side logic, we ensure that our solutions meet the highest standards of performance and usability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="timeline-section">
            <div className="timeline-container">
                <h2 className="timeline-title">Our Journey</h2>
                <div className="vertical-timeline">
                    <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3>Comprehensive Training Program</h3>
                            <p>Embark on your journey with our intensive training program. Our comprehensive curriculum covers both theoretical concepts and hands-on practice. Upon completion, you will undergo an interview and project review. Successful candidates will be offered a 6-month to 1-year paid internship.</p>
                        </div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3>Global Certification and Goodies</h3>
                            <p>Receive a globally recognized certification and a selection of exclusive goodies. SpectoV is partnering with Microsoft to certificate & develop the best industry standards and providing you receive the best in industry standards.</p>
                        </div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3>Paid Internship Opportunity</h3>
                            <p>Join our team as a paid intern and gain valuable real-world experience. Work on cutting-edge projects while receiving mentorship from industry experts.</p>
                        </div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3>Career Advancement</h3>
                            <p>Exceptional performers have the opportunity to transition into full-time positions with competitive packages and growth opportunities within our organization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="careers_section" className="careers-section">
            <div className="careers-container">
                <h2 className="careers-title">Careers at SpectoV</h2>
                <p className="careers-description">
                    Join our team of innovators and shape the future of technology
                </p>
                <div className="careers-image-container">
                    <img src="/car.png" alt="Careers at SpectoV" className="careers-image" />
                </div>
            </div>
        </section>

        <section id="courses" className="bg-black py-16">
            <h2 className="other-courses-section-title">Our Other courses</h2>
            <div className="other-courses-grid">
                <div className="course-card">
                    <img src="/c1.png" alt="SpectoV Special Course" />
                    <h1>SpectoV Special</h1>
                    <h2>Best Seller</h2>
                    <p>Unlock your full potential with SpectoV Special, our comprehensive program designed to accelerate your career in tech.</p>
                    <a href="#" className="enroll-button">Enroll</a>
                </div>
                <div className="course-card">
                    <img src="/c2.png" alt="Artificial Intelligence Course" />
                    <h1>Artificial Intelligence</h1>
                    <h2>Master AI</h2>
                    <p>Dive into the world of AI, machine learning, and deep learning with practical projects.</p>
                    <a href="#" className="enroll-button">Enroll</a>
                </div>
                <div className="course-card">
                    <img src="/c3.png" alt="Augmented Reality Course" />
                    <h1>Augmented Reality</h1>
                    <h2>Explore AR</h2>
                    <p>Learn to build immersive AR experiences for mobile and web platforms.</p>
                    <a href="#" className="enroll-button">Enroll</a>
                </div>
                <div className="course-card">
                    <img src="/c4.png" alt="Logic Building and DSA Course" />
                    <h1>Logic Building and DSA</h1>
                    <h2>Foundational Skills</h2>
                    <p>Strengthen your problem-solving skills with data structures and algorithms.</p>
                    <a href="#" className="enroll-button">Enroll</a>
                </div>
            </div>
        </section>

        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-text">
                        <h2 className="contact-title">Get In Touch</h2>
                        <h3 className="contact-subtitle">Ready to Transform Your Career?</h3>
                        <p className="contact-description">
                            Join thousands of successful developers who have transformed their careers with SpectoV. 
                            Whether you have questions about our programs or want to start your journey, we're here to help.
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>example@email.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">📞</div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+91 1234567890</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <h4>Visit Us</h4>
                                    <p>Chennai</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <form className="contact-form">
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Your Message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="contact-submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/logo.png" className="footer-logo-icon" alt="SpectoV logo" />
                <span className="footer-logo-text">SpectoV</span>
              </div>
              <p className="footer-description">
                Empowering the next generation of developers through innovative training programs and cutting-edge technology solutions.
              </p>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#courses" className="footer-link">Courses</a></li>
                <li><a href="#careers_section" className="footer-link">Careers</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
            
            
            <div className="footer-section">
              <h3 className="footer-title">Connect</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">LinkedIn</a></li>
                <li><a href="#" className="footer-link">Twitter</a></li>
                <li><a href="#" className="footer-link">GitHub</a></li>
                <li><a href="#contact" className="footer-link">Email</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 SpectoV Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;