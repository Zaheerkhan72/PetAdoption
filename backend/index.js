const express = require('express');
const utilRouter = require('./routers/utils');
const UserRouter = require('./routers/userRouter')
const petRouter = require('./routers/petRouter')
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

// initialize express
const app = express();

const port = 5000;

// middleware

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());

app.use('/user', UserRouter);
app.use('/pet', petRouter);
app.use('/util', utilRouter)

app.use(express.static('./uploads'));


// route or endpoint
app.get('/', (req, res) => {
    res.send('Response from express');
});

// add
app.get('/add', (req, res) => {
    res.send('Response from add');
})

const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email provider here (e.g., 'Gmail', 'Outlook')
    auth: {
      user: 'hafsahnaseer233@gmail.com', // Your email address
      pass: 'oqwvpukjljreqasx', // Your email password or app password
    },
  });
  
  // Contact form endpoint
  app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
  
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    try {
      // Setup email data
      const mailOptions = {
        from: email,
        to: 'hafsahnaseer233@gmail.com', // The email address where you want to receive messages
        subject: `Contact Form Submission from ${name}`,
        text: `Message from ${name} (${email}):\n\n${message}`,
      };
  
      // Send email
      await transporter.sendMail(mailOptions);
  
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  // Send email function
const sendEmail = async (adoptionRequest) => {
  try {
    const pet = await Pet.findById(adoptionRequest.petId).populate('ownerId');
    if (!pet) {
      throw new Error('Pet not found');
    }

    const owner = pet.ownerId;
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: owner.email,
      subject: 'New Adoption Request',
      text: `You have a new adoption request for your pet ${pet.name}!\n\nDetails:\nName: ${adoptionRequest.name}\nEmail: ${adoptionRequest.email}\nPhone: ${adoptionRequest.phone}\nAddress: ${adoptionRequest.address}\n\nBest regards,\nPet Adoption Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  } catch (error) {
    console.error('Error in sendEmail function:', error);
  }
};

app.post('/adopt/add', async (req, res) => {
    const adoptionRequest = new AdoptionRequest(req.body);
  
    try {
      await adoptionRequest.save();
      await sendEmail(adoptionRequest); // Send email after saving the request
      res.status(200).send('Adoption request submitted successfully!');
    } catch (error) {
      console.error('Error submitting adoption request:', error);
      res.status(500).send('Failed to submit adoption request.');
    }
  });

  const adoptionSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    petId: String,
  });
  
  // Model
  const AdoptionRequest = mongoose.model('AdoptionRequest', adoptionSchema);

// getall
// update
// delete

app.listen(port, () => {
    console.log('server started');
});