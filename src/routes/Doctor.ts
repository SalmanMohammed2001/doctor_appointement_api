import express from "express";
import {deleteUser, getAllUser, getSingleUser, updateUser} from "../controller/UserController";
import {deleteDoctor, getAllDoctor, getSingleDoctor, updateDoctor} from "../controller/DoctorController";


const router=express.Router()

router.put("/update/:id",updateDoctor)
router.delete("/delete/:id",deleteDoctor)
router.get("/find/:id",getSingleDoctor)
router.get("/findAll",getAllDoctor)

//module.exports=router
export default router