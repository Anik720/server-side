const Article = require('../models/articlesModel');
const AppError = require('./../utils/appError');
exports.getAllArticle = async (req, res, next) => {
  try {
    const article = await Article.find();

    res.status(200).json({
      message: 'Success',
      data: {
        article,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: 'failed',
    });
  }
};

exports.careteArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        article,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: 'failed',
    });
  }
};

exports.getArticle = async (req, res, next) => {
  const article = await Article.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      article,
    },
  });
};

exports.updateArticle = async (req, res, next) => {
  console.log(req.params.id);

  const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!article) {
    return next(new AppError('No article found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      article,
    },
  });
};

exports.deleteArticle = async (req, res, next) => {
  const article = await Article.findByIdAndDelete(req.params.id);
  console.log(req.params);
  if (!article) {
    return next(new AppError('No article found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: article,
  });
};
