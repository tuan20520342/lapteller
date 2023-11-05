import NewsPage from '~/pages/NewsPage';
import VideoPage from '~/pages/VideoPage';
import ChatBotPage from '~/pages/ChatbotPage';

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
];

export default CommonRoutes;
