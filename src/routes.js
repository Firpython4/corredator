import {EssayCorrection} from "./pages/EssayCorrection";
import SignIn from "./pages/SignIn";
import SubmitEssay from "./pages/SubmitEssay";

export const routes = [
     {
         path: "/",
         isPathExact: true,
         component: SignIn,
         accessProvider: () => true
     },
     {
        path: "/login",
        isPathExact: true,
        component: EssayCorrection,
        accessProvider: () => true
     },
    {
        path: "/submit",
        isPathExact: true,
        component: SubmitEssay,
        accessProvider: () => true
    }
]