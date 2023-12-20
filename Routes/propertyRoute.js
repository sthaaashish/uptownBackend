const express = require('express');
const router = express.Router();
const propertyController=require("../controller/propertyController")
const checkFile=require("../middleware/fileCheck")

router.get('/allProperty', propertyController.getAllProperty );
router.post('/addProperty', checkFile.fileCheck, propertyController.addProperties);
router.get('/propertyById/:id', propertyController.getPropertiesById);
router.delete('/delete-property/:id',propertyController.deleteProduct)
router.patch('/update-property/:id',checkFile.updateCheck,propertyController.updateProduct)

module.exports = router;