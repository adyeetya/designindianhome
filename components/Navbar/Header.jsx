"use client";
import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { SocialIcon } from 'react-social-icons';
import Modal from 'react-modal';

import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faPencil, faNewspaper, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import ThemeSwitcher from '@/app/ThemeSwitcher'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLightbulb, faHome, faBuilding, faUtensils, faCouch, faWrench, faChevronDown, faQuoteRight, faCog } from '@fortawesome/free-solid-svg-icons';
import './Omsai.css'




const Header = () => {


  const [activeCategory, setActiveCategory] = useState(null);
  const [megaMenuVisible, setMegaMenuVisible] = useState(false);

  const megaMenuRef = useRef(null);
  const closeMegaMenu = () => {
    setMegaMenuVisible(false);
  };

  const [hoveredItem, setHoveredItem] = useState(null);


  const handleMouseOverImage = (item) => {
    console.log('mouse hovered')
    setHoveredItem(item);
  };

  const handleMouseLeaveImage = () => {
    setHoveredItem(null);
  };

  const getImageForItem = (item) => {

    const imageMapping = {
      //interior
      '1bhk': '/images/interiors/best-designs-for-1-bhk-residence-flat-in-delhi-gurgaon-noida-india (1).png',
      '2bhk': '/images/interiors/2-bedroom-flat-design-ideas-concept-budget-makeovers-interior-designs-in-delhi-gurgaon-noida-india (1).jpeg',
      '3bhk': '/images/interiors/3-bhk-flat-interior-apartment-design-in-delhi-gurgaon-noida-india (1).webp',
      '4bhk': '/images/interiors/gallery-collection-pictures-of-4bhk-4-bedroom-flat-interior-designing-ideas-in-delhi-gurgaon-noida-india (4).jpg',
      'farmhouse': '/images/interiors/best-farmhouse-interior-design-ideas-architects-in-delhi-gurgaon-noida-india (4).jpg',
      'pent': '/images/interiors/best-pent-house-designs-inspiration-in-delhi-gurgaon-noida-india-faridabad (4).jpg',
      'office': '/images/interiors/residential-office-makeovers-interiors-designs-redesigning-in-delhi-gurgaon-noida-faridabad-india (4).jpg',
      'studio': '/images/interiors/best-designs-for-studio-apartments-in-delhi-gurgaon-noida-india (1).jpeg',
      'bunglow': '/images/interiors/amazing-bunglow-designing-ideas-concepts-architectural-services-in-delhi-gurgaon-noida-india (1).jpeg',
      'duplex': '/images/interiors/best-interior-design-ideas-for-duplex-in-delhi-gurgaon-noida-faridabad-india (6).jpg',
      'cottage': '/images/interiors/beautiful - cottage - interior - design - in - delhi - gurgaon - noida - faridabad.jpg',
      'villa': '/images/interiors/best - interior - design - ideas - for  - villa - in - delhi - gurgaon - noida - faridabad.jpg',

      //renovation
      'structural': '/images/renovation/complete-building-structures-end-to-end-builders-developers-in-delhi-gurgaon-noida-india (6).jpg',
      'bathroom': '/images/renovation/bathroom-redesigning-services-in-delhi-gurgaon-noida-india (4).jpeg',
      'livingroom': '/images/renovation/beautiful-small-living-room-decor-designing-interiors-designs-in-delhi-gurgaon-noida-faridabad-india (2).jpg',
      'gym': '/images/renovation/gym-and-spa-redesigning-services-in-renovations-in-delhi-gurgaon-noida-india (2).jpg',
      'interiorRenovation': '/images/renovation/gym-and-spa-redesigning-services-in-renovations-in-delhi-gurgaon-noida-india (2).jpg',
      'terrace': '/images/renovation/gym-and-spa-redesigning-services-in-renovations-in-delhi-gurgaon-noida-india (2).jpg',
      'bedroom': '/images/renovation/top-bedroom-design-ideas-concepts-interior-designers-architects-delhi-gurgaon-noida-india (1).jpg',
      'mandir': '/images/renovation/top-mandir-manufacturers-in-delhi-gurgaon-noida-india (7).jpg',
      'farmhouseRenovation': '/images/renovation/end-to-end-farmhouse-renovations-services-turnkey-farmhouse-designing-building-in-delhi-gurgaon-noida-india (7).jpg',
      'wardrobeRenovation': '/images/renovation/best-modular-kitchen-wardrobes-designs-small-kitchen-designs-wardrobe-designs-in-delhi-gurgaon-noida-india (6).jpg',
      'villRenovation': '/images/renovation/beautiful-villa-designs-in-delhi-gurgaon-noida-india (1).jpg',
      'banquet': '/images/renovation/banquet-designers-developers-architects-builders-in-delhi-gurgaon-noida-india (2).jpeg',
      'hotel': '/images/renovation/best-hotel-interior-designs-renovations-redesigning-hotels-architects-interior-designers-delhi-gurgaon-noida-india (1).jpg',
      'modularKitchen': '/images/renovation/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (4).jpg',
      'loungRenovation': '/images/renovation/loung renovation.jpg',

      //Architectural large
      'luxury': '/images/consultancy/larg_image/affordable-luxury-residences-flats-apartments-interior-designs-in-delhi-gurgaon-noida-india (9).jpg',
      'consultant': '/images/consultancy/larg_image/Architect - consultant - in - delhi - gurgaon - noida.jpg',
      'design': '/images/consultancy/larg_image/beautiful - design - project -planing - in - delhi - gurgaon - noida.jpg',
      'renovation': '/images/consultancy/larg_image/structural-designing-buildings-developers-architects-services-renovations-in-delhi-gurgaon-noida-india (1).jpg',
      'project': '/images/consultancy/larg_image/villa-renovation-services-in-delhi-gurgaon-india-noida (3).jpg',

      //Architectural small
      'luxurysm': '/images/consultancy/short_image/affordable-luxury-residences-flats-apartments-interior-designs-in-delhi-gurgaon-noida-india (5).jpg',
      'consultantsm': '/images/consultancy/Consultancy - in delhi - gurgaon - noida - faridabad.jpg',
      'designsm': '/images/consultancy/short_image/Beautiful - Design- project - in - delhi - gurgaon- noida.jpg',
      'renovationsm': '/images/consultancy/short_image/villa-renovation-services-in-delhi-gurgaon-india-noida (1).jpg',
      'projectsm': '/images/consultany/short_image/complete-turnkey-structures-builders-developers-end-to-end-building-works-in-delhi-gurgaon-noida-india (6).jpg',

      //Modular Kitchen large
      'type': '/images/modular_kitchen/larg/top-modular-kitchen-and-wardrobe-brand-in-delhi-gurgaon-noida-india (2).jpg',
      'modular': '/images/modular_kitchen/larg/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (4).jpg',
      'luxury_modular': '/images/modular_kitchen/larg/modular-kitchen-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india (4).jpg',
      'kitchen_renovation': '/images/modular_kitchen/larg/best-modular-kitchen-wardrobes-designs-small-kitchen-designs-wardrobe-designs-in-delhi-gurgaon-noida-india (7).jpg',
      'renovationss': '/images/modular_kitchen/larg/best-modular-kitchen-wardrobes-designs-small-kitchen-designs-wardrobe-designs-in-delhi-gurgaon-noida-india (6).jpg',

      //WardRobes

      'types_wardrobe': '/images/wardrobe/larg/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (3).jpg',
      'luxury_wardrobe': '/images/wardrobe/larg/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (4).jpg',
      'wardrobe_design': '/images/wardrobe/larg/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (7).jpg',
      'glass_wardrobe': '/images/wardrobe/larg/modular-kitchen-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india (2).jpg',
      'wardrobe_renovation': '/images/wardrobe/larg/top-modular-kitchen-and-wardrobe-brand-in-delhi-gurgaon-noida-india (1).jpg',

      //Living

      'tv_units': '/images/living/larg/best-design-for-tv-units-in-delhi-gurgaon-noida-faridabad.jpg',
      'crockery_unit': '/images/living/larg/best-design-for-crockery-units-in-delhi-noida-gurgaon.jpg',
      'bookshlaves': '/images/living/larg/Beautiful-design-bookshelves-in-noida-gurgaon-faridabad.jpg',
      'glass_partition': '/images/living/larg/designer-glass-partitions-dealers-in-delhi-gurgaon-noida-india (5).jpg',
      'dressing': '/images/living/larg/beautiful-dressing-unit-in-delhi-gurgaon-noida.jpg',
      'home_office': '/images/living/larg/ideas-budget-interior-designs-for-residential-offices-in-delhi-gurgaon-noida-india (2).webp',
      'shoes_rack': '/images/living/larg/best-design-shoe-racks-in-delhi-gurgaon-noida.jpg',
      'living_renovation': '/images/living/larg/best-interior-designing-company-in-delhi-gurgaon-noida-india-Design-Indian-Homes (2).jpg',


      //Modular Interior

      'mandir_interior': '/images/modular_interior/larg/designer-mandir-dealers-manufacturers-in-delhi-gurgaon-noida-india (3).jpg',
      'chest_drawer': '/images/modular_interior/larg/beautiful-design-shoe-racks-in-delhi-gurgaon-noida.jpeg',
      'bar_unit': '/images/modular_interior/larg/beautiful-design-bar-unit-in-delhi-gurgaon-noida.jpg',
      'side_table': '/images/modular_interior/larg/side-table-design-in delhi-gurgaon-noida-faridabad.jpg',
      'foldable_bed': '/images/modular_interior/larg/beautiful-foldable-bed-in-delhi-gurgaon-noida-faridabad.jpg',
      'foyer_cabinet': '/images/modular_interior/larg/foyer-area-wooden-cabinets-dealers-manufacturers-delhi-gurgaon-noida-india (1).jpg',
      'bathroom_vatities': '/images/modular_interior/larg/bathroom-designs-in-delhi-gurgaon-noida-india (1).jpeg',



    };
    return imageMapping[item] || '/images/top4.jpeg';
  };
  const MegaMenuDesignIdeasContent = () => (
    <div className=''>
      <div className='bg-white shadow-2xl rounded-sm flex gap-8 justify-center absolute w-full p-4  h-fit text-black'
        onMouseLeave={handleMouseLeave} style={{ marginTop: '96px' }}>
        <div >
          <ul className='text-xs'>
            <h3 className='text-lg font-bold'>Modular Interior Designs</h3>
            <li>Modular Kitchens</li>
            <li>Wardrobes</li>
            <li>Vanities </li>
            <li>Dressers</li>
            <li>TV Units</li>
            <li>Crockery Units</li>
            <li>Glass Partitions</li>

          </ul>
        </div>


        <div>
          <ul className='text-sm'>
            <h3 className='text-lg font-bold'>Interior Design Solutions</h3>
            <li>1BHK residence interior designs</li>
            <li>2BHK Residence interior designs</li>
            <li>3BHK Residence interior designs</li>
            <li>4BHK Residence interior designs</li>
            <li>Villa interior designs</li>
            <li>Farmhouse interior designs</li>
            <li>Penthouse interior designs</li>
            <li>studio apartment interior designs</li>
            <li>Bunglow interior designs</li>
            <li>Duplex Residence interior designs</li>
            <li>Cottage interior designs</li>
          </ul>
        </div>


        <div>
          <ul className='text-xs'>
            <h3 className='text-lg font-bold'>Interior Design Ideas</h3>
            <li>Wooden Polishing</li>
            <li>Wooden Flooring</li>
            <li>Vertical Gardens</li>
            <li>UPVC Windows</li>
            <li>Tiling Designs</li>
            <li>Sofa Designs</li>
            <li>Kitchen Lightening</li>
            <li>Plumbings</li>
            <li>Glass Partitions</li>
            <li>ceilings</li>
            <li> Wall Panelling</li>
            <li>Exterior Cladding</li>
            <li>Doors</li>
            <li>Electric Works</li>
            <li>Beds</li>
            <li>Paints</li>
            <li>End to End Interiors</li>
            <li>Commercial Interiors</li>


          </ul>
        </div>


        <div>
          <ul className='text-xs'>
            <h3 className='text-lg font-bold'>Architectural Designs </h3>
            <li>Architectural Consultancy</li>
            <li>End to End Architectural Services</li>
            <li>Architectural Designing and Planning</li>
            <li>Commercial Architectural Services</li>

          </ul>
        </div>

        <div>
          <ul className='text-xs'>
            <h3 className='text-lg font-bold'>Home Renovation Services</h3>
            <li>Structural Renovation</li>
            <li>Interior Renovation</li>
            <li>Bedroom Renovation</li>
            <li>Lounge Renovation</li>
            <li>Bathroom Renovation</li>
            <li>Terrace Renovation</li>
            <li>Living room Renovation</li>
            <li>Modular kitchen Renovation</li>
            <li>Wardrobe Renovation</li>
            <li>Living Room Renovation</li>
            <li>Mandir Renovation</li>
            <li>GYM & Spas Renovation</li>
            <li>Hotel Renovation</li>
            <li>Farmhouse Renovation</li>
            <li>Banquet Renovation</li>
            <li>Villa Renovation</li>
          </ul>
        </div>

      </div>


    </div>
  );
  const MegaMenuInteriorsContent = () => (
    <div className='bg-white shadow-2xl rounded-lg flex justify-center absolute w-full p-2 h-fit text-black'

      onMouseLeave={handleMouseLeave} style={{ marginTop: '96px' }}>
      <div className='flex gap-8'>
        <div class >
          <ul className='text-sm'>
            <h3 className='text-lg font-bold text-black'>Types of Interior Design Ideas</h3>
            <li
              onMouseOver={() => handleMouseOverImage('1bhk')}
              onMouseLeave={handleMouseLeaveImage}
            >
              1bhk residence interior designs
            </li>
            <li onMouseOver={() => handleMouseOverImage('2bhk')} onMouseLeave={handleMouseLeaveImage}>2bhk residence interior designs</li>
            <li onMouseOver={() => handleMouseOverImage('3bhk')} onMouseLeave={handleMouseLeaveImage}>3bhk residence interior designs </li>
            <li onMouseOver={() => handleMouseOverImage('4bhk')} onMouseLeave={handleMouseLeaveImage}>4bhk residence interior designs</li>
            <li onMouseOver={() => handleMouseOverImage('villa')} onMouseLeave={handleMouseLeaveImage}>Villa interior designs</li>
            <li onMouseOver={() => handleMouseOverImage('farmhouse')} onMouseLeave={handleMouseLeaveImage}>farmhouse interior designs</li>
            <li onMouseOver={() => handleMouseOverImage('pent')} onMouseLeave={handleMouseLeaveImage}>Penthouse interior designs</li>
            <li onMouseOver={() => handleMouseOverImage('office')} onMouseLeave={handleMouseLeaveImage}>Studio apartment interior designs</li>
            <li onMouseOver={() => handleMouseOverImage('bunglow')} onMouseLeave={handleMouseLeaveImage}>Bungalow interior designs</li>
            <li onMouseOver={() => handleMouseOverImage('duplex')} onMouseLeave={handleMouseLeaveImage}>Duplex Residence interior Designs</li>
            <li onMouseOver={() => handleMouseOverImage('cottage')} onMouseLeave={handleMouseLeaveImage}>Cottage Interior Designs</li>

          </ul>
        </div>


        <div>
          <ul className='text-sm'>
            <h3 className='text-lg font-bold text-black'>Renovation Services</h3>
            <li onMouseOver={() => handleMouseOverImage('')}>Structural Renovation</li>
            <li onMouseOver={() => handleMouseOverImage('interiorRenovation')}>Interior Renovation</li>
            <li onMouseOver={() => handleMouseOverImage('bedroom')}>Bedroom Renovation</li>
            <li onMouseOver={() => handleMouseOverImage('loungRenovation')}>Lounge Renovation</li>
            <li onMouseOver={() => handleMouseOverImage('bathroom')}>Bathroom Renovation</li>
            <li onMouseOver={() => handleMouseOverImage('terrace')}>Terrace Renovation</li>
            <li onMouseOver={() => handleMouseOverImage('livingroom')}>Living room Renovation</li>
            <li onMouseOver={() => handleMouseOverImage('modularKitchen')}>Modular kitchen Renovation</li>
            <li onMouseOver={() => handleMouseOverImage('wardrobeRenovation')}>Wardrobe Renovation</li>

            <li onMouseOver={() => handleMouseOverImage('mandir')}>Mandir Renovation</li>
            <li onMouseOver={() => handleMouseOverImage('gym')}>GYM & Spas Renovation</li>
            <li onMouseOver={() => handleMouseOverImage('hotel')}>Hotel Renovation</li>
            <li onMouseOver={() => handleMouseOverImage('farmhouseRenovation')}>Farmhouse Renovation</li>
            <li onMouseOver={() => handleMouseOverImage('banquet')}>Banquet Renovation</li>
            <li onMouseOver={() => handleMouseOverImage('villaRenovation')}>Villa Renovation</li>
          </ul>
        </div>
        <div className='ml-48 mt-12 center'>
          <Image
            src={hoveredItem ? getImageForItem(hoveredItem) : '/images/top4.jpeg'}
            alt=''
            className='shadow-sm rounded-full border-2 object-cover max-w-96'
            width={550}
            height={250}
            style={{ width: '550px', height: '250px' }}
            layout="fixed"
          />

          <div className='flex justify-center'>
            <button className='mt-4 bg-green-700 p-3  rounded-full text-white font-bold text-sm'>Book an End To End Interior Consultancy </button>

          </div>
        </div>
      </div>


    </div>
  );
  const MegaMenuArchitectureContent = () => (
    <div className='bg-white shadow-2xl rounded-lg  flex absolute w-full p-4  h-fit text-black'
      onMouseLeave={handleMouseLeave} style={{ marginTop: '96px' }}>
      <div className='flex '>
        <div className=''>
          <div className=''>
            <h1 className='text-4xl font-bold'>Architecture Advice</h1>
            <p className='text-black'>Architecture tips, tricks, ideas and advice from experts</p>
            <button className='bg-green-500 text-white text-sm py-2 px-3 rounded-full mt-6'>explore Now</button>
          </div>
        </div>
        <div className='flex'>
          <div className=''>
            <ul className=''>
              {/* { Starting, this is the sub-category} */}
              <div className='flex gap-2'>
                <Image src="/images/consultancy/short_image/Consultancy - in delhi - gurgaon - noida - faridabad.jpeg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('consultant')}>Consultancy</h3>
                  <p className='text-xs text-black'>Connect with the top end to end interior Brand</p>
                </div>
              </div>


              <div className='flex gap-2 mt-2'>
                <Image src="/images/consultancy/short_image/Beautiful - Design- project - in - delhi - gurgaon- noida.jpeg" alt="" width={100} height={50} style={{ width: '80px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('design')}>Designing & Planning</h3>
                  <p className='text-xs text-black'>Connect with the top end to end interior Brand</p>
                </div>
              </div>


              <div className='flex gap-2 mt-2'>
                <Image src="/images/consultancy/short_image/complete-turnkey-structures-builders-developers-end-to-end-building-works-in-delhi-gurgaon-noida-india (6).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('project')}>End to End Structural Projects</h3>
                  <p className='text-xs mt-4'>Connect with the top end to end interior Brand</p>
                </div>
              </div>
            </ul>
          </div>


          <div className='ml-2'>

            <div className='flex gap-2 '>
              <Image src="/images/consultancy/short_image/affordable-luxury-residences-flats-apartments-interior-designs-in-delhi-gurgaon-noida-india (5).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

              <div>
                <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('luxury')}>Luxury Residences</h3>
                <p className='text-xs'>Connect with the top end to end interior Brand</p>
              </div>

            </div>


            <div className='flex gap-2 mt-1'>
              <Image src="/images/consultancy/short_image/villa-renovation-services-in-delhi-gurgaon-india-noida (1).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

              <div>
                <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('renovation')}>Renovations</h3>
                <p className='text-xs'>Connect with the top end to end interior Brand</p>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <Image
            src={hoveredItem ? getImageForItem(hoveredItem) : '/images/top4.jpeg'}
            alt=''
            className='shadow-sm rounded-full border-2'
            width={550}
            height={250}
            style={{ width: '550px', height: '250px' }}
            layout="fixed"
          />
          {/* <button className='mt-4 bg-green-400 p-3 ml-8 rounded-full text-white font-bold'>Book an Architectural Consultancy </button> */}

        </div>
      </div>


    </div>

  );
  const MegaMenuModularKitchenContent = () => (
    <div className='bg-white shadow-2xl rounded-lg p-4  flex absolute w-full h-fit text-black'
      onMouseLeave={handleMouseLeave} style={{ marginTop: '96px' }}>
      <div className='flex '>
        <div className=''>
          <div className=''>
            <h1 className='text-4xl font-bold'>Modular Kitchen Advice</h1>
            <p className='text-black'>Modular Kitchen tips, tricks, ideas and advice from experts</p>
            <button className='bg-green-500 text-white text-sm py-2 px-3 rounded-full mt-6'>explore Now</button>
          </div>
        </div>
        <div className='flex'>
          <div className=''>
            <ul className=''>
              {/* { Starting, this is the sub-category} */}
              <div className='flex gap-2'>
                <Image src="/images/modular_kitchen/short/best-modular-kitchen-wardrobes-designs-small-kitchen-designs-wardrobe-designs-in-delhi-gurgaon-noida-india (5).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('type')}>Types of Modular Kitchen</h3>
                  <p className='text-xs text-black'>Connect with the top end to end interior Brand</p>
                </div>
              </div>


              <div className='flex gap-2 mt-2'>
                <Image src="/images/modular_kitchen/short/modular-kitchen-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india (1).png" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('modular')}>Modular Kitchen Designs</h3>
                  <p className='text-xs text-black'>Connect with the top end to end interior Brand</p>
                </div>
              </div>


              <div className='flex gap-2 mt-2'>
                <Image src="/images/modular_kitchen/short/modular-kitchen-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india (7).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('luxury_modular')}>Luxury Modular Kitchen</h3>
                  <p className='text-xs mt-4'>Connect with the top end to end interior Brand</p>
                </div>
              </div>
            </ul>
          </div>


          <div className='ml-2'>

            <div className='flex gap-2 mt-2'>
              <Image src="/images/modular_kitchen/short/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (5).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

              <div>
                <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('kitchen_renovation')}>Kitchen Renovation</h3>
                <p className='text-xs'>Connect with the top end to end interior Brand</p>
              </div>

            </div>


            <div className='flex gap-2 mt-1'>
              <Image src="/images/modular_kitchen/short/top-modular-kitchen-and-wardrobe-brand-in-delhi-gurgaon-noida-india (7).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

              <div>
                <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('renovationss')}>Renovations</h3>
                <p className='text-xs'>Connect with the top end to end interior Brand</p>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <Image
            src={hoveredItem ? getImageForItem(hoveredItem) : '/images/top4.jpeg'}
            alt=''
            className='shadow-sm rounded-full border-2'
            width={550}
            height={250}
            style={{ width: '550px', height: '250px' }}
            layout="fixed"
          />
          {/* <button className='mt-4 bg-green-400 p-3 ml-8 rounded-full text-white font-bold'>Book an Architectural Consultancy </button> */}

        </div>
      </div>


    </div>

  );
  const MegaMenuWardrobesContent = () => (

    <div className='bg-white shadow-2xl rounded-lg  flex absolute w-full p-4 h-fit text-black'
      onMouseLeave={handleMouseLeave} style={{ marginTop: '96px' }}>
      <div className='flex '>
        <div className=''>
          <div className=''>
            <h1 className='text-4xl font-bold'>Wardrobes Advice</h1>
            <p className='text-black'>Wardrobes tips, tricks, ideas and advice from experts</p>
            <button className='bg-green-500 text-white text-sm py-2 px-3 rounded-full mt-6'>explore Now</button>
          </div>
        </div>
        <div className='flex'>
          <div className=''>
            <ul className=''>
              {/* { Starting, this is the sub-category} */}
              <div className='flex gap-2 '>
                <Image src="/images/wardrobe/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (1).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('types_wardrobe')}>Types of Wardrobes</h3>
                  <p className='text-xs text-black'>Connect with the top end to end interior Brand</p>
                </div>
              </div>


              <div className='flex gap-2 mt-2'>
                <Image src="/images/wardrobe/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (2).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('luxury_wardrobe')}>Luxury Wardrobes</h3>
                  <p className='text-xs text-black'>Connect with the top end to end interior Brand</p>
                </div>
              </div>


              <div className='flex gap-2 mt-2'>
                <Image src="/images/wardrobe/largest-collection-of-modular-kitchens-wardrobes-designs-in-delhi-gurgaon-noida-india (5).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black absolute' onMouseOver={() => handleMouseOverImage('wardrobe_design')}>Wardrobe Designs</h3>
                  <p className='text-xs mt-4'>Connect with the top end to end interior Brand</p>
                </div>
              </div>
            </ul>
          </div>


          <div className='ml-2'>

            <div className='flex gap-2 '>
              <Image src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (2).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

              <div>
                <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('glass_wardrobe')}>Lacquer Glass Wardrobe Designs</h3>
                <p className='text-xs'>Connect with the top end to end interior Brand</p>
              </div>

            </div>


            <div className='flex gap-2 mt-1'>
              <Image src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (6).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

              <div>
                <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('wardrobe_renovation')}>Wardrobe Renovation Services</h3>
                <p className='text-xs'>Connect with the top end to end interior Brand</p>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <Image
            src={hoveredItem ? getImageForItem(hoveredItem) : '/images/top4.jpeg'}
            alt=''
            className='shadow-sm rounded-full border-2'
            width={550}
            height={250}
            style={{ width: '550px', height: '250px' }}
            layout="fixed"
          />
          {/* <button className='mt-4 bg-green-400 p-3 ml-8 rounded-full text-white font-bold'>Book an Architectural Consultancy </button> */}

        </div>
      </div>


    </div>
  );
  const MegaMenuLivingContent = () => (
    <div className='bg-white shadow-2xl rounded-lg  flex absolute w-full p-4  h-fit text-black'
      onMouseLeave={handleMouseLeave} style={{ marginTop: '96px' }}>
      <div className='flex '>
        <div className=''>
          <div className=''>
            <h1 className='text-4xl font-bold'>Living Décor Advice</h1>
            <p className='text-black'>Living décor tips, tricks, ideas and advice from experts</p>
            <button className='bg-green-500 text-white text-sm py-2 px-3 rounded-full mt-6'>explore Now</button>
          </div>
        </div>
        <div className='flex'>
          <div className=''>
            <ul className=''>
              {/* { Starting, this is the sub-category} */}
              <div className='flex gap-2'>
                <Image src="/images/living/beautiful-design-tv-unit-in-delhi-gurgaon-noida.jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('tv_units')}>TV Units</h3>
                  <p className='text-xs text-black'>Connect with the top end to end interior Brand</p>
                </div>
              </div>


              <div className='flex gap-2 mt-2'>
                <Image src="/images/living/best-designing-services-crockery-unit-in-gurgaon-delhi-noida-faridabad.jpeg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('crockery_unit')}>Crockery Units</h3>
                  <p className='text-xs text-black'>Connect with the top end to end interior Brand</p>
                </div>
              </div>


              <div className='flex gap-2 mt-2'>
                <Image src="/images/living/best-residential-office-designs-in-budget-interiors-in-delhi-gurgaon-noida-india (1).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black absolute' onMouseOver={() => handleMouseOverImage('home_office')}>Home Office</h3>
                  <p className='text-xs mt-4'>Connect with the top end to end interior Brand</p>
                </div>
              </div>

              <div className='flex gap-2 mt-2'>
                <Image src="/images/living/beautiful-design-shoe-racks-in-delhi-gurgaon-noida-faridabad.jpeg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black absolute' onMouseOver={() => handleMouseOverImage('shoes_rack')}>Shoes Rocks</h3>
                  <p className='text-xs mt-4'>Connect with the top end to end interior Brand</p>
                </div>
              </div>
            </ul>
          </div>


          <div className='ml-2'>

            <div className='flex gap-2 '>
              <Image src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (2).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

              <div>
                <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('glass_partition')}>Glass Partition</h3>
                <p className='text-xs'>Connect with the top end to end interior Brand</p>
              </div>

            </div>


            <div className='flex gap-2 mt-2'>
              <Image src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (6).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

              <div>
                <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('dressing')}>Dressings</h3>
                <p className='text-xs'>Connect with the top end to end interior Brand</p>
              </div>
            </div>
            <div className='flex gap-2 mt-1'>
              <Image src="/images/living/best-interior-designing-company-in-delhi-gurgaon-noida-india-Design-Indian-Homes (6).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
              <div>
                <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('living_renovation')}>Renovation Services</h3>
                <p className='text-xs'>Connect with the top end to end interior Brand</p>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <Image
            src={hoveredItem ? getImageForItem(hoveredItem) : '/images/top4.jpeg'}
            alt=''
            className='shadow-sm rounded-full border-2'
            width={550}
            height={250}
            style={{ width: '550px', height: '250px' }}
            layout="fixed"
          />
          {/* <button className='mt-4 bg-green-400 p-3 ml-8 rounded-full text-white font-bold'>Book an Architectural Consultancy </button> */}

        </div>
      </div>


    </div>
  );
  const MegaMenuModularInteriorContent = () => (
    <div className='bg-white shadow-2xl rounded-lg  flex absolute w-full p-4 h-fit text-black'
      onMouseLeave={handleMouseLeave} style={{ marginTop: '96px' }}>
      <div className='flex '>
        <div className=''>
          <div className=''>
            <h1 className="text-4xl font-bold">Modular Interior Advice</h1>
            <p className='text-black'>Modular Interior tips, tricks, ideas and advice from experts</p>
            <button className='bg-green-500 text-sm py-2 px-3 rounded-full text-white mt-6'>explore Now</button>
          </div>
        </div>
        <div className='flex'>
          <div className=''>
            <ul className=''>
              {/* { Starting, this is the sub-category} */}
              <div className='flex gap-2'>
                <Image src="/images/living/beautiful-design-tv-unit-in-delhi-gurgaon-noida.jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('mandir_interior')}>Mandir</h3>
                  <p className='text-xs text-black'>Connect with the top end to end interior Brand</p>
                </div>
              </div>


              <div className='flex gap-2 mt-2'>
                <Image src="/images/living/best-designing-services-crockery-unit-in-gurgaon-delhi-noida-faridabad.jpeg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('chest_drawer')}>Chest of Drawers</h3>
                  <p className='text-xs text-black'>Connect with the top end to end interior Brand</p>
                </div>
              </div>


              <div className='flex gap-2 mt-2'>
                <Image src="/images/living/best-residential-office-designs-in-budget-interiors-in-delhi-gurgaon-noida-india (1).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black absolute' onMouseOver={() => handleMouseOverImage('bar_unit')}>Bar Units</h3>
                  <p className='text-xs mt-4'>Connect with the top end to end interior Brand</p>
                </div>
              </div>

              <div className='flex gap-2 mt-2'>
                <Image src="/images/living/beautiful-design-shoe-racks-in-delhi-gurgaon-noida-faridabad.jpeg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                <div>
                  <h3 className='text-sm text-white bg-black absolute' onMouseOver={() => handleMouseOverImage('side_table')}>Side Tables</h3>
                  <p className='text-xs mt-4'>Connect with the top end to end interior Brand</p>
                </div>
              </div>
            </ul>
          </div>


          <div className='ml-2'>

            <div className='flex gap-2 '>
              <Image src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (2).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

              <div>
                <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('foldable_bed')}>Foldable Beds</h3>
                <p className='text-xs'>Connect with the top end to end interior Brand</p>
              </div>

            </div>


            <div className='flex gap-2 mt-2'>
              <Image src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (6).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

              <div>
                <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('foyer_cabinet')}>Foyer Cabinets</h3>
                <p className='text-xs'>Connect with the top end to end interior Brand</p>
              </div>
            </div>
            <div className='flex gap-2 mt-2'>
              <Image src="/images/living/best-interior-designing-company-in-delhi-gurgaon-noida-india-Design-Indian-Homes (6).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
              <div>
                <h3 className='text-sm text-white bg-black' onMouseOver={() => handleMouseOverImage('bathroom_vatities')}>Bathroom Vanities</h3>
                <p className='text-xs'>Connect with the top end to end interior Brand</p>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <Image
            src={hoveredItem ? getImageForItem(hoveredItem) : '/images/top4.jpeg'}
            alt=''
            className='shadow-sm rounded-full border-2'
            width={550}
            height={250}
            style={{ width: '550px', height: '250px' }}
            layout="fixed"
          />
          {/* <button className='mt-4 bg-green-400 p-3 ml-8 rounded-full text-white font-bold'>Book an Architectural Consultancy </button> */}

        </div>
      </div>


    </div>
  );
  const MegaMenuMore = () => (
    <div className='bg-white shadow-2xl rounded-lg flex absolute w-full p-4 justify-center h-fit text-black' onMouseLeave={handleMouseLeave} style={{ marginTop: '96px' }}>
      <div className='flex'>
        <div class >
          <ul className='text-sm 	font-bold pr-12'>
            <h3 className='text-lg'><Link  href=" designindianhomes.com/home-renovation-services-in-delhi-gurgaon-noida-india">Renovation</Link></h3>  
            <h3 className='text-lg'>Book a Virtual Meeting</h3>
            <h3 className='text-lg'> About Us</h3>
            <h3 className='text-lg'>The Team</h3>
            <h3 className='text-lg'>Collaborate with Us</h3>

          </ul>
          <button className='bg-green-800 text-sm py-2 px-3 rounded-full text-white font-bold mt-6'>Get Quotes</button>

        </div>
        <div class >
          <ul className='text-sm font-bold'>
            <h3 className='text-lg'>Reviews</h3>
            <h3 className='text-lg'> Request Catlog</h3>
            <h3 className='text-lg'>Why Choose Us</h3>
            <h3 className='text-lg'>Join As a Designer</h3>
            <h3 className='text-lg'>Book a Design Visit</h3>
          </ul>

          <button className=' bg-green-800 text-sm py-2 px-3 rounded-full text-white font-bold mt-6'>Refer for Rewards</button>

        </div>
        <div className='ml-48'>
          <Image src="/design-Indian-home-about-us.jpg" alt="" className='shadow-sm rounded-full border-2 max-w-42 ' width={550}
            height={250}
            style={{ width: '350px', height: '250' }}
            layout='fixed' />

        </div>
      </div>


    </div>
  );


  useEffect(() => {
    const handleDocumentClick = (e) => {
      console.log('Document Clicked');
      console.log('megaMenuRef:', megaMenuRef.current);

      // Check if the click is outside the mega menu
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target)) {
        closeMegaMenu();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleMouseOver = (category) => {
    setActiveCategory(category);
    setMegaMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
    setMegaMenuVisible(false);
  };




  const [scrollDirection, setScrollDirection] = useState('up');
  const [springPropsLeftLogo, setSpringPropsLeftLogo] = useSpring(() => ({
    translateY: 0,
    translateX: 0,
    opacity: 1,
    scale: 1,
  }));
  const [springPropsCenterLogo, setSpringPropsCenterLogo] = useSpring(() => ({
    translateY: 0,
    translateX: 0,
    opacity: 1,
    scale: 1,

  }));


  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setSpringPropsLeftLogo({
      translateY: scrollDirection === 'up' ? -100 : 0,
      translateX: scrollDirection === 'down' ? 0 : -100,
      opacity: scrollDirection === 'up' ? 0 : 1,
      scale: scrollDirection === 'up' ? 0.5 : 1,
    });
    setSpringPropsCenterLogo({
      translateY: scrollDirection === 'down' ? 100 : 0,
      translateX: scrollDirection === 'down' ? 0 : -100,
      opacity: scrollDirection === 'down' ? 0 : 1,
      scale: scrollDirection === 'down' ? 0.5 : 1,

    });
  }, [scrollDirection, setSpringPropsLeftLogo, setSpringPropsCenterLogo]);

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);


  const toggleSection = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };
  const toggleMobileMenu = () => {


    setMobileMenuVisible((prevState) => !prevState);
  };

  useEffect(() => {
    const body = document.body;

    if (mobileMenuVisible) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }

    // Cleanup the style when the component unmounts or the menu is closed
    return () => {
      body.style.overflow = 'auto';
    };
  }, [mobileMenuVisible]);
  return (
    <div className={`bg-white  ${scrollDirection === 'down'}`}>
      <div className="hidden lg:flex">

        {/* Desktop Header */}
        <div
          className={`bg-white py-0 drop-shadow-lg mb-px w-full z-50 transition-transform ease-in-out duration-300 ${scrollDirection === 'down' ? '-translate-y-10' : 'translate-y-0'
            }`}
          style={{
            position: 'fixed',
            top: 30,
            marginTop: 0,
          }}
        >
          {activeCategory && (
            <div ref={megaMenuRef}
              className='group-hover:flex'>
              {activeCategory === 'DesignIdeas' && <MegaMenuDesignIdeasContent />}
              {activeCategory === 'Interiors' && <MegaMenuInteriorsContent />}
              {activeCategory === 'Architectural' && <MegaMenuArchitectureContent />}
              {activeCategory === 'Modular Kitchen' && <MegaMenuModularKitchenContent />}
              {activeCategory === 'Wardrobes' && <MegaMenuWardrobesContent />}
              {activeCategory === 'Living' && <MegaMenuLivingContent />}
              {activeCategory === 'Modular Interiors' && <MegaMenuModularInteriorContent />}
              {activeCategory === 'More' && <MegaMenuMore />}
            </div>
          )}



          <div className="animated-bg text-black absolute sticky top-0 ">
            <div className="flex justify-center gap-80 ">
              <div className="flex ml-0 gap-1">
                <FontAwesomeIcon icon={faPhone} className="text-xs text-black mt-2" />
                <h1 className="text-xs text-black font-bold mt-2">Call Us</h1>
              </div>
              <div className="flex gap-4 md:text-xs text-black mt-2">
                <p>Book a Visit</p>
                <p>| Refer a Rewards</p>
                <p>| Architects & Interior Designs</p>
              </div>
              <div className='flex gap-1 py-1'>
                <SocialIcon
                  network="twitter"
                  url="www.vimeo.com"
                  style={{ width: '1.5rem', height: '1.5rem', }}
                />
                <SocialIcon
                  network="facebook"
                  url="www.vimeo.com"
                  style={{ width: '1.5rem', height: '1.5rem' }}
                />
                <SocialIcon
                  network="instagram"
                  url="www.vimeo.com"
                  style={{ width: '1.5rem', height: '1.5rem' }}
                />
                <SocialIcon
                  network="linkedin"
                  url="www.vimeo.com"
                  style={{ width: '1.5rem', height: '1.5rem' }}
                />
                <ThemeSwitcher />
              </div>
            </div>
          </div>

          <div
            className="w-full"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <animated.img
              srcSet="/images/left.gif"
              alt="Left Logo"
              className="hidden md:flex h-12 w-12 mr-2"
              style={{
                transform: springPropsLeftLogo.translateX.to((x) => `translateX(${x}%)`),
                opacity: springPropsLeftLogo.opacity,
                transition: 'transform 0.1s ease-in-out, opacity 0.1s ease-in-out',

                marginTop: '10px'
              }}
            />


            {/* Main Header Navigation scroll up header */}
            <div className="sm:px-0 md:px-0 lg:px-1 xl:px-0 ">
              <nav className="flex flex-wrap md:flex-nowrap justify-center items-center mt-8 text-black font-bold space-x-4 sm:space-x-5" style={{ justifyContent: 'center' }}>
                <p className="text-sm font-bold" onMouseOver={() => handleMouseOver('DesignIdeas')}>
                  <FontAwesomeIcon icon={faLightbulb} className="mr-1" />
                  Design Ideas
                </p>

                <p className="text-sm font-bold" onMouseOver={() => handleMouseOver('Interiors')}>
                  <FontAwesomeIcon icon={faHome} className="mr-1 text-xs" />
                  Interiors
                </p>

                <p className="text-sm font-bold" onMouseOver={() => handleMouseOver('Architectural')}>
                  <FontAwesomeIcon icon={faBuilding} className="mr-1 text-xs" />
                  Architectural
                </p>

                <p className="text-sm font-bold" onMouseOver={() => handleMouseOver('Modular Kitchen')}>
                  <FontAwesomeIcon icon={faUtensils} className="mr-1 text-xs" />
                  Modular Kitchen
                </p>

                <animated.img
                  srcSet="/images/Logo.gif"
                  alt="Center Logo"
                  className="top-2/4 transform -translate-y-2/4 scale-150"
                  style={{
                    transform: springPropsCenterLogo.translateY.to(
                      y => `translateY(${y}%) scale(${springPropsCenterLogo.scale})`
                    ),
                    opacity: springPropsCenterLogo.opacity,
                    display: springPropsCenterLogo.opacity.to(
                      opacity => (opacity === 0 ? 'none' : 'block')
                    ),
                    transition: 'transform 0.1s ease-in-out, opacity 0.1s ease-in-out',
                    width: '60px',
                    height: '30px',
                  }}
                />

                <p className="text-sm font-bold" onMouseOver={() => handleMouseOver('Wardrobes')}>
                  <FontAwesomeIcon icon={faCouch} className="mr-1 text-xs" />
                  Wardrobes
                </p>

                <p className="text-sm font-bold" onMouseOver={() => handleMouseOver('Living')}>
                  <FontAwesomeIcon icon={faWrench} className="mr-1 text-xs" />
                  Living
                </p>

                <p className="text-sm font-bold" onMouseOver={() => handleMouseOver('Modular Interiors')}>
                  <FontAwesomeIcon icon={faCouch} className="mr-1 text-xs" />
                  Modular Interiors
                </p>

                <div>
                  <p className="text-sm font-bold" onMouseOver={() => handleMouseOver('More')}>
                    <FontAwesomeIcon icon={faChevronDown} className="mr-1 text-xs" />
                    More
                  </p>
                </div>

                <button className="bg-yellow-400 text-sm py-2 px-2 rounded-full -mt-4 center mb-1">Get Quotes</button>
                <button className='-mt-4 text-sm py-2 px-4 mb-1' style={{ alignItems: 'center', borderRadius: '50px', border: '1px solid black' }}><Link href="designindianhomes.com/contact-top-interior-designers-architects-in-delhi-gurgaon-noida-india">Contact</Link></button>

              </nav>
            </div>
          </div>
        </div>
      </div>


      {/* {bottom menu} */}

      <div className="relative lg:hidden">
        {/* Your existing content */}

        <div className="fixed bottom-16 right-4 flex flex-col items-center mb-4" style={{ zIndex: '800' }}>
          <div className="bg-green-600 rounded-full p-4 mb-4">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-white" />
          </div>
          <div className="bg-purple-600 rounded-full p-4">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white" />
          </div>
        </div>
        {/* Bottom Navigation Bar */}
        <div className='fixed bottom-0 left-0 w-full' style={{ zIndex: '800' }}>
          <div className={`bg-white bg-gradient-to-t from-green-400 text-black w-full h-16 flex items-center justify-around`}>
            <button className="flex flex-col items-center text-sm font-bold">
              <FontAwesomeIcon icon={faHome} size="2x" />
              Home
            </button>
            <button className="flex flex-col items-center text-sm font-bold">
              <FontAwesomeIcon icon={faPalette} size="2x" />
              Design
            </button>
            <button className="flex flex-col items-center text-sm font-bold relative">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-yellow-500 rounded-full p-2" style={{ marginBottom: '50px' }}>
                  <FontAwesomeIcon icon={faPencil} size="3x" />
                </div>
              </div>
              <span className="mt-7">Let&apos;s Design</span>
            </button>
            <button className="flex flex-col items-center text-sm font-bold">
              <FontAwesomeIcon icon={faNewspaper} size="2x" />
              Magazine
            </button>
            <button className="flex flex-col items-center text-sm font-bold"
              onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faEllipsisH} size="2x" />
              More

            </button>
          </div>
        </div>
      </div>

      {/* {mobiler logo} */}


      <div className='lg:hidden flex justify-between items-center px-0 py-0 bg-white drop-shadow-lg mt-8 fixed top-0 w-full' style={{ zIndex: '200' }}>
        <div>
          <Image src="/images/Logo.gif" alt='left logo' width={90} height={80} style={{ width: '120px', height: 'auto', marginLeft: '10px', padding: '1px', marginTop: '10px' }} />
        </div>
        <div >
          <button className='bg-black text-white py-5 px-6 m-0 '> Get Estimate</button>
        </div>


      </div>
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-6 z-40 relative">



        {mobileMenuVisible && (
          <div className='' style={{ zIndex: '5600' }}>
            <div

              style={{ zIndex: '1200' }}
            >


              <animated.div
                className="bg-white bg-gradient-to-t from-green-400 text-black fixed top-16 left-0 w-full h-full overflow-y-scroll ${mobileMenuVisible ? 'block' : "
                style={{

                  transition: 'opacity 0.3s ease-in-out',
                  marginTop: '35px',
                }}
              >


                <div className="flex justify-end p-4">
                  <div className='flex' style={{ marginLeft: '-40px' }}>
                    <span className=''>dark mode</span>

                    <ThemeSwitcher />
                  </div>

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
                <div className="flex flex-col gap-4 z-40">
                  <div className="flex gap-3">

                  </div>
                  <AccordionSection
                    title="Design Ideas"
                    isActive={activeSection === 'designIdeas'}
                    onClick={() => toggleSection('designIdeas')}
                  >
                    <div className=''>
                      <div className='bg-white shadow-2xl rounded-lg p-4 justify-center  w-full  h-fit text-black'
                        onMouseLeave={handleMouseLeave}>
                        <div >
                          <ul className='text-xs'>
                            <h3 className='text-3xl'>Modular Interior Designs</h3>
                            <div className='text-base'>
                              <li>Modular Kitchens</li>
                              <li>Wardrobes</li>
                              <li>Vanities </li>
                              <li>Dressers</li>
                              <li>TV Units</li>
                              <li>Crockery Units</li>
                              <li>Glass Partitions</li>
                            </div>


                          </ul>
                        </div>


                        <div>
                          <ul className='text-sm'>
                            <h3 className='text-3xl'>Interior Design Solutions</h3>

                            <div className='text-base text-black'>
                              <li>1BHK residence interior designs</li>
                              <li>2BHK Residence interior designs</li>
                              <li>3BHK Residence interior designs</li>
                              <li>4BHK Residence interior designs</li>
                              <li>Villa interior designs</li>
                              <li>Farmhouse interior designs</li>
                              <li>Penthouse interior designs</li>
                              <li>studio apartment interior designs</li>
                              <li>Bunglow interior designs</li>
                              <li>Duplex Residence interior designs</li>
                              <li>Cottage interior designs</li>
                            </div>

                          </ul>
                        </div>


                        <div>
                          <ul className='text-xs'>
                            <h3 className='text-3xl'>Interior Design Ideas</h3>

                            <div className='text-base text-black'>
                              <li>Wooden Polishing</li>
                              <li>Wooden Flooring</li>
                              <li>Vertical Gardens</li>
                              <li>UPVC Windows</li>
                              <li>Tiling Designs</li>
                              <li>Sofa Designs</li>
                              <li>Kitchen Lightening</li>
                              <li>Plumbings</li>
                              <li>Glass Partitions</li>
                              <li>ceilings</li>
                              <li> Wall Panelling</li>
                              <li>Exterior Cladding</li>
                              <li>Doors</li>
                              <li>Electric Works</li>
                              <li>Beds</li>
                              <li>Paints</li>
                              <li>End to End Interiors</li>
                              <li>Commercial Interiors</li>
                            </div>



                          </ul>
                        </div>


                        <div>
                          <ul className='text-xs'>
                            <h3 className='text-3xl'>Architectural Designs </h3>
                            <div className='text-base text-black'>
                              <li>Architectural Consultancy</li>
                              <li>End to End Architectural Services</li>
                              <li>Architectural Designing and Planning</li>
                              <li>Commercial Architectural Services</li>
                            </div>


                          </ul>
                        </div>

                        <div>
                          <ul className='text-xs'>
                            <h3 className='text-3xl'>Home Renovation Services</h3>
                            <div className='text-base text-black'>
                              <li>Structural Renovation</li>
                              <li>Interior Renovation</li>
                              <li>Bedroom Renovation</li>
                              <li>Lounge Renovation</li>
                              <li>Bathroom Renovation</li>
                              <li>Terrace Renovation</li>
                              <li>Living room Renovation</li>
                              <li>Modular kitchen Renovation</li>
                              <li>Wardrobe Renovation</li>
                              <li>Living Room Renovation</li>
                              <li>Mandir Renovation</li>
                              <li>GYM & Spas Renovation</li>
                              <li>Hotel Renovation</li>
                              <li>Farmhouse Renovation</li>
                              <li>Banquet Renovation</li>
                              <li>Villa Renovation</li>
                            </div>

                          </ul>
                        </div>

                      </div>


                    </div>

                  </AccordionSection>

                  <AccordionSection
                    title='Interiors'
                    isActive={activeSection === 'Interiors'}
                    onClick={() => toggleSection('Interiors')}
                  >
                    <div className='bg-white shadow-2xl rounded-lg  w-full  h-fit text-black'

                      onMouseLeave={handleMouseLeave}>
                      <div>
                        <div className='p-2' >
                          <ul className='text-sm'>
                            <h3 className='text-3xl text-black'>Types of Interior Design Ideas</h3>

                            <div className='text-base text-black'>


                              <li

                                onMouseOver={() => handleMouseOverImage('1bhk')}
                                onMouseLeave={handleMouseLeaveImage}
                              >
                                1bhk residence interior designs
                              </li>
                              <li onMouseOver={() => handleMouseOverImage('2bhk')} onMouseLeave={handleMouseLeaveImage}>2bhk residence interior designs</li>
                              <li onMouseOver={() => handleMouseOverImage('3bhk')} onMouseLeave={handleMouseLeaveImage}>3bhk residence interior designs </li>
                              <li onMouseOver={() => handleMouseOverImage('4bhk')} onMouseLeave={handleMouseLeaveImage}>4bhk residence interior designs</li>
                              <li onMouseOver={() => handleMouseOverImage('villa')} onMouseLeave={handleMouseLeaveImage}>Villa interior designs</li>
                              <li onMouseOver={() => handleMouseOverImage('farmhouse')} onMouseLeave={handleMouseLeaveImage}>farmhouse interior designs</li>
                              <li onMouseOver={() => handleMouseOverImage('pent')} onMouseLeave={handleMouseLeaveImage}>Penthouse interior designs</li>
                              <li onMouseOver={() => handleMouseOverImage('office')} onMouseLeave={handleMouseLeaveImage}>Studio apartment interior designs</li>
                              <li onMouseOver={() => handleMouseOverImage('bunglow')} onMouseLeave={handleMouseLeaveImage}>Bungalow interior designs</li>
                              <li onMouseOver={() => handleMouseOverImage('duplex')} onMouseLeave={handleMouseLeaveImage}>Duplex Residence interior Designs</li>
                              <li onMouseOver={() => handleMouseOverImage('cottage')} onMouseLeave={handleMouseLeaveImage}>Cottage Interior Designs</li>
                            </div>
                          </ul>
                        </div>


                        <div>
                          <ul className='text-sm'>
                            <h3 className='text-3xl text-black'>Renovation Services</h3>

                            <div className='text-base text-black'>


                              <li onMouseOver={() => handleMouseOverImage('')}>Structural Renovation</li>
                              <li onMouseOver={() => handleMouseOverImage('interiorRenovation')}>Interior Renovation</li>
                              <li onMouseOver={() => handleMouseOverImage('bedroom')}>Bedroom Renovation</li>
                              <li onMouseOver={() => handleMouseOverImage('loungRenovation')}>Lounge Renovation</li>
                              <li onMouseOver={() => handleMouseOverImage('bathroom')}>Bathroom Renovation</li>
                              <li onMouseOver={() => handleMouseOverImage('terrace')}>Terrace Renovation</li>
                              <li onMouseOver={() => handleMouseOverImage('livingroom')}>Living room Renovation</li>
                              <li onMouseOver={() => handleMouseOverImage('modularKitchen')}>Modular kitchen Renovation</li>
                              <li onMouseOver={() => handleMouseOverImage('wardrobeRenovation')}>Wardrobe Renovation</li>

                              <li onMouseOver={() => handleMouseOverImage('mandir')}>Mandir Renovation</li>
                              <li onMouseOver={() => handleMouseOverImage('gym')}>GYM & Spas Renovation</li>
                              <li onMouseOver={() => handleMouseOverImage('hotel')}>Hotel Renovation</li>
                              <li onMouseOver={() => handleMouseOverImage('farmhouseRenovation')}>Farmhouse Renovation</li>
                              <li onMouseOver={() => handleMouseOverImage('banquet')}>Banquet Renovation</li>
                              <li onMouseOver={() => handleMouseOverImage('villaRenovation')}>Villa Renovation</li>
                            </div>
                          </ul>
                        </div>
                        <div className=' mt-12 center'>



                          {/* <button className='mt-4 bg-green-700 p-3 ml-28 rounded-full text-white font-bold text-sm'>Book an End To End Interior Consultancy </button> */}
                        </div>
                      </div>

                      <Image
                        src={hoveredItem ? getImageForItem(hoveredItem) : '/images/top4.jpeg'}
                        alt=''
                        className='shadow-sm rounded-full border-2'
                        width={550}
                        height={250} // Set your desired width and height
                        style={{ width: '550px', height: '250px' }}
                      />
                    </div>
                  </AccordionSection>

                  <AccordionSection
                    title='Architectural'
                    isActive={activeSection === 'Architectural'}
                    onClick={() => toggleSection('Architectural')}
                  >

                    <div className='bg-white shadow-2xl rounded-lg  p-4 w-full   h-fit text-black'
                      onMouseLeave={handleMouseLeave}>
                      <div className=''>

                        <div className=''>
                          <h1 className='font-bold'>Architectural Décor Advice</h1>
                          <p className='text-black text-sm'>Architectural tips, tricks, ideas and advice from experts</p>
                          {/* <button className='bg-green-500 text-white text-sm py-2 px-3 rounded-full'>explore Now</button> */}
                        </div>

                        <div className=''>
                          <div className=''>
                            <ul className=''>
                              {/* { Starting, this is the sub-category} */}
                              <div className='flex gap-2'>
                                <Image src="/images/consultancy/short_image/Consultancy - in delhi - gurgaon - noida - faridabad.jpeg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black p-1 absolute' onMouseOver={() => handleMouseOverImage('consultant')}>Consultancy</h3>
                                  <p className='text-xs text-black mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>


                              <div className='flex gap-2 mt-2'>
                                <Image src="/images/consultancy/short_image/Beautiful - Design- project - in - delhi - gurgaon- noida.jpeg" alt="" width={100} height={50} style={{ width: '80px', height: '50px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black p-1 absolute' onMouseOver={() => handleMouseOverImage('design')}>Designing & Planning</h3>
                                  <p className='text-xs text-black mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>


                              <div className='flex gap-2 mt-2 '>
                                <Image src="/images/consultancy/short_image/complete-turnkey-structures-builders-developers-end-to-end-building-works-in-delhi-gurgaon-noida-india (6).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black p-1 absolute' onMouseOver={() => handleMouseOverImage('project')}>End to End Structural Projects</h3>
                                  <p className='text-xs mt-4 mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>
                            </ul>
                          </div>


                          <div className='mt-2'>

                            <div className='flex gap-2 '>
                              <Image src="/images/consultancy/short_image/affordable-luxury-residences-flats-apartments-interior-designs-in-delhi-gurgaon-noida-india (5).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

                              <div>
                                <h3 className='text-sm text-white bg-black p-1 absolute' onMouseOver={() => handleMouseOverImage('luxury')}>Luxury Residences</h3>
                                <p className='text-xs mt-8'>Connect with the top end to end interior Brand</p>
                              </div>

                            </div>


                            <div className='flex gap-2 mt-2'>
                              <Image src="/images/consultancy/short_image/villa-renovation-services-in-delhi-gurgaon-india-noida (1).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

                              <div>
                                <h3 className='text-sm text-white bg-black p-1 absolute' onMouseOver={() => handleMouseOverImage('renovation')}>Renovations</h3>
                                <p className='text-xs mt-8'>Connect with the top end to end interior Brand</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=''>
                          <Image
                            src={hoveredItem ? getImageForItem(hoveredItem) : '/images/top4.jpeg'}
                            alt=''
                            className='shadow-sm rounded-full border-2'
                            width={550}
                            height={250}
                          />

                        </div>
                      </div>


                    </div>

                  </AccordionSection>

                  <AccordionSection
                    title='Modular Kitchen'
                    isActive={activeSection === 'Modular Kitchen'}
                    onClick={() => toggleSection('Modular Kitchen')}
                  >
                    <div className='bg-white shadow-2xl rounded-lg  w-full  p-4 h-fit text-black'
                      onMouseLeave={handleMouseLeave}>
                      <div className=' '>
                        <div className=''>
                          <div className=''>
                            <h1 className='font-bold'>Modular Kitchen Décor Advice</h1>
                            <p className='text-black text-xs'>Home décor tips, tricks, ideas and advice from experts</p>
                            {/* <button className='bg-green-500 text-white text-sm py-2 px-3 rounded-full'>explore Now</button> */}
                          </div>
                        </div>
                        <div className=''>
                          <div className=''>
                            <ul className=''>
                              {/* { Starting, this is the sub-category} */}
                              <div className='flex gap-2'>
                                <Image src="/images/modular_kitchen/short/best-modular-kitchen-wardrobes-designs-small-kitchen-designs-wardrobe-designs-in-delhi-gurgaon-noida-india (5).jpg" alt="" width={100} height={50} style={{ width: '130px', height: '60px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black absolute  p-1' onMouseOver={() => handleMouseOverImage('type')}>Types of Modular Kitchen</h3>
                                  <p className='text-xs text-black mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>


                              <div className='flex gap-2 mt-4'>
                                <Image src="/images/modular_kitchen/short/modular-kitchen-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india (1).png" alt="" width={100} height={50} style={{ width: '130px', height: '60px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black absolute  p-1' onMouseOver={() => handleMouseOverImage('modular')}>Modular Kitchen Designs</h3>
                                  <p className='text-xs text-black mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>


                              <div className='flex gap-2 mt-4'>
                                <Image src="/images/modular_kitchen/short/modular-kitchen-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india (7).jpg" alt="" width={100} height={50} style={{ width: '130px', height: '60px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black absolute  p-1' onMouseOver={() => handleMouseOverImage('luxury_modular')}>Luxury Modular Kitchen</h3>
                                  <p className='text-xs mt-4 mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>
                            </ul>
                          </div>


                          <div className='mt-4'>

                            <div className='flex gap-2 '>
                              <Image src="/images/modular_kitchen/short/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (5).jpg" alt="" width={100} height={50} style={{ width: '130px', height: '60px', borderRadius: '4px' }} />

                              <div>
                                <h3 className='text-sm text-white bg-black absolute  p-1' onMouseOver={() => handleMouseOverImage('kitchen_renovation')}>Kitchen Renovation</h3>
                                <p className='text-xs mt-8'>Connect with the top end to end interior Brand</p>
                              </div>

                            </div>


                            <div className='flex gap-2 mt-4'>
                              <Image src="/images/modular_kitchen/short/top-modular-kitchen-and-wardrobe-brand-in-delhi-gurgaon-noida-india (7).jpg" alt="" width={100} height={50} style={{ width: '130px', height: '60px', borderRadius: '4px' }} />

                              <div>
                                <h3 className='text-sm text-white bg-black absolute  p-1' onMouseOver={() => handleMouseOverImage('renovationss')}>Renovations</h3>
                                <p className='text-xs mt-8'>Connect with the top end to end interior Brand</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=''>
                          <Image
                            src={hoveredItem ? getImageForItem(hoveredItem) : '/images/top3.jpeg'}
                            alt=''
                            className='shadow-sm rounded-full border-2'
                            width={550}
                            height={250}
                            style={{ width: '550px', height: '250px' }}
                          />
                          {/* <button className='mt-4 bg-green-400 p-3 ml-8 rounded-full text-white font-bold'>Book an Architectural Consultancy </button> */}

                        </div>
                      </div>


                    </div>
                  </AccordionSection>


                  <AccordionSection
                    title='Wardrobes'
                    isActive={activeSection === 'Wardrobes'}
                    onClick={() => toggleSection('Wardrobes')}
                  >
                    <div className='bg-white shadow-2xl rounded-lg   w-full p-2  h-fit text-black'
                      onMouseLeave={handleMouseLeave}>
                      <div className=''>
                        <div className=''>
                          <div className=''>
                            <h1 className='font-bold'>Wardrobes Décor Advice</h1>
                            <p className='text-black'>Home décor tips, tricks, ideas and advice from experts</p>
                            {/* <button className='bg-green-500 text-white text-sm py-2 px-3 rounded-full'>explore Now</button> */}
                          </div>
                        </div>
                        <div className=''>
                          <div className=''>
                            <ul className=''>
                              {/* { Starting, this is the sub-category} */}
                              <div className='flex gap-2'>
                                <Image src="/images/wardrobe/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (1).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black absolute p-1' onMouseOver={() => handleMouseOverImage('types_wardrobe')}>Types of Wardrobes</h3>
                                  <p className='text-xs text-black mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>


                              <div className='flex gap-2 mt-2'>
                                <Image src="/images/wardrobe/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (2).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black absolute p-1' onMouseOver={() => handleMouseOverImage('luxury_wardrobe')}>Luxury Wardrobes</h3>
                                  <p className='text-xs text-black mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>


                              <div className='flex gap-2 mt-2'>
                                <Image src="/images/wardrobe/largest-collection-of-modular-kitchens-wardrobes-designs-in-delhi-gurgaon-noida-india (5).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black absolute p-1' onMouseOver={() => handleMouseOverImage('wardrobe_design')}>Wardrobe Designs</h3>
                                  <p className='text-xs mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>
                            </ul>
                          </div>


                          <div className=''>

                            <div className='flex gap-2 mt-2'>
                              <Image src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (2).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

                              <div>
                                <h3 className='text-sm text-white bg-black ' onMouseOver={() => handleMouseOverImage('glass_wardrobe')}>Lacquer Glass Wardrobe Designs</h3>
                                <p className='text-xs'>Connect with the top end to end interior Brand</p>
                              </div>

                            </div>


                            <div className='flex gap-2 mt-4'>
                              <Image src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (6).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

                              <div>
                                <h3 className=' text-white text-sm bg-black' onMouseOver={() => handleMouseOverImage('wardrobe_renovation')} >Wardrobe Renovation Services</h3>
                                <p className='text-xs'>Connect with the top end to end interior Brand</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=''>
                          <Image
                            src={hoveredItem ? getImageForItem(hoveredItem) : '/images/top4.jpeg'}
                            alt=''
                            className='shadow-sm rounded-full border-2 mt-4'
                            width={550}
                            height={250}
                          />
                          {/* <button className='mt-4 bg-green-400 p-3 ml-8 rounded-full text-white font-bold'>Book an Architectural Consultancy </button> */}

                        </div>
                      </div>


                    </div>
                  </AccordionSection>

                  <AccordionSection
                    title='Living'
                    isActive={activeSection === 'Living'}
                    onClick={() => toggleSection('Living')}
                  >
                    <div className='bg-white shadow-2xl rounded-lg p-4 h-fit text-black'
                      onMouseLeave={handleMouseLeave}>
                      <div className=' '>
                        <div className=''>
                          <div className=''>
                            <h1>Living Décor Advice</h1>
                            <p className='text-black'>Home décor tips, tricks, ideas and advice from experts</p>
                            {/* <button className='bg-green-500 text-white text-sm py-2 px-3 rounded-full'>explore Now</button> */}
                          </div>
                        </div>
                        <div className=''>
                          <div className=''>
                            <ul className=''>
                              {/* { Starting, this is the sub-category} */}
                              <div className='flex gap-2'>
                                <Image src="/images/living/beautiful-design-tv-unit-in-delhi-gurgaon-noida.jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black absolute px-4 py-1' onMouseOver={() => handleMouseOverImage('tv_units')}>TV Units</h3>
                                  <p className='text-xs text-black mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>


                              <div className='flex gap-2 mt-2'>
                                <Image src="/images/living/best-designing-services-crockery-unit-in-gurgaon-delhi-noida-faridabad.jpeg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black absolute p-1' onMouseOver={() => handleMouseOverImage('crockery_unit')}>Crockery Units</h3>
                                  <p className='text-xs text-black mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>


                              <div className='flex gap-2 mt-2 '>
                                <Image src="/images/living/best-residential-office-designs-in-budget-interiors-in-delhi-gurgaon-noida-india (1).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black absolute p-1' onMouseOver={() => handleMouseOverImage('home_office')}>Home Office</h3>
                                  <p className='text-xs mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>

                              <div className='flex gap-2 mt-2'>
                                <Image src="/images/living/beautiful-design-shoe-racks-in-delhi-gurgaon-noida-faridabad.jpeg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black absolute p-1' onMouseOver={() => handleMouseOverImage('shoes_rack')}>Shoes Rocks</h3>
                                  <p className='text-xs mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>
                            </ul>
                          </div>


                          <div className=''>

                            <div className='flex gap-2 mt-2'>
                              <Image src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (2).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

                              <div>
                                <h3 className='text-sm text-white bg-black absolute p-1' onMouseOver={() => handleMouseOverImage('glass_partition')}>Glass Partition</h3>
                                <p className='text-xs mt-8'>Connect with the top end to end interior Brand</p>
                              </div>

                            </div>


                            <div className='flex gap-2 mt-2'>
                              <Image src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (6).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

                              <div>
                                <h3 className='text-sm text-white bg-black absolute p-1' onMouseOver={() => handleMouseOverImage('dressing')}>Dressings</h3>
                                <p className='text-xs mt-8'>Connect with the top end to end interior Brand</p>
                              </div>
                            </div>
                            <div className='flex gap-2 mt-2'>
                              <Image src="/images/living/best-interior-designing-company-in-delhi-gurgaon-noida-india-Design-Indian-Homes (6).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                              <div>
                                <h3 className='text-sm text-white bg-black absolute p-1' onMouseOver={() => handleMouseOverImage('living_renovation')}>Renovation Services</h3>
                                <p className='text-xs mt-8'>Connect with the top end to end interior Brand</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=''>
                          <Image
                            src={hoveredItem ? getImageForItem(hoveredItem) : '/images/top1.jpeg'}
                            alt=''
                            className='shadow-sm rounded-full border-2'
                            width={550}
                            height={250}
                            style={{ width: '550px', height: '250px', marginTop: '40px' }}
                          />
                          {/* <button className='mt-4 bg-green-400 p-3 ml-8 rounded-full text-white font-bold'>Book an Architectural Consultancy </button> */}

                        </div>
                      </div>


                    </div>
                  </AccordionSection>

                  <AccordionSection
                    title='Modular Interior'
                    isActive={activeSection === 'Modular'}
                    onClick={() => toggleSection('Modular')}
                  >
                    <div className='bg-white shadow-2xl rounded-lg p-4  h-fit text-black'
                      onMouseLeave={handleMouseLeave}>
                      <div className=''>
                        <div className=''>
                          <div className=''>
                            <h1 className='font-bold'>Modular Interior Décor Advice</h1>
                            <p className='text-black'>Home décor tips, tricks, ideas and advice from experts</p>
                            {/* <button className='bg-green-500 text-white text-sm py-2 px-3 rounded-full'>explore Now</button> */}
                          </div>
                        </div>
                        <div className=''>
                          <div className=''>
                            <ul className=''>
                              {/* { Starting, this is the sub-category} */}
                              <div className='flex gap-2 mt-2'>
                                <Image src="/images/living/beautiful-design-tv-unit-in-delhi-gurgaon-noida.jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black absolute px-3 py-1' onMouseOver={() => handleMouseOverImage('mandir_interior')}>Mandir</h3>
                                  <p className='text-xs text-black mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>


                              <div className='flex gap-2'>
                                <Image src="/images/living/best-designing-services-crockery-unit-in-gurgaon-delhi-noida-faridabad.jpeg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black absolute px-3 py-1' onMouseOver={() => handleMouseOverImage('chest_drawer')}>Chest of Drawers</h3>
                                  <p className='text-xs text-black mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>


                              <div className='flex gap-2 '>
                                <Image src="/images/living/best-residential-office-designs-in-budget-interiors-in-delhi-gurgaon-noida-india (1).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black absolute px-3 py-1' onMouseOver={() => handleMouseOverImage('bar_unit')}>Bar Units</h3>
                                  <p className='text-xs mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>

                              <div className='flex gap-2 '>
                                <Image src="/images/living/beautiful-design-shoe-racks-in-delhi-gurgaon-noida-faridabad.jpeg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                                <div>
                                  <h3 className='text-sm text-white bg-black absolute px-3 py-1' onMouseOver={() => handleMouseOverImage('side_table')}>Side Tables</h3>
                                  <p className='text-xs mt-8'>Connect with the top end to end interior Brand</p>
                                </div>
                              </div>
                            </ul>
                          </div>


                          <div className=''>

                            <div className='flex gap-2 '>
                              <Image src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (2).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

                              <div>
                                <h3 className='text-sm text-white bg-black absolute px-3 py-1' onMouseOver={() => handleMouseOverImage('foldable_bed')}>Foldable Beds</h3>
                                <p className='text-xs mt-8'>Connect with the top end to end interior Brand</p>
                              </div>

                            </div>


                            <div className='flex gap-2 mt-1'>
                              <Image src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (6).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />

                              <div>
                                <h3 className='text-sm text-white bg-black absolute px-3 py-1' onMouseOver={() => handleMouseOverImage('foyer_cabinet')}>Foyer Cabinets</h3>
                                <p className='text-xs mt-8'>Connect with the top end to end interior Brand</p>
                              </div>
                            </div>
                            <div className='flex gap-2 mt-1'>
                              <Image src="/images/living/best-interior-designing-company-in-delhi-gurgaon-noida-india-Design-Indian-Homes (6).jpg" alt="" width={100} height={50} style={{ width: '100px', height: '50px', borderRadius: '4px' }} />
                              <div>
                                <h3 className='text-sm text-white bg-black absolute px-3 py-1' onMouseOver={() => handleMouseOverImage('bathroom_vatities')}>Bathroom Vanities</h3>
                                <p className='text-xs mt-8'>Connect with the top end to end interior Brand</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=''>
                          <Image
                            src={hoveredItem ? getImageForItem(hoveredItem) : '/images/top4.jpeg'}
                            alt=''
                            className='shadow-sm rounded-full border-2'
                            width={550}
                            height={250}
                            style={{ width: '550px', height: '250px' }}
                          />
                          {/* <button className='mt-4 bg-green-400 p-3 ml-8 rounded-full text-white font-bold'>Book an Architectural Consultancy </button> */}

                        </div>
                      </div>


                    </div>
                  </AccordionSection>

                  <AccordionSection
                    title='More..'
                    isActive={activeSection === 'More'}
                    onClick={() => toggleSection('More')}
                  >
                    <div className='bg-white shadow-2xl rounded-lg p-4 h-fit text-black' onMouseLeave={handleMouseLeave}>
                      <div className=''>
                        <div class >
                          <ol className='text-sm'>
                            <h3 className='text-base font-bold bg-black text-white mt-2 text-center'>Renovation</h3>
                            <h3 className='text-base font-bold bg-black text-white mt-2 text-center'> Book a Virtual Meeting</h3>
                            <h3 className='text-base font-bold bg-black text-white mt-2 text-center'> About Us</h3>
                            <h3 className='text-base font-bold bg-black text-white mt-2 text-center'>The Team</h3>
                            <h3 className='text-base font-bold bg-black text-white mt-2 text-center'>Collaborate with Us</h3>

                          </ol>

                        </div>
                        <div >
                          <ul className='text-sm'>
                            <h3 className='text-base font-bold bg-black text-white mt-2 text-center'>Reviews</h3>
                            <h3 className='text-base font-bold bg-black text-white mt-2 text-center'> Request Catlog</h3>
                            <h3 className='text-base font-bold bg-black text-white mt-2 text-center'>Why Choose Us</h3>
                            <h3 className='text-base font-bold bg-black text-white mt-2 text-center'>Join As a Designer</h3>
                            <h3 className='text-base font-bold bg-black text-white mt-2 text-center'>Book a Design Visit</h3>
                          </ul>


                        </div>



                      </div>
                      <Image src="/design-Indian-home-about-us.jpg" alt="" className='shadow-sm rounded-full border-2 max-w-42 mt-4 ' width={550}
                        height={250} style={{ width: '550px', height: '150px' }} />

                    </div>
                  </AccordionSection>
                  <div>
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ width: '100%', height: 'auto', padding: '20px' }}
                    >
                      <source src="/video/video-interior-designer-company-in-delhi-gurgaon-noida-india.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div style={{ paddingBottom: '0px' }}>
                    <div className='' style={{ display: 'flex', gap: '1px', marginTop: '30px', justifyContent: 'center' }}>
                      <SocialIcon
                        network="instagram"
                        url="www.vimeo.com"
                        style={{ width: '10rem', height: '10rem' }}
                      />
                      <SocialIcon
                        network="facebook"
                        url="www.vimeo.com"
                        style={{ width: '10rem', height: '10rem' }}
                      />
                    </div>

                    <div style={{ display: 'flex', gap: '1px', marginTop: '10px', justifyContent: 'center' }}>
                      <SocialIcon
                        network="twitter"
                        url="www.vimeo.com"
                        style={{ width: '10rem', height: '10rem' }}
                      />
                      <SocialIcon
                        network="youtube"
                        url="www.vimeo.com"
                        style={{ width: '10rem', height: '10rem' }}
                      />
                    </div>

                  </div>
                  <div>
                    <p className='text-center m-4'>Welcome to the Official Site of The <strong>Design Indian Homes Brand</strong>, We offer End to End Interiors, Modular Interiors & Complete Architectural Services across Delhi - NCR - India. Connect with us TODAY for guaranteed quotes, or Share your Quotes & Get Flat 7% off by any vendor across Delhi - NCR.</p>
                  </div>
                  <div className='font-bold ' style={{ marginTop: '30px', paddingBottom: '150px', textAlign: 'center', fontSize: '60px' }}>
                    <h1>
                      DESIGN INDIAN HOMES
                    </h1>

                  </div>





                </div>
              </animated.div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};


const AccordionSection = ({ title, isActive, onClick, children }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center py-2 px-4 cursor-pointer border-b-1 border-black">
        <p className="text-xl font-semibold text-left">{title}</p>
        <button onClick={onClick} className="text-red-400 focus:outline-none">
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          )}
        </button>
      </div>
      {isActive && (
        <div className="px-4 py-2 border-t border-gray-300">
          {children /* Render the content passed as children */}
        </div>
      )}
    </div>
  );
};



export default Header;
