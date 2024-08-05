import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 30px;
  background-color: #fff;
  color: aqua;
  @media (max-width: 1000px) {
    padding: 70px 15px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #ff5757;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #ff5757;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #000;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #f13544;
    margin-right: 10px;
    font-size: 20px;
    transition: color 0.3s;
  }

  a:hover {
    color: #FFA500;
  }
`;
