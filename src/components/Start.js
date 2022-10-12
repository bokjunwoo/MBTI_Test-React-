import styled from 'styled-components';
import ButtonOrange from './ButtonOrange';
import { useDispatch } from 'react-redux';
import { next } from '../store/modules/mbti'

const Header = styled.p`
  font-size: 3rem;
`;

const MainImg = styled.img`
  width: inherit;
`;

const SubHeader = styled.p`
  font-size: 1.5rem;
  color: #555;
`;

export default function Start() {
  const dispatch = useDispatch();

  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="메인 이미지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 <br /> MBTI 를 알아 봅시다!
      </SubHeader>
      <ButtonOrange text="테스트 시작" clickEvent={() => dispatch(next())} />
    </>
  );
}
