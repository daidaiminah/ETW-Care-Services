import db from '../models/index.js';

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await db.Testimonial.findAll({
      where: { isActive: true },
      order: [['createdAt', 'DESC']]
    });
    
    res.status(200).json(testimonials);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get single testimonial
// @route   GET /api/testimonials/:id
// @access  Public
export const getTestimonialById = async (req, res) => {
  try {
    const testimonial = await db.Testimonial.findByPk(req.params.id);
    
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    
    res.status(200).json(testimonial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create new testimonial
// @route   POST /api/testimonials
// @access  Private/Admin
export const createTestimonial = async (req, res) => {
  try {
    const { name, position, content, image, rating, isActive } = req.body;
    
    const testimonial = await db.Testimonial.create({
      name,
      position,
      content,
      image,
      rating,
      isActive
    });
    
    res.status(201).json(testimonial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update testimonial
// @route   PUT /api/testimonials/:id
// @access  Private/Admin
export const updateTestimonial = async (req, res) => {
  try {
    const testimonial = await db.Testimonial.findByPk(req.params.id);
    
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    
    const { name, position, content, image, rating, isActive } = req.body;
    
    // Update fields
    testimonial.name = name || testimonial.name;
    testimonial.position = position || testimonial.position;
    testimonial.content = content || testimonial.content;
    testimonial.image = image || testimonial.image;
    testimonial.rating = rating !== undefined ? rating : testimonial.rating;
    testimonial.isActive = isActive !== undefined ? isActive : testimonial.isActive;
    
    await testimonial.save();
    
    res.status(200).json(testimonial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private/Admin
export const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await db.Testimonial.findByPk(req.params.id);
    
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    
    await testimonial.destroy();
    
    res.status(200).json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
