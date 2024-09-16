// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import RegisterPage from './RegisterPage';
// import LoginPage from './LoginPage';
// import ForgotPasswordPage from './ForgotPasswordPage';
// import ResetPasswordPage from './ResetPasswordPage';
// import DashboardPage from './DashboardPage';
// import UrlShortenerPage from './UrlShortenerPage';
// import UrlListPage from './UrlListPage';

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/register" component={RegisterPage} />
//         <Route path="/login" component={LoginPage} />
//         <Route path="/forgot-password" component={ForgotPasswordPage} />
//         <Route path="/reset-password/:token" component={ResetPasswordPage} />
//         <Route path="/dashboard" component={DashboardPage} />
//         <Route path="/url-shortener" component={UrlShortenerPage} />
//         <Route path="/url-list" component={UrlListPage} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import ResetPasswordPage from './ResetPasswordPage';
import DashboardPage from './DashboardPage';
import UrlShortenerPage from './UrlShortenerPage';
import UrlListPage from './UrlListPage';
import HomePage from './HomePage';
import PrivateRoute from './PrivateRoute';

function App() {
  console.log('App: Rendering app');
  return (

    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/url/shortener"
          element={
            <PrivateRoute>
              <UrlShortenerPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/url/list"
          element={
            <PrivateRoute>
              <UrlListPage />
            </PrivateRoute>
          }
        />
    </Routes>

  );
}

export default App;

 {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} />
     
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/url-shortener" element={<UrlShortenerPage />} />
      <Route path="/url-list" element={<UrlListPage />} /> */}