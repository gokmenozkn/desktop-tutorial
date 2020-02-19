var port = process.env.PORT || 3000;

module.exports = (app) => {
  app.listen(port, () => {
    console.log("Express started on http://localhost:" + port);
  });
};