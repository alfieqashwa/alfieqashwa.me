import styled from '@emotion/styled';
import mediaqueries from '@narative/gatsby-theme-novela/src/styles/media';

const Container = styled.div`
  overflow: scroll;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding: 5px;
  font-size: 13px;
  margin: 15px auto 50px;
  border-radius: 5px;

  ${mediaqueries.desktop`
      left: -26px;
    `};

  ${mediaqueries.tablet`
      max-width: 526px;
      padding: 20px 20px;
      left: 0;
    `};

  ${mediaqueries.phablet`
      border-radius: 0;
      margin: 0 auto 25px;
      padding: 25px 20px;
      overflow: initial;
      width: unset;
      max-width: unset;
      float: left;
      min-width: 100%;
      overflow: initial;
      position: relative;
    `};
`;

export default Container;
