import { useOutletContext } from "react-router-dom";
import './Shimmer.css';

function Shimmer(){
    // Create array of 12 items for shimmer effect
    const shimmerItems = new Array(12).fill(0);
    // Safely access context with fallback
    const { flag } = useOutletContext() || { flag: true };
    
    return (
        <div id={`${flag ? 'grid' : 'grid-width'}`} className="shimmer-container">
            {shimmerItems.map((_, index) => (
                <div key={index} className="shimmer-card">
                    <div className="shimmer-thumbnail"></div>
                    <div className="shimmer-content">
                        <div className="shimmer-avatar"></div>
                        <div className="shimmer-details">
                            <div className="shimmer-title"></div>
                            <div className="shimmer-channel"></div>
                            <div className="shimmer-stats"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Shimmer; 