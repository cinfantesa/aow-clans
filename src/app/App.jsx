import '../fake-db'
import React, {useEffect} from 'react'
import { Store } from './redux/Store'
import {Provider} from 'react-redux'
import { AuthProvider } from 'app/contexts/JWTAuthContext'
import { Routes, Route, Navigate, useRoutes } from 'react-router-dom'
import { SettingsProvider } from 'app/contexts/SettingsContext'
import { MatxTheme } from 'app/components'
import { AllPages } from './routes/routes'
import {loadSeasons} from './redux/actions/DashboardActions';
let loaded = false;

const App = () => {
    const all_pages = useRoutes(AllPages())

    useEffect(() => {
        if (!loaded) {
            Store.dispatch(loadSeasons());
            loaded = true;
        }
    });

    return (
        <Provider store={Store}>
            <SettingsProvider>
                <MatxTheme>
                    <AuthProvider>
                        {all_pages}
                        <Routes>
                            <Route path='/' element={<Navigate to="/dashboard/default" />} />
                        </Routes>
                    </AuthProvider>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
}

export default App
