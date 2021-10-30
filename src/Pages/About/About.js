import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='my-5'>
            <Container>
                <div className=" about-section">
                    <h1>Welcome to The Landmark Tourism Agency.</h1>
                    <p>Take Wishes and congratulations from us. The Landmark tour is a trustable name for  tour in Bangladesh. For many years, large number of local and foreign tourist visit Sundarban and other tourism spot with us. Besides, we operate many reputable official group tours in Bangladesh. We operate our tour with a experienced guide team whose are trained by forest department, own ship and experienced crew for Sundarban. And also a team of arms guard whose are provided by forest department. We can ensure you about our service fully. For this we can say we are the trusted tour partner for you.</p>
                </div>
                <div className="about-section">
                    <h1>The Beautiful Country  In The World</h1>
                    <p>
                        The Sundarbans is the largest contiguous block of mangrove forest in the world. It is a playground of heavenly beauty bestowed by nature. In Bangladesh tourism, Landmark play the most vital role. A large number of foreigners come to Bangladesh every year only to visit this unique mangrove forest. Beside, local tourist also goes to visit Sundarbans every year.
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default About;