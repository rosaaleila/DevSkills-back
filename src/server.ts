import express from 'express';

import dotenv from "dotenv";

import cors from "cors";

dotenv.config()

//inicializando app
const app = express();

//habilitando json
app.use(express.json());

app.use(cors())

import UserRoutes from "../routes/CompanyRoutes/UserCompanyRoutes"
import AddresRoutes from "../routes/CompanyRoutes/AddressRoutes" 
import ForgetPassword from "../routes/CompanyRoutes/ForgotPassword"
import ResetPass  from "../routes/CompanyRoutes/ResetPassword"
import GenderRoutes from "../routes/CommonRoutes/GenderRoutes"
import DeveloperRoutes from "../routes/DeveloperRoutes/UserDeveloperRoutes";
import StackRoutes from "../routes/CommonRoutes/StacksRoutes"
import SkillRoutes from "../routes/CommonRoutes/SkillsRoutes"
import PhoneRoutes from "../routes/CompanyRoutes/PhoneCompanyRoutes"
import UserCompanyController from "../routes/CompanyRoutes/find"
import AuthRoutes from "../routes/CompanyRoutes/AuthRoutes"
import AdminRoutes from "../routes/AdminRoutes/UserAdminRoutes"
import Test from "../routes/TestRoutes/TestRouter"

app.use('/company', UserRoutes)
app.use('/user', UserRoutes)
app.use('/test', Test)
app.use('/address', AddresRoutes)
app.use('/forgot_pass', ForgetPassword)
app.use('/reset', ResetPass)
app.use('/developer', DeveloperRoutes)
app.use('/gender', GenderRoutes)
app.use('/stack', StackRoutes)
app.use('/skill', SkillRoutes)
app.use('/phone', PhoneRoutes)
app.use('/find', UserCompanyController)
app.use('/auth', AuthRoutes)
app.use('/admin', AdminRoutes)

app.listen(process.env.PORT || 4041, () => {
    console.log("Server running")
})
