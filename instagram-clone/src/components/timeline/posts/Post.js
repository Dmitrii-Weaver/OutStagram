import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Post = (props) => {
    return (
        <div className='post'>
            <div className='post_header'>
                <div className='post_headerAuthor'>
                    <Avatar>{props.user.charAt(0).toUpperCase()}</Avatar>
                    {props.user} • <span>{props.time}</span>
                </div>
                <MoreHorizIcon />
            </div>
            <div className='post_image'>
                <img src={props.image} alt=""></img>
            </div>
            <div className='post_footer'>
                <div className='post_footer_icons'>
                    <div className='post_footer_iconsMain'>
                        <FavoriteBorderIcon className='posticon' />
                        <ChatBubbleOutlineIcon className='posticon' />
                        <TelegramIcon className='posticon' />
                    </div>

                    <div className='post_footer_iconsSave'>
                        <BookmarkBorderIcon className='posticon' />
                    </div>
                </div>
                Liked by {props.likes} people.
            </div>
        </div>
    )
}

export default Post