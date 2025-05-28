import db from '../models/index.js';
import { sendEmail, generateContactEmailHTML } from '../utils/nodemailer.js';

// @desc    Submit a contact form
// @route   POST /api/contacts
// @access  Public
export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, message, subject } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please provide name, email, and message' });
    }
    
    // Save the contact to the database
    const contact = await db.Contact.create({
      name,
      email,
      phone,
      message,
      subject,
      status: 'new',
      isRead: false
    });
    
    // Send confirmation email to the user
    const confirmationEmailText = `
Dear ${name},

Thank you for contacting ETW Care Services. We have received your message with the following details:

Subject: ${subject || 'General Inquiry'}
Message: ${message}

We will get back to you shortly. If you have any urgent matters, please call us directly.

Best regards,
ETW Care Services Team
    `;
    
    // Send notification email to admin
    const adminNotificationText = `
New Contact Form Submission:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'General Inquiry'}
Message: ${message}
    `;
    
    // Handle emails separately to ensure database save happens even if emails fail
    try {
      // Always prioritize saving to database first, then handle emails
      
      // First send admin notification - this usually works reliably
      try {
        const adminEmailInfo = await sendEmail(
          process.env.EMAIL_FROM, 
          'New Contact Form Submission', 
          adminNotificationText
        );
        console.log(`Admin notification sent to ${process.env.EMAIL_FROM}`);
      } catch (adminEmailError) {
        console.error('Error sending admin notification:', adminEmailError);
        // Continue even if admin email fails
      }
      
      // Wait a brief moment before sending the user email to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Then try to send user confirmation email
      try {
        // Generate HTML email for the user
        const htmlEmail = generateContactEmailHTML({ name, subject, message });
        
        // Try a simpler email first without HTML to see if that works
        const userEmailInfo = await sendEmail(
          email, 
          'Thank you for contacting ETW Care Services', 
          confirmationEmailText
        );
        
        console.log(`Confirmation email sent to ${email}`);
      } catch (userEmailError) {
        console.error(`Failed to send confirmation to ${email}:`, userEmailError);
        // User email failed but admin was notified, so we can still consider this a success
      }
    } catch (emailError) {
      console.error('Error in email sending process:', emailError);
      // We continue even if all emails fail - this ensures the contact is still saved to DB
    }
    
    res.status(201).json({
      success: true,
      message: 'Your message has been submitted successfully. We will contact you soon.',
      id: contact.id
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get all contacts
// @route   GET /api/contacts
// @access  Private/Admin
export const getContacts = async (req, res) => {
  try {
    const contacts = await db.Contact.findAll({
      order: [['createdAt', 'DESC']]
    });
    
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get single contact
// @route   GET /api/contacts/:id
// @access  Private/Admin
export const getContactById = async (req, res) => {
  try {
    const contact = await db.Contact.findByPk(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    
    // Mark as read if not already
    if (!contact.isRead) {
      contact.isRead = true;
      await contact.save();
    }
    
    res.status(200).json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update contact status
// @route   PUT /api/contacts/:id
// @access  Private/Admin
export const updateContactStatus = async (req, res) => {
  try {
    const contact = await db.Contact.findByPk(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    
    const { status } = req.body;
    
    if (!status || !['new', 'contacted', 'resolved'].includes(status)) {
      return res.status(400).json({ message: 'Please provide a valid status (new, contacted, resolved)' });
    }
    
    contact.status = status;
    await contact.save();
    
    res.status(200).json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete contact
// @route   DELETE /api/contacts/:id
// @access  Private/Admin
export const deleteContact = async (req, res) => {
  try {
    const contact = await db.Contact.findByPk(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    
    await contact.destroy();
    
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
