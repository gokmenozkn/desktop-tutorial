module.exports = {
  notFound: (req, res) => {
    res.status(404).render('404');
  },
  internalServer: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500');
  }
}