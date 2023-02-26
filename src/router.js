import { Router } from 'express';
import convertImage from './services/cloudinary';

const router = Router();

// default index route
router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

router.get('/convertImage', convertImage);

export default router;
