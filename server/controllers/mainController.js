/**
 * GET /
 * Homepage 
*/
exports.homepage = async (req, res) => {
  const locals = {
    title: "Brevet",
    description: "Website Pelatihan Pajak.",
  }
  res.render('index', {
    locals,
    layout: '../views/layouts/front-page'
  });
}


/**
 * GET /
 * About 
*/
exports.about = async (req, res) => {
  const locals = {
    title: "About - Brevet",
    description: "Website Pelatihan Pajak.",
  }
  res.render('about', locals);
}