import db from '../models/index.js';

// @desc    Get all services
// @route   GET /api/services
// @access  Public
export const getServices = async (req, res) => {
  try {
    const services = await db.Service.findAll({
      where: { isActive: true },
      order: [['order', 'ASC']]
    });
    
    res.status(200).json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get single service by slug
// @route   GET /api/services/:slug
// @access  Public
export const getServiceBySlug = async (req, res) => {
  try {
    const service = await db.Service.findOne({
      where: { 
        slug: req.params.slug,
        isActive: true
      }
    });
    
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    
    res.status(200).json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create new service
// @route   POST /api/services
// @access  Private/Admin
export const createService = async (req, res) => {
  try {
    const { name, slug, description, shortDescription, icon, image, isActive, order } = req.body;
    
    // Check if service with same slug already exists
    const serviceExists = await db.Service.findOne({ where: { slug } });
    if (serviceExists) {
      return res.status(400).json({ message: 'A service with this slug already exists' });
    }
    
    const service = await db.Service.create({
      name,
      slug,
      description,
      shortDescription,
      icon,
      image,
      isActive,
      order
    });
    
    res.status(201).json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update service
// @route   PUT /api/services/:id
// @access  Private/Admin
export const updateService = async (req, res) => {
  try {
    const service = await db.Service.findByPk(req.params.id);
    
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    
    const { name, slug, description, shortDescription, icon, image, isActive, order } = req.body;
    
    // If slug is being changed, check if it already exists
    if (slug !== service.slug) {
      const slugExists = await db.Service.findOne({ where: { slug } });
      if (slugExists) {
        return res.status(400).json({ message: 'A service with this slug already exists' });
      }
    }
    
    // Update fields
    service.name = name || service.name;
    service.slug = slug || service.slug;
    service.description = description || service.description;
    service.shortDescription = shortDescription || service.shortDescription;
    service.icon = icon || service.icon;
    service.image = image || service.image;
    service.isActive = isActive !== undefined ? isActive : service.isActive;
    service.order = order !== undefined ? order : service.order;
    
    await service.save();
    
    res.status(200).json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete service
// @route   DELETE /api/services/:id
// @access  Private/Admin
export const deleteService = async (req, res) => {
  try {
    const service = await db.Service.findByPk(req.params.id);
    
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    
    await service.destroy();
    
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
