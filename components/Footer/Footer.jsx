"use client"
import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import Image from 'next/image'
import WaveGradient from '@/components/Navbar/WaveGradient'
import Link from 'next/link'
import './Gradient.css'
export class Footer extends Component {
    render() {
        return (
            <div className='gradient'>
                <div className="mt-22 container" >
                    {/* <WaveGradient /> */}
                    <div className=" row">
                        <div className="text-black col-lg-12 flex items-center justify-center">
                            <button className=" display-center run rounded-full border-dotted border-2 border-black py-12  mt-4  md:py-48 hover:bg-black hover:text-white" >
                                Call Us Today! <br />
                                <span className='button2 pb-4'>We can talk about how big this button is.</span>
                            </button>



                        </div>
                    </div>

                    <h1 className="text-4xl md:text font-semibold text-center text-black pt-16">
                        Know The Trinity Brands
                    </h1>

                    <div className="flex flex-col items-center md:flex-row justify-center gap-6 md:gap-32 w-full mt-5">
                        {/* Brand 1 */}
                        <div className="text-center">
                            <Image src="/dkilogo.png" alt="" width={200} height={80} style={{ alignContent: 'center' }} />

                            <p className="text-green-500 text-2xl font-medium">Design Indian Kitchen</p>
                        </div>

                        {/* Brand 2 */}
                        <div className="text-center mt-4 md:mt-0">
                            <Image src="/desig indian homes.gif" alt="" width={200} height={80} style={{ alignContent: 'center' }} />
                            <p className="text-green-500 text-2xl font-medium">Design Indian Home</p>
                        </div>

                        {/* Brand 3 */}
                        <div className="text-center mt-4 md:mt-0">
                            <Image src="/footer-logo-multi.png" alt="" width={300} height={80} style={{ alignContent: 'center' }} />
                            <p className="text-green-500 text-2xl font-medium">Design Indian Wardrobe</p>
                        </div>
                    </div>


                    {/* Features Section */}
                    <div className="flex flex-col items-center md:flex-row justify-center    p-10 gap-6 mt-10 text-black" style={{ alignItems: 'center' }}>
                        {/* Feature 1 */}
                        <div className="text-center">
                            <div className='flex justify-center'>
                                <Image src="/warranty.png" alt="" width={108} height={80} />
                            </div>

                            <h1 className='font-bold text-center text-sm'>Flat 10 year warranty</h1>
                            <p className="text-sm">Choose interiors designed with superior quality material, leaving no room for defects.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center mt-4 md:mt-0">
                            <div className='flex justify-center'>
                                <Image src="/fast-delivery.png" alt="" width={128} height={80} />
                            </div>

                            <h1 className='font-bold text-center text-sm'>45-day delivery</h1>
                            <p className="text-sm">Get beautiful interiors for your new home in just 45 days. That’s our delivery guarantee.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center mt-4 md:mt-0">
                            <div className='flex justify-center'>
                                <Image src="/team-building.png" alt="" width={128} height={80} />

                            </div>
                            <h1 className='font-bold text-center text-sm'>600+ design experts</h1>
                            <p className="text-sm">Explore design ideas and co-create your dream home with our experienced designers</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="text-center mt-4 md:mt-0">
                            <div className='flex justify-center'>
                                <Image src="/customer-service.png" alt="" width={128} height={80} />

                            </div>
                            <h1 className='font-bold text-center text-sm'>Post-installation service</h1>
                            <p className="text-sm">Complete your design journey and get unwavering support from our dedicated care team.</p>
                        </div>
                    </div>

                    {/* Social Media and Copyright Section */}
                    <div className="flex flex-col md:flex-row justify-center gap-2  text-black">
                        {/* Social Media Icons */}
                        <div className="text-left">
                            <Image src="/desig indian homes.gif" alt="footer logo" width={128} height={80} />
                            <div className='flex gap-4 mt-4 hover'>
                                <SocialIcon network="twitter" url="www.vimeo.com" style={{ width: '2rem', height: '2rem' }} />
                                <SocialIcon network="facebook" url="www.vimeo.com" style={{ width: '2rem', height: '2rem' }} />
                                <SocialIcon network="instagram" url="www.vimeo.com" style={{ width: '2rem', height: '2rem' }} />
                                <SocialIcon network="linkedin" url="www.vimeo.com" style={{ width: '2rem', height: '2rem' }} />
                            </div>
                            <p>© Copyright <strong>Design Indian Homes</strong> 2023. <br /> All Rights Reserved</p>
                        </div>

                        <div>
                            <h3 className="font-bold">Design Ideas</h3>
                            <ul className="leading-7">
                                <Link href="/modular-kitchen-designs"><li>Modular Kitchens</li></Link>
                                <Link href="/wardrobe-designs"><li>Wardrobes</li></Link>
                                <Link href="/vanity-designs"> <li>Vanities </li></Link>
                                <Link href="/dressers-designs"><li>Dressers</li></Link>
                                <Link href="/tv-unit-designs"><li>TV Units</li></Link>
                                <Link href="/crockery-unit-designs"> <li>Crockery Units</li></Link>
                                <Link href="/glass-partition-designs"><li>Glass Partitions</li></Link>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Interior</h3>
                            <ul className="leading-7">
                                <Link href="/1bhk-apartment-interior-designs">   <li  >1bhk residence interior designs</li>  </Link>
                                <Link href="/2bhk-apartment-interior-designs"><li>2bhk residence interior designs</li>  </Link>
                                <Link href="/3bhk-apartment-interior-designs"><li>3bhk residence interior designs </li>  </Link>
                                <Link href="/4bhk-apartment-interior-designs"><li>4bhk residence interior designs</li>  </Link>
                                <Link href="/villa-interior-designs"><li  >Villa interior designs</li>  </Link>
                                <Link href="/farmhouse-interior-designs"><li  >farmhouse interior designs</li>  </Link>
                                <Link href="/penthouse-interior-designs"><li  >Penthouse interior designs</li>  </Link>
                                <Link href="/studio-apartment-interior-designs"><li  >Studio apartment interior designs</li>  </Link>
                                <Link href="/bungalow-interior-designs"><li  >Bungalow interior designs</li>  </Link>
                                <Link href="/duplex-interior-designs"><li  >Duplex Residence interior Designs</li>  </Link>
                                <Link href="/cottage-interior-designs"><li  >Cottage Interior Designs</li>  </Link>
                                {/* <Link href="/structural-renovation-services"><li >Structural Renovation</li>   </Link>
                                <Link href="/interior-renovation-services"><li >Interior Renovation</li>   </Link>
                                <Link href="/bedroom-renovation-services"><li >Bedroom Renovation</li>   </Link>
                                <Link href="/lounge-renovation-services"><li >Lounge Renovation</li>   </Link>
                                <Link href="/bathroom-renovation-services"><li >Bathroom Renovation</li>   </Link>
                                <Link href="/terrace-renovation-services"><li >Terrace Renovation</li>   </Link>
                                <Link href="/living-room-renovation-services"><li >Living room Renovation</li>   </Link>
                                <Link href="/modular-kitchen-renovation-services"><li >Modular kitchen Renovation</li>   </Link>
                                <Link href="/wardrobe-renovation-services"><li >Wardrobe Renovation</li>   </Link>
                                <Link href="/mandir-renovation-services"><li >Mandir Renovation</li>  </Link>
                                <Link href="/gym-spa-renovation-services"><li >GYM & Spas Renovation</li>  </Link>
                                <Link href="/hotel-renovation-services"><li >Hotel Renovation</li>  </Link>
                                <Link href="/farmhouse-renovation-services"><li >Farmhouse Renovation</li>  </Link>
                                <Link href="/banquet-renovation-services"><li >Banquet Renovation</li>  </Link>
                                <Link href="/villa-renovation-services"><li >Villa Renovation</li>  </Link> */}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Architecture</h3>
                            <ul className="leading-7">
                                <Link href="/architectural-consultancy"><li>Consultancy</li></Link>
                                <Link href="/architectural-brand-in-india"><li>Designing & Planning</li></Link>
                                <Link href="/top-architects-in-india"><li>End to End Structural Projects</li></Link>
                                <Link href="/commercial-architectural-delhi-india"><li>Luxury Residences</li></Link>
                                <Link href="/home-renovation-services"><li>Renovations</li></Link>

                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">modular Kitchen</h3>
                            <ul className="leading-7">

                                <Link href="/modular-kitchen-types"><li>Types of Modular Kitchen</li></Link>
                                <Link href="/modular-kitchen-designs"> <li>Modular Kitchen Designs</li></Link>
                                <Link href="/luxury-modular-kitchen-india"><li>Luxury Modular Kitchen</li></Link>
                                <Link href="/modular-kitchen-renovation-services"><li >Kitchen Renovation</li></Link>
                                <Link href="/modular-kitchen-price-estimator"><li>Get Estimate</li></Link>



                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Wardrobes</h3>
                            <ul className="leading-7">
                                <Link href="/types-of-wardrobe-designs"><li>Types of Wardrobes</li></Link>
                                <Link href="/luxury-wardrobe-designs-india"><li >Luxury Wardrobes</li></Link>
                                <Link href="/wardrobe-designs"><li>Wardrobe Designs</li></Link>
                                <Link href="/lacquer-glass-wardrobe-designs"><li>Lacquer Glass Wardrobe Designs</li></Link>
                                <Link href="/wardrobe-renovation-services"> <li>Wardrobe Renovation Services</li></Link>

                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Modular Interior</h3>
                            <ul className="leading-7">
                                <Link href="/mandir-designs"><li>Mandir</li></Link>
                                <Link href="/chest-of-drawer-designs"><li>Chest of Drawers</li></Link>
                                <Link href="/Bar-unit-designs"><li >Bar Units</li></Link>
                                <Link href="/side-table-designs"><li>Side Tables</li></Link>
                                <Link href="/foldable-area-designs"><li>Foldable Beds</li></Link>
                                <Link href="/foyer-area-designs"><li>Foyer Cabinets</li></Link>
                                <Link href="/vanity-designs"> <li>Bathroom Vanities</li></Link>

                            </ul>
                        </div>
                        {/* <div>
                            <h3 className="font-bold">More</h3>
                            <ul className="leading-7">
                                <li className='text-lg'><Link href="/home-renovation-services-in-delhi-gurgaon-noida-india">Renovation</Link></li>
                                <Link href="/virtual-interior-designing-meeting"><li >Book a Virtual Meeting</li></Link>
                                <Link href="/about-best-interior-designers-architects"><h3> About Us</h3></Link>
                                <Link href="/largest-interior-designing-brand"><li >The Team</li></Link>
                                <Link href="/collaborate-with-architects-interior-designers"><li>Collaborate with Us</li></Link>

                                <Link href="/customer-reviews-interior-designs"> <li >Reviews</li></Link>
                                <Link href="/interior-designing-plans-for-residences"><li> Our Packages </li></Link>
                                <Link href="/why-choose-the-best-interior-designers"><li >Why Choose Us</li></Link>
                                <Link href="/join-the-largest-interior-designing-brand"><li>Join As a Designer</li></Link>
                                <Link href="/book-with-top-interior-designers-architects"><li>Book a Design Visit</li></Link>

                            </ul>
                        </div> */}
                        <div>
                            <Image src="/homes-gif-logo-optimize.gif" alt="" width={300} height={100} />
                        </div>

                    </div>
                    <div>
                        <h1 className='text-6xl md:text-lg font-extrabold text-center mt-8'>WE ARE DELHI BASED</h1>
                        <div className='flex flex-col md:flex-row justify-center gap-36  text-black'>
                            <div >
                                <h1 className='text-4xl font-bold'>THE BRAND</h1>
                                <ul className='text-lg font-bold mt-4'>
                                    <li className='mb-2'><Link href="/home-renovation-services-in-delhi-gurgaon-noida-india">Renovation</Link></li>
                                    <Link href="/virtual-interior-designing-meeting"><li className='mb-2'>Book a Virtual Meeting</li></Link>
                                    <Link href="/about-best-interior-designers-architects"><li> About Us</li></Link>
                                    <Link href="/largest-interior-designing-brand"><li className='mb-2'>The Team</li></Link>
                                    <Link href="/collaborate-with-architects-interior-designers"><li>Collaborate with Us</li></Link>
                                    <Link href="/customer-reviews-interior-designs"> <li className='mb-2'>Reviews</li></Link>
                                    <Link href="/interior-designing-plans-for-residences"><li className='mb-2'> Our Packages </li></Link>
                                    <Link href="/why-choose-the-best-interior-designers"><li className='mb-2'>Why Choose Us</li></Link>
                                    <Link href="/join-the-largest-interior-designing-brand"><li className='mb-2'>Join As a Designer</li></Link>
                                    <Link href="/book-with-top-interior-designers-architects"><li className='mb-2'>Book a Design Visit</li></Link>
                                </ul>

                            </div>
                            <div>
                                <h1 className='text-4xl font-bold'>COLLABORATE</h1>
                                <ul className='text-lg font-bold mt-4'>
                                    <Link href="/join-us"><li className='mb-2'> PARTNER WITH US</li></Link>
                                    <Link href="/offer"><li className='mb-2'>REFER FOR REWARDS</li></Link>
                                    <Link href="/join-us"><li className='mb-2'> JOIN AS-A DESIGNER</li></Link>
                                    <Link href=""><li className='mb-2'>FOR - ARCHITECTS & <br /> INTERIOR DESIGNERS</li></Link>
                                </ul>

                            </div>
                            <div>
                                <h1 className='text-4xl font-bold'>LETS CONNECT</h1>
                                <form onSubmit={null} className='mt-4'>
                                    <label className='text-lg '>
                                        Name:<br />
                                        <input
                                            type="text"
                                            name="name"
                                            value={null}
                                            placeholder='Name'
                                            style={{ width: '350px', height: '50px', padding: '5px' }} // Increase width and add padding

                                            onChange={null}
                                        />
                                    </label>
                                    <br />
                                    <label className='text-lg'>
                                        Email:<br />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder='Email'
                                            value={null}
                                            style={{ width: '350px', height: '50px', padding: '5px' }} // Increase width and add padding

                                            onChange={null}
                                        />
                                    </label>
                                    <br />
                                    <label className='text-lg'>
                                        Contact Number:<br />
                                        <input
                                            type="text"
                                            name="contactNumber"
                                            value={null}
                                            placeholder='Mobile Number'
                                            style={{ width: '350px', height: '50px', padding: '5px' }} // Increase width and add padding

                                            onChange={null}
                                        />
                                    </label>
                                    <br />
                                    <label className='text-lg'>
                                        Message:<br />
                                        <textarea
                                            name="message"
                                            value={null}
                                            placeholder='Message'
                                            onChange={null}
                                            style={{ width: '300px', height: '100px', padding: '5px' }} // Increase width, height, and add padding

                                        />
                                    </label>
                                    <br />
                                    <button type="submit" className='py-2 px-6 hover:text-white hover:bg-black' style={{ border: '1px solid black' }}>Submit</button>
                                </form>
                            </div>

                        </div>

                        <div className='flex flex-col md:flex-row justify-center text-black' style={{ gap: '110px', marginTop: '100px' }}>
                            <div style={{ width: '300px' }}>
                                <h1 className='font-bold text-3xl'>Contact Us</h1>
                                <div className='mt-8'>
                                    <p className='mb-4 font-bold'>DESIGNING & OPERATIONS OFFICE 25/42, A BLOCK, MIDDLE CIRCLE, CONNAUGHT PLACE, NEW DELHI - 110001 NEAR RAJIV CHOWK METRO STN, GATE NO.8 </p>
                                    <p className='mb-4 font-bold'>CORPORATE INDUSTRIAL UNIT G - 984, NARELA DSIIDC INDUSTRIAL AREA, NEW DELHI - 110040</p>
                                    <p className='mb-4 font-bold'>largest-modular-kitchen-brand-india 0-9899264978 / 0-9582827928/ 0-9899239097 LANDLINE - 01144127897 best-modular-kitchen-brand-in-delhi-gurgaon-noida-india ENQUIRY@DESIGNINDIANKITCHEN.COM modular-kitchen-in-delhi MONDAY - SATURDAY: 10:30 AM - 7:30 PM  modular-kitchen-dealers-in-delhi SUNDAY: 11:00 AM - 7:00 PM ONLY FOR SITE VISITS</p>
                                </div>

                            </div>
                            <div>
                                <h1 className='font-bold text-2xl'>OTHER BUSINESS SITES</h1>
                                <ul className='mt-8'>
                                    <li className='mb-4 font-bold' ><a>DESIGN INDIAN KITCHEN</a></li>
                                    <li className='mb-4 font-bold'><a>DESIGN INDIAN WARDROBE</a></li>
                                    <li className='mb-4 font-bold'><a>MODULAR KITCHEN IN DELHI</a></li>
                                    <li className='mb-4 font-bold'><a>MODULAR KITCHEN IN GURGAON</a></li>
                                    <li className='mb-4 font-bold'><a>DESIGN INDIAN HOMES</a></li>
                                    <li className='mb-4 font-bold'><a>MODULAR KITCHEN IN NOIDA</a></li>
                                    <li className='mb-4 font-bold'><a>THE DESIGNER LOUNGE</a></li>
                                    <li className='mb-4 font-bold'><a>DEVOTIONAL INDIA</a></li>
                                    <li className='mb-4 font-bold'><a>TALLY SOLUTION</a></li>
                                </ul>

                            </div>
                            <div>
                                <h1 className='font-bold text-2xl'>CHECK US OUT</h1>
                                <ul className='mt-8'>
                                    <li className='mb-4 font-bold'><a>CUSTOMER REVIEWS</a></li>
                                    <li className='mb-4 font-bold'><a>THE MODULAR PROCESS</a></li>
                                    <li className='mb-4 font-bold'><a>REQUEST A BROCHURE</a></li>
                                    <li className='mb-4 font-bold'><a>BOOK A VISIT TODAY</a></li>
                                    <li className='mb-4 font-bold'><a>CORPORATE PRESENCE OF OUR BRAND</a></li>
                                    <li className='mb-4 font-bold'><a>GET QUOTES</a></li>
                                </ul>

                                <div className='flex'>
                                    <div>
                                        <ul className='border-l-4 border-black pl-2'>

                                            <li className='mb-2 font-bold'>ORGANIZATION & INDUSTRIAL BUSINESS</li>
                                            <li className='mb-2 font-bold'>OPERATED SINCE 2008.</li>
                                            <li className='mb-2 font-bold'>ALL RIGHTS RESERVED.</li>
                                            <li className='mb-2 font-bold'>ALL WRONGS REVERSED.</li>
                                            <li className='mb-2 font-bold'>DATA PRIVACY</li>
                                            <li className='mb-2 font-bold'>ND 9:16 AM</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li className='mb-2 font-bold'>WORK</li>
                                            <li className='mb-2 font-bold'>ABOUT</li>
                                            <li className='mb-2 font-bold'>CAREERS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className=" pt-1 md:p-4 text-black">
                        <hr className="flex justify-center h-2 w-11/12 border-1 border-black ml-4 md:ml-14" />

                        {/* <p className="text-xs pl-4 md:pl-14 pr-4 md:pr-14 text-left">
                            At Design Indian Homes, we bring together functionality and aesthetics to provide homeowners with customised and efficient home designs. Our designers specialise in home interior designs and home décor, and help you create a personalized home to suit your lifestyle. From sophisticated living room designs to space-saving and clutter-free interior designs, we are here to help you find the best home decor and home design to match your needs and style. All our products come with up to 10-year warranty along with unwavering support and maintenance services. Explore thousands of inspiring interior designs or get a free estimate – it is all here on designindianhomes.com, your one stop for complete home interiors.
                        </p>

                        <h2 className="font-bold pl-4 md:pl-14 mt-2">Popular Services</h2>
                        <p className="pl-4 md:pl-14 text-xs">
                            Modular Kitchen Designs | Home Interior Designs | Wardrobe Designs | Living room Designs | Bathroom Designs | Space Saving Furniture | Home Office Designs | Pooja Room Designs | Foyer Interior Design | Kids Bedroom Design | Interior Lighting Design
                        </p>

                        <h2 className="font-bold pl-4 md:pl-14 mt-2">Modular Kitchens</h2>
                        <p className="pl-4 md:pl-14 text-xs">
                            Modular Kitchen Designs | Home Interior Designs | Wardrobe Designs | Living room Designs | Bathroom Designs | Space Saving Furniture | Home Office Designs | Pooja Room Designs | Foyer Interior Design | Kids Bedroom Design | Interior Lighting Design
                        </p> */}
                    </div>



                </div>
                {/* <div className='flex flex-col md:flex-row justify-center items-center' style={{ width: '100%' }}>
                    <div className='md:w-1/2 mb-4 md:mb-0'>
                        <Image src="/design-indian-home-1.gif" alt="design Indian Homes" width={550} height={550} style={{ width: '100%', height: '550px' }} />
                    </div>
                    <div className='md:w-1/2'>
                        <Image src="/reward.jpg" alt='reward' width={550} height={550} style={{ width: '100%', height: "550px" }} />
                    </div>
                </div> */}
                <div className='text-center text-black text-sm  py-4 bg-white'>
                    <p>DESIGN INDIAN HOMES | ALL RIGHTS RESERVED 2024-25 CRAFTED WITH LOVE BY IN HOUSE BRAND - THE DESIGNER LOUNGE | PRIVACY | LEGAL | SITEMAP</p>
                </div>
            </div>



        )
    }
}

export default Footer