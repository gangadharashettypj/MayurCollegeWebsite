const express = require('express');
const Contact = require('../models/contact'); // Make sure to provide the correct path

const router = express.Router();

// POST request to submit an application
router.post('/contact', async (req, res) => {
  try {
    const newContacts = new Contact(req.body);
    await newContacts.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET request to fetch all applications
router.get('/getcontact', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to delete a contact
router.delete('/deletecontact/:id', async (req, res) => {
  try {
    const contactId = req.params.id;

    // Check if the contact exists
    const existingContact = await Contact.findById(contactId);
    if (!existingContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    // Delete the contact
    await Contact.findByIdAndDelete(contactId);

    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Error deleting Message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;  

// const express = require('express');
// const nodemailer = require('nodemailer');
// const Contact = require('../models/contact'); // Make sure to provide the correct path

// const router = express.Router();

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'your_email@gmail.com',
//     pass: 'your_password'
//   }
// });

// // POST request to submit a contact message
// router.post('/contact', async (req, res) => {
//   try {
//     const newContact = new Contact(req.body);
//     await newContact.save();

//     // Send email to admin
//     const mailOptions = {
//       from: 'your_email@gmail.com',
//       to: 'rajeevhr10@gmail.com',
//       subject: `New Contact Form Submission: ${req.body.subject}`,
//       text: `Name: ${req.body.fullName}\nEmail: ${req.body.email}\nSubject: ${req.body.subject}\nMessage: ${req.body.message}`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//       } else {
//         console.log('Email sent:', info.response);
//       }
//     });

//     res.status(201).json({ message: 'Message sent successfully' });
//   } catch (error) {
//     console.error('Error sending message:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Route to fetch all contact messages
// router.get('/getcontact', async (req, res) => {
//   try {
//     const contacts = await Contact.find();
//     res.status(200).json(contacts);
//   } catch (error) {
//     console.error('Error fetching messages:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Route to delete a contact message
// router.delete('/deletecontact/:id', async (req, res) => {
//   try {
//     const contactId = req.params.id;

//     // Check if the contact exists
//     const existingContact = await Contact.findById(contactId);
//     if (!existingContact) {
//       return res.status(404).json({ error: 'Contact not found' });
//     }

//     // Delete the contact
//     await Contact.findByIdAndDelete(contactId);

//     res.status(200).json({ message: 'Message deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting Message:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = router;
