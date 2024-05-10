import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as authenticatedUserRouter } from './src/routes/authenticatedUserRoutes.mjs';
import { router as userRouter } from './src/routes/userRoutes.mjs';
import { router as loginRouter } from './src/routes/loginRoutes.mjs';
import { router as spotifyRoutes } from './src/routes/spotifyRoutes.mjs';


dotenv.config();

const app = express();
const port=process.env.SERVER_PORT || 3000;
const corsConfig={
    origin:"*",
    credential:true,
    methods:["GET","POST","PUT","PATCH","DELETE","OPTIONS"]
}
app.use(express.json());
app.use("/images",express.static('public'));
app.options("",cors(corsConfig));
app.use(cors(corsConfig));
app.use(userRouter);
app.use(loginRouter);
app.use(authenticatedUserRouter);
app.use(spotifyRoutes);





app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
