const express =require('express');
const { saveCustomer, getCustomer, updateCustomer, deleteCustomer, getCustomers ,uploadProfile} = require('../controllers/customer-controller');
const router = express.Router();
const upload = require('../middleware/upload');
const customerController = require('../controllers/customer-controller');


router.post('/',saveCustomer);
router.get('/:id',getCustomer);
router.put('/:id',updateCustomer);
router.delete("/:id",deleteCustomer);
router.get('/',getCustomers);

// upload profile photo
router.post(
    '/:id/profile',
    upload.single('profile'),
    uploadProfile
);

module.exports = router;