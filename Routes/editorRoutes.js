const express = require('express');
const editorController = require('../controllers/editorController');
const authController = require('./../controllers/authController');
const router = express.Router();

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    editorController.getAllEditors,
  )
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    editorController.careteEditor,
  );

router
  .route('/:id')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    editorController.getEditor,
  )
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    editorController.updateEditor,
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    editorController.deleteEditor,
  );
module.exports = router;
