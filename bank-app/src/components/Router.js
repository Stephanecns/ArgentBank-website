import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInPage from '../pages/SignInPage.js';
import HomePage from '../pages/HomePage.js';
import UserPage from '../pages/UserPage.js';
import PrivateRoute from '../components/PrivateRoute.js';


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/user" element={<PrivateRoute><UserPage /></PrivateRoute>} />
    </Routes>
  );
};

export default Router;
    //Green code = oui 