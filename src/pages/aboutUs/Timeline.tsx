import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHospital, FaMedal } from 'react-icons/fa'; // Import the icons you want to use
import SectionHeading from '../../components/sharedTitle/SectionHeading';

const TimelineSection = () => {
  return (
    <>
    
    <section id="timeline" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
      <SectionHeading
                semiSubTitle="What product do we have"
                title="Hospital Gallery"
                subTitle=""
            />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="1983"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaHospital />} 
          >
            <h3 className="vertical-timeline-element-title">Establishment</h3>
            <img src="https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg" alt="Establishment" className="my-4 rounded-lg shadow-lg" />
            <p>
              LifeCare Hospital was founded in 1983, marking the beginning of our journey in providing exceptional healthcare.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            date="Year"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FaMedal />} 
          >
            <h3 className="vertical-timeline-element-title">Milestone</h3>
            <img src="https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg" alt="Milestone" className="my-4 rounded-lg shadow-lg" />
            <p>
              Describe a significant milestone or event in the hospital's history.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(0, 123, 255)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 123, 255)' }}
            date="Year"
            iconStyle={{ background: 'rgb(0, 123, 255)', color: '#fff' }}
            icon={<FaHospital />}
          >
            <h3 className="vertical-timeline-element-title">Another Year</h3>
            <img src="https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg" alt="Another Year" className="my-4 rounded-lg shadow-lg" />
            <p>
              Add a description for this timeline element.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(255, 165, 0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(255, 165, 0)' }}
            date="Year"
            iconStyle={{ background: 'rgb(255, 165, 0)', color: '#fff' }}
            icon={<FaMedal />} 
          >
            <h3 className="vertical-timeline-element-title">Another Milestone</h3>
            <img src="https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg" alt="Another Milestone" className="my-4 rounded-lg shadow-lg" />
            <p>
              Add a description for this timeline element.
            </p>
          </VerticalTimelineElement>

          {/* Add more timeline elements as needed */}
        </VerticalTimeline>
      </div>
    </section>
    </>
  );
};

export default TimelineSection;
