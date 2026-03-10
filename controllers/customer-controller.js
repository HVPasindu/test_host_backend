const connection = require('../db/db-connection');


const saveCustomer = (req, res) => {
   // res.send('Customer saved Sucessfully...!');
   connection.query('INSERT INTO customers (name, age, city) VALUES (?,?,?)',[req.body.name,req.body.age,req.body.city],(err,rows)=>{
    if(err) throw err;
    res.send(rows);
   })
}

const getCustomer = (req, res) => {
    //res.send('Customer details retrieved successfully...');
    connection.query('SELECT * FROM customers WHERE id=?',[req.params.id],(err,rows)=>{
        if(err) throw err;
        res.send(rows);
    })
}


const updateCustomer = (req, res) => {
    //res.send('Customer updated successfully...');
     const id  = req.params.id;

    connection.query('UPDATE customers SET name=?,age=?,city=? WHERE id = ?',[req.body.name,req.body.age,req.body.city,id],(err,rows)=>{
        if(err) throw err;
        res.send(rows);
    })
}

const deleteCustomer = (req, res) => {
    //res.send('customer deleted successfully...');
    connection.query('DELETE FROM customers WHERE id=?',[req.params.id],(err,rows)=>{
         if(err) throw err;
        res.send(rows);
    })
}

const getCustomers = (req, res) => {
    //res.send("list of customer retrieved successfully...")
    connection.query('SELECT * FROM customers',(err,rows)=>{
        if(err) throw err;
        res.send(rows);
    })
}


const uploadProfile = (req, res) => {
    const customerId = req.params.id;
    const filePath = req.file.path;

    connection.query(
        'INSERT INTO profile_picture (customer_id, file_path) VALUES (?, ?)',
        [customerId, filePath],
        (err, result) => {
            if (err) throw err;
            res.send({
                message: 'Profile uploaded successfully',
                file: filePath
            });
        }
    );
};


module.exports = {
    saveCustomer,
    getCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomers,
    uploadProfile
}