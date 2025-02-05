const express = require('express');
const { authorize } = require('../../middlewares/auth');
const { getNearestPosts, createPost, getAllPost,getAllPostmy } = require('../../controllers/post.controller');

const router = express.Router();

router
  .route('/')
  .get(getNearestPosts)
  .post(authorize(), createPost);

  router.get('/all', getAllPost)
  router.route('/myposts').get(authorize('user'), getAllPostmy);

//   .post(authorize(), create);
// router.route('/my').get(authorize(), getMyCharityPools);
// router.route('/admin/approve-and-reject').post(authorize(ADMIN), approveReject);
// router.route('/admin').get(authorize(ADMIN), get);

module.exports = router;
