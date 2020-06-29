const Analytic = require("../models/analytic.model.js");

// Create and Save a new analytic
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a analytic
    const analytic = new Analytic({
      email: req.body.email,
      name: req.body.name,
      active: req.body.active
    });
  
    // Save analytic in the database
    Analytic.create(analytic, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the analytic."
        });
      else res.send(data);
    });
};

// Retrieve all analytics from the database.
exports.findAll = (req, res) => {
    analytic.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving analytics."
        });
      else res.send(data);
    });
};

// Find a single analytic with a analyticId
exports.findOne = (req, res) => {
    Analytic.findById(req.params.analyticId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found analytic with id ${req.params.analyticId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving analytic with id " + req.params.analyticId
          });
        }
      } else res.send(data);
    });
};

// Update a analytic identified by the analyticId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Analytic.updateById(
      req.params.analyticId,
      new Analytic(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found analytic with id ${req.params.analyticId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating analytic with id " + req.params.analyticId
            });
          }
        } else res.send(data);
      }
    );
};

// Delete a analytic with the specified analyticId in the request
exports.delete = (req, res) => {
    Analytic.remove(req.params.analyticId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found analytic with id ${req.params.analyticId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete analytic with id " + req.params.analyticId
          });
        }
      } else res.send({ message: `analytic was deleted successfully!` });
    });
};

// Delete all analytics from the database.
exports.deleteAll = (req, res) => {
    Analytic.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all analytics."
        });
      else res.send({ message: `All analytics were deleted successfully!` });
    });
};