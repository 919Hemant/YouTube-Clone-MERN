import './ShowCard.css';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';

function ShowCard({ video }) {
  return (
    <>
      <Link to={`/viewing_video/${video.id}`}>
        <div className="item text-white">
          <img 
            src={video.thumbnail} 
            alt={video.title} 
            id='img-size' 
            className='rounded-[8px]'
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg';
            }}
          />
          <div className='flex gap-2 mt-3'>
            <div>
              <PersonIcon className='border border-red-100 rounded-full'/>
            </div>
            <div className='text-[0.8rem]'>
              <h2 className='font-bold'>{video.title}</h2>
              <h2 className='font-light text-[#8a8888] mt-1'>{video.channelName}</h2>
              <div className='flex gap-3 text-[#928e8e]'>
                <span>{video.views}</span>
                <span className="ml-[2px] mr-[-8px]"><CircleIcon sx={{ fontSize: '0.4rem' }} /></span>
                <span>{video.timestamp}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ShowCard; 