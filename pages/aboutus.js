import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from '../components/head'
import '../static/styles/main.scss'

const employees = [
  {
    picture: '/',
    name: 'Joel Wasserman',
    description: 'Joel is a software engineer at Google, but his true passion lies in education. He\'s worked at two prior education startups and believes with proper educational funding we may be able to inch closer to true opportunity equality.'
  },
  {
    picture: '/',
    name: 'Christine Woeller',
    description: 'Christine is passionate about photography and serving her community. A social worker in Coeur d\'Alene, Idaho, she has an abundance of direct work experience with the public school teachers we aim to help.'
  },
  {
    picture: '/',
    name: 'Peter Squicciarini',
    description: 'Peter is a software engineer at Amazon, and with his home school background is the philosophical check and balance needed to objectively help teachers and children succeed in the educational environment.'
  }
]

const About = () => (
  <div className='main-container'>
    <Nav navColor='black' />
    <Head title='About' />

    <div className='body aboutusBody'>
      <div className='mission'>
        <div className='mission--header'>
          Our Mission
        </div>
        <div className='mission--body'>
          The Teacher Fund is a non-profit organization
          bringing school supplies and supplemental
          funding to public school teachers.
        </div>
      </div>
      <div className='factcards'>
        <div className='factcard--container'>
          <div className='factcard--fact--image' />
          <div className='factcard--fact--title'>
            <h3>We prove every project</h3>
          </div>
          <div className='factcard--fact--text'>
            <p className='p40'>
              We track every dollar spent and received, and show
              the projects you fund with photos and GPS.
            </p>
          </div>
        </div>
        <div className='factcard--container'>
          <div className='factcard--fact--image' />
          <div className='factcard--fact--title'>
            <h3>We're an open book</h3>
          </div>
          <div className='factcard--fact--text'>
            <p className='p40'>
              View our cash inflows and outflows down to the
              penny, at any time. We welcome audits! No more donating into a black box.
            </p>
          </div>
        </div>
        <div className='factcard--container'>
          <div className='factcard--fact--image' />
          <div className='factcard--fact--title'>
            <h3>100% goes into the field</h3>
          </div>
          <div className='factcard--fact--text'>
            <p className='p40'>
              Private donors cover our operating costs so 100%
              of your money goes towards public school education.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className='us'>
        <div className='title'>
          <h2>{'Who we are'.toUpperCase()}</h2>
        </div>
        <div className='employee--group'>
          {employees.map(({ image, name, description }) => (
            <div key={name} className='employee--container'>
              <div className='employee--image' />
              <div className='employee--name'>
                {name.toUpperCase()}
              </div>
              <div className='employee--description p40 pt-1 pb-1'>
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default About
