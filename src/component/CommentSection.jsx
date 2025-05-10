import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CommentSection.css';


const dummyComments = [
  {
    id: 1,
    username: 'TechEnthusiast',
    userAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'This tutorial helped me a lot with my project! Thank you for sharing this knowledge.',
    likes: 42,
    timestamp: '2 weeks ago',
    replies: [
      {
        id: 101,
        username: 'CodeMaster',
        userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: 'Glad it helped! If you have any questions, feel free to ask.',
        likes: 5,
        timestamp: '1 week ago',
      }
    ]
  },
  {
    id: 2,
    username: 'WebDeveloper2022',
    userAvatar: 'https://randomuser.me/api/portraits/women/29.jpg',
    text: 'Great explanation! I was confused about this topic for a long time, but now it makes perfect sense.',
    likes: 28,
    timestamp: '3 days ago',
    replies: []
  },
  {
    id: 3,
    username: 'ProgrammingStudent',
    userAvatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    text: 'Is there a GitHub repo with the full code? I would like to study it in more detail.',
    likes: 15,
    timestamp: '1 day ago',
    replies: [
      {
        id: 201,
        username: 'HelperDev',
        userAvatar: 'https://randomuser.me/api/portraits/men/22.jpg',
        text: 'Not OP, but I found this similar repo: github.com/example/project',
        likes: 7,
        timestamp: '20 hours ago',
      }
    ]
  },
];

const CommentSection = () => {
  const [comments, setComments] = useState(dummyComments);
  const [newComment, setNewComment] = useState('');
  const [showReplies, setShowReplies] = useState({});

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    const comment = {
      id: Date.now(),
      username: 'You',
      userAvatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
      text: newComment,
      likes: 0,
      timestamp: 'Just now',
      replies: []
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
  };

  const toggleReplies = (commentId) => {
    setShowReplies(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };
  
  return (
    <div className="comment-section">
      <h3 className="comments-header">{comments.length} Comments</h3>
      
      <div className="add-comment">
        <div className="user-avatar">
          <img 
            src="https://randomuser.me/api/portraits/lego/1.jpg" 
            alt="Your avatar"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg';
            }}
          />
        </div>
        
        <form onSubmit={handleAddComment} className="comment-form">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="comment-input"
          />
          
          <div className="comment-actions">
            <button type="button" onClick={() => setNewComment('')} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="comment-btn" disabled={!newComment.trim()}>
              Comment
            </button>
          </div>
        </form>
      </div>
      
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="comment-avatar">
              <img 
                src={comment.userAvatar} 
                alt={`${comment.username}'s avatar`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg';
                }}
              />
            </div>
            
            <div className="comment-content">
              <div className="comment-header">
                <Link to="#" className="username">{comment.username}</Link>
                <span className="timestamp">{comment.timestamp}</span>
              </div>
              
              <p className="comment-text">{comment.text}</p>
              
              <div className="comment-footer">
                <button className="like-btn">
                  <i className="fa-regular fa-thumbs-up"></i>
                  {comment.likes > 0 && <span>{comment.likes}</span>}
                </button>
                <button className="dislike-btn">
                  <i className="fa-regular fa-thumbs-down"></i>
                </button>
                <button className="reply-btn">Reply</button>
              </div>
              
              {comment.replies.length > 0 && (
                <div className="replies-section">
                  <button 
                    className="toggle-replies" 
                    onClick={() => toggleReplies(comment.id)}
                  >
                    {showReplies[comment.id] ? 'Hide' : 'View'} {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
                  </button>
                  
                  {showReplies[comment.id] && (
                    <div className="replies">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="reply">
                          <div className="comment-avatar">
                            <img 
                              src={reply.userAvatar} 
                              alt={`${reply.username}'s avatar`}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg';
                              }}
                            />
                          </div>
                          
                          <div className="comment-content">
                            <div className="comment-header">
                              <Link to="#" className="username">{reply.username}</Link>
                              <span className="timestamp">{reply.timestamp}</span>
                            </div>
                            
                            <p className="comment-text">{reply.text}</p>
                            
                            <div className="comment-footer">
                              <button className="like-btn">
                                <i className="fa-regular fa-thumbs-up"></i>
                                {reply.likes > 0 && <span>{reply.likes}</span>}
                              </button>
                              <button className="dislike-btn">
                                <i className="fa-regular fa-thumbs-down"></i>
                              </button>
                              <button className="reply-btn">Reply</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection; 