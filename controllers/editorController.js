const Editor = require('../models/editorModel');

exports.getAllEditors = async (req, res, next) => {
  try {
    const editor = await Editor.find();

    res.status(200).json({
      message: 'Success',
      data: {
        editor,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: 'failed',
    });
  }
};

exports.careteEditor = async (req, res) => {
  try {
    const deleteAll = await Editor.remove({});
    const editor = await Editor.create(req.body);
    console.log(editor);
    res.status(201).json({
      status: 'success',
      data: {
        editor,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: 'failed',
    });
  }
};

exports.getEditor = async (req, res, next) => {
  const editor = await Editor.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      editor,
    },
  });
};

exports.updateEditor = async (req, res, next) => {
  const item = req.body;
  const editor = await Editor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!editor) {
    return next(new AppError('No editor found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      editor,
    },
  });
};

exports.deleteEditor = async (req, res, next) => {
  const editor = await Editor.findByIdAndDelete(req.params.id);
  console.log(req.params);
  if (!editor) {
    return next(new AppError('No editor found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: editor,
  });
};
