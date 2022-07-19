import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { publicLink } from './router'
import Layouts from './Layouts/Layouts'

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    {publicLink.map((route, index) => {
                        let Layout = Layouts
                        let Page = route.component

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
