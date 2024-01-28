"use client";
import Hero from "../components/Hero/page";
import { Fragment } from "react";
import ImageGrid from "../components/ImageGrid/page";
import Brands from "../components/Brands/page";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer/Footer";
import Display from "../components/Display/page";
import EndToEndImageGrid from "../components/EndToEndImageGrid/page";
import Stepper from "../components/Stepper/page";
import FAQ from "../components/FAQ/page";
import Collection from "../components/Collection/page";
import TabsSection from "../components/TabsSection/page";
import MyForm from "../components/MyForm";
import "../style/hero.css";
import Omsairam from "../components/Navbar/Omsairam";
import PostFooter from "../components/PostFooter/page";


export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://designindianhomes.com/",
        "url": "https://designindianhomes.com/",
        "name": "- DESIGN INDIAN HOME DELHI - INDIA | DESIGNER HOMES BRAND INDIA",
        "isPartOf": {
          "@id": "https://designindianhomes.com/#website"
        },
        "about": {
          "@id": "https://designindianhomes.com/#organization"
        },
        "datePublished": "2023-06-17T18:01:47+00:00",
        "dateModified": "2023-10-21T06:11:36+00:00",
        "breadcrumb": {
          "@id": "https://designindianhomes.com/#breadcrumb"
        },
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": [
              "https://designindianhomes.com/"
            ]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://designindianhomes.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://designindianhomes.com/#website",
        "url": "https://designindianhomes.com/",
        "name": "DESIGN INDIAN HOME - INDIA | DESIGN INDIAN HOMES BRAND",
        "description": "Top Modular Kitchen Brand in India",
        "publisher": {
          "@id": "https://designindianhomes.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://designindianhomes.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://designindianhomes.com/#organization",
        "name": "DESIGN INDIAN HOME - INDIA | DESIGN INDIAN HOMES BRAND",
        "url": "https://designindianhomes.com/",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "https://designindianhomes.com/#/schema/logo/image/",
          "url": "https://designindianhomes.com/wp-content/uploads/2023/01/IMG_3472.png",
          "contentUrl": "https://designindianhomes.com/wp-content/uploads/2023/01/IMG_3472.png",
          "width": 5000,
          "height": 5000,
          "caption": "DESIGN INDIAN HOME - INDIA | DESIGN INDIAN HOMES BRAND"
        },
        "image": {
          "@id": "https://designindianhomes.com/#/schema/logo/image/"
        },
        "sameAs": [
          "https://www.facebook.com/designindiankitchen",
          "https://twitter.com/indiankitchens",
          "https://www.instagram.com/designindiankitchen",
          "https://www.houzz.in/professionals/kitchen-and-bath-remodelers/design-indian-kitchen-pfvwin-pf~1637303735",
          "https://www.indiamart.com/designindiankitchen/",
          "https://www.justdial.com/jdmart/Delhi/Design-Indian-Kitchen-Near-Wengers-Co-Connaught-Place/011PXX11-XX11-141108151600-E1L5_BZDET/catalogue?rStatus=1"
        ]
      }
    ]
  }
  return (
    <>
   
      <Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <Omsairam />
        <Header />
        <Hero />
        <Collection />
        <ImageGrid />

        <Brands />
        <Display />
        <Stepper />
        <TabsSection />
        <EndToEndImageGrid />
        <FAQ />
        {/* <div className="bg-gradient-to-br from-orange-200 to-yellow-300 p-4 dark:text-white"> */}
        <div className="bg-red-500 p-4 dark:text-white">
          <MyForm />
        </div>
        <PostFooter />
        <Footer />
      </Fragment>
    </>
  );
}




