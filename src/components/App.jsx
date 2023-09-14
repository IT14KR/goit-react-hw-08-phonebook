import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/selectors';

import { lazy, useEffect } from 'react';
import { refreshUser } from './redux/auth/operation';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRout';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRout';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresh ? (
    <p>Refreshing...</p>
  ) : (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/contacts" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
