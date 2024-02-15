import express from "express";
import {deleteUser, getAllUser, getSingleUser, updateUser} from "../controller/UserController";
import {deleteDoctor, getAllDoctor, getSingleDoctor, updateDoctor} from "../controller/DoctorController";
import {authenticate, restrict} from "../middleWare/VerifyToken";


const router=express.Router()

router.get("/find/:id",getSingleDoctor)
router.get("/findAll",getAllDoctor)
router.put("/update/:id",authenticate,restrict(["doctor"]),updateDoctor)
router.delete("/delete/:id",authenticate,restrict(["patient"]),deleteDoctor)

//module.exports=router
export default router