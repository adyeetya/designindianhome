const express = require('express')
const multer = require('multer')
const path = require('path')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    )
  },
})

const upload = multer({ storage })

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: 'official@designindianhomes.com',
    pass: 'Sairam151615$',
  },
})

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { body, file } = req

    if (!file) {
      return res.status(400).send('No file uploaded.')
    }

    console.log('Form data received:', body)
    console.log('File received:', file)

    // Send email
    const mailOptions = {
      from: 'official@designindianhomes.com',
      to: 'abhisec_tech@proton.me',
      subject: 'Form Data and File Attachment',
      text: 'Attached is the file and form data you requested.',
      attachments: [
        {
          filename: file.originalname,
          path: file.path,
        },
      ],
      html: `<p><strong>Name:</strong> ${body.name}</p>
             <p><strong>Email:</strong> ${body.email}</p>
             <p><strong>Address:</strong> ${body.address}</p>
             <p><strong>Number:</strong> ${body.number}</p>
             <p><strong>Date:</strong> ${body.date}</p>
             <p><strong>Floor Plan:</strong> ${body.FloorPlan}</p>
             <p><strong>Purpose:</strong> ${body.purpose}</p>
             <p><strong>Requirements:</strong> ${body.requirements}</p>
           
             <p><strong>Attached File:</strong> ${file.originalname}</p>`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email sending failed:', error)
        res.status(500).send('Internal Server Error')
      } else {
        console.log('Email sent:', info.response)
        res
          .status(200)
          .send('Form data and file uploaded, and email sent successfully!')
      }
    })
  } catch (error) {
    console.error('Error during file upload:', error)
    res.status(500).send('Internal Server Error')
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
