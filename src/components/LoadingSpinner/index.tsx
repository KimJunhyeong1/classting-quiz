import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

function LoadingSpinner() {
  return (
    <Wrapper>
      <ClipLoader size={80} color={'#00c795'} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default LoadingSpinner;
