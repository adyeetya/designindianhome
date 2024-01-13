import Marquee from 'react-fast-marquee'
import React, { useState, useEffect, useRef } from 'react'
import Link from "next/link"
const PostFooter = () => {
  const ref = useRef()
  const videoRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)
  useEffect(() => {
    const video = document.querySelector('video')
    video.addEventListener('load', () => {
      setIsPlaying(true)
    })
  }, [])
  return (
    <>


    






<section className="view1 monuments">
  <object
    data="https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/delhi-based.svg"
    title="Interactive SVG"
    content-type="image/svg+xml"
  />
</section>

























      <div className="containering bg-slate-100">
        <div className="boxes ml-24 pb-4">

          <div className="font-bold text-gray-800 px-8 ">
            <Marquee style={{ color: 'Red' }}>
              <div className="marquee">
                <h3>
                  BOOK A DESIGN VISIT TODAY

                </h3>
              </div>
            </Marquee>
            & GET GUARANTEED <br />
            AFFORDABE QUOTES BY US
            <div className="mt-8">
              <div>
                <span className="uppercase  text-sm text-gray-600 font-bold">
                  Full Name
                </span>
                <input className="w-full border-b-2 border-b-gray-500 mt-2 p-3  focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full border-b-2 border-b-gray-500 mt-2 p-3 focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Contact Number
                </span>
                <input
                  className="w-full border-b-2 border-b-gray-500 mt-2 p-3 focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Address
                </span>
                <textarea
                  className="w-full h-32 border-b-2 border-b-gray-500 mt-2 p-3 focus:outline-none focus:shadow-outline"
                  defaultValue={""}
                />
              </div>
              <div className="mt-8">
                <button className="uppercase text-sm font-bold tracking-wide bg-slate-950 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Send Message
                </button>
              </div>
            </div>

          </div>
        </div>
        <div className="boxes ml-8 py-8">
          <div className="bold text-gray-800 px-8 ">
            ARE YOU AN ARCHITECT,INTERIOR <br />
            DESIGNER OR DEVELOPER <br />
            Do Connect With Us
            <div className="mt-8">
              <div>

                <span className="uppercase text-sm text-gray-600 font-bold">
                  Full Name
                </span>
                <input className="w-full border-b-2 border-b-gray-500 mt-2 p-3  focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full border-b-2 border-b-gray-500 mt-2 p-3 focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Contact Number
                </span>
                <input
                  className="w-full border-b-2 border-b-gray-500 mt-2 p-3 focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea
                  className="w-full h-32 border-b-2 border-b-gray-500 mt-2 p-3 focus:outline-none focus:shadow-outline"
                  defaultValue={""}
                />
              </div>
              <div className="mt-8 flex items-center gap-4">
                <button className="uppercase text-sm font-bold tracking-wide bg-slate-950 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Choose File
                </button>

                <button className="uppercase text-sm font-bold tracking-wide bg-slate-950 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Submit
                </button>

              </div>
              <div className="py-4">
                *Our Brand is Associated with More than 283+ Architects, Interior Designers and Developers across Delhi - NCR
              </div>
            </div>

          </div>
        </div>
        <div className="boxes hide mr-24 ml-8">

          <div className="bold text-gray-800  ">
            <p className="w-full p-8 bg-slate-950 focus:outline-none focus:shadow-outline text-xl text-center uppercase text-gray-100 border-b-2 border-b-gray-500"

            > Check Our Recent Project</p>

          <Link href='https://www.facebook.com/designindiankitchen'>  <button className="w-full p-20  focus:outline-none focus:shadow-outline text-xl text-center uppercase border-b-2 border-b-gray-950" style={{backgroundColor:"#ffe216"}}

            > Facebook</button></Link>
           <Link href='https://www.instagram.com/designindiankitchen'>  <button className="w-full p-20  focus:outline-none focus:shadow-outline text-xl text-center uppercase border-b-2 border-b-gray-950"  style={{backgroundColor:"#ffe216"}}

            > Instagram</button> </Link>
            <Link href='https://www.youtube.com/channel/UCqkIRwI6EL9QmaTZHYm6Hug'>  <button className="w-full p-20 text-xl text-center uppercase focus:outline-none focus:shadow-outline border-b-2 border-b-gray-950" style={{backgroundColor:"#ffe216"}}

            > Youtube</button></Link>
           <Link href='https://twitter.com/indiankitchens'>  <button className="w-full p-20 text-xl text-center uppercase focus:outline-none focus:shadow-outlineborder-b-2 border-b-gray-950 " style={{backgroundColor:"#ffe216"}}

> Twitter</button></Link> 
          </div></div>
      </div>



      {/*  <section className="Form-block" style={{ background: "#F1F9F9" }}>
  <div className="container">
    <div className="section-header">
      <h2>Dont Miss.. ! Look Here</h2>
      <p>
        *Our Brand is Associated with More than 283+ Architects, Interior
        Designers and Developers across Delhi - NCR
      </p>
    </div>
    <div className="row flex p-4">
      <div className="col-lg-4">
        <div className="form-part">
          <marquee
            className="text-uppercase"
            direction="left"
            scrollamount={14}
            behavior="scroll"
          >
            Book a design visit Today
          </marquee>
          <h3>
            &amp; Get Guaranteed
            <br />
            Affordabe Quotes by us
          </h3>
          <div className="wpcf7 js" id="wpcf7-f1092-o1" lang="en-US" dir="ltr">
            <div className="screen-reader-response">
              <button role="status" aria-live="polite" aria-atomic="true" /> <ul />
            </div>
            <form
              action="/#wpcf7-f1092-o1"
              method="post"
              className="wpcf7-form init"
              aria-label="Contact form"
              noValidate="novalidate"
              data-status="init"
            >
              <div style={{ display: "none" }}>
                <input type="hidden" name="_wpcf7" defaultValue={1092} />
                <input
                  type="hidden"
                  name="_wpcf7_version"
                  defaultValue="5.8.5"
                />
                <input
                  type="hidden"
                  name="_wpcf7_locale"
                  defaultValue="en_US"
                />
                <input
                  type="hidden"
                  name="_wpcf7_unit_tag"
                  defaultValue="wpcf7-f1092-o1"
                />
                <input
                  type="hidden"
                  name="_wpcf7_container_post"
                  defaultValue={0}
                />
                <input
                  type="hidden"
                  name="_wpcf7_posted_data_hash"
                  defaultValue=""
                />
                <input
                  type="hidden"
                  name="_wpcf7_recaptcha_response"
                  defaultValue="03AFcWeA5yz-_USXs_-SnpUAeXJ8tEJcKjDafYP1BArbwr_Tw32QKNX9DOzDLCXYl1AnXA3T-pJOeH0on6i-d1QIY79W6qd_Ee7vSHO6GlJPP3BpqIf_nV_CEKbDi5E1IJnbRLkpRpoV6TRFb6A3oBwcLYvp_XRg_ULZyTNxkmmjXaylb3lc1ru8iLq0SZiMQisGctBHzqyNohlbH01u8MV6RtsZNMuBZB_1chClkOLKYnu507oofy9LbtWLnWMMhQ8nvSjLAgVL3b0vEC1c_5p6ht6YgEmeD4j1W5GdnJM7Q0ceO2hZEN0fNOOlQMwyc5_kJo122geGBbNtWtyR9gdP45HhCBvullx7Gsy8HhYSZK9pkZ9Qy3si700CH1hPDDmiJ9YVakW60W6VZ9PC9Oue0Q4HKiuD5ccKMnJPb5DzAtipKaWEgzbtAFlAGOAHpzABV2MfT-LiD46IbKPHWt1Z3ApZDxemOWBFp7en3syWZ-6nVzA4cs-NAgroNpQ18JIUYv22g4hRTzq2V12kCn2peHc-I-5gikYTOKKL2h76fCICkKGM9GtOf9Sh0F9Dt_WrznYV2GxJj1w_8V70P7GcFzlrdLzLVgNIO8zDY6jV9lJ3AyzUGtnwHP44l-Lg_YXVPo8uyaiZ3O"
                />
              </div>
              <div className="form-group">
                <p>
                  <label htmlFor="name">NAME:</label>
                  <br />
                  <span className="wpcf7-form-control-wrap" data-name="Name">
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder=""
                      defaultValue=""
                      type="text"
                      name="Name"
                    />
                  </span>
                </p>
              </div>
              <div className="form-group">
                <p>
                  <label htmlFor="email">EMAIL ID:</label>
                  <br />
                  <span className="wpcf7-form-control-wrap" data-name="Email">
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-email wpcf7-text wpcf7-validates-as-email form-control"
                      aria-invalid="false"
                      placeholder=""
                      defaultValue=""
                      type="email"
                      name="Email"
                    />
                  </span>
                </p>
              </div>
              <div className="form-group">
                <p>
                  <label htmlFor="contact">CONTACT NUMBER:</label>
                  <br />
                  <span className="wpcf7-form-control-wrap" data-name="contact">
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder=""
                      defaultValue=""
                      type="text"
                      name="contact"
                    />
                  </span>
                </p>
              </div>
              <div className="form-group">
                <p>
                  <label htmlFor="address">ADDRESS:</label>
                  <br />
                  <span className="wpcf7-form-control-wrap" data-name="address">
                    <textarea
                      cols={40}
                      rows={10}
                      className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder=""
                      name="address"
                      defaultValue={""}
                    />
                  </span>
                </p>
              </div>
              <div className="submit-btn">
                <p>
                  <input
                    className="wpcf7-form-control wpcf7-submit has-spinner form-control"
                    type="submit"
                    defaultValue="Send Message"
                  />
                  <span className="wpcf7-spinner" />
                </p>
              </div>
              <div className="wpcf7-response-output" aria-hidden="true" />
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="form-part">
          <h3>Are you an Architect,Interior Designer or Developer</h3>
          <h4>Do Connect With Us</h4>
          <div className="wpcf7 js" id="wpcf7-f1100-o2" lang="en-US" dir="ltr">
            <div className="screen-reader-response">
              <p role="status" aria-live="polite" aria-atomic="true" /> <ul />
            </div>
            <form
              action="/#wpcf7-f1100-o2"
              method="post"
              className="wpcf7-form init"
              aria-label="Contact form"
              encType="multipart/form-data"
              noValidate="novalidate"
              data-status="init"
            >
              <div style={{ display: "none" }}>
                <input type="hidden" name="_wpcf7" defaultValue={1100} />
                <input
                  type="hidden"
                  name="_wpcf7_version"
                  defaultValue="5.8.5"
                />
                <input
                  type="hidden"
                  name="_wpcf7_locale"
                  defaultValue="en_US"
                />
                <input
                  type="hidden"
                  name="_wpcf7_unit_tag"
                  defaultValue="wpcf7-f1100-o2"
                />
                <input
                  type="hidden"
                  name="_wpcf7_container_post"
                  defaultValue={0}
                />
                <input
                  type="hidden"
                  name="_wpcf7_posted_data_hash"
                  defaultValue=""
                />
                <input
                  type="hidden"
                  name="_wpcf7_recaptcha_response"
                  defaultValue="03AFcWeA5yz-_USXs_-SnpUAeXJ8tEJcKjDafYP1BArbwr_Tw32QKNX9DOzDLCXYl1AnXA3T-pJOeH0on6i-d1QIY79W6qd_Ee7vSHO6GlJPP3BpqIf_nV_CEKbDi5E1IJnbRLkpRpoV6TRFb6A3oBwcLYvp_XRg_ULZyTNxkmmjXaylb3lc1ru8iLq0SZiMQisGctBHzqyNohlbH01u8MV6RtsZNMuBZB_1chClkOLKYnu507oofy9LbtWLnWMMhQ8nvSjLAgVL3b0vEC1c_5p6ht6YgEmeD4j1W5GdnJM7Q0ceO2hZEN0fNOOlQMwyc5_kJo122geGBbNtWtyR9gdP45HhCBvullx7Gsy8HhYSZK9pkZ9Qy3si700CH1hPDDmiJ9YVakW60W6VZ9PC9Oue0Q4HKiuD5ccKMnJPb5DzAtipKaWEgzbtAFlAGOAHpzABV2MfT-LiD46IbKPHWt1Z3ApZDxemOWBFp7en3syWZ-6nVzA4cs-NAgroNpQ18JIUYv22g4hRTzq2V12kCn2peHc-I-5gikYTOKKL2h76fCICkKGM9GtOf9Sh0F9Dt_WrznYV2GxJj1w_8V70P7GcFzlrdLzLVgNIO8zDY6jV9lJ3AyzUGtnwHP44l-Lg_YXVPo8uyaiZ3O"
                />
              </div>
              <p>
                <label htmlFor="name">Name:</label>
                <br />
                <span className="wpcf7-form-control-wrap" data-name="Name">
                  <input
                    size={40}
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                    id="name"
                    aria-required="true"
                    aria-invalid="false"
                    defaultValue=""
                    type="text"
                    name="Name"
                  />
                </span>
                <br />
                <label htmlFor="email">Email:</label>
                <br />
                <span className="wpcf7-form-control-wrap" data-name="email">
                  <input
                    size={40}
                    className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                    id="email"
                    aria-required="true"
                    aria-invalid="false"
                    defaultValue=""
                    type="email"
                    name="email"
                  />
                </span>
                <br />
                <label htmlFor="contact">Contact No:</label>
                <br />
                <span className="wpcf7-form-control-wrap" data-name="contact">
                  <input
                    size={40}
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                    id="contact"
                    aria-required="true"
                    aria-invalid="false"
                    defaultValue=""
                    type="text"
                    name="contact"
                  />
                </span>
                <br />
                <label htmlFor="w3review">Message</label>
                <br />
                <span className="wpcf7-form-control-wrap" data-name="message">
                  <textarea
                    cols={40}
                    rows={10}
                    className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                    id="message"
                    aria-required="true"
                    aria-invalid="false"
                    name="message"
                    defaultValue={""}
                  />
                </span>
              </p>
              <div className="submit-box">
                <div className="upload-btn-wrapper">
                  <p>
                    <span className="wpcf7-form-control-wrap" data-name="file">
                      <input
                        size={40}
                        className="wpcf7-form-control wpcf7-file"
                        id="file"
                        accept="audio/*,video/*,image/*"
                        aria-invalid="false"
                        type="file"
                        name="file"
                      />
                    </span>
                  </p>
                </div>
                <div className="mb-2 no-border ">
                  <div className="submit-btn">
                    <p>
                      <input
                        className="wpcf7-form-control wpcf7-submit has-spinner"
                        id="submit"
                        type="submit"
                        defaultValue="Submit"
                      />
                      <span className="wpcf7-spinner" />
                    </p>
                  </div>
                </div>
              </div>
              <p>
                *Our Brand is Associated with More than 283+ Architects,
                Interior Designers and Developers across Delhi - NCR
              </p>
              <div className="wpcf7-response-output" aria-hidden="true" />
            </form>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-4">
        <div className="ourwork">
          <h2>Check Our Recent Project</h2>
          <div
            className="cursor"
            style={{
              backgroundImage:
                'url("https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/v2.gif")',
              opacity: 0,
              visibility: "hidden",
              transform: "scale(0.1, 0.1)",
              top: 4042,
              left: 704
            }}
          />
          <div className="grid-container">
            <div className="item1 project p-1">
              <a href="https://www.facebook.com/designindiankitchen">
                <div className="project-title">
                  <h3>Facebook</h3>
                </div>
                <div className="project-overlay" />
              </a>
            </div>
            <div className="item1 project p-2">
              <a href="https://www.instagram.com/designindiankitchen/?hl=en">
                <div className="project-title">
                  <h3>Instagram</h3>
                </div>
                <div className="project-overlay" />
              </a>
            </div>
            <div className="item1 project p-2">
              <a href="https://www.youtube.com/channel/UCqkIRwI6EL9QmaTZHYm6Hug">
                <div className="project-title">
                  <h3>Youtube</h3>
                </div>
                <div className="project-overlay" />
              </a>
            </div>
            <div className="item1 project p-2">
              <a href="https://twitter.com/indiankitchens">
                <div className="project-title">
                  <h3>Twitter</h3>
                </div>
                <div className="project-overlay" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>  */}



<div class="container m-auto p-8 text-grey-darkest">
  <div class="flex flex-wrap -mx-2 mb-8">
      <div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4 ">
         <div class="video-sec">
         <video
                loop
                autoPlay
                controls={isPlaying}
                src="/video/dkivid.mp4"
               
                className="rounded shadow-md 
                "
                width={0}
                height={0} 
                sizes="100vw"
                style={{ width: '100%', height: 'auto', backgroundAttachment:'fixed' }} 
              />
         </div>
      </div>
     
      <div class="w-full lg:w-1/2 px-2 py-20 max-[600px]:py-10">
         <div class=" h-12 text-lg text-grey-dark flex items-center text-center justify-center">
            <p>The Pioneers in the Modular Kitchen Industry</p>
          
         </div>
         <div className="text-6xl max-[600px]:text-2xl max-[600px]:py-4 text-grey-dark text-center  items-center justify-center px-24 " style={{fontFamily:"Impact"}}>
            <p>The Most Reliable,<br/>
Most Recommended <br/>
 &
Most
Loved ❤️ Brand ✌
</p>

<button className="font-extralight max-[600px]:text-xl  text-3xl bg-amber-400 text-gray-dark p-3 rounded-lg max-[600px]:w-2/3 w-1/2 focus:outline-none focus:shadow-outline mt-8">
                  Who We Are
                </button>

            </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
         <div class="">
         <video
                loop
                autoPlay
                controls={isPlaying}
                src="/video/dkivid.mp4"
               
                className="rounded shadow-md"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} 
              />
         </div>
      </div>
   </div>
</div>







      <section class="handshake">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1200 1200">
          <g>
            <path class="st0" d="M971.39,716.19c3.63,14.34,3.4,28.66-1.25,42.67c-4.6,13.86-16.04,19.17-31.76,15.6
            c-19.57-4.45-37.13-13.62-54.21-23.63c-16.21-9.51-31.83-20-47.82-29.89c-1.78-1.1-4.21-1.34-6.38-1.61
            c-2.46-0.31-4.98-0.33-7.46-0.23c-2.84,0.12-5.67,0.69-8.51,0.73c-1.75,0.03-3.66-0.21-5.24-0.9c-6.63-2.91-13.16-6.04-19.91-9.17
            c-0.13,1.25-0.21,1.95-0.4,3.77c-4.01-5.24-7.47-9.77-11.14-14.56c-2.87,3.94-5.55,7.85-8.47,11.58
            c-7.18,9.16-16.19,15.61-27.56,18.74c-1.05,0.29-2.47,3.67-2.09,4.07c6.83,7.22,13.3,15.04,23.98,16.88
            c5.65,0.97,10.58-0.59,14.92-4.04c9.17-7.3,14.2-16.6,13.37-28.61c-0.04-0.64,0.09-1.3,0.18-1.95c0.01-0.1,0.21-0.17,0.33-0.26
            c3.66,7.74-0.93,21.47-10.03,29.95c-9.95,9.27-16.78,9.04-35.75-1.33c0.32,1.64,0.55,3.09,0.89,4.52
            c4.48,18.75-10.82,36.09-30.17,34.03c-6.4-0.68-12.75-1.88-19.13-2.84c-2.66,16.03-20.57,22.81-36.02,18.66
            c-6.74-1.81-12.93-5.67-19.54-8.67c-2.05,3.14-4.31,7.19-7.14,10.81c-7.49,9.6-18.07,13.15-29.66,14.4
            c-17.54,1.9-34.96,0.88-52.12-3.07c-15.27-3.51-20.78-10.41-21.09-25.33c-0.04-1.81,0.15-3.62,0.23-5.42
            c-6.32-1.24-12.56-2.09-18.59-3.71c-15.15-4.05-17.66-7.41-18.13-22.96c-0.08-2.81-0.01-5.62-0.01-8.84
            c-11.95-0.87-24.22-1.46-33.05-10.33c-8.92-8.97-7.38-21.56-9.02-32.95c-0.27-0.15-0.55-0.41-0.82-0.41
            c-13.25,0.09-20.86-7.26-27.34-18.24c-11.25-19.05-15.44-39.32-13.92-60.99c1.94-27.56,3.42-55.2,6.65-82.62
            c3.18-26.99,13.58-51.31,32.69-71.33c0.21-0.22,0.25-0.6,0.52-1.32c-18.1-8.93-35.88-18.74-55.44-24.32
            c-13.56-3.87-25.93,1.05-37.77,7.25c-5.02,2.63-9.86,5.63-14.78,8.46c-0.27-0.42-0.53-0.84-0.8-1.25c2.1-1.3,4.1-2.79,6.31-3.88
            c7.72-3.81,15.32-8,23.33-11.11c13.55-5.27,26.53-1.62,39.1,4.04c9.1,4.09,18.17,8.25,27.18,12.53c8.38,3.98,16.53,7.85,26.2,8.76
            c13.52,1.27,26.71,5.25,40.57,4.27c22.82-1.61,44.52-7.85,66.07-14.9c18.83-6.16,37.54-12.69,56.47-18.52
            c9.71-2.99,19.72-2.57,29.58,0.33c1.35,0.4,3.31,0.21,4.48-0.52c12.43-7.7,25.82-8.69,39.46-4.94
            c28.45,7.83,55.7,18.76,81.51,33.14c2.32,1.29,4.87,2.54,6.59,4.45c3.15,3.49,6.15,2.8,10.1,1.52c10.55-3.41,21.27-6.32,31.98-9.23
            c30.63-8.34,61.28-16.59,91.93-24.83c2.56-0.69,5.24-0.95,7.85-1.48c8.97-1.84,16.65,0.55,23.54,6.55
            c11.18,9.74,19.98,21.42,27.86,33.8c2.68,4.22,5.62,6.08,10.49,5.67c19.24-1.62,38.49-3.06,57.73-4.7
            c7.88-0.67,15.73-1.68,23.59-2.54c0.08,0.48,0.15,0.97,0.23,1.45c-1.96,0.28-3.91,0.63-5.88,0.83
            c-21.04,2.11-42.08,4.21-63.12,6.29c-1.99,0.2-4,0.14-5.98,0.38c-9.51,1.16-16.19-1.24-21.53-10.61
            c-5.51-9.67-13.83-17.81-21.32-26.27c-7.72-8.7-17.4-11.65-28.88-8.56c-30.96,8.31-61.95,16.47-92.92,24.73
            c-3.66,0.98-7.23,2.25-10.98,3.43c6.17,20.09,7.05,40.59,8.51,60.94c3.13,43.88,5.75,87.79,4.03,131.82
            c-0.7,17.97-1.69,35.93-2.4,53.9c-0.05,1.36,0.7,3.34,1.75,4.06c28.74,19.61,57.82,38.69,90.7,50.89
            c5.87,2.18,12.16,3.61,18.38,4.39c12.32,1.54,21.55-5.88,24.79-19.57c2.56-10.81,2.76-21.78,1-32.75c-0.23-1.41-1.28-2.68-2.3-4.74
            c-4.08,5.48-3.62,11.1-4.71,16.35c-1.17,5.62-2.92,11.15-4.76,16.59c-0.71,2.09-2.34,4.03-4.67,1.12l-0.06,0.07
            c6.65-3.17,6.15-9.93,7.55-15.59c1.14-4.62,1.32-9.48,2.23-14.17c0.76-3.94,2.93-6.24,7.36-4.67L971.39,716.19z M566.51,618.27
            c0.32,0.36,0.65,0.71,0.97,1.07c-0.79,0.73-1.52,1.52-2.37,2.17c-28.27,21.71-56.46,43.53-84.91,65.02
            c-7.12,5.38-15.1,9.62-22.57,14.55c-0.95,0.63-1.81,2.38-1.68,3.49c0.85,7.08,1.61,14.21,3.21,21.13c0.74,3.21,2.59,7,5.15,8.8
            c11.34,7.98,24.51,12.66,37.53,6.95c19.13-8.39,37.49-18.66,55.75-28.88c8.18-4.58,15.91-10.35,22.79-16.73
            c7.4-6.87,13.54-15.09,20.28-22.68c0.62-0.7,1.58-1.09,2.38-1.62c-5.67,7.79-11.62,15.16-18.3,21.79
            c-5.96,5.92-12.09,12.1-19.24,16.29c-18.77,11.01-38.14,21.01-57.26,31.42c-3.6,1.96-8.85,3.17-10.3,6.19
            c-1.73,3.59-0.76,8.88,0.12,13.21c0.75,3.69,2.08,8.86,4.78,10.28c12.36,6.52,25.59,11.31,39.52,5.09
            c13.04-5.82,25.77-12.36,38.42-19.01c6.91-3.64,13.37-8.15,20.03-12.27c-0.7,1.81-1.93,3-3.33,3.94
            c-18.68,12.63-38.64,22.8-59.68,30.83c-2.54,0.97-3.65,2.12-3.81,4.89c-0.81,14.24,4.03,21.68,17.84,25.34
            c17.39,4.61,35.1,5.23,53.02,3.7c17.28-1.48,29.2-9.88,36.18-25.65c0.91-2.06,2.35-3.89,3.21-5.3c0.64,2.45,0.48,5.49,1.85,6.56
            c10.77,8.4,22.92,11.73,36.01,6.65c11.8-4.58,18.44-16.33,10.01-28.98c-4.21-6.32-7.11-13.54-10.36-20.46
            c-2.73-5.82-3.35-6.38-9.72-4.52c-2.32,0.68-4.9,1.69-6.5,3.37c-9.77,10.22-14.17,22.22-11.45,36.49c0.82,4.3,3.27,6.81,7.35,6.65
            c6.9-0.27,13.82-0.94,20.61-2.12c1.96-0.34,3.75-2.84,5.21-4.68c1.85-2.32,3.28-4.97,5.58-8.55c2.93,8.92-5.67,10.96-6.43,15.69
            c-1.85-0.11-3.36-0.39-4.84-0.27c-6.75,0.56-13.51,1.78-20.24,1.6c-2.75-0.07-7-2.5-7.86-4.85c-4.07-11.13-1.67-21.94,3.79-32.12
            c4.48-8.36,10.52-14.63,21.1-13.74c-4.82-23.38-3.23-31.28,8.82-40.4c9.98-7.55,20.39-8.02,30.97,0.46c0-2.48-0.11-4.15,0.02-5.8
            c0.85-10.67,6.13-18.6,15.58-23.35c8.97-4.51,17.27-1.36,23.82,4.84c7.91,7.49,15.59,15.48,21.91,24.29
            c6.22,8.67,14.79,11.68,25.19,15.03c0-23.13,0.94-45.46-0.19-67.69c-2.68-53.06-6.54-106.05-9.4-159.1
            c-0.44-8.13-3.17-13.54-10.03-17.27c-0.88-0.48-1.67-1.12-2.56-1.55c-14.58-6.84-28.97-14.14-43.81-20.36
            c-15.31-6.42-30.87-12.5-47.55-14.54c-10.18-1.25-19.58,1.2-28.64,6.84c4.5,2.45,8.74,4.17,12.3,6.82
            c13.36,9.93,27.12,19.45,39.57,30.45c19.61,17.32,31.82,39.34,34.95,65.49c1.91,15.92-3.91,25.19-22.06,24.84
            c-8.63-0.17-17.31-0.99-25.86-2.22c-17.97-2.59-32.46-10.63-40.79-27.64c-1.46-2.99-3.19-5.85-4.88-8.72
            c-5.83-9.93-13.15-18.42-23.45-23.97c-4.69-2.52-9.5-3.24-14.62,0.05c2.61,1.65,5.37,2.8,8.24,3.39c2.08,0.42,4.4-0.26,6.46,0.2
            c1.86,0.42,3.53,1.74,5.28,2.66c-1.31,1.26-2.4,3.14-3.96,3.69c-16.02,5.61-32,11.37-48.21,16.38
            c-33.38,10.33-63.49,26.7-90.57,48.59c-20.2,16.33-39.97,33.19-59.82,49.95c-2.48,2.09-4.93,4.7-6.25,7.59
            c-2.89,6.34-5.48,12.91-7.32,19.62c-1.05,3.81-1.67,8.63-0.24,12.06c3.23,7.78,7.66,15.09,12.02,22.34
            c1.27,2.11,3.69,3.86,5.97,4.99c9.3,4.58,18.21,4.08,26.71-2.37c24.95-18.93,50.01-37.7,74.99-56.59
            C549.55,631.53,558,624.86,566.51,618.27z M493.2,489.42c0.31-0.11,0.62-0.31,0.92-0.3c0.66,0.02,1.32,0.12,1.97,0.26
            c19.32,4.06,38.21,3.41,56.98-3.55c20.36-7.56,40.99-14.4,61.6-21.29c8.8-2.94,17.45-1.88,25.53,2.81
            c14.2,8.23,25.73,19.18,34.23,33.64c14-13.31,29.39-21.42,49.12-11.01c-0.91-1.64-1.61-2.84-2.62-3.66
            c-14.71-11.96-29.18-24.25-44.29-35.7c-17.94-13.6-37.74-14.68-58.75-7.56c-26.01,8.8-52.11,17.39-78.44,25.16
            c-17.31,5.1-35.19,7.32-53.38,5.12c-1.69-0.2-4.08,1.2-5.37,2.58c-15.63,16.73-24.72,36.93-30.64,58.74
            c-5.92,21.81-7.85,44.23-9.83,66.62c-0.65,7.31-0.1,14.73-0.1,22.77c2.11-1.55,3.75-2.61,5.24-3.86
            c14.06-11.75,28.29-23.3,42.08-35.36c27.33-23.91,58.2-41.52,92.57-53.04c12.31-4.13,24.79-7.74,37.1-11.86
            c6.34-2.12,12.49-4.83,18.73-7.28c-0.09-0.48-0.17-0.97-0.26-1.45c-1.87-0.12-3.74-0.19-5.61-0.37c-2.97-0.3-6.17-0.1-8.81-1.21
            c-2.12-0.89-3.55-3.41-5.29-5.2c2-0.9,3.94-2.37,6.01-2.59c10.25-1.12,17.73,4.66,23.65,11.66c6.51,7.69,11.83,16.42,17.3,24.93
            c5.47,8.51,11.12,16.65,21.03,20.56c16.13,6.37,32.94,8.11,50.04,6.81c7.81-0.59,11.92-4.9,13.3-12.69
            c0.66-3.71,0.83-7.67,0.33-11.4c-1.99-14.77-7.86-28.15-15.66-40.7c-6.17-9.93-19.67-15.48-31.14-13.36
            c-9.41,1.74-16.89,6.82-23.42,13.41c-1.53,1.54-1.98,4.19-2.81,6.37c-1.44,3.8-2.64,7.7-4.3,11.39c-0.33,0.74-2.56,1.29-3.46,0.89
            c-0.77-0.34-1.5-2.36-1.19-3.28c1.05-3.11,1.96-6.59,4.03-8.97c3.75-4.31,2.76-8.3-0.4-11.56c-8.08-8.32-16.13-16.8-25.1-24.09
            c-8.87-7.2-19.56-8.89-30.68-5.2c-13.55,4.5-27.11,8.99-40.6,13.64c-14.25,4.92-27.91,11.75-43.24,13.07
            C517.25,494.35,505.14,493.39,493.2,489.42z M818.27,716.67c1.8,0.22,3.28,0.39,4.76,0.57c9.35,1.13,9.7,0.98,9.99-8.32
            c0.83-26.47,2.45-52.96,2.05-79.42c-0.51-33.46-2.32-66.91-4.33-100.32c-1.07-17.75-3.49-35.44-5.82-53.09
            c-1.11-8.41-2.42-8.66-10.62-6.46c-2.95,0.79-3.62,1.99-3.14,4.9c2.27,13.61,4.39,27.25,6.42,40.91c0.51,3.45,0.43,6.98,0.65,10.47
            c0.21,3.28,0.48,6.55,0.72,9.82c-0.29,0-0.58,0-0.87,0c-2.77-21.46-5.54-42.91-8.4-65.01c-5.55,2.05-9.84,3.63-13.83,5.1
            c0.76,12.82,1.47,25.1,2.22,37.37c1.51,24.77,3.05,49.54,4.56,74.31c1.41,23.11,3.32,46.2,4.05,69.33
            c0.55,17.63-0.45,35.3-0.6,52.96c-0.01,1.67,0.69,4.33,1.81,4.82c2.46,1.08,5.4,1.07,9.61,1.74c1.5-18.37,2.95-36.18,4.41-53.98
            C823.39,680.49,821.5,698.37,818.27,716.67z M481.31,472.19c-7.74-1.22-14.62-2.06-21.39-3.46c-4.53-0.94-7.49,0.59-10.38,3.92
            c-14.04,16.2-23.49,34.84-27.36,55.75c-3.32,17.95-5.38,36.21-6.81,54.43c-1.47,18.73-1.95,37.58-1.97,56.38
            c-0.01,7.65,2.36,15.3,3.64,22.95c0.5-0.09,1-0.18,1.5-0.27c0.14-0.47,0.28-0.94,0.42-1.42c3.82-12.48,5.98-25.83,18.07-33.94
            c0.64-0.43,1.01-1.63,1.07-2.51c1.33-18.74,1.96-37.55,4.01-56.21C445.98,532.78,456.21,500.1,481.31,472.19z M734.78,733.63
            c-5.06-9.37-10.12-17.73-14.17-26.55c-3.6-7.84-9.73-12.56-18.4-12.33c-14.73,0.39-28.1,16.53-25.25,30.96
            c1.08,5.5,3.18,10.81,5.03,16.13c0.42,1.19,1.6,2.71,2.71,2.98C703.47,749.43,719.94,744.06,734.78,733.63z M740.5,727.6
            c15.8-3.78,26.55-15.07,34.64-29.44c0.53-0.95-0.18-3.29-1.09-4.25c-6.03-6.37-11.68-13.32-18.57-18.63
            c-13.74-10.59-25.41-5.31-32.89,8.33c-3.48,6.34-4.83,13.66,0.02,20.32C728.25,711.66,734.14,719.2,740.5,727.6z M683.86,746.62
            c2.22,4.54,4.09,8.22,5.83,11.96c2.63,5.66,5.08,11.4,7.8,17.01c0.49,1.02,1.81,1.89,2.93,2.29c2.33,0.83,4.77,1.4,7.2,1.9
            c12.01,2.46,23.06,1.47,32.32-7.91c10.13-10.26,8.66-29.09-3.13-37.33C721.01,745.53,703.99,751.14,683.86,746.62z M724.49,707.57
            c-0.3,7.51,7.43,19.31,13.21,20.08C732.95,720.42,728.72,713.99,724.49,707.57z M666.52,517.36c0.84,0.37,1.69,0.74,2.53,1.11
            c1.36-3.51,2.72-7.02,4.08-10.52c-0.6-0.25-1.2-0.5-1.8-0.75C669.73,510.57,668.12,513.97,666.52,517.36z"></path>
            <path class="st0" d="M419.28,681.48c-10.78,6.47-21.42,13.18-32.38,19.34c-6.8,3.82-14.01,6.9-21.13,10.11
            c-10.31,4.66-20.16,2.98-28.46-4.12c-7.15-6.12-14.24-12.78-19.46-20.48c-2.54-3.74-1.34-10.48-0.7-15.73
            c0.38-3.1,2.99-1.46,4.45,0.04c4.05,4.17,7.88,8.57,12.11,12.56c2.45,2.32,5.49,4.02,8.3,6.02c5.74-9.24,36.33-218.61,34.61-236.61
            c-4.28,3.21-8.69,5.45-11.65,8.94c-7.54,8.88-16.65,8.83-26.23,5.33c-14.96-5.46-29.76-11.4-44.56-17.31
            c-10.43-4.17-20.75-8.62-31.11-12.95c0.12-0.42,0.23-0.84,0.35-1.25c2.1,0.72,4.26,1.31,6.3,2.17
            c18.25,7.6,36.36,15.53,54.76,22.73c7.83,3.06,16.24,4.72,24.44,6.8c4.16,1.05,7.65-0.35,10.84-3.4c3.71-3.55,7.79-6.76,11.97-9.75
            c1.6-1.14,3.92-1.28,5.91-1.87c0.41,1.99,1.35,4.04,1.13,5.96c-2.29,19.84-4.53,39.69-7.24,59.48
            c-5.01,36.6-10.1,73.19-15.61,109.72c-2.83,18.73-6.38,37.35-10.11,55.93c-1.71,8.5-3.11,9.42-10.57,3.53
            c-4.53-3.58-8.33-8.09-12.44-12.2c-1.23-1.23-2.4-2.51-4.5-4.72c-0.76,7.58-2.2,13.77,3.22,18.87
            c6.86,6.45,13.34,13.38,20.68,19.23c5.73,4.58,13.11,5.78,19.86,2.43c15.6-7.74,30.93-16.04,46.3-24.23
            c3.43-1.83,6.6-4.15,9.88-6.24C418.6,680.36,418.94,680.92,419.28,681.48z"></path>
            <path class="st0" d="M954.45,750.64c-3.51-39.11-7.6-78.18-10.39-117.34c-3.51-49.31-6.02-98.69-8.81-148.06
            c-0.46-8.14-0.22-16.32-0.15-24.48c0.02-2.6,0.58-5.19,1.08-9.41c3.08,2.51,5.65,3.82,7.09,5.91c6.88,9.96,13.45,20.13,20.28,30.47
            c3.88-0.96,8.31-2.06,12.74-3.16c0.14,0.47,0.28,0.94,0.42,1.4c-2.64,0.68-5.27,1.41-7.92,2.02c-3.57,0.82-5.68,2.28-4.29,6.57
            c0.48,1.47-0.43,3.44-0.93,5.11c-0.05,0.16-2.34,0.09-2.51-0.31c-0.82-2.03-2.45-5.08-1.64-6.18c2.9-3.94,0.81-6.7-1.11-9.74
            c-5.15-8.14-10.3-16.27-15.47-24.39c-1.23-1.94-2.54-3.84-3.81-5.75c-0.84,0.45-1.67,0.89-2.51,1.34c0,4.71-0.23,9.42,0.03,14.11
            c3.34,59.33,6.47,118.68,10.26,177.99c2.07,32.38,5.34,64.69,7.99,97.04c0.19,2.27-0.24,4.59-0.4,6.91
            C954.39,750.71,954.45,750.64,954.45,750.64z"></path>
            <path class="st0" d="M971.52,716.29c-2.86-0.91-5.71-1.81-8.57-2.72c0.11-0.46,0.22-0.91,0.33-1.37
            c32.91,6.44,65.81,12.88,98.72,19.31c0.03,0.36,0.06,0.72,0.09,1.08c-1.23,0.08-2.51,0.44-3.68,0.21
            c-27.38-5.39-54.75-10.85-82.13-16.26c-1.6-0.31-3.26-0.26-4.89-0.37C971.39,716.19,971.52,716.29,971.52,716.29z"></path>
            <path class="st0" d="M839.58,712.6c27.54,8.62,55.08,17.25,81.73,25.59c-1.42-0.08-4.23,0.3-6.67-0.46
            c-24.87-7.75-49.68-15.7-74.5-23.6c-0.27-0.09-0.47-0.38-0.7-0.57C839.49,713.24,839.54,712.92,839.58,712.6z"></path>
            <path class="st0" d="M336.75,665.54c-28.47-2.72-56.95-5.44-85.42-8.16c0.06-0.58,0.12-1.16,0.17-1.74
            c28.47,2.72,56.95,5.45,85.42,8.17C336.87,664.39,336.81,664.97,336.75,665.54z"></path>
            <path class="st0" d="M377.65,606.66c2.44-17.66,4.89-35.31,7.33-52.97c0.55,0.08,1.09,0.15,1.64,0.23
            c-2.43,17.66-4.86,35.32-7.28,52.98C378.77,606.82,378.21,606.74,377.65,606.66z"></path>
            <path class="st0" d="M372.46,657.33c-2.66,11.79-5.32,23.59-7.98,35.38c-0.53-0.12-1.06-0.24-1.58-0.36
            c2.62-11.78,5.24-23.56,7.86-35.34C371.33,657.12,371.9,657.23,372.46,657.33z"></path>
            <path class="st0" d="M918.83,485.98c0,10.56,0,21.13,0,31.69c-0.21,0.03-0.43,0.06-0.64,0.09c0-10.56,0-21.12,0-31.68
            C918.4,486.05,918.62,486.02,918.83,485.98z"></path>
            <path class="st0" d="M924.38,606.73c-1.13-10.78-2.26-21.56-3.4-32.33c0.54-0.06,1.08-0.12,1.63-0.18
            c1.16,10.79,2.32,21.58,3.48,32.36C925.52,606.63,924.95,606.68,924.38,606.73z"></path>
            <path class="st0" d="M390.71,445.76c0,9.46,0,18.92,0,28.38c-0.31,0.01-0.63,0.03-0.94,0.04c0-9.47,0-18.94,0-28.4
            C390.09,445.77,390.4,445.77,390.71,445.76z"></path>
            <path class="st0" d="M918.55,470.95c0.82-8.49,1.65-16.99,2.47-25.48c0.54,0.05,1.08,0.1,1.62,0.15
            c-0.82,8.47-1.64,16.95-2.46,25.42C919.65,471.01,919.1,470.98,918.55,470.95z"></path>
            <path class="st0" d="M920.18,536.33c0.83,8.52,1.66,17.04,2.49,25.55c-0.54,0.06-1.07,0.12-1.61,0.17
            c-0.85-8.54-1.7-17.07-2.55-25.61C919.07,536.41,919.63,536.37,920.18,536.33z"></path>
            <path class="st0" d="M390.34,491.37c0,6.43,0,12.86,0,19.29c-0.31,0-0.62,0-0.92,0c0-6.44,0-12.88,0-19.32
            C389.73,491.35,390.03,491.36,390.34,491.37z"></path>
            <path class="st0" d="M373.54,642.41c1.23-6.29,2.46-12.58,3.68-18.86c0.54,0.1,1.07,0.2,1.61,0.3c-1.21,6.27-2.43,12.54-3.64,18.81
            C374.64,642.57,374.09,642.49,373.54,642.41z"></path>
            <path class="st0" d="M930.4,693.61c0.64,6.27,1.29,12.55,1.93,18.82c-0.52,0.06-1.04,0.11-1.56,0.17
            c-0.66-6.27-1.33-12.54-1.99-18.82C929.32,693.73,929.86,693.67,930.4,693.61z"></path>
            <path class="st0" d="M928.49,662.31c0.59,5.63,1.19,11.26,1.78,16.89c-0.51,0.06-1.02,0.13-1.54,0.19
            c-0.65-5.68-1.31-11.36-1.96-17.04C927.34,662.34,927.91,662.32,928.49,662.31z"></path>
            <path class="st0" d="M936.5,749.9c1.88,4.83,3.75,9.67,5.63,14.5c-0.48,0.2-0.97,0.4-1.45,0.59c-1.9-4.82-3.8-9.65-5.7-14.47
            C935.48,750.32,935.99,750.11,936.5,749.9z"></path>
            <path class="st0" d="M388.18,520.48c0,4.35,0,8.69,0,13.04c-0.29,0.01-0.57,0.02-0.86,0.03c0-4.37,0-8.74,0-13.1
            C387.61,520.46,387.89,520.47,388.18,520.48z"></path>
            <path class="st0" d="M932.91,739.11c-0.67-4.38-1.35-8.77-2.02-13.15c0.56-0.09,1.12-0.19,1.68-0.28c0.62,4.4,1.24,8.79,1.85,13.19
            C933.92,738.95,933.42,739.03,932.91,739.11z"></path>
            <path class="st1" d="M724.49,707.57c4.23,6.43,8.46,12.86,13.21,20.08C731.91,726.88,724.18,715.08,724.49,707.57z"></path>
            <path class="st1" d="M666.52,517.36c1.6-3.39,3.21-6.78,4.81-10.17c0.6,0.25,1.2,0.5,1.8,0.75c-1.36,3.51-2.72,7.02-4.08,10.52
            C668.21,518.09,667.36,517.72,666.52,517.36z"></path>
            <path class="st0" d="M644.48,717.27c-1.93-2.51-3.9-5-5.79-7.54c-19.35-25.95-29.1-55.86-35.49-87.07
            c-3.73-18.22-7-36.55-10.28-54.86c-1.94-10.8,2.33-19.21,11.76-24.25c9.77-5.22,20.07-9.42,30.16-14.03
            c0.44-0.2,1.07,0.02,1.77,0.81c-4.85,1.9-9.88,3.44-14.51,5.78c-6.65,3.36-13.2,6.99-19.44,11.05c-6.96,4.52-9.09,11.32-8.18,19.52
            c3.08,27.88,10.29,54.86,17.03,81.97c5.96,23.99,17.73,45.04,32.08,64.85c0.68,0.93,1.36,1.87,2.04,2.8
            C645.23,716.63,644.86,716.95,644.48,717.27z"></path>
            <path class="st0" d="M436.11,689.01c-5.28-10.21-7.43-42.35-3.31-48.72C429.87,656.81,434.44,672.77,436.11,689.01z"></path>
            <path class="st0" d="M468.03,700.36c3.61,11.99,7.22,23.99,10.84,35.98C472.07,725.35,469.61,712.96,468.03,700.36z"></path>
            <path class="st0" d="M478,713.09c5.05,8.37,10.1,16.73,14.86,24.6C488.97,736.39,480.34,723.25,478,713.09z"></path>
            <path class="st0" d="M504.81,747.04c2.46,7.14,5.12,14.85,7.53,21.84C507.8,766.07,503.01,752.5,504.81,747.04z"></path>
            <path class="st0" d="M568.65,808.61c-7.16-4.33-12-10.54-14.62-18.48C558.91,796.29,563.78,802.45,568.65,808.61z"></path>
            <path class="st0" d="M439.01,669.2c1.97,7.35,3.95,14.7,5.92,22.05c-0.51,0.14-1.03,0.28-1.54,0.43c-2-7.34-4-14.68-6-22.03
            C437.93,669.5,438.47,669.35,439.01,669.2z"></path>
            <path class="st0" d="M493.55,718.2c3.89,5.96,7.77,11.91,11.66,17.87c-0.42,0.28-0.85,0.57-1.27,0.85
            c-3.93-5.92-7.86-11.84-11.79-17.76C492.61,718.84,493.08,718.52,493.55,718.2z"></path>
            <path class="st0" d="M529.08,774.36c-5.72-4.13-10.1-9.16-11.74-16.04C521.25,763.66,525.16,769.01,529.08,774.36z"></path>
            <path class="st0" d="M540.71,782.97c2.37,5.97,4.68,11.77,6.99,17.58C543.28,797.25,539.81,788.66,540.71,782.97z"></path>
            <path class="st0" d="M448.39,676.25c1.76,5.31,3.51,10.62,5.27,15.93c-0.48,0.16-0.97,0.33-1.45,0.49
            c-1.76-5.31-3.52-10.61-5.28-15.92C447.41,676.59,447.9,676.42,448.39,676.25z"></path>
            <path class="st0" d="M617.36,475.38c-6.31,7.11-12.62,14.23-18.93,21.34c-0.43-0.37-0.86-0.75-1.29-1.12
            c6.32-7.13,12.65-14.25,18.97-21.38C616.53,474.61,616.95,474.99,617.36,475.38z"></path>
            <path class="st0" d="M633.63,474.19c-5.45,5.8-10.9,11.61-16.35,17.41c0.36,0.35,0.73,0.7,1.09,1.05
            c5.54-5.72,11.07-11.43,16.61-17.15C634.53,475.06,634.08,474.63,633.63,474.19z"></path>
            <path class="st0" d="M660.09,470.75c5.52-3.93,11.04-7.87,16.55-11.8c0.34,0.47,0.68,0.94,1.02,1.4
            c-5.52,3.93-11.04,7.86-16.56,11.79C660.76,471.68,660.43,471.22,660.09,470.75z"></path>
            <path class="st0" d="M641.92,461.23c2.68-5.4,5.36-10.79,8.04-16.19c0.51,0.24,1.02,0.47,1.52,0.71
            c-2.65,5.39-5.31,10.78-7.96,16.17C642.98,461.69,642.45,461.46,641.92,461.23z"></path>
            <path class="st0" d="M662.94,454.08c-4.11,3.61-8.22,7.21-12.33,10.82c-0.06-0.02-0.12-0.05-0.17-0.07
            c3.78-3.94,7.57-7.89,11.35-11.83C662.17,453.36,662.56,453.72,662.94,454.08z"></path>
            <path class="st0" d="M647.29,485.66c-2.56,4.43-5.12,8.86-7.68,13.3c-0.46-0.25-0.91-0.5-1.36-0.74c2.54-4.51,5.09-9.02,7.63-13.53
            C646.34,485.01,646.82,485.33,647.29,485.66z"></path>
            <path class="st0" d="M630.89,490.9c2.3-4.33,4.6-8.65,6.89-12.98c0.52,0.27,1.04,0.53,1.55,0.8c-2.31,4.32-4.63,8.64-6.94,12.96
            C631.9,491.42,631.4,491.16,630.89,490.9z"></path>
            <path class="st0" d="M460.68,475.09c-6.3,12.51-12.69,25.21-18.83,37.39C441.75,506.01,454.98,479.43,460.68,475.09z"></path>
          </g>
        </svg>
        <h3>REFER AND PARTNER WITH US AND WE ASSURE GREAT REWARDS</h3>
      </section>




      <section className="view1">
        <h2 className="text-uppercase view-heading text-center ">
          a nice day to{" "}
          <span
            style={{
              borderBottom: "0.8rem solid var(--yellow)",
              fontFamily: '"Bebas Neue"!important'
            }}
          >
            <a href="https://www.designindiankitchen.com/contact-modular-kitchen-dealers-delhi-gurgaon-india/">
              book with us
            </a>
          </span>
        </h2>
        {/*  <img class='img-fluid' src={view} alt="top-modular-kitchen-company-in-india"/>  */}
      </section>










      <section className="townImage" role="complementary">
        <div className="clouds">
          <img
            className="cloud1"
            alt="kitchen-renovation-service-delhi"
            src="https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/cloud1.png"
            style={{ filter: "invert(0)" }}
          />
          <img
            className="cloud2"
            alt="kitchen-renovation-service-noida"
            src="https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/cloud2.png"
            style={{ filter: "invert(0)" }}
          />
          <img
            className="cloud3"
            alt="kitchen-renovation-service-gurgaon"
            src="https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/cloud3.png"
            style={{ filter: "invert(0)" }}
          />
          <img
            className="cloudCloud"
            alt="kitchen-renovation-service-faridabad"
            src="https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/cloudCloud.png"
            style={{ filter: "invert(0)" }}
          />
          <img
            className="squiggle1"
            alt="kitchen-renovation-service"
            src="https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/squiggle1.png"
            style={{ filter: "invert(0)" }}
          />
          <img
            className="squiggle2"
            alt="modular-kitchen-renovation-service-delhi"
            src="https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/squiggle2.png"
            style={{ filter: "invert(0)" }}
          />
        </div>
        <div className="balloons">
          <img
            className="balloonCloud"
            alt="modular-kitchen-services-delhi"
            src="https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/balloonCloud.png"
            style={{ filter: "invert(0)" }}
          />
          <img
            className="smallBalloon"
            alt="top-modular-kitchen-brand-delhi-gurgaon"
            src="https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/balloonSmall.png"
            style={{ filter: "invert(0)" }}
          />
        </div>
        <img
          className="townImageImg"
          alt="hettich-modular-kitchens-in-delhi-gurgaon-faridabad-noida"
          src="https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/townImage.png"
          style={{ filter: "invert(0)" }}
        />
        <div className="vehicles">
          <img
            className="bus"
            alt="hafele-modular-kitchen-in-delhi-gurgaon-noida-faridabad-india"
            src="https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/bus.png"
            style={{ filter: "invert(0)" }}
          />
          <img
            className="car"
            alt="best-modular-kitchen-company-in-delhi-gurgaon-noida"
            src="https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/car.png"
            style={{ filter: "invert(0)" }}
          />
        </div>
      </section>



    </>
  )
};
export default PostFooter