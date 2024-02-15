import express from "express";
import {deleteUser, getAllUser, getSingleUser, updateUser} from "../controller/UserController";


const router=express.Router()

router.put("/update/:id",updateUser)
router.delete("/delete/:id",deleteUser)
router.get("/find/:id",getSingleUser)
router.get("/findAll",getAllUser)

//module.exports=router
export default router