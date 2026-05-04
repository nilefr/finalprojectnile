import Carousel from '../components/Carousel.jsx';

function About() {
 return (
 <>
   
   <section className="max-w-4xl mx-auto px-4 py-6 bg-slate-50 rounded-3xl shadow-sm border border-slate-200">
     <h2 className="text-2xl font-semibold mb-4">Why public transit is underfunded</h2>
     <div className="grid gap-4 sm:grid-cols-2">
       <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200">
         <h3 className="text-lg font-semibold mb-2">Funding Priorities</h3>
         <p className="text-sm text-gray-700">Budget decisions often prioritize roads and highways over public transit systems.</p>
       </div>
       <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200">
         <h3 className="text-lg font-semibold mb-2">Low Fare Recovery</h3>
         <p className="text-sm text-gray-700">Fare revenue usually covers only a small portion of operating costs, leaving agencies dependent on subsidies.</p>
       </div>
       <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200">
         <h3 className="text-lg font-semibold mb-2">Unstable Subsidies</h3>
         <p className="text-sm text-gray-700">Transit agencies rely heavily on local and state funding that can change year to year.</p>
       </div>
       <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200">
         <h3 className="text-lg font-semibold mb-2">Low Public Awareness</h3>
         <p className="text-sm text-gray-700">Lack of awareness makes it harder to build the political support transit needs for investment.</p>
       </div>
       <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200">
         <h3 className="text-lg font-semibold mb-2">Capital Cost Pressure</h3>
         <p className="text-sm text-gray-700">Delays in projects and rising construction costs reduce resources available for service improvements.</p>
       </div>
     </div>
   </section>

   <Carousel
      images={[
        "https://i.ytimg.com/vi/RJy_AL-zzTQ/maxresdefault.jpg",
        "https://www.sfmta.com/files/teaser-images/2024/01/210125_4th_bridge_01.jpg",
        "https://i0.wp.com/newspack-berkeleyside-cityside.s3.amazonaws.com/wp-content/uploads/2021/06/IMG_5715-2.jpg?resize=1200%2C900&ssl=1"
      ]}
      caption="Current Bay Area Transit"
    />

   <section className="max-w-4xl mx-auto px-4 py-6 bg-slate-50 rounded-3xl shadow-sm border border-slate-200">
     <h2 className="text-2xl font-semibold mb-4">Why public transit struggles in the U.S.</h2>
     <div className="grid gap-4 md:grid-cols-2">
       <div className="space-y-3">
         <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
           <h3 className="text-lg font-semibold">Car-Centric Infrastructure & Sprawl</h3>
           <p className="text-sm text-gray-700">Post-World War II planning and Euclidean zoning segregated housing from businesses, making cars necessary for most trips.</p>
         </div>
         <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
           <h3 className="text-lg font-semibold">Lack of Funding & High Costs</h3>
           <p className="text-sm text-gray-700">Transit is chronically underfunded compared to road maintenance, and high operating costs lead to infrequent service.</p>
         </div>
         <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
           <h3 className="text-lg font-semibold">Cultural Stigma</h3>
           <p className="text-sm text-gray-700">Many Americans view car ownership as status while public transit is seen as a last-resort option for the disadvantaged.</p>
         </div>
       </div>
       <div className="space-y-3">
         <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
           <h3 className="text-lg font-semibold">Political & Economic Priorities</h3>
           <p className="text-sm text-gray-700">Federal investment has historically favored highways, with transit often receiving only about 1.7% of transportation funding.</p>
         </div>
         <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
           <h3 className="text-lg font-semibold">Low-Density Development</h3>
           <p className="text-sm text-gray-700">Suburban sprawl makes frequent, efficient transit expensive and often impractical for large parts of the U.S.</p>
         </div>
         <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
           <h3 className="text-lg font-semibold">Operational & Structural Issues</h3>
           <p className="text-sm text-gray-700">Fragmented agencies, aging systems, inefficient land use, and high labor costs all add to transit’s challenges.</p>
         </div>
       </div>
     </div>
   </section>

 </>
)
};


export default About;