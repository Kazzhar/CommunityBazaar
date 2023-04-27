import React, { useState, useEffect } from 'react';
import { supabase } from '../../../../config/supabaseClient';
import "./comments.css"
import {FaUserCircle} from "react-icons/fa"

function CommentForm(props) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
  async function fetchComments() {
    const { data, error } = await supabase
      .from('products')
      .select('comments')
      .eq('prod_id', props.productId);

    if (error) {
      console.log('Error retrieving comments:', error.message);
    } else {
      const comments = data[0]?.comments || [];
      setComments(comments);
    }
  }

  fetchComments();
}, [props.productId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitted comment:', comment);
    const { data, error } = await supabase
    .from('products')
    .select('comments')
    .eq('prod_id', props.productId)
    // .single();
    console.log(data)
    if (error) {
      console.log('Error retrieving comments:', error.message);
      return;
    }

    if (!comment) {
      return;
    }

    const comments = data[0].comments || [];
    // console.log(comments)
    const newComments = [...comments, comment];
    // console.log(newComments)
    const { error: insertError } = await supabase
    .from('products')
    .update({ comments: newComments })
    .eq('prod_id', props.productId)
    .single();
    if (insertError) {
      console.log('Error inserting comment:', insertError.message);
    } else {
      console.log('Comment inserted successfully:', comment);
    }
    setComment('');
  };

  return (
    <div className='comments-section'>
      <div className="comment-area">
        {/* <label> */}
          <input 
            type="comment-text" 
            className='comment-text'
            value={comment} 
            onChange={(event) => setComment(event.target.value)} />
        {/* </label> */}
        <button 
            className="comment-button"
            type="comment-button" 
            onClick={handleSubmit}>Comment
        </button>
        </div>
        
        <div className='all-comments'>
        {comments.map((comment, index) => (
          <div className="single-comment" key={index}> <FaUserCircle className='comment-icon'/> {comment}</div>
        ))}
        </div>
            
      </div>
  );
}

export default CommentForm;
