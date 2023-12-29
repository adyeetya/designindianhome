'use client'
import React, { useState } from 'react'
import { Stepper, Step, StepLabel, Typography, Button } from '@mui/material'
import Image from 'next/image'
const steps = [
  {
    label: '',
    heading: 'Finally Found Us',
    content:
      'After long searches, you finally reached the right destination, where all works will be done from Source, right from manufacturing modulars to end to interiors & Structures.',
  },
  {
    label: '',
    heading: 'Booking The First Visit - ',
    content:
      'You Book a Visit with Our Modular Coordinator or Architect Coordinator ( if end to end  or Structural/Architectural Consultation ) , very sorry we dont have field running staff to waste your time and ours ☺. *A nominal Adjustable first Visit Charge shall be taken for Either of the meet . ',
  },
  {
    label: '',
    heading: 'Understanding Requirements - ',
    content:
      'We Show you Concepts, understand requirements, & give our expert advices followed by a thorough evaluation. ',
  },
  {
    label: '',
    heading: ' Visit Our Boutique Office',
    content:
      'You Visit Our Boutique Office, we show your the presentation as per understanding of works, show tentative estimates & give further details on design execution. ',
  },
  {
    label: '',
    heading: 'Initiating Designing & Planning ',
    content:
      'We start your detailed designing & planning incl MEP if required, of course it will be hands on Approach. All designing & planning will be at a affordable quote ( mostly its 10% of tentative estimate ) .',
  },
  {
    label: '',
    heading: 'Approvals & Initiating Execution as per Timelines - ',
    content:
      'We start the Modular, End to End Or Structural Works and Deliver as per Assured Time.',
  },
]

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <>
      <div className="flex flex-col md:flex-row m-8">
        {/* Image Section (50% width) */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/stepper-img.webp"
            width={600}
            height={100}
            alt="Demo Image"
            className="w-full h-auto"
          />
        </div>

        {/* Stepper Section (50% width) */}
        <div className="w-full md:w-1/2 mt-4 sm:mt-0">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step, index) => (
              <Step key={index} onClick={() => handleStepChange(index)}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <div className="md:mx-8 my-8">
            <h2 className="text-xl font-semibold text-green-500 mb-4">
              {steps[activeStep].heading}
            </h2>
            <p className="text-sm">{steps[activeStep].content}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default StepperComponent
