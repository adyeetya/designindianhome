
"use client";
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { SocialIcon } from 'react-social-icons';

import Image from 'next/image';

import Modal from 'react-modal';
import { Link } from 'react-router-dom';



const megaMenuDialogStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '900px',
    height: '400px',
    top: '57%',
    left: '45%',
    transform: 'translate(-50%, -50%)',
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
  },


};


const Header = () => {
  const [megaMenuPosition, setMegaMenuPosition] = useState({ top: 0, left: 0 });


  const megaMenuData = {
    designIdeas: [
      {
        category: 'Modular Interior Designs',

        subcategories: ['Modular Kitchens', 'Wardrobes', 'Vanities', 'Dressers', 'TV Units', 'Crockery Units', 'Glass Partitions'],
      },
      {
        category: 'Interior Design Solutions',
        subcategories: ['1bhk residence interior designs', '2bhk residence interior designs', '3bhk residence interior designs', '4bhk residence interior designs', 'Villa interior designs', 'farmhouse interior designs', 'Penthouse interior designs', 'Studio apartment interior designs', 'Bungalow interior designs', 'Duplex Residence interior Designs', 'Cottage Interior Designs'],
      },
      {
        category: 'Interior Design Ideas',
        subcategories: ['Wooden Polishing', 'Wooden Flooring', 'Vertical Gardens', 'UPVC Windows', 'Tiling Designs', 'Sofa Designs', 'Kitchen Lightening', 'Plumbings', 'Glass Partitions', 'POP', 'floorings', 'ceilings', 'Wall Panelling', 'Exterior Cladding', 'Doors', 'Electric Works', 'Beds', 'Paints', 'End to End Interiors', 'Commercial Interiors'],
      },
      {
        category: 'Architectural Designs',
        subcategories: ['Architectural Consultancy', 'End to End Architectural Services', 'Architectural Designing and Planning', 'Commercial Architectural Services'],
      },
      {
        category: 'Home Renovation Services',
        subcategories: ['Structural Renovation', 'Interior Renovation', 'Bedroom Renovation', 'Lounge Renovation', 'Bathroom Renovation', 'Terrace Renovation', 'Living Room Renovation', 'Modular Kitchen Renovation', 'Wardrobe Renovation', 'Living Room Renovation', 'Mandir Renovation', 'Gym & Spas Renovation', 'Hotels Renovation', 'Farmhouse Renovation', 'Banquet Renovation', 'Villa Renovation']
      }

    ],
    interiors: [
      {
        category: 'End to end Interiors',


        subcategories: ['Modular Interiors', 'Commercial Interiors', 'Luxury Interiors'],

      },
      {
        category: 'Types of Interior Design Ideas',
        subcategories: ['1bhk residence interior designs', '2bhk residence interior designs', '3bhk residence interior designs', '4bhk residence interior designs', 'Villa interior designs', 'farmhouse interior designs', 'Penthouse interior designs', 'Studio apartment interior designs', 'Bungalow interior designs', 'Duplex Residence interior Designs', ' Cottage Interior Designs'],

      },

      {
        category: 'Renovation Services',

        subcategories: ['Structural Renovation', 'Interior Renovation', 'Bedroom Renovation', 'Lounge Renovation', 'Bathroom Renovation ', 'Terrace Renovation', 'Living Room Renovation ', 'Modular Kitchen Renovation', 'Wardrobe Renovation', 'Living Room Renovation', 'Mandir Renovation', 'Gym & Spas Renovation', 'Hotels Renovation', 'Farmhouse Renovation', 'Banquet Renovation', 'Villa Renovation'
        ],
      },
      {
        category: '/images/banner.png'
      }

    ],
    Architectural: [

      {
        category: 'Consultancy',


      },
      {
        category: 'Designing & Planning',
      },

      {

        category: 'End to End Structural projects'
      },
      {
        category: 'Luxury Residence'
      },
      {
        category: 'Renovations'
      }

    ],
    Modular_kitchen: [
      {
        category: 'Types of Modular Kitchens'
      },
      {
        category: 'Modular Kitchen Designs'
      },
      {
        category: 'Luxury Modular Kitchen'
      },
      {
        category: 'Kitchen Renovation'
      }

    ],

    Wardrobes: [
      {

        category: 'Types of Wardrobes'
      },
      {
        category: 'Luxury Wardrobes'
      },
      {
        category: 'Wardrobes Designs'
      },
      {
        category: 'Lacquer Glass Wardrobe Designs'
      },
      {
        category: 'Wardrobe Renovation Services'
      }

    ],

    Living: [
      {

        category: 'TV Units' 
      },
      {
        category: 'Crockery Units'
      },
      {
        category: 'Bookshelves'
      },
      {
        category: 'Shoeracks'
      },
      {
        category: 'Home Office'
      },
      {
        category: 'Glass Partitions'
      },
      {
        category: 'Dressings'

      },
      {
        category: 'Renovation'
      },
      {
        category: ' Services'
      }
    ],
    Modular_interiors: [
      {
        category: 'Mandir'
      },
      {
        category: 'chest of Drawers'
      },
      {
        category: 'Bar Units'
      },
      {
        category: 'side Tables'
      },
      {
        category: 'custom Beds'
      },
      {
        category: 'Foldable Beds'
      },
      {
        category: 'Foyer Cabinets'
      },
      {
        category: 'Bathroom Vanities'
      },
      {
        category: 'Home Office'
      },
      {
        category: 'Renovation'
      },
    ]

  };

  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Function to handle mega menu hover
  const handleMegaMenuHover = (category) => {
    setHoveredCategory(category);
    setMegaMenuOpen(true);
  };

  // Function to handle mega menu leave
  const handleMegaMenuLeave = () => {
    setHoveredCategory(null);
    setMegaMenuOpen(false);
  };

  const [scrollDirection, setScrollDirection] = useState('up');

  const [springPropsLeftLogo, setSpringPropsLeftLogo] = useSpring(() => ({
    translateY: 0,
    translateX: 0,
    opacity: 1,
    scale: 1,
  }))
  const [springPropsCenterLogo, setSpringPropsCenterLogo] = useSpring(() => ({
    translateY: 0,
    translateX: 0,
    opacity: 1,
    scale: 1,

  }));
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);


  useEffect(() => {
    let lastScrollY = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setSpringPropsLeftLogo({
      translateY: scrollDirection === 'up' ? -100 : 0,
      translateX: scrollDirection === 'down' ? 0 : -100,
      opacity: scrollDirection === 'up' ? 0 : 1,
      scale: scrollDirection === 'up' ? 0.5 : 1,
    })
    setSpringPropsCenterLogo({
      translateY: scrollDirection === 'down' ? 100 : 0,
      translateX: scrollDirection === 'down' ? 0 : -100,
      opacity: scrollDirection === 'down' ? 0 : 1,
      scale: scrollDirection === 'down' ? 0.5 : 1,
    })
  }, [scrollDirection, setSpringPropsLeftLogo, setSpringPropsCenterLogo])

/*   const toggleMobileMenu = () => {
    setMobileMenuVisible((prevState) => !prevState)
  }

  const toggleMobileMenu = () => {
    setMobileMenuVisible((prevState) => !prevState);
  };
 */
  return (
    <div className={`bg-white ${scrollDirection === 'down' ? 'sticky' : ''}`}>
      <div className="hidden md:flex">
        {/* Desktop Header */}
        <div

          className={`bg-white py-0 mb-px w-full z-50 transition-transform ease-in-out duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
            }`}

          style={{
            position: 'fixed',
            top: 0,
            marginTop: 0,
          }}
        >
          <div className="bg-red-600 py-1 sticky top-0">
            <h1 className="text-center text-xs">ॐ साईं राम</h1>
            <div className="flex justify-center gap-96">

              <div className="flex gap-2"><SocialIcon
                network="whatsapp"
                url="www.vimeo.com"
                style={{ width: '1.5rem', height: '1.5rem' }}
              /> <h1>Call Us</h1></div>
              <div className="flex gap-2 text-xs"><p>Book a Visit</p>
                <p>| Refer a Rewards</p>
                <p>| Architects & Interior Designs</p></div>

              <div className=" flex gap-2 ">
                {/* <SocialIcon
                  network="instagram"
                  url="www.vimeo.com"
                  style={{ width: '1.5rem', height: '1.5rem' }}
                />
                <SocialIcon
                  network="youtube"
                  url="www.vimeo.com"
                  style={{  width: '1.5rem', height: '1.5rem' }}
                />
                <SocialIcon
                  network="whatsapp"
                  url="www.vimeo.com"
                  style={{ width: '1.5rem', height: '1.5rem' }}
                /> */}
              </div>
            </div>
          </div>
          <animated.div
            style={{
              transform: springPropsCenterLogo.translateY.to(

                y => `translateY(${y}%) scale(${springPropsCenterLogo.scale})`
              ),
              opacity: springPropsCenterLogo.opacity,
              transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',

            }}
          >
            <div className=" text-black text-center py-2 w-200px m-200px pt-2">
              <div className="max-w-screen-xl mx-auto flex justify-between items-center m-200px">
                {/* Right side */}
                <div className="flex items-center space-x-4">
                  <p className="text-xs font-semibold">/My Kalyan</p>
                  <p className="text-xs font-semibold">/Media</p>
                  <p className="text-xs font-semibold">/Kalyan News</p>
                  <p className="text-xs font-semibold">/Gold Rates</p>
                  <p className="text-xs font-semibold">/Digital Gold</p>
                </div>

                {/* Left side */}
                <div className="flex items-center space-x-4">
                  <p className="text-xs font-semibold">/Store Locator</p>
                  <p className="text-xs font-semibold">/Feedback</p>
                  <p className="text-xs font-semibold">/Contact</p>
                  <SocialIcon
                    network="twitter"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
                  <SocialIcon
                    network="facebook"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
                  <SocialIcon
                    network="instagram"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
                  <SocialIcon
                    network="linkedin"
                    url="www.vimeo.com"
                    style={{ width: '2rem', height: '2rem' }}
                  />
                </div>
              </div>
            </div>
          </animated.div>

          <div
            className="max-w-screen-xl  flex justify-center items-center relative "
            style={{}}
          >
            <animated.img

              srcSet="images/left-logo.png"
              alt="Left Logo"
              className="hidden md:flex h-16 w-16 mr-2"
              style={{
                transform: springPropsLeftLogo.translateX.to((x) => `translateX(${x}%)`),
                opacity: springPropsLeftLogo.opacity,
                transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
              }}
            />



            {/* Main Header Navigation scroll up header */}
            <div className="">
              <nav className="hidden md:flex items-center space-x-10">
                <div
                  className="relative group"
                  onMouseEnter={() => handleMegaMenuHover('designIdeas')}
                  onMouseLeave={handleMegaMenuLeave}
                >

                  <p className="text-xs font-bold">Design Ideas</p>
                </div>
                <div
                  className="relative group"
                  onMouseEnter={() => handleMegaMenuHover('interiors')}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <p className="text-xs font-bold">Interiors</p>
                </div>


                <div className="relative group"

                  onMouseEnter={() => handleMegaMenuHover('Architectural')}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <p className="text-xs font-bold">Architectural</p>
                </div>

                <div
                  className="relative group"
                  onMouseEnter={() => handleMegaMenuHover('Modular_kitchen')}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <p className="text-xs font-bold">Modular Kitchen</p>
                </div>

                <animated.img
                  srcSet="/images/Logo.gif"
                  alt="Center Logo"
                  className="h-30 w-20 top-2/4 transform -translate-y-2/4 scale-150 "
                  style={{
                    transform: springPropsCenterLogo.translateY.to(

                      y => `translateY(${y}%) scale(${springPropsCenterLogo.scale})`
                    ),
                    opacity: springPropsCenterLogo.opacity,
                    display: springPropsCenterLogo.opacity.to(
                      opacity => (opacity === 0 ? 'none' : 'block')
                    ),
                    transition: 'transform 0.1s ease-in-out, opacity 0.1s ease-in-out',
                  }}
                />

                <div 
                className="relative group"
                onMouseEnter={() => handleMegaMenuHover('Wardrobes')}
                onMouseLeave={handleMegaMenuLeave}
                >
                  <p className="text-xs font-bold">Wardrobes</p>
                </div>
                <div  className="relative group"
                  onMouseEnter={() => handleMegaMenuHover('Living')}
                  onMouseLeave={handleMegaMenuLeave}>
                    <p className="text-xs font-bold">Living</p>

                </div>
                <div
                  className="relative group"
                  onMouseEnter={() => handleMegaMenuHover('Modular_interiors')}

                  onMouseLeave={handleMegaMenuLeave}>
                  <p className="text-xs font-bold">Modular Interiors</p>
                  
                  </div>
                <div ><p className="text-xs font-bold">More</p></div>
                <button className="bg-yellow-400 px-6 py-2 rounded-full text-sm">Get Quotes</button>

                <button className="text-sm ">Contact</button>
              </nav>

              <Modal
                isOpen={megaMenuOpen}
                onRequestClose={handleMegaMenuLeave}
                contentLabel="Mega Menu Dialog"
                style={megaMenuDialogStyle}
              >
                {/* Arrow to indicate the corresponding category */}
                {hoveredCategory && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -15, // Adjust as needed
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderTop: '15px solid white', // Adjust size and color as needed
                      borderRight: '15px solid transparent',
                      borderLeft: '15px solid transparent',
                    }}
                  />
                )}

                {/* Render mega menu items for the hovered category */}
                {hoveredCategory && (
                  <div className="flex flex-row">
                    {/* Column for Categories */}
                    <div className="pr-4 flex flex-row gap-4">
                      {megaMenuData[hoveredCategory].map((item, idx) => (
                        <div key={idx} className="mb-4">

                          <p className="text-xs font-bold mb-2">{item.category}</p>

                          {item.subcategories && (
                            <ul>
                              {item.subcategories.map((subCategory, subIdx) => (
                                <li key={subIdx} className="text-xs">
                                  <p>{subCategory}</p>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Modal>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden sticky top-0">
        <div className="flex justify-between items-center px-4 py-2 bg-white">

          <img src="/images/left-logo.png" alt="" className="h-12 w-12" />

         {/*  <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button> */}
        </div>

        {mobileMenuVisible && (
          <animated.div
            className="bg-green-600 fixed top-0 left-0 w-full h-full overflow-y-scroll text-white"
            style={{
              opacity: springPropsCenterLogo.opacity,

              display: springPropsCenterLogo.opacity.to(
                (opacity) => (opacity === 0 ? 'none' : 'block')

              ),
              transition: 'opacity 0.3s ease-in-out',
              pointerEvents: mobileMenuVisible ? 'auto' : 'none', // Add this line
            }}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center py-2 gap-4 z-40">

              <img srcSet="images/Logo.gif" alt="" className="w-18 h-14" />

              <div className="flex gap-3">
                <SocialIcon
                  network="twitter"
                  url="www.vimeo.com"
                  style={{ width: '2rem', height: '2rem' }}
                />
                <SocialIcon
                  network="facebook"
                  url="www.vimeo.com"
                  style={{ width: '2rem', height: '2rem' }}
                />
                <SocialIcon
                  network="instagram"
                  url="www.vimeo.com"
                  style={{ width: '2rem', height: '2rem' }}
                />
                <SocialIcon
                  network="linkedin"
                  url="www.vimeo.com"
                  style={{ width: '2rem', height: '2rem' }}
                />
              </div>
              <p className="text-m font-semibold">Our Brands</p>
              <p className="text-m font-semibold">Muhurat</p>
              <p className="text-m font-semibold">Shop Online</p>
              <p className="text-m font-semibold">About Us</p>
              <p className="text-m font-semibold">Gift Card</p>
              <p className="text-m font-semibold">Ambassadors</p>
              <p className="text-m font-semibold">Investors</p>
              {/* ... (Add more mobile menu items as needed) */}
            </div>
          </animated.div>
        )}
      </div>
    </div>

  );
};

export default Header;

