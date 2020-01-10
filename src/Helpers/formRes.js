module.exports = {
  getCategoryRes: (res, response, status) => {
    const form = {
      status,
      response
    };
    res.json(form);
  },
  getCategoryByIdRes: (res, response, status) => {
    const form = {
      status,
      response
    };
    res.json(form);
  },
  addCategoryRes: (res, response, status) => {
    const form = {
      status,
      response
    };
    res.json(form);
  },
  postTransaction: (res, response, status) => {
    const form = {
      status,
      response
    };
    res.json(form);
  },
  updateCategoryRes: (res, response, status) => {
    const form = {
      status,
      response
    };
    res.json(form);
  },
  deleteCategoryRes: (res, response, status) => {
    const form = {
      status,
      response
    };
    res.json(form);
  },
  showAdminRes: (res, response, status) => {
    const form = {
      status,
      response
    };
    res.json(form);
  },
  addAdminRes: (res, response, status) => {
    const form = {
      status,
      response
    };
    res.json(form);
  },
  updateAdminRes: (res, response, status) => {
    const form = {
      status,
      response
    };
    res.json(form);
  },
  deleteAdminRes: (res, response, status) => {
    const form = {
      status,
      response
    };
    res.json(form);
  },
  error: (res, message) => {
    const form = {
      status: 400,
      message
    };
    res.json(form);
  },
  success: (res, message) => {
    const form = {
      status: 200,
      message
    };
    res.json(form);
  }
};
