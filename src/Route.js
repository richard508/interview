import { Route, Switch } from 'react-router-dom'
import UserPage from './features/users/UserPage'
export const Routes = () => (
    <Switch>
        <Route exact path="/" component={UserPage} />
    </Switch>
  )
  
  export default Routes