import React from 'react'
import { Route, Switch } from 'react-router';
import { HomePage, CardPage } from '../pages';


const App = () => {
    return (
        <main role="main" className="conteiner">
            <Switch> {/* делает так что бы всего один роут срабатывал один срабатывает все осталоные игнорятся */}
                <Route
                    path="/"
                    component={HomePage}
                    exact />

                <Route
                    path="/card"
                    component={CardPage} />
            </Switch>

        </main>
    )
}

export default App;