import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Moment from 'react-moment';

const HeaderContainer = styled.header`
  text-align: center;
  background: var(--dark);
  color: var(--white);
  padding: 20px;

  h1 {
    margin-top: 0;
  }
`;

const Header = () => {
  const [dateToFormat, setdateToFormat] = useState(moment().toDate().getTime());

  const updateTime = () => {
    moment().toDate().getTime();
  };
  setInterval(updateTime, 1000);

  useEffect(() => {
    setdateToFormat(updateTime);
  }, []);

  return (
    <HeaderContainer>
      <h1>TODO APP</h1>
      <Moment
        interval={1}
        unit='seconds'
        format='MMMM Do YYYY &#8226; HH:mm:ss'
        style={{ paddingLeft: '2px', fontSize: '20px' }}>
        {dateToFormat}
      </Moment>
    </HeaderContainer>
  );
};

export default Header;
