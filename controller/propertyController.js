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
      image: req.image,
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
