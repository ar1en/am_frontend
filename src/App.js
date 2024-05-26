import {RootStoreContext, RootStore} from "./shared/store";
import {BrowserRouter as Router } from "react-router-dom";
import {RoutesElement} from "./app/routes";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const rootStore = new RootStore();
    return (
        <RootStoreContext.Provider value={rootStore}>
            <Router>
                <RoutesElement/>
            </Router>
        </RootStoreContext.Provider>
    );
};