import {Route, Routes} from 'react-router-dom';
import AuthorizationPage from './components/authorization/view/AuthorizationPage';
import HomePage from './components/home-page/view/HomePage';

export default function ApplicationRoutes() {
    return (
        // Adding comment for test
        // Adding another comment for test

        <Routes>
            <Route>
                <Route path={'/'} element={<AuthorizationPage/>}/>
                <Route path={'/home'} element={<HomePage/>}/>
            </Route>
        </Routes>
    )
}
