const post = require("./post.model");

exports.new = (req, res) => {
  const Post = new post({
    title: req.body.title,
    description: req.body.description
  });

  Post.save()
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
};

exports.getAll = (req, res) => {
  post
    .find()
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
};

exports.delete = (req, res) => {
  post
    .deleteOne({
      _id: req.params.id
    })
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
};

exports.update = (req, res) => {
  post
    .update(
      {
        _id: req.params.id
      },
      {
        $set: {
          title: req.body.title,
          description: req.body.description
        }
      }
    )
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
};

exports.getOne = (req, res) => {
  post
    .find({ _id: req.params.id })
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
};
