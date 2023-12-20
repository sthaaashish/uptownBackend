const { default: mongoose } = require("mongoose");

const propertySchema = mongoose.Schema(
    {
      property_name: {
        type: String,
        required: true,
      },
      property_detail: {
        type: String,
        required: true,
      },
      property_price: {
        type: Number,
        required: true,
      },
  
      property_image: {
        type: String,
        required: true,
      },
      property_address: {
        type: String,
        required: true,
      },
      property_floorArea: {
        type: Number,
        required: true,
      },
      property_beds: {
        type: Number,
        required: true,
      },
      property_bathrooms: {
        type: Number,
        required: true,
      },
    },
    { timestamps: true }
  );
  module.exports = mongoose.model("Property", propertySchema);