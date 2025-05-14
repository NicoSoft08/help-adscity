import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// layouts
import { HelpLayout } from './layouts/help';
import AccountFAQs from './pages/public/AccountFAQs';
import AnnounceFAQs from './pages/public/AnnounceFAQs';
import SecurityAdvices from './pages/public/SecurityAdvices';
import PubsFAQs from './pages/public/PubsFAQs';
import StoreFAQs from './pages/public/StoreFAQs';
import HelpCategory from './pages/public/HelpCategory';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HelpLayout />}>
                    <Route path="/:category" element={<HelpCategory />} />
                    <Route path="/:category/:slug" element={<HelpCategory />} />
                </Route>
            </Routes>
        </Router>
    );
};
