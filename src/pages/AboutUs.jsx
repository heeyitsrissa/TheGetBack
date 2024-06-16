import React from 'react';
import './AboutUs.css';

const About = () => {
    return (
        <div className="about-container">
          <video autoPlay muted loop className="background-video">
            <source src="/videos/tgb-about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='about-content'>
          <div className="quise-bio">
            <img  className="mj-pic "src='/aboutus/quise.png' alt='Marquise Jackson'/>
            <div className="bio-text">
            <h1>Marquise Jackson</h1>
            <h3 className='title' >Creator • Writer • EP</h3>
            <p>
            “THE FACE”
            Marquise Jackson, also known as “25 Cent” is an actor, writer, and entrepreneur who is extremely popular on social media. He was born on October 13,1996 in Queens, New York, to Curtis “50 cent” Jackson and Shaniqua Tompkins. Marquise grew up with a unique perspective on the entertainment industry due to his father’s involvement and influence in the industry. He was exposed to music, writing, and film making at a young age, which inspires him to be creative, and innovative artistically. Due to being one of “hip hop royalties” the spotlight is nothing new to Marquise. He has made appearances in 50 Cent’s “Wanksta” (music video), 50 Cent’s Reebok “I am what I am (commercial/short), “A portrait of an Artist” The Making of ‘Get Rich or Die Tryin’ (documentary), “All Things Fall Apart” (movie), “Dope Fiend” (movie), “Dope King” (movie). Whether it's his artistic abilities or his personal life has garnished attention worldwide. Marquise has already made a name for himself in the entertainment industry and shows no signs of slowing down anytime soon. 

            Prior to pursuing an entertainment career, Marquise developed a love for the sport of basketball, and became a prep school hoop star attending St.John North Western Military in Delafield, Wisconsin. Which led him to travel around the USA to test his skills against other top players in his highschool graduate class. Making friends along the way from diverse cultures, backgrounds, and life experiences expanded his horizon in life. Which influences him to incorporate a variety of perspectives, and life journeys, including his own in his concepts of writing. With Marquise Jackson’s distinctive upbringing, and influence thrives his tenacious determination to bring stories to life on the big screen that will capture the mind’s and heart’s of the masses. As he continues to take his entertainment career to new heights.

            </p>
          </div>
          </div>
          <div className='swavy-bio'>
            <img className='swavy-pic' src='/aboutus/swavy.png' alt='Kevon Robertson'/>
            <div className="bio-text">
            <h1>Kevon Robertson</h1>
            <h3 className='title' >Creator • Writer</h3>
            <p>  "THE VOICE"
            Kevon Robertson is an exciting and talented newcomer to the film and television industry, capturing hearts with his authentic storytelling and captivating performances. Born and raised in the vibrant neighborhood of East New York, Brooklyn, also known as the iconic "Bamaz Projects," Kevon's upbringing has deeply influenced his artistic journey.
            From a young age, Kevon's passion for creativity was evident. At just six years old, he discovered his love for writing by immersing himself in the world of anime. Armed with pencils and paper, he sketched intricate characters and weaved imaginative stories around them, igniting his storytelling prowess.
            Drawing inspiration from his own life experiences and rich culture, Kevon is determined to bring entertaining and thought-provoking narratives to the screen. His unique perspective shines through in every project, offering audiences an authentic glimpse into his community and the diverse stories it holds.
            Beyond the world of entertainment, Kevon is a dedicated force in his community. In his spare time, he serves as the proud owner of the New York Tigers, a youth football organization based in Brooklyn. He strives to empower young individuals and provide them with opportunities for growth, resilience, and camaraderie.
            Additionally, Kevon's entrepreneurial spirit extends to the virtual realm, where he owns a thriving FiveM server called "Litty city RP." This digital space brings together a community of passionate gamers, allowing them to explore and create unforgettable experiences.
            With his magnetic presence and unwavering determination, Kevon Robertson is poised to make a lasting impact on the entertainment industry, celebrating his roots while captivating audiences worldwide. Stay tuned for this rising star's incredible journey to unfold before your eyes.</p>
            </div>
          </div>
        </div>
        </div>
      );
    };

    export default About;