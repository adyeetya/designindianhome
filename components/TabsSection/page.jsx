'use client'
import React, { useState } from 'react'
import { Tabs, Tab, Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'

// Sample data for images
const tabData = [
  // Data for Tab 1
  [
     ' /images/a.png',
     ' /images/b.png',
     ' /images/c.png',
     ' /images/d.png',
  ],
  [
    ' /images/e.png',
    ' /images/f.png',
    ' /images/g.png',
    ' /images/h.png',
  ],
  [
   ' /images/i.png',
   ' /images/j.png',
   ' /images/k.png',
   ' /images/l.png',
  ],
  // Data for Tab 2 (and so on...)
  // ...
]

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: 400,
    fontSize: 24,

    marginRight: theme.spacing(1),
    color: '#4B5563',
    '&.Mui-selected': {
      color: '#68D391',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
)

const ResponsiveTabs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
         <div className="wrapperlatest">
        <h1>End-to-End Interior Solutions</h1>
       <h3>Our Interior services </h3>
      </div>
      <Container maxWidth="md" className="mt-8">
        <Box className=" flex justify-center sm:px-8 py-4 sm:py-8">
          <StyledTabs
            value={value}
            onChange={handleChange}
            allowScrollButtonsMobile
            scrollButtons="auto"
            aria-label="styled tabs example"
            className="flex justify-center"
          >
            <StyledTab label="Exterior Services" />
            <StyledTab label="Interior Services" />
            <StyledTab label="Complete Services" />
          </StyledTabs>
        </Box>

        {/* Display the images based on the selected tab */}
        {tabData.map((tabImages, index) => (
          <TabPanel key={index} value={value} index={index}>
            <div className="grid sm:grid-cols-4 gap-2 mb-8 justify-center">
              {tabImages.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`Image ${imgIndex + 1}`}
                  className="w-60 h-48 rounded-lg"
                />
              ))}
            </div>
          </TabPanel>
        ))}
      </Container>
    </>
  )
}

// Custom TabPanel component to conditionally render content
const TabPanel = ({ children, value, index }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <div>{children}</div>}
    </Box>
  )
}

export default ResponsiveTabs
