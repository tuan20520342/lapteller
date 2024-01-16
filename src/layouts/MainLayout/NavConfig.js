import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

const navConfig = [
  {
    title: 'Chatbot',
    path: '/lapteller/',
    icon: <SmartToyOutlinedIcon />,
  },
  {
    title: 'News',
    path: '/lapteller/news',
    icon: <FeedOutlinedIcon />,
  },
  {
    title: 'Video',
    path: '/lapteller/videos',
    icon: <OndemandVideoOutlinedIcon />,
  },
];

export default navConfig;
