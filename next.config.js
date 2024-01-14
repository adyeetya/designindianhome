/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
    // ...other configurations

    images: {
      domains: ['www.modularkitcheninnoida.com'],
  },
    async rewrites() {
      return [
        {
          source: '/book-a-interior-design-visit',
          destination: '/contact',
        },
        {
          source: '/refer-and-get-rewards-interior-designers',
          destination: '/'
        },
        {
          source: '/collaborate-with-architects-interior-designers',
          destination: '/'
        },
        //modular design ideas
        {
          source: '/modular-interior-design-ideas',
          destination: '/'
        },
        {
          source: '/modular-kitchen-designs',
          destination: '/',
        },
        {
          source: '/wardrobe-designs',
          destination: '/design-ideas/wardrobe'
        },
        {
          source: '/vanity-designs',
          destination: '/'
        },
        {
          source: '/dressers-designs',
          destination: "/"
        },
        {
          source: '/tv-unit-designs',
          destination: "/"
        },
        {
          source: '/crockery-unit-designs',
          destination: '/'
        },
        {
          source: '/glass-partition-designs',
          destination: "/"
        },
        {
          source: "/shoerack-designs",
          destination: '/'
        },
        {
          source: '/mandir-designs',
          destination: '/'
        },
        { source: '/chest-of-drawer-designs',
         destination: '/' 
        },
        { source: '/bar-unit-designs', destination: '/' },
        { source: '/side-table-designs', destination: '/' },
        { source: '/foyer-area-designs', destination: '/' },
        { source: '/foldable-beds-designs', destination: '/' },
        { source: '/home-office-designs', destination: '/' },
        { source: '/interior-design-ideas', destination: '/' },
        { source: '/1bhk-apartment-interior-designs', destination: '/' },
        { source: '/2bhk-apartment-interior-designs', destination: '/' },
        { source: '/3bhk-apartment-interior-designs', destination: '/' },
        { source: '/4bhk-apartment-interior-designs', destination: '/' },
        { source: '/villa-interior-designs', destination: '/' },
        { source: '/farmhouse-interior-designs', destination: '/' },
        { source: '/penthouse-interior-designs', destination: '/' },
        { source: '/studio-apartment-interior-designs', destination: '/' },
        { source: '/bungalow-interior-designs', destination: '/' },
        { source: '/duplex-interior-designs', destination: '/' },
        { source: '/cottage-interior-designs', destination: '/' },
        { source: '/complete-end-to-end-interiors', destination: '/' },
        { source: '/wooden-polishing', destination: '/' },
        { source: '/wooden-flooring-designs', destination: '/' },
        { source: '/vertical-gardens-designs', destination: '/' },
        { source: '/upvc-windows-designs', destination: '/' },
        { source: '/tiling-designs', destination: '/' },
        { source: '/sofa-designs', destination: '/' },
        { source: '/kitchen-lightening-designs', destination: '/' },
        { source: '/plumbing-works-interiors', destination: '/' },
        { source: '/glass-partition-designs', destination: '/' },
        { source: '/ceiling-designs', destination: '/' },
        { source: '/wall-panelling', destination: '/' },
        { source: '/exterior-cladding-designs', destination: '/' },
        { source: '/wood-door-designs', destination: '/' },
        { source: '/electric-works-interiors', destination: '/' },
        { source: '/beds-designs', destination: '/' },
        { source: '/paint-works-interiors', destination: '/' },
        { source: '/complete-end-to-end-interior-works', destination: '/' },
        { source: '/commercial-interior-works-interiors', destination: '/' },
        { source: '/architectural-consultancy', destination: '/' },
        { source: '/top-architects-in-india', destination: '/' },
        { source: '/architectural-brand-in-india', destination: '/' },
        { source: '/commercial-architectural-delhi-india', destination: '/' },
        { source: '/home-renovation-services', destination: '/' },
        { source: '/structural-renovation-services', destination: '/' },
        { source: '/interior-renovation-services', destination: '/' },
        { source: '/bedroom-renovation-services', destination: '/' },
        { source: '/lounge-renovation-services', destination: '/' },
        { source: '/bathroom-renovation-services', destination: '/' },
        { source: '/terrace-renovation-services', destination: '/' },
        { source: '/living-room-renovation-services', destination: '/' },
        { source: '/modular-kitchen-renovation-services', destination: '/' },
        { source: '/wardrobe-renovation-services', destination: '/' },
        { source: '/living-room-renovation-services', destination: '/' },
        { source: '/mandir-renovation-services', destination: '/' },
        { source: '/gym-spa-renovation-services', destination: '/' },
        { source: '/hotel-renovation-services', destination: '/' },
        { source: '/farmhouse-renovation-services', destination: '/' },
        { source: '/banquet-renovation-services', destination: '/' },
        { source: '/villa-renovation-services', destination: '/' },
        {
          source: '/architect-advice-tips-ideas',
          destination: '/',
        },
        {
          source: '/architectural-consultancy',
          destination: '/',
        },
        {
          source: '/architectural-brand-in-india',
          destination: '/',
        },
        {
          source: '/top-architects-in-india',
          destination: '/',
        },
        {
          source: '/luxury-interiors-delhi-india',
          destination: '/',
        },
        {
          source: '/home-renovation-services',
          destination: '/',
        },
        {
          source: '/top-modular-kitchen-brand',
          destination: '/',
        },
        {
          source: '/modular-kitchen-types',
          destination: '/',
        },
        {
          source: '/modular-kitchen-designs',
          destination: '/',
        },
        {
          source: '/luxury-modular-kitchen-india',
          destination: '/',
        },
        {
          source: '/wardrobe-designs',
          destination: '/',
        },
        {
          source: '/types-of-wardrobe-designs',
          destination: '/',
        },
        {
          source: '/luxury-wardrobe-designs-india',
          destination: '/',
        },
        {
          source: '/lacquer-glass-wardrobe-designs',
          destination: '/',
        },
        {
          source: '/wardrobe-renovation-services',
          destination: '/',
        },
        {
          source: '/living-room-designs',
          destination: '/',
        },
        {
          source: '/tv-unit-designs',
          destination: '/',
        },
        {
          source: '/crockery-unit-designs',
          destination: '/',
        },
        {
          source: '/home-office-designs',
          destination: '/',
        },
        {
          source: '/shoerack-designs',
          destination: '/',
        },
        {
          source: '/modular-interior-design-ideas',
          destination: '/',
        },
        {
          source: '/mandir-designs',
          destination: '/',
        },
        {
          source: '/chest-of-drawer-designs',
          destination: '/',
        },
        {
          source: '/Bar-unit-designs',
          destination: '/',
        },
        {
          source: '/side-table-designs',
          destination: '/',
        },
        {
          source: '/home-renovation-services',
          destination: '/',
        },
        {
          source: '/virtual-interior-designing-meeting',
          destination: '/',
        },
        {
          source: '/about-best-interior-designers-architects',
          destination: '/',
        },
        {
          source: '/largest-interior-designing-brand',
          destination: '/',
        },
        {
          source: '/collaborate-with-architects-interior-designers',
          destination: '/',
        },
        {
          source: '/interior-designing-estimates-pricing',
          destination: '/',
        },
        {
          source: '/customer-reviews-interior-designs',
          destination: '/',
        },
        {
          source: '/interior-designing-plans-for-residences',
          destination: '/',
        },
        {
          source: '/why-choose-the-best-interior-designers',
          destination: '/',
        },
        {
          source: '/join-the-largest-interior-designing-brand',
          destination: '/',
        },
        {
          source: '/book-with-top-interior-designers-architects',
          destination: '/',
        },
        {
          source: '/refer-and-get-rewards-interior-designers',
          destination: '/',
        },
        {
          source: '/interior-designing-estimates-pricing',
          destination: '/',
        },
        {
          source: '/contact-top-interior-designers-architects',
          destination: '/',
        },
        {
          source: '/foyer-area-designs',
          destination: '/',
        },
        { source: '/home-renovation-services', destination: '/' },
        { source: '/dressers-designs', destination: '/' },
        { source: '/glass-partition-designs', destination: '/' },
        { source: '/modular-kitchen-price-estimator', destination: '/' },
        { source: '/dressers-designs', destination: '/' },

        



      
     

        // Add more custom rewrites as needed
      ];
    },
  };
  
  module.exports = nextConfig;
  