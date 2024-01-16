import NewsPage from '~/pages/NewsPage';
import VideoPage from '~/pages/VideoPage';
import ChatBotPage from '~/pages/ChatbotPage';
import StorePage from '~/pages/StorePage';

const CommonRoutes = [
  {
    path: '',
    element: <ChatBotPage />,
  },
  {
    path: 'news',
    element: <NewsPage />,
  },
  {
    path: 'videos',
    element: <VideoPage />,
  },
  {
    path: 'store',
    element: <StorePage />,
  },
];

export default CommonRoutes;
