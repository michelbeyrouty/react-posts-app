import React from 'react';
import styled from 'styled-components';

export const HeaderBar: React.FC<{ title: string; subTitle?: string }> = ({ title, subTitle }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      {subTitle && <p>{subTitle}</p>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 0;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
  width: 100%;
`;
