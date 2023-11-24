import NewsPage from '~/pages/NewsPage';
import VideoPage from '~/pages/VideoPage';
import ChatBotPage from '~/pages/ChatbotPage';
import PageNotFound from '~/pages/PageNotFound';

const CommonRoutes = [
  {
    path: '/',
    element: <NewsPage />,
  },
  {
    path: '/videos',
    element: <VideoPage />,
  },
  {
    path: '/chatbot',
    element: <ChatBotPage />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];

export default CommonRoutes;
