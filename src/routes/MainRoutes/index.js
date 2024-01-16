import MainLayout from '~/layouts/MainLayout';
import CommonRoutes from './CommonRoutes';

const MainRoutes = () => {
  return {
    path: '/lapteller/*', // Updated base path
    element: <MainLayout />,
    children: CommonRoutes.map((route) => ({
      ...route,
      path: route.path ? `${route.path}` : '', // Use relative paths
    })),
  };
};

export default MainRoutes;
