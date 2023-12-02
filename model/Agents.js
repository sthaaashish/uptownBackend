const { default: mongoose } = require("mongoose");

const agentsSchema = mongoose.Schema(
    {
        fullname: {
          type: String,
          required: true,
          min: (6, "Too short"),
          max: [30, "Too long"],
        },
        email: {
          type: String,
          required: true,
          unique: true,
          
        },
        password: {
          type: String,
          required: true,
        },
      propertyListing:{
        type:Number,
        required:true,

      },
      properties:{
        ref: "property",
        type: mongoose.SchemaTypes.ObjectId,
        
      }
      },
      { timestamps: true }
  );
  module.exports = mongoose.model("Agents", agentsSchema);