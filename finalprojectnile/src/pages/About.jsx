import Carousel from './components/Carousel.jsx';

function About() {
 return (
 <>
   <h1>About Page</h1>
   <Carousel
      images={[
        "https://i.ytimg.com/vi/RJy_AL-zzTQ/maxresdefault.jpg",
        "https://cdn.mos.cms.futurecdn.net/2a9e7b1c8c5f0e3b4d9f8a1b2c3d4e5.jpg",
        "https://www.nasa.gov/sites/default/files/thumbnails/image/potw2046a.jpg"
      ]}
      caption="Amazing Space Images"
    />
 </>
)
};


export default About;