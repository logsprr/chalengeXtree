import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from '../pages/Form/index.js';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Form} />
            <Route path="*" component={() => <h1>Erro 404</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes;