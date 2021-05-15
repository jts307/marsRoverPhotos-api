import { Router } from 'express';
import * as Posts from './controllers/post_controller';

const router = Router();

// default index route
router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

router.route('/posts')
  .post(async (req, res) => {
    try {
      // use req.body to await from controller function
      const result = await Posts.createPost(req.body);
      // send back the result
      res.json(result);
    } catch (error) {
      // or catch the error and send back an error
      res.status(500).json({ error });
    }
  })
  .get(async (req, res) => {
    try {
      // await from controller function
      const result = await Posts.getPosts();
      // send back the result
      res.json(result);
    } catch (error) {
      // or catch the error and send back an error
      res.status(500).json({ error });
    }
  });

router.route('/posts/:id')
  .get(async (req, res) => {
    try {
      // await from controller function
      const result = await Posts.getPost(req.params.id);
      // send back the result
      res.json(result);
    } catch (error) {
      // or catch the error and send back an error
      res.status(500).json({ error });
    }
  })
  .put(async (req, res) => {
    try {
      // await from controller function
      const result = await Posts.updatePost(req.params.id, req.body);
      // send back the result
      res.json(result);
    } catch (error) {
      // or catch the error and send back an error
      res.status(500).json({ error });
    }
  })
  .delete(async (req, res) => {
    try {
      // await from controller function
      const result = await Posts.deletePost(req.params.id);
      // send back the result
      res.json(result);
    } catch (error) {
      // or catch the error and send back an error
      res.status(500).json({ error });
    }
  });

export default router;
