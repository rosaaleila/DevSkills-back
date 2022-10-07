import express from 'express';

import dotenv from "dotenv";

dotenv.config()

//inicializando app
const app = express();

//habilitando json
app.use(express.json());


import UserRoutes from "../routes/CompanyRoutes/UserCompanyRoutes"
import AddresRoutes from "../routes/CompanyRoutes/AddressRoutes" 
import AuthRoutes from "../routes/CompanyRoutes/AuthRoutes"
import ForgetPassword from "../routes/CompanyRoutes/ForgotPassword"
import ResetPass  from "../routes/CompanyRoutes/ResetPassword"
import GenderRoutes from "../routes/CommonRoutes/GenderRoutes"
import DeveloperRoutes from "../routes/DeveloperRoutes/UserDeveloperRoutes";
import StackRoutes from "../routes/CommonRoutes/StacksRoutes"
import SkillRoutes from "../routes/CommonRoutes/SkillsRoutes"
import Auntenticacao from "../routes/CompanyRoutes/Autenticacao"


app.use('/user', UserRoutes)
app.use('/address', AddresRoutes)
app.use('/auth', AuthRoutes)
app.use('/forgot_pass', ForgetPassword)
app.use('/reset', ResetPass)
app.use('/developer', DeveloperRoutes)
app.use('/gender', GenderRoutes)
app.use('/stack', StackRoutes)
app.use('/skill', SkillRoutes)
app.use('/teste', Auntenticacao)

app.listen(8080, () => {
    console.log("Server running")
})

