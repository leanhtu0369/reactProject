import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Setting from '../../assets/setting.svg';
import List from '../../assets/list.svg';
import Grid from '../../assets/grid.svg';

/**
 * Primary UI component for user interaction
 */
export const Post = ({ title, control, ...props }) => {
  const [activeMode, setActiveMode] = useState(0)

  const viewMode = [
    {
      nameMode: 'list',
      icon: List,
      title: 'Xem theo danh sách'
    },

    {
      nameMode: 'grid',
      icon: Grid,
      title: 'Xem theo cột'
    }
  ]

  const changeMode = idMode => {
    setActiveMode(idMode)
  }

  return (
    <div className="post">
      <div className="post__header">
        <h3 className="post__header__title">{title}</h3>

        <div className="post__header__control">
          {
            control.map((item, index) => (
              <div 
                key={index} 
                className="post-control"
              >
                <img src={Setting} alt="" className="icon" />
                <span className="name">{item}</span>
              </div>
            ))
          }
        </div>
      </div>

      <div className="post__view-mode">
        {
          viewMode.map((item, index) => (
            <div 
              key={index} 
              className={`mode ${item.nameMode} ${index === activeMode ? 'active' : ''}`}
              onClick={() => changeMode(index)}
            >
              {/* <img src={item.icon} alt="" className="icon" /> */}
              <div className="icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="name">{item.title}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  control: PropTypes.array
};

Post.defaultProps = {
  title: 'Bài viết',
  control: ['Bộ lọc', 'Quản lý bài viết']
};
