const express = require('express');
const router = express.Router();
const PropertyRoutes=require("../controller/propertyController")
const checkFile=require("../middleware/fileCheck")

router.get('/allProperty', PropertyRoutes.getAllProperty );
router.post('/addProperty', checkFile.fileCheck, PropertyRoutes.addProperties);
router.get('/propertyById/:id', PropertyRoutes.getPropertiesById);


module.exports = router;