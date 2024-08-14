import './About.css'
import photo from '../assets/vision-mission-planning-aspirations-process-concept_53876-139704.jpg';
import missionimg from '../assets/vector-collection-business-people_53876-44089.jpg';
import identity from '../assets/choice-worker-concept_23-2148631102.avif'
import ourdep from '../assets/business-man-avatar-cartoon_24640-47590.jpg'
import confpic from '../assets/business-meeting-png-transparent-vector-business-meetings-vector_969863-21540.avif'

const About = () => {
  return (
    <div className='about-main'>
      <div className='about'>
        <h2>About Us</h2>
      </div>
      <div className="about-page">
      <div className="about-page">
    <section className="about-section">
        <div className="about-text">
            <h2>About Mangalayatan University 🔎</h2>
            <p>
                To be a leader in education, an institution must be founded on two basic principles: keeping
                the interest of students as its foremost priority and recognizing that knowledge is ever-growing,
                omnipresent and requires the opening of minds
            </p>
            <p>
                At Mangalayatan University, we take pride in these two qualities being at core of our existences
                Mangalayatan (translated as the germinal bed of positive thought) aims to perpetuate a culture and
                hardwork, embracing change and preparing oneself for the fast progressing world with the latest skills 
                and the highest level of social and personal values. Situated 20 km from the Yamuna 
                Expressway in Uttar Pradesh, Mangalayatan University was founded in 2006 and has graduated 
                over 4000 students. Near 4500 students are currently studying on campus 
            </p>
            <p>Mangalayatan University vision is to give students from all kinds of background, a quality educations 
              experience leading to legitimately rewarding career opportunities.
            </p>
        </div>
  <div className="about-video">
    <iframe 
        src="https://www.youtube.com/embed/3n4-5ETZ42s?start=16" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
    </iframe>
  </div>


    </section>
    <section className="about-section">
      <div className="about-image vision-img">
            <img src={photo} alt="Description" />
      </div>
      <div className="about-text">
            <h2>Vision 🎯</h2>
            <p>
            To be an institution where the most formative years of a young mind are spent in the guided 
            pursuit of excellence while developing a spirit of inquisitive questioning, an 
            ability to excel in the pressure of a fast changing professional world, and a 
            desire to grow into a personality than a person, in an environment that fosters 
            strong moral and ethical values, teamwork, community service and environment consciousness,
            </p>
      </div>
    </section>
    <section className="about-section">
        <div className="about-text">
            <h2>Mission ✔️</h2>
            <p>
              ► To be the enablers of the confluence of academic rigor and professional practicality. <br></br>
              ► To train students to be skilled professionals, with the hunger and ability to become leaders. <br></br>
              ► To hone not just the intellect of our students, but also their character and personality. <br></br>
              ► To bring global best practices to our students through widespread use of technology. <br></br>
              ► To empower our faculty to constantly develop new skills and excel professionally. <br></br>
              ► To provide the best campus environment to students and faculty with all facilities to nurture the interests.
            </p>
        </div>
        <div className="about-image">
            <img src={missionimg} alt="Description" />
        </div>
    </section>

    <section className="about-section">
      <div className="about-image iden-img">
            <img src={identity} alt="Description" />
      </div>
      <div className="about-text">
            <h2>Our Identity</h2>
            <p>
              To be a leader in education, an institution must be founded on two basic principles:
            </p>
            <p>
              Keeping the interest of students as its foremost priority and recognizing that knowledge is ever-growing
              omnipresent and requires the opening of minds.
            </p>
            <p>At Mangalayatan University, we take pride in these two qualities being at the core of our existence 
            Mangalayatan (translated as the germinal bed of positive thought) aims to perpetuate a culture 
            hardwork, embracing change and preparing oneself for the fast progressing world with the latest 
            skills a the highest level of social and personal values.
            Situated 20 km from the Yamuna Expressway in Uttar Pradesh, Mangalayatan University was founded 
            2006 and has graduated over 4000 students. Nearly 3500 students are currently studying on campus.
            </p>
      </div>
    </section>

    <section className="about-section">
        <div className="about-text">
            <h2>About the Department</h2>
            <p>
            The Department of Computer Applications (CA); with its origin as 2010, aims to offer industry 
            relevant programs in order to equip students with required technical knowhow to pursue a career in 
            the software tence field. The department has been instrumental in setting up the university 
            programmers club. The guidance are of and full support of the experienced faculty of the 
            department is its most attractive feature. The learning Is ang experience is rich in practical 
            problem solving and software design, on the lines of professional challenges Uttar faced in the IT 
            industry.
            </p>
        </div>
        <div className="about-image">
            <img src={ourdep} alt="Description" />
        </div>
    </section>

    <section className="about-section">
      <div className="about-image conf-pic">
            <img src={confpic} alt="Description" />
      </div>
      <div className="about-text">
            <h2>About the Conference</h2>
            <p>
            The main objective of NCACA16 is to present the research from different areas of science and suit of technology. 
            This conference provides a platform for researchers and scientists to exchange and share their 
            fast. experiences and research results about all aspects of computing applications. 
            This conference also at that provides an opportunity to interact and establish professional 
            relations for future collaboration. The s8. conference aims to promote innovations and work 
            of researchers, engineers, students and scientists in computing. The basic idea of the conference 
            is what more can be done using the existing technology. 
            We are pleased to invite prospective authors to submit their original manuscripts to NCACA16
            </p>
      </div>
    </section>

</div>
</div>

    </div>
  );
}

export default About;
