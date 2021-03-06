import styled from 'styled-components';

export const HeaderWrap = styled.div`
  padding: 15px 0;
  font-size: 18px;

  .top-row {
    display: flex;
    align-items: center;
    
    > span {
      display: flex;
      margin-left: 12px;
    }
    
    .github-button {
      font-size: 16px;
      color: #666;
      padding-left: 10px;
    }
  }

  .brand img {
    padding: 5px 0;
    height: 50px;
    text-decoration: none;
    border-radius: 2px;
  }

  .nav-links {
    a {
      position: relative;
      padding: 0 10px;
      text-decoration: none;
      font-size: 16px;
      color: #666;
    }

    .new-item {
      position: absolute;
      top: 0;
      right: 0;
      display: inline-block;
      padding: 3px;
      background: #e25712;
      border-radius: 100%;
    }
  }
`;
