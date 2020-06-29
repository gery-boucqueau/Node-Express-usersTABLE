module.exports = app => {
    const analytics = require("../controllers/analytic.controller.js");
  
    // Create a new Analytic
    app.post("/analytics", analytics.create);
  
    // Retrieve all analytics
    app.get("/analytics", analytics.findAll);
  
    // Retrieve a single analytic with analyticId
    app.get("/analytics/:analyticId", analytics.findOne);
  
    // Update a analytic with analyticId
    app.put("/analytics/:analyticId", analytics.update);
  
    // Delete a analytic with analyticId
    app.delete("/analytics/:analyticId", analytics.delete);
  
    // Create a new analytic
    app.delete("/analytics", analytics.deleteAll);
  };
  