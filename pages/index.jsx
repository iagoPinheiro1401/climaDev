import styled from 'styled-components'

import BgImageWhitChildren from '../src/components/layout/BgImageWithChildren/BgImageWhitChildren'
import Logo from '../src/components/logo/Logo'
import Input from '../src/components/form/input/Input'

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.white};
  min-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  gap: 50px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`

export default function HomePage () {
  return (
    <div>
      <BgImageWhitChildren>
        <StyledDiv>
          <Logo showImage type="vertical"/>
          <Input placeholder="Digite o nome da cidade"/>
        </StyledDiv>
      </BgImageWhitChildren>
    </div>
  )
}