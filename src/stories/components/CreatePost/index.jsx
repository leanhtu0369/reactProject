import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Picture from '../../assets/picture.svg';
import UserTag from '../../assets/userTag.svg';
import HappyIcon from '../../assets/happyIcon.svg';

import './style.scss';

/**
 * Primary UI component for user interaction
 */
export const CreatePost = ({ title, user, ...props }) => {
  const utility = [
    {
      icon: Picture,
      name: 'Ảnh/Video'
    },

    {
      icon: UserTag,
      name: 'Gắn thẻ bạn bè'
    },

    {
      icon: HappyIcon,
      name: 'Cảm xúc/Hoạt động'
    }
  ]

  return (
    <div className="create-post">
      <h3 className="create-post__title">{title}</h3>

      <div className="create-post__body">
        <div className="create-post__body__status">
          <div className="user-avatar">
            <img src={user.avatar} alt="" />
          </div>
 
          <textarea name="" id="" rows="5" 
            placeholder={`${user.gender ? 'Anh' : 'Chị'} ${user.name} ơi, ${user.gender ? 'anh' : 'chị'} đang nghĩ gì thế?`}
          >

          </textarea>
        </div>

        <div className="create-post__body__utility">
          {
            utility.map((item, index) => (
              <div key={index} className="utility-item">
                <img src={item.icon} alt="" className="icon" />
                <span className="name">{item.name}</span>
              </div>
            ))
          }

          <div className="utility-item">
            <span className="name">....</span>
          </div>
        </div>
      </div>
    </div>
  );
};

CreatePost.propTypes = {
  title: PropTypes.string,
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    gender: PropTypes.bool.isRequired
  })
};

CreatePost.defaultProps = {
  title: 'Tạo bài viết',
  user: {
      avatar: 'https://via.placeholder.com/150/92c952',
      name: 'tôi',
      gender: 1
    }
};
