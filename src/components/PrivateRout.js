import { useSelector } from 'react-redux';
import { selectIsLogin, selectIsRefreshing } from './redux/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLogin);
  const isRefresh = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLogin && !isRefresh;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
