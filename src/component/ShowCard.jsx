import './ShowCard.css';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import VerifiedIcon from '@mui/icons-material/Verified';

function ShowCard(props){
    // console.log(props)
    return (
        <>
            <Link to={`/viewing_video/${props.video._id}`}>
                <div className="video-card-item text-white hover:transform hover:scale-105 transition-all duration-300">
                    <div className="thumbnail-container relative overflow-hidden rounded-[12px]">
                        <img 
                            src={props.video.imageIcon} 
                            alt={props.video.description} 
                            id='img-size' 
                            className='rounded-[12px] hover:rounded-none transition-all duration-300 object-cover w-full'
                        />
                        <div className="video-duration absolute bottom-2 right-2 bg-black bg-opacity-80 px-2 py-1 text-xs rounded-md">
                            {props.video.duration || "10:24"}
                        </div>
                    </div>
                    <div className='flex gap-3 mt-3'>
                        <div className="channel-icon">
                            <div className="avatar-container bg-red-600 rounded-full w-9 h-9 flex items-center justify-center">
                                {props.video.channelIcon ? 
                                    <img src={props.video.channelIcon} className="rounded-full w-full h-full" /> : 
                                    <PersonIcon className='text-white' />
                                }
                            </div>
                        </div>
                        <div className='video-info'>
                            <h2 className='font-bold text-[1rem] line-clamp-2'>{props.video.description}</h2>
                            <div className='flex items-center text-[0.85rem] font-light text-[#aaa] mt-1'>
                                <span>{props.video.owner}</span>
                                {props.video.verified && 
                                    <VerifiedIcon sx={{ fontSize: '0.9rem', marginLeft: '4px' }} className="text-[#aaa]" />
                                }
                            </div>
                            <div className='flex items-center gap-1 text-[0.8rem] text-[#aaa]'>
                                <span>{props.video.views}</span>
                                <span className="flex items-center"><CircleIcon sx={{ fontSize: '0.4rem', margin: '0 4px' }} /></span>
                                <span>{props.video.time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default ShowCard;