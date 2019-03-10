import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #ffffff;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = props => {

  const size = 100;
  return(
    <LoaderWrapper>
      <Loader
        type="Oval"
        color="#00BFFF"
        height={size}
        width={size}
      />
    </LoaderWrapper>
  )
}

export default Spinner