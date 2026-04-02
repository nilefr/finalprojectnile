import Carousel from '../components/Carousel.jsx';

function About() {
 return (
 <>
   <h1>About Page</h1>
   <Carousel
      images={[
        "https://i.ytimg.com/vi/RJy_AL-zzTQ/maxresdefault.jpg",
        "https://www.sfmta.com/files/teaser-images/2024/01/210125_4th_bridge_01.jpg",
        "https://i0.wp.com/newspack-berkeleyside-cityside.s3.amazonaws.com/wp-content/uploads/2021/06/IMG_5715-2.jpg?resize=1200%2C900&ssl=1"
      ]}
      caption="Current Bay Area Transit"
    />
 </>
)
};


export default About;