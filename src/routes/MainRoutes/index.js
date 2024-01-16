import MainLayout from '~/layouts/MainLayout';
import CommonRoutes from './CommonRoutes';

const MainRoutes = () => {
  return {
    path: '/lapteller/',
    element: <MainLayout />,
    children: CommonRoutes.map((route) => ({
      ...route,
      path: route.path ? `${route.path}` : '',
    })),
  };
};

export default MainRoutes;
