import { Switch, Route } from 'react-router';

import EssayCorrection from "./pages/EssayCorrection";
import SignIn from "./pages/SignIn";
import SubmitEssay from "./pages/SubmitEssay";

export default function Routes() {
  return (
    <Switch>
        <Route path='/' component={SignIn} exact />
        <Route path='/correction' component={EssayCorrection} />
        <Route path='/submit' component={SubmitEssay} />
    </Switch>
  )
}
