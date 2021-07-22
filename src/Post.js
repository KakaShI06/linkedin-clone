import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import React, { forwardRef } from 'react';
import './Post.css';
import InputOptions from './InputOptions';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref= {ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl} />
                <div className="post__info">
                    <h2>{ name }</h2>
                    <p>{description}</p>
                </div>
            </div>
            
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOptions Icon={ThumbUpIcon} title="Like" />
                <InputOptions Icon= {ChatIcon} title="Comment" />
                <InputOptions Icon= {ShareIcon} title="Share" />
                <InputOptions Icon= {SendIcon} title="Send" />
            </div>


        </div>
    )
})

export default Post;
