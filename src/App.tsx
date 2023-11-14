import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '@/router';
import Layout from '@/components/Layout/Layout';

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <AppRoutes />
            </Layout>
        </Router>
    );
};

export default App;
