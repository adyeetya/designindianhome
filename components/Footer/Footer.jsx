"use client"
import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'

export class Footer extends Component {
    render() {
        return (
            <div className="mt-30px">
                <div className="flex items-center justify-center ">
                    <div className="text-black">
                        <button className="md:text-3xl font-bold rounded-full border-dotted border-2 border-black px-80 py-20 sm:px-6 sm:py-8 hover:bg-black hover:text-white">
                            Call Us Today!
                        </button>



                    </div>
                </div>

                <h1 className="text-4xl md:text font-semibold text-center text-black pt-4">
                    Know The Trinity Brands
                </h1>

                <div className="flex flex-col items-center md:flex-row justify-center gap-6 md:gap-32 w-full mt-5">
                    {/* Brand 1 */}
                    <div className="text-center">
                        <img src="https://designindianhomes.com/assets/img/dkilogo.png" alt="" style={{ width: '200px', height: '80px' }} />
                        <p className="text-green-500 text-2xl font-medium">Design Indian Kitchen</p>
                    </div>

                    {/* Brand 2 */}
                    <div className="text-center mt-4 md:mt-0">
                        <img src="https://designindianhomes.com/assets/img/desig%20indian%20homes.gif" alt="" style={{ width: '200px', height: '80px' }} />
                        <p className="text-green-500 text-2xl font-medium">Design Indian Home</p>
                    </div>

                    {/* Brand 3 */}
                    <div className="text-center mt-4 md:mt-0">
                        <img src="https://designindianhomes.com/assets/img/footer-logo-multi.png" alt="" style={{ width: '200px', height: '80px' }} />
                        <p className="text-green-500 text-2xl font-medium">Design Indian Wardrobe</p>
                    </div>
                </div>


                {/* Features Section */}
                <div className="flex flex-col items-center md:flex-row justify-center bg-gray-200 p-10 gap-6 mt-10 text-black">
                    {/* Feature 1 */}
                    <div className="text-center">
                        <img src="https://designindianhomes.com/assets/img/warranty.png" alt="" className="w-30 h-20 mx-auto" />
                        <h1 className='font-bold text-center text-sm'>Flat 10 year warranty</h1>
                        <p className="text-sm">Choose interiors designed with superior quality material, leaving no room for defects.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="text-center mt-4 md:mt-0">
                        <img src="https://designindianhomes.com/assets/img/fast-delivery.png" alt="" className="w-30 h-20 mx-auto" />
                        <h1 className='font-bold text-center text-sm'>45-day delivery</h1>
                        <p className="text-sm">Get beautiful interiors for your new home in just 45 days. That’s our delivery guarantee.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="text-center mt-4 md:mt-0">
                        <img src="https://designindianhomes.com/assets/img/team-building.png" alt="" className="w-30 h-20 mx-auto" />
                        <h1 className='font-bold text-center text-sm'>600+ design experts</h1>
                        <p className="text-sm">Explore design ideas and co-create your dream home with our experienced designers</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="text-center mt-4 md:mt-0">
                        <img src="https://designindianhomes.com/assets/img/customer-service.png" alt="" className="w-30 h-20 mx-auto" />
                        <h1 className='font-bold text-center text-sm'>Post-installation service</h1>
                        <p className="text-sm">Complete your design journey and get unwavering support from our dedicated care team.</p>
                    </div>
                </div>

                {/* Social Media and Copyright Section */}
                <div className="flex flex-col md:flex-row justify-center bg-gray-200 gap-6 p-6  text-black">
                    {/* Social Media Icons */}
                    <div className="text-left">
                        <img src="https://designindianhomes.com/assets/img/desig%20indian%20homes.gif" alt="footer logo" className="w-30 h-20" />
                        <div className='flex gap-4 mt-4 hover'>
                            <SocialIcon network="twitter" url="www.vimeo.com" style={{ width: '2rem', height: '2rem' }} />
                            <SocialIcon network="facebook" url="www.vimeo.com" style={{ width: '2rem', height: '2rem' }} />
                            <SocialIcon network="instagram" url="www.vimeo.com" style={{ width: '2rem', height: '2rem' }} />
                            <SocialIcon network="linkedin" url="www.vimeo.com" style={{ width: '2rem', height: '2rem' }} />
                        </div>
                        <p>© Copyright <strong>Design Indian Homes</strong> 2023. <br /> All Rights Reserved</p>
                    </div>

                    <div>
                        <h3 className="font-bold">Design Indian Homes</h3>
                        <ul className="leading-7">
                            <li>Team</li>
                            <li>Join Us</li>
                            <li>The Design Journal</li>
                            <li>Get Estimate</li>
                            <li>Privacy Policy</li>
                            <li>Refer & Earn</li>
                            <li>Book Virtual meeting</li>
                            <li>Modular Kitchen cost calculator</li>
                            <li>Bathroom Designs</li>
                            <li>Kids Bedroom</li>
                            <li>FAQ</li>
                            <li>Disclaimer</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">Customer Support</h3>
                        <ul className="leading-7">
                            <li>Raise Issue</li>
                            <li>My issue</li>
                            <li>Contact us</li>
                            <li>FAQs</li>
                            <li>  <strong>The Design Journal</strong></li>
                            <li>Buying Guides</li>
                            <li>Style your home</li>
                            <li>Interior 101</li>
                            <li>Interior by Design Indian Homes</li>
                            <li>Design Indian Homes in your city</li>

                        </ul>
                    </div>
                    <div>
                        <img src="https://designindianhomes.com/assets/img/homes-gif-logo-optimize.gif" alt="" className="w-60 h-30" />
                    </div>

                </div>
                <div className="bg-gray-200 pt-1 md:p-4 text-black">
                    <hr className="flex justify-center h-2 w-11/12 border-1 border-black ml-4 md:ml-14" />

                    <p className="text-xs pl-4 md:pl-14 pr-4 md:pr-14 text-left">
                        At Design Indian Homes, we bring together functionality and aesthetics to provide homeowners with customised and efficient home designs. Our designers specialise in home interior designs and home décor, and help you create a personalized home to suit your lifestyle. From sophisticated living room designs to space-saving and clutter-free interior designs, we are here to help you find the best home decor and home design to match your needs and style. All our products come with up to 10-year warranty along with unwavering support and maintenance services. Explore thousands of inspiring interior designs or get a free estimate – it's all here on designindianhomes.com, your one stop for complete home interiors.
                    </p>

                    <h2 className="font-bold pl-4 md:pl-14 mt-2">Popular Services</h2>
                    <p className="pl-4 md:pl-14 text-xs">
                        Modular Kitchen Designs | Home Interior Designs | Wardrobe Designs | Living room Designs | Bathroom Designs | Space Saving Furniture | Home Office Designs | Pooja Room Designs | Foyer Interior Design | Kids Bedroom Design | Interior Lighting Design
                    </p>

                    <h2 className="font-bold pl-4 md:pl-14 mt-2">Modular Kitchens</h2>
                    <p className="pl-4 md:pl-14 text-xs">
                        Modular Kitchen Designs | Home Interior Designs | Wardrobe Designs | Living room Designs | Bathroom Designs | Space Saving Furniture | Home Office Designs | Pooja Room Designs | Foyer Interior Design | Kids Bedroom Design | Interior Lighting Design
                    </p>
                </div>


            </div>


        )
    }
}

export default Footer