import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import Home from '~/pages/Home';
import Login from '~/pages/Auth/Login';
import Register from '~/pages/Auth/Register';
import AdminPage from '~/pages/Admin';
import UserDetail from '~/pages/UserDetail';
import { useUserStore } from '~/store/user-store';
import CourseClassidicationPage from '~/pages/Course-Classification';
import ServiceList from '~/pages/Admin/_Main/_List/Services';
import UserList from '~/pages/Admin/_Main/_List/Users';
import JobList from '~/pages/Admin/_Main/_List/Jobs';
import JobTypeList from '~/pages/Admin/_Main/_List/JobTypes';
import ListJobPage from '~/pages/ListJob';
import UserDetailPage from '~/pages/UserDetail';
import JobDetailPage from '~/pages/JobDetail';
import ListJobTypeJobPage from '~/pages/ListJobTypeJob';

// * for user
const ProtectedRoute = () => {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

const RestrictedRoute = () => {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role?.toLowerCase() !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: "user-detail",
    element: <UserDetailPage/>,
  },
  {
    path: "list-job-&-type-job",
    element: <ListJobTypeJobPage/>,
  },
  {
    path: "list-job/:id?",
    element: <ListJobPage/>,
  },
  {
    path: "job-detail/:id?",
    element: <JobDetailPage/>,
  },
  {
    path: '/user',
    element: <ProtectedRoute />,
    children: [
      {
        path: "list-job",
        element: <ListJobPage />,

      },

      {
        path: '/user/detail',
        element: <UserDetail />,
      },
      
    ],
  },
  {
    path: '/admin',
    element: <RestrictedRoute />,
    children: [
      {
        path: '/admin',
        element: <AdminPage />,
        children: [
          {
            path: '',
            element: <UserList />,
          },
          {
            path: '/admin/users',
            element: <UserList />,
          },
          {
            path: '/admin/jobs',
            element: <JobList />,
          },
          {
            path: '/admin/job-types',
            element: <JobTypeList />,
          },
          {
            path: '/admin/services',
            element: <ServiceList />,
          },
        ],
      },
    ],
  },


];

const RouteElements = () => {
  const element = useRoutes(routes);
  return element;
};

export default RouteElements;
