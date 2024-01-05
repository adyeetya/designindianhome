'use client'
import React, { useState } from 'react'

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    number: '',

    date: '',
    FloorPlan: '',
    Purpose: '',
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

  //   const handleSubmit = async (event) => {
  //     event.preventDefault()

  //     const formDataToSend = new FormData()
  //     // formData.append('file', selectedFile)
  //     for (const key in formData) {
  //       formDataToSend.append(key, formData[key])
  //     }

  //     try {
  //       const response = await fetch('http://localhost:3001/upload', {
  //         method: 'POST',
  //         body: formDataToSend,
  //       })

  //       if (response.ok) {
  //         setBtnText('Done')
  //         console.log('File uploaded successfully!')
  //         console.log(
  //           'Form Data to Send:',
  //           Object.fromEntries(formDataToSend.entries())
  //         )
  //       } else {
  //         setBtnText('Something Went Wrong')
  //         console.error('File upload failed.')
  //       }
  //     } catch (error) {
  //       setBtnText('Something Went Wrong')
  //       console.error('Error during file upload:', error)
  //     }
  //   }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formDataToSend = new FormData()
    for (const key in formData) {
      formDataToSend.append(key, formData[key])
    }

    formDataToSend.append('file', selectedFile)

    try {
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
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name:
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              className="form-input"
              onChange={handleChange}
            />

            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600 mt-4"
            >
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-input"
              onChange={handleChange}
            />

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mt-4"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              onChange={handleChange}
            />

            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-600 mt-4"
            >
              Number:
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              className="form-input"
              onChange={handleChange}
            />

            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-600 mt-4"
            >
              Select File:
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="form-input bg-white text-blue-500 border border-blue-500 py-2 px-4 rounded-md shadow-sm tracking-wide"
              onChange={handleFileChange}
            />
          </div>

          {/* Right Column */}
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-600"
            >
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-input-date"
              onChange={handleChange}
            />
            <label
              htmlFor="FloorPlan"
              className="block text-sm font-medium text-gray-600 mt-4"
            >
              Your Floor Plan:
            </label>
            <select
              id="FloorPlan"
              name="FloorPlan"
              className="form-input-select"
              onChange={handleChange}
              defaultValue="1 BHK"
            >
              <option value="1 BHK" selected>
                1 BHK
              </option>
              <option value="2 BHK">2 BHK</option>
            </select>

            <label
              htmlFor="Purpose"
              className="block text-sm font-medium text-gray-600 mt-4"
            >
              Purpose:
            </label>
            <select
              id="Purpose"
              name="Purpose"
              className="form-input-select"
              onChange={handleChange}
              defaultValue="move in"
            >
              <option value="move in" selected>
                Move In
              </option>
              <option value="rent">Rent Out</option>
            </select>

            <label
              htmlFor="requirements"
              className="block text-sm font-medium text-gray-600 mt-4"
            >
              Your requirements *:
            </label>
            <select
              id="requirements"
              name="requirements"
              className="form-input-select"
              onChange={handleChange}
              defaultValue="Bedroom"
            >
              <option value="Bedroom" selected>
                Bedroom
              </option>
              <option value="Kitchen">Kitchen</option>
            </select>
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            {btnText}
          </button>
        </div>
      </form>
    </div>
  )
}

export default FileUploadForm
