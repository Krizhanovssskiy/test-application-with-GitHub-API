import styled from 'styled-components';

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
`;

export const SDivFlex = styled.div`
  display: flex;
`;

export const SDivInform = styled(SDivFlex)`
  flex-direction: column;
  justify-content: space-between;
`;

export const SImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 15px;
`;

export const SLink = styled.a`
  color: #000000;
  text-decoration: none;
  cursor: default;
`;

export const SListItem = styled.li`
  list-style-type: none;
  border 1px solid lightgrey;
  margin: 15px 20px 0;
  padding: 15px 0;
`;

export const SHeaderItem = styled.p`
  font: 500 18px/20px OpenSans sans-serif;
  span {
    display: inline;
  color: blue;
  margin-right: 10px;
  }
`;

export const SText = styled(SHeaderItem)`
  font-size: 14px;
`;

export const SLightText = styled(SHeaderItem)`
  color: grey;
  margin-right: 10px
`;

