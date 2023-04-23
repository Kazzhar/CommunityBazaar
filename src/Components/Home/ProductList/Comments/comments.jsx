import React, { useState } from 'react';
import { supabase } from '../../../../config/supabaseClient';

function CommentForm(props) {
  const [comment, setComment] = useState('');

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
      <div className='comment-area'>
        {/* <label> */}
          <input 
            type="comment-text" 
            value={comment} 
            onChange={(event) => setComment(event.target.value)} />
        {/* </label> */}
        <button 
            type="comment-button" 
            onClick={handleSubmit}>Comment</button>
      </div>
  );
}

export default CommentForm;
