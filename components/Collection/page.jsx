'use client'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Marquee from "react-fast-marquee";
import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'
import React, { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const FIRST_IMAGE = {
  imageUrl:
    'https://source.unsplash.com/a-kitchen-with-blue-cabinets-and-a-black-refrigerator-zFGBEikZoRg',
}
const SECOND_IMAGE = {
  imageUrl:
    'https://source.unsplash.com/a-ladder-and-buckets-of-paint-in-a-room-under-construction-XXanshmt5so',
}
const THIRD_IMAGE = {
  imageUrl:
    'https://source.unsplash.com/a-kitchen-with-blue-cabinets-and-a-black-refrigerator-zFGBEikZoRg',
}


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 264 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const sliderImageUrl = [
  //First image url
  {
    url:
      "https://source.unsplash.com/black-flat-screen-tv-mounted-on-white-wall-3hEGHI4b4gg"
  },
  {
    url:
    "https://source.unsplash.com/white-wooden-kitchen-island-and-cupboard-cabinets-near-glass-panel-door-AQl-J19ocWE"
  },
  //Second image url
  {
    url:
      "https://source.unsplash.com/white-and-black-kitchen-cabinet-jylx7bVZMIk"
  },
  //Third image url
  {
    url:
    "https://source.unsplash.com/black-round-bowl-on-brown-wooden-seat-NWG-vYPZDoM"
  },

  //Fourth image url

  {
    url:
      "https://source.unsplash.com/two-brown-wooden-bar-stools-cc0Gg3BegjE"
  },

{
  url:
    "https://source.unsplash.com/brown-and-white-wooden-kitchen-cabinet-DQpUeNzRj6s"
  }
];

const Collection = () => {



  const ref = useRef();
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = document.querySelector('video')
    video.addEventListener('load', () => {
      setIsPlaying(true)
    })
  }, []);


  return (<>


    <div id='fry'>
      <h3
    
      >INDIA’S NO.1 INTERIOR & ARCHITECTURAL BRAND</h3>

    </div>


    <TypeAnimation
      sequence={[
        'TOP KITCHEN & CLOSET BRAND ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' LARGEST KITCHEN DEALERS',
        1000,
        'MODULAR KITCHEN & CLOSET',
        1000,
        'LARGEST ARCHITECTURAL BRAND',
        1000,
        'TOP AWARDED INTERIORS',
        1000,
  

      ]}

      style={{ fontSize: "55px" }}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />


    <div className="main-hero">
      <div className="cover">
        <div className="box a">
          <h1>
            OUR WORK
            <br />
            CENTERS ON RESULTS
          </h1>
        </div>
        <div className="box b">
        <h1>   OUR STYLE
          <br />
          IS TO DELIVER SMILES
       </h1> </div>
      </div>
    </div>
    {/*  <div className="container mx-auto rounded-3xl ">





      </div> */}
    {/* <div className='hidden sm:flex justify-center items-center absolute'>
      <h1 className=' bg-white text-black text-5xl font-bold px-4' style={{ zIndex: '10', marginLeft: '150px', marginTop: '350px', }}>
        Looking for Interiors or Modular Works
      </h1>

    </div>
    <a className='hidden sm:flex justify-center absolute text-4xl text-black font-bold hover:bg-white' href="/collections/all" style={{ zIndex: '10', marginLeft: '500px', marginTop: '420px', border: "4px solid black", padding: '2px', borderRadius: '10px' }}>
      Connect with us
    </a> */}



    <section className="outter hero-video" >
      <div
        className='videoBox'>
        <video
          loop
          autoPlay
          controls={isPlaying}
          src="/video/dkivid.mp4"
          width={1500}
          height={550}
          className="rounded shadow-md"
          style={{}}
        />
      </div>
      <div className="callout">
        <h3>Looking for Interiors or Modular Works</h3>
        <a className="button" href="/collections/all">
          Connect with us
        </a>
      </div>
    </section>



   


    <div className="read-more mb-12">
      <input
        id="read-more-checkbox"
        type="checkbox"
        className="read-more__checkbox"
        aria-hidden="true"
      />
  
      <p className="read-more__text mb-2">
        Design Indian Homes is India's top Interior, Architectural & Modular Interior Brand serving across Delhi, Gurgaon, Noida & NCR. It is the most sought out by Homemakers, Architects, Interior Designers, Developers & just anyone who needs an Affordable Interior Makeover, Renovation Services, Architectural Services, Modular Kitchen, Wardrobe, Vanities, TV Units, Living works, Bathroom Or Just a peaceful Turnkey Work by Our Team. We are serving End to End Interiors & Modular Interiors across Delhi, Gurgaon, Noida, Faridabad & across NCR.
        <br /> Our Brand Design Indian Homes was established in 2007,
        we are a professional team of certified architects, interior remodelers,
        and also happen to be Largest manufacturers of Modular Kitchens, Wardrobes,
        Tv units, Crockery units, Bookshelves, and just anything residential or commercial.
        We are delivering affordable top quality Interiors, Architectural Solutions, Modular
        Kitchens, Wardrobes, Tv Units, Bookshelves, Shoeracks, Crockery Units etc & executing
        end to end projects for our Clients. We are the Largest Manufacturers of Modular
        Kitchens, Wardrobes & TV Units across New Delhi - Gurgaon - Noida NCR, we have multiple
        modular manufacturing facilities across North India and are associated with more than
        900+ Architects, Interior Designers, developers and Builders along with our thousands
        of direct clients across New delhi - NCR. <br />

        We have over 5000+ interior designs, and can cater to any custom requirements for our clients and associates. Delivering the most Affordable Luxury is our Principle and we work with utmost integrity and complete transparency.
        <br />
        Due to the Goodwill built by the brand and faith of our clients, we are the most referred to modular interior Brand in Delhi - Gurgaon - Noida and across India. All our interior designs, architectural concepts, modular kitchen designs, wardrobe designs, tv units designs or any modular kitchens are planned to perfection as per the design requirements. We create smooth, crisp and meticulous designs for your residence & also are top modular kitchen & modular wardrobe manufacturers with a precision timing in delivery, extensive warranty and a life long relation with our Brand.
        <br />Our Modular Interior brand is also the top Modular brand in Delhi - NCR India, and we are honoured with the prestigious award of the Top Modular brand in India by the Timber Wood Society of India.<br />This is all due to the Hard work put in by our architectural designers, our  installers, our supervisors, our management and our entire Team which works tirelessly 24/7 in delivering top notch modular kitchen designs to our clients across New Delhi - India.


        <br />We have the largest Modular Interior facilities and are serving extensively with most affordable solutions for the following services : -
        <br />Modular Kitchens * Wardrobes * TV Units * Vanities * Crockery Units * Shoe Racks * Bookshelves * Partitions * Studies & Bar Units * Mandir Units * End To End Interiors * Complete Structures * Luxury Interiors & Residences * Luxury Kitchens And Wardrobes * Italian - German - Swedish - Danish - Spanish Modular Kitchens & Wardrobes<br />We assure you 100% Guaranteed Quotes across New Delhi - NCR for any type of Interior Works, Architectural Works, renovation works, Modular Kitchens, Wardrobes,  TV units or just any Modular Works, custom interior works or architectural consultancy works. We have the most affordable modular interiors and serve all clients with perfect understanding of the requirements. <br />We also assure you to bring us any quotes and assure you flat 7% less on any offerings by any vendor across New Delhi - NCR.<br />
        Connect with the Largest Interior, Architectural, Modular Kitchens & Wardrobes Brand Across New Delhi - NCR - India.<br />We are the Top Awarded Largest manufacturers for Modular Kitchens & Wardrobes across Delhi - NCR & have been rated as the TOP Interior & Architectural  Brand by The Architectural Congress India and Real Wood Societies since 2016.<br />


      </p>
      <label
        htmlFor="read-more-checkbox"
        className="read-more__label"
        data-read-more="Read more"
        data-read-less="See less"
        aria-hidden="true"
      />
    </div>


    <Marquee style={{ backgroundColor: " yellow ", marginTop: "5%" }}>
      <div className="marquee">


        <h3

        >Top Interior, Architectural & Modular Kitchen - Wardrobe  Brand in Delhi - NCR - India</h3>

      </div>

    </Marquee>




    <div className="container mx-auto ">
      <section className="newz">
        <div className="flex flex-wrap  ">
          <div className=" mb-4" id='news'>
            <Image src="/images/bar.png" height={200} width={1500} />

            <div className="main-hero">
              <div className="cover">
                <div className="box ai">

                </div>
                <div className="box bi">

                </div>
              </div>
            </div>
            <video loop autoPlay controls={isPlaying} src="video/lux.mp4" alt="" height={10} width={1500}
              className="rounded shadow-md" id='seek' style={{ marginBottom: "3%" }} />





            <video loop autoPlay controls={isPlaying} src="video/vid21.mp4" alt="" height={10} width={1500}
              className="rounded shadow-md"


            />
          </div>

          <div className="md:w-1/3 mb-4" id='news'>
            <Image height={350} width={700}
              className="rounded shadow-md"
              src="/images/qwer.png"
              alt="" />
          </div>
          <div className="md:w-1/3 mb-4" id='news'>
            <Image height={350} width={700}
              className="rounded shadow-md"
              src="/images/qwert.png"
              alt=""

            />
          </div>
          <div className="md:w-1/3 mb-4" id='news'>
            <Image height={350} width={700}
              className="rounded shadow-md"
              src="/images/qwerty.png"
              alt=""

            />
          </div>

          <div className="md:w-1/3 mb-4" id='news'>
            <Image height={350} width={700}
              className="rounded shadow-md"
              src="/images/asd.png"
              alt=""

            />
          </div>
          <div className="md:w-1/3 mb-4" id='news'>
            <Image height={350} width={700}
              className="rounded shadow-md"
              src="/images/asdf.png"
              alt=""

            />
          </div>
          <div className="md:w-1/3 mb-4" id='news'>
            <Image height={350} width={700}
              className="rounded shadow-md"
              src="/images/talk.png"
              alt=""

            />
          </div>
          <Image src="/images/bar.png" height={200} width={1500} />
          <div className="md:w-1/2 mb-4" id='news'>
            <ReactBeforeSliderComponent
              firstImage={FIRST_IMAGE}
              secondImage={SECOND_IMAGE}
              thirdImage={THIRD_IMAGE}
            />
          </div>
          <div className="md:w-1/2 px-16" id='news'>

            <div className="main-hero">
              <div className="cover">
                <div className="box ai">

                </div>
                <div className="box bi">

                </div>
              </div>
            </div>









            <div className="wrapperlatest">




              <h1>Before And After</h1>
              <h3>Affordable Luxury</h3>
              <p>We often use collective nouns to refer to groups of people. Examples: team, gang, squad, army, jury, clergy, cult, crew.</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    
   

    <div className="containr">
      <h1>Why Design Indian Homes?</h1>
      <div id="content">
        <div className="item">
          <Image
            width={100}
            height={100}
            src="/images/icon/icons8-on-time-delivery-53.png"
          />

          <p>On time Delivery</p>
        </div>

        <div className="item">
          <Image
            width={100}
            height={100}
            src="/images/icon/icons8-home-50.png"
          />

          <p>1609+ Happy Homes</p>
        </div>
        <div className="item">
          <Image
            width={100}
            height={100}
            src="/images/icon/icons8-structure-26.png"
          />

          <p>81+ Inhouse Architects & Interior Pro</p>
        </div>
        <div className="item">
          <Image
            width={100}
            height={100}
            src="/images/icon/icons8-construction-building-96.png"
          />

          <p>End To End Interiors & Structure Building</p>
        </div>
        <div className="item">
          <Image
            width={100}
            height={100}
            src="/images/icon/icons8-warranty-64.png"
          />

          <p>Warranty Direct from Source</p>
        </div>
        <div className="item">
          <Image
            width={100}
            height={100}
            src="/images/icon/icons8-engineer-50.png"
          />

          <p>Professional Personnel</p>
        </div>
        <div className="item">
          <Image
            width={100}
            height={100}
            src="/images/icon/icons8-construction-building-96.png"
          />

          <p />
          <p>In-House Modular Manufacturing</p>
        </div>

        <div className="item">
          <Image
            width={100}
            height={100}
            src="/images/icon/icons8-check-50.png"
          />

          <p />
          <p>Multiple Quality Checks</p>
        </div>
      </div>
    </div>

    <div className="main">

      <svg id="rotatingText" viewBox="0 0 200 200" width={200} height={200}>
        <defs>
          <path
            id="circle"
            d="M 100, 100
         m -75, 0
         a 75, 75 0 1, 0 150, 0
         a 75, 75 0 1, 0 -150, 0
         "
          ></path>
        </defs>
        <text width={400}>
          <textPath
            alignmentBaseline="top"
            xlinkHref="#circle"
            className="text"
          >
            The Best Home Interior Brand of India -
          </textPath>
        </text>
      </svg>
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
      <h1>Connect With Us</h1>
    </div>

    <div className="section1">
      <section>
        <div className="card">
          <div className="grin">
            <article className="mainz ">
              <h2>Connect on</h2>
              <h1>Whatsapp</h1>
            </article>
            <section className="sidez">
              <Image
                src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw9fa2f775//images/home/whatsapp-icon.svg"
                width={0}
                height={0}
              />
            </section>
          </div>
        </div>

        <div className="card">
          <div className="grin">
            <article className="mainz ">
              <h2>Book An</h2>
              <h1>Appointment</h1>
            </article>
            <section className="sidez">
              <Image
                src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwac5fb555//images/home/marker-icon.svg"
                width={0}
                height={0}
              />
            </section>
          </div>
        </div>

        <div className="card">
          <div className="grin">
            <article className="mainz ">
              <h2>Schedule A</h2>
              <h1>Video Call</h1>
            </article>
            <section className="sidez">
              <Image
                src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw153e7692//images/home/video-icon.svg"
                width={0}
                height={0}
              />
            </section>
          </div>
        </div>
      </section>
    </div>













    <div className="main">
  
 <svg id="rotatingText" viewBox="0 0 200 200" width={200} height={200}>
   <defs>
     <path
       id="circle"
       d="M 100, 100
         m -75, 0
         a 75, 75 0 1, 0 150, 0
         a 75, 75 0 1, 0 -150, 0
         "
     ></path>
   </defs>
   <text width={400}>
     <textPath alignmentBaseline="top" xlinkHref="#circle" className="text">
     The Best Home Interior Brand of India -
     </textPath>
   </text>
 </svg>
</div>
      <div className="wrapperlatest" id='rev'>
        <h1>Best Trending Wardrobes</h1>
        
      </div>

      <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slidering" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
















    <div
      className="flex flex-col items-center md:flex-row justify-center p-10 gap-6 mt-10"
      id="bg"
    >
      <h1 className="font-bold text-2xl">Stay safe. Design virtually.</h1>
      <br />
      <div className="text-center">
        <Image
          width={100}
          height={100}
          src="/images/icon/12.png"
          alt=""
          className="w-60 h-70 mx-auto"
        />
        <h1 className="font-bold text-center">Contactless Experience</h1>
        <p className="text-sm">
          No stepping out. Design your home interiors from the safety and
          comfort of your home.
        </p>
      </div>


      <div className="text-center mt-4 md:mt-0">
        <Image
          width={100}
          height={100}
          src="/images/icon/5.png"
          alt=""
          className="w-60 h-70 mx-auto"
        />
        <h1 className="font-bold text-center">Online Expertise</h1>
        <p className="text-sm">
          Connect with our 600+ designers virtually and explore designs
          online.
        </p>
      </div>
      <div className="text-center mt-4 md:mt-0">
        <Image
          width={100}
          height={100}
          src="/images/icon/1.png"
          alt=""
          className="w-60 h-70 mx-auto"
        />
        <h1 className="font-bold text-center">Live 3D Design</h1>
        <p className="text-sm">
    
Explore life-like 3D designs online that are made for your floor plan.
        </p>
      </div>
      <div className="text-center mt-4 md:mt-0">
        <Image
          width={100}
          height={100}
          src="/images/icon/2.png"
          alt=""
          className="w-60 h-70 mx-auto"
        />
        <h1 className="font-bold text-center">Instant Pricing</h1>
        <p className="text-sm">
        Enjoy complete price transparency and stay within budget.


        </p>
      </div>
   

   
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
      <h1>Brands you will find in our products</h1>
    </div>
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
          <p>hi zswedrtygfcv</p>
          <button>click me</button>
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
      </div>
    </div>


  </>
  )
}

export default Collection
