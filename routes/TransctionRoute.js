
import express from 'express'
import { addTransection, deleteTransection, editTransection, getAllTransection } from '../controller/TransctionController';

//router object
const TransctionRoute = express.Router();

//routes
//add transection POST MEthod
TransctionRoute.post("/add-transection", addTransection);
//Edit transection POST MEthod
TransctionRoute.post("/edit-transection", editTransection);
//Delete transection POST MEthod
TransctionRoute.post("/delete-transection", deleteTransection);

//get transections
TransctionRoute.post("/get-transection", getAllTransection);

export default TransctionRoute