const sql = require("./db.js");

// constructor
const Analytic = function(analytic) {
  this.email = analytic.email;
  this.name = analytic.name;
  this.active = analytic.active;
};

Analytic.create = (newAnalytic, result) => {
  sql.query("INSERT INTO analytics SET ?", newAnalytic, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created analytic: ", { id: res.insertId, ...newAnalytic });
    result(null, { id: res.insertId, ...newAnalytic });
  });
};

Analytic.findById = (analyticId, result) => {
  sql.query(`SELECT * FROM analytics WHERE id = ${analyticId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Analytic: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Analytic with the id
    result({ kind: "not_found" }, null);
  });
};

Analytic.getAll = result => {
  sql.query("SELECT * FROM analytic", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("analytics: ", res);
    result(null, res);
  });
};

Analytic.updateById = (id, analytic, result) => {
  sql.query(
    "UPDATE analytics SET email = ?, name = ?, active = ? WHERE id = ?",
    [analytic.email, analytic.name, analytic.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found analytic with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated analytic: ", { id: id, ...analytic });
      result(null, { id: id, ...analytic });
    }
  );
};

Analytic.remove = (id, result) => {
  sql.query("DELETE FROM analytics WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found analytic with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted analytic with id: ", id);
    result(null, res);
  });
};

Analytic.removeAll = result => {
  sql.query("DELETE FROM analytics", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} analytics`);
    result(null, res);
  });
};

module.exports = Analytic;