import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landin from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landin}/>
                <Route path='/app' component={OrphanagesMap}/>

                <Route path='/orphanages/create' component={CreateOrphanage}/>
                <Route path='/orphanages/:id' component={Orphanage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;