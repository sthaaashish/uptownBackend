const Property = require("../model/Property");
const fs = require("fs");


module.exports.getAllProperty = async (req, res) => {
  try {
    const properties = await Property.find({});
    return res.status(200).json(properties);
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: `${err}`,
    });
  }
};
module.exports.getPropertiesById = async (req, res) => {
  try {
    const properties = await Property.find({ _id: req.params.id });
    return res.status(200).json(properties);
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: `${err}`,
    });
  }
};
module.exports.addProperties = async (req, res) => {
  const {
    property_name,
    property_address,
    property_bathrooms,
    property_beds,
    property_floorArea,
    property_detail,
    property_price,
  } = req.body;
  try {
    await Property.create({
      property_address,
      property_bathrooms,
      property_beds,
      property_floorArea,
      property_detail,
      property_name,
      property_price,
      property_image: req.property_image,
    });
    return res.status(200).json({
      status: "sucess",
      message: "successfully created",
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: `${err}`,
    });
  }
};
module.exports.deleteProduct = async (req, res) => {
  const { image } = req.body;
  try {
    await Property.findByIdAndDelete({ _id: req.params.id });

    fs.unlink(`.${image}`, (err) => {});

    if (err) {
      return res.status(500).json({
        status: "error",
        message: "Failed to delete the file",
        error: err.message,
      });
    }
    return res.status(200).json({
      status: "success",
      message: `successfully deleted`,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: `${err}`,
    });
  }
};

module.exports.updateProperty = async (req, res) => {
  const {
    property_address,
    property_bathrooms,
    property_beds,
    property_floorArea,
    property_detail,
    property_name,
    property_price,
  } = req.body;

  try {
    if (req.property_image) {
      await Property.findOneAndUpdate(
        { _id: req.params.id },
        {
          property_address,
          property_bathrooms,
          property_beds,
          property_floorArea,
          property_detail,
          property_name,
          property_price,
          property_image: req.property_image || null,
        }
      );
    } else {
      await Property.findOneAndUpdate(
        { _id: req.params.id },
        {
          property_address,
          property_bathrooms,
          property_beds,
          property_floorArea,
          property_detail,
          property_name,
          property_price,
        }
      );
    }
    return res.status(200).json({
      status: "success",
      message: "successfully updated",
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: `${err}`,
    });
  }
};






