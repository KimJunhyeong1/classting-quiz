import styled from 'styled-components';
import { Props } from './type';

function NextQuestionButton({ onNextButtonClick, isVisible, isLast }: Props) {
  return (
    <>
      {isVisible && (
        <NextButton onClick={onNextButtonClick}>{isLast ? '종료' : '다음 문항'}</NextButton>
      )}
    </>
  );
}

const NextButton = styled.button`
  margin-top: 5px;
  width: 150px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.main};
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: 10px;
  color: white;
`;

export default NextQuestionButton;
