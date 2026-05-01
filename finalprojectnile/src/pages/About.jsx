import Carousel from '../components/Carousel.jsx';

function About() {
 return (
 <>
   <h1>About Page</h1>
   <section className="max-w-4xl mx-auto px-4 py-6">
     <h2 className="text-2xl font-semibold mb-3">Why public transit is underfunded</h2>
     <ul className="list-disc list-inside space-y-2 text-gray-700">
       <li>Budget priorities often favor roads and highways over transit systems.</li>
       <li>Fare revenue usually covers only a small portion of operating costs.</li>
       <li>Transit agencies rely heavily on unstable local and state subsidies.</li>
       <li>Low public awareness makes it harder to build political support for funding.</li>
       <li>Delays in capital projects and rising construction costs reduce available resources.</li>
     </ul>
   </section>
  
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