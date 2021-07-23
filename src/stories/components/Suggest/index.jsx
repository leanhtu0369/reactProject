import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';


/**
 * Primary UI component for user interaction
 */
export const Suggest = ({ title, users, ...props }) => {
  const [data, setData] = useState(users)

  return (
    <div className="suggest">
      <div className="suggest__header">
        <h3 className="title">{title}</h3>

        <a href="#" className="view_all">Xem tất cả</a>
      </div>

      <div className="suggest__body">
        {
          data.map(user => (
            <div className="user">
              <div className="user--left">
                <div className="user--left__avatar">
                  <img src={user.avatar} alt="" />
                </div>

                <div className="user--left__content">
                  <h4 className="name">{user.name}</h4>

                  <span className="des">{title}</span>
                </div>
              </div>

              <span className="user--right">Theo dõi</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

Suggest.propTypes = {
  title: PropTypes.string,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired
    })
  )
};

Suggest.defaultProps = {
  title: 'Gợi ý cho bạn',
  users: [
    {
      avatar: 'https://via.placeholder.com/150/92c952',
      name: 'tôi'
    },

    {
      avatar: 'https://via.placeholder.com/150/771796',
      name: 'abc xyz'
    },
  ]
};
