import styled from "styled-components";

export const EachSlideEffect = styled.div`
  background-size: cover;
  align-items: center;
  display: flex;
  height: 550px;
  justify-content: center;
  background-image: ${ (props) => `url(${props.slideimage})` };
`;

export const CustomIndicator = styled.div`
  cursor: pointer;
  width: 15px;
  height: 15px;
  background: #666;
  border-radius: 50%;
  margin: -45px 10px 5px 5px;
  transition: background 0.3s;
  z-index: 10;

  &.active {
    background: #fff;
  }
`;
