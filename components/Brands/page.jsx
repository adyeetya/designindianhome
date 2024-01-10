import Image from 'next/image';

import ReactCardSlider from 'react-card-slider-component';
const Brands = () => {

  const slides = [
    { image: "https://source.unsplash.com/gray-2-seat-sofa-near-round-table-WPqcd-gpJeE", 
    title: "AFFORDABLE, YET WHOLESOME", description: " On Top Priority" },
    {
      image: "https://source.unsplash.com/clear-glass-top-table-with-brown-wooden-base-YAp3j8EcjUo "
      , title: "POCKET FRIENDLY, YET WELCOMING", description: "Handcrafted for You"
    },
    {
      image: "https://source.unsplash.com/a-living-room-with-a-couch-coffee-table-and-potted-plant-Rf0a8n0VV_M"
      , title: "MINIMAL, YET OVERALL COVERAGE", description: "Be Carefree & Happy"
    },
    { image: "https://source.unsplash.com/a-living-room-filled-with-furniture-and-a-fire-place-CXFt0FGdD58",
     title: "LUXURY, YET AFFORDABLE", description: "Over the Top" 
    },
    { image:"https://source.unsplash.com/white-wooden-coffee-table-near-white-sofa-WgkA3CSFrjc",
    title: "HIGH QUALITY WITH COMPLETE COMMITMENT", description: "Premier Plus " 
   },
   /*  {
      img: "https://source.unsplash.com/white-wooden-coffee-table-near-white-sofa-WgkA3CSFrjc",
      title: "HIGH QUALITY WITH COMPLETE COMMITMENT", description: " Premier Plus "
    },
    */
    { image: "https://source.unsplash.com/black-metal-3-tier-rack-beside-white-couch-L5L2hiSh2Bo ",description: "Redefine Luxury",
     title: " TOP NOTCH LUXURY, WITH TOP NOTCH PRICING" },

  ]
  return (
    <>


      <Image src="/images/bar.png" height={200} width={1500} />
      <div className="main-hero">
        <div className="cover">
          <div className="box ai">

          </div>
          <div className="box bi">

          </div>
        </div>
      </div>
      <div className="wrapperlatesti">
        <h1>Our Exclusive Packages</h1>
        <h3 >The Best in Class &#34; Tailormade &#34; Interior Plans</h3>
      </div>






      <div className="jiu">
        <div className="containeru">
          <div className="blog-post">
            <img
              src="https://source.unsplash.com/gray-2-seat-sofa-near-round-table-WPqcd-gpJeE"
              alt="Man"
            />

            <div className="text-content">
              <img
                src="https://source.unsplash.com/gray-2-seat-sofa-near-round-table-WPqcd-gpJeE"
                alt=""
              />
              <h3 className="post-mini"> On Top Priority</h3>
              <h2 className="post-title">AFFORDABLE, YET WHOLESOME</h2>
            </div>
          </div>
          <div className="blog-post">
            <img
              src="https://source.unsplash.com/clear-glass-top-table-with-brown-wooden-base-YAp3j8EcjUo "
              alt="Man"
            />

            <div className="text-content">
              <img
                src="https://source.unsplash.com/clear-glass-top-table-with-brown-wooden-base-YAp3j8EcjUo "
                alt=""
              />
              <h3 className="post-mini">Handcrafted for You</h3>
              <h2 className="post-title"> POCKET FRIENDLY, YET WELCOMING</h2>
            </div>
          </div>
          <div className="blog-post">
            <img src="https://source.unsplash.com/a-living-room-with-a-couch-coffee-table-and-potted-plant-Rf0a8n0VV_M" />

            <div className="text-content">
              <img src="https://source.unsplash.com/a-living-room-with-a-couch-coffee-table-and-potted-plant-Rf0a8n0VV_M" />
              <h3 className="post-mini"> Be Carefree & Happy </h3>
              <h2 className="post-title">MINIMAL, YET OVERALL COVERAGE</h2>
            </div>
          </div>
          <div className="blog-post">
            <img
              src="https://source.unsplash.com/a-living-room-filled-with-furniture-and-a-fire-place-CXFt0FGdD58"
              alt="Man"
            />

            <div className="text-content">
              <img src="https://source.unsplash.com/brown-wooden-armchair-beside-brown-leather-couch-irPhJCHpZyo" />
              <h3 className="post-mini">Over the Top</h3>
              <h2 className="post-title">LUXURY, YET AFFORDABLE</h2>
            </div>
          </div>
          <div className="blog-post">
            <img
              src="https://source.unsplash.com/white-wooden-coffee-table-near-white-sofa-WgkA3CSFrjc"
              alt="Man"
            />

            <div className="text-content">
              <img
                src="https://source.unsplash.com/black-metal-3-tier-rack-beside-white-couch-L5L2hiSh2Bo "
                alt=""
              />
              <h3 className="post-mini"> Premier Plus </h3>
              <h2 className="post-title">
                HIGH QUALITY WITH COMPLETE COMMITMENT
              </h2>
            </div>
          </div>
          <div className="blog-post">
            <img
              src="https://source.unsplash.com/black-metal-3-tier-rack-beside-white-couch-L5L2hiSh2Bo "
              alt="Man"
            />

            <div className="text-content">
              <img
                src="https://source.unsplash.com/black-metal-3-tier-rack-beside-white-couch-L5L2hiSh2Bo "
                alt=""
              />
              <h3 className="post-mini">Redefine Luxury </h3>
              <h2 className="post-title">
                TOP NOTCH LUXURY, WITH TOP NOTCH PRICING
              </h2>
            </div>
          </div>
        </div>
      </div>



<div className="jiu-mob">

      <ReactCardSlider slides={slides} />



</div>









      <Image src="/images/bar.png" height={200} width={1500} />
      <div className="main-hero">
        <div className="cover">
          <div className="box ai">

          </div>
          <div className="box bi">

          </div>
        </div>
      </div>
      <div className="wrapperlatest">
        <h1>Why We Deliver Inspiring Interiors</h1>

      </div>

      <div className="key-container">
        <div data-key={65}>
          <span>
            <kbd>Since</kbd>2004
          </span>
        </div>
        <div data-key={83}>
          <span>
            <kbd>Premium
            </kbd>Materials
          </span>
        </div>
        <div data-key={68}>
          <span>
            <kbd>10 Years
            </kbd>
            Warranty
          </span>
        </div>
        <div data-key={70}>
          <span>
            <kbd> Completion</kbd>
            45 Years
          </span>
        </div>
        <div data-key={71}>
          <span>
            <kbd>Furnishing</kbd>
            200 Homes/MTH
          </span>
        </div>
        <div data-key={72}>
          <span>
            <kbd>Lifelong</kbd>
            Service Supplier
          </span>
        </div>
      </div>















    </>
  )
}
export default Brands
