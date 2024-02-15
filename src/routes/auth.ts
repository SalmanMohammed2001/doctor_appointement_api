import express from "express";
import {login, register} from "../controller/AuthController";

const route=express.Router()

route.post("/register",register)
route.post("/login",login)