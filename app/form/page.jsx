'use client'
import React, { useState } from 'react'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import Footer from '../../components/Footer/Footer'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    number: '',

    date: '',
    FloorPlan: '',
    purpose: '',
    requirements: '',
  })
  const [btnText, setBtnText] = useState('Submit')

  //   const handleFileChange = (event) => {
  //     setFormData({
  //       ...formData,
  //       file: event.target.files[0],
  //     })
  //   }
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formDataToSend = new FormData()
    for (const key in formData) {
      formDataToSend.append(key, formData[key])
    }

    formDataToSend.append('file', selectedFile)

    try {
      setBtnText('Uploading...')
      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        setBtnText('Done')
        console.log('Form data and file uploaded successfully!')
        console.log(
          'Form Data to Send:',
          Object.fromEntries(formDataToSend.entries())
        )
      } else {
        setBtnText('Something Went Wrong')
        console.error('Form data and file upload failed.')
      }
    } catch (error) {
      setBtnText('Something Went Wrong')
      console.error('Error during form data and file upload:', error)
    }
  }

  return (
    <>
      <Omsairam />
      <Header />
      <MaxWidthWrapper className="">
        <div className="mx-auto p-8 bg-amber-50 rounded-lg mt-32 lg:mt-64 mb-16 sm:mx-16">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
              {/* Left Column */}
              <div className="sm:mb-4">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Name:
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    className="form-input bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 rounded-md block w-full appearance-none leading-5 transition duration-150 ease-in-out"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Address:
                  </label>
                  <input
                    required
                    type="text"
                    id="address"
                    name="address"
                    className="form-input bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 rounded-md block w-full appearance-none leading-5 transition duration-150 ease-in-out"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Email:
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    className="form-input bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 rounded-md block w-full appearance-none leading-5 transition duration-150 ease-in-out"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Number:
                  </label>
                  <input
                    required
                    type="tel"
                    id="number"
                    name="number"
                    className="form-input bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 rounded-md block w-full appearance-none leading-5 transition duration-150 ease-in-out"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="file"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Select File:
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    className="form-input bg-white text-green-500 border border-green-500 py-2 px-4 rounded-md shadow-sm tracking-wide block w-full appearance-none leading-5 transition duration-150 ease-in-out"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="mb-4">
                <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Date:
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full form-input-date  border border-gray-300 py-2 px-4 rounded-md leading-5 transition duration-150 ease-in-out focus:outline-none focus:shadow-outline focus:border-blue-500"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="FloorPlan"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Your Floor Plan:
                  </label>
                  <select
                    required
                    id="FloorPlan"
                    name="FloorPlan"
                    className="w-full form-input-select border border-gray-300 py-[6px] px-4 rounded-md leading-5 transition duration-150 ease-in-out focus:outline-none focus:shadow-outline focus:border-blue-500"
                    onChange={handleChange}
                    defaultValue="1 BHK"
                  >
                    <option value="1 BHK" selected>
                      1 BHK
                    </option>
                    <option value="2 BHK">2 BHK</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="purpose"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Purpose:
                  </label>
                  <select
                    required
                    id="purpose"
                    name="purpose"
                    className="w-full form-input-select border border-gray-300 py-[6px] px-4 rounded-md leading-5 transition duration-150 ease-in-out focus:outline-none focus:shadow-outline focus:border-blue-500"
                    onChange={handleChange}
                    defaultValue="Move In"
                  >
                    <option value="Move In" selected>
                      Move In
                    </option>
                    <option value="Rent">Rent Out</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="requirements"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Your requirements *:
                  </label>
                  <select
                    required
                    id="requirements"
                    name="requirements"
                    className="w-full form-input-select border border-gray-300 py-[6px] px-4 rounded-md leading-5 transition duration-150 ease-in-out focus:outline-none focus:shadow-outline focus:border-blue-500"
                    onChange={handleChange}
                    defaultValue="Bedroom"
                  >
                    <option value="Bedroom" selected>
                      Bedroom
                    </option>
                    <option value="Kitchen">Kitchen</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 rounded-full text-white p-2 w-1/2"
              >
                {btnText}
              </button>
            </div>
          </form>
        </div>
      </MaxWidthWrapper>
      <Footer />
    </>
  )
}

export default FileUploadForm
