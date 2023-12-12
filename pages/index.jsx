import styled from 'styled-components'

import BgImageWhitChildren from '../src/components/layout/BgImageWithChildren/BgImageWhitChildren'
import Logo from '../src/components/logo/Logo'
import SearchCity from '../src/components/searchCity/SearchCity'

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.white};
  min-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`

const StyledInput = styled(SearchCity)`
  width: 100%;
  box-sizing: border-box;
`

const InputContainer = styled.div`
  z-index: 100;
  background: none;

  @media(min-width: 750px) {
    width: 150%;
  }
`

export default function HomePage () {
  return (
    <div>
      <BgImageWhitChildren>
        <StyledDiv>
          <Logo showImage type="vertical"/>
          <InputContainer>
            <StyledInput />
          </InputContainer>
        </StyledDiv>
      </BgImageWhitChildren>
    </div>
  )
}