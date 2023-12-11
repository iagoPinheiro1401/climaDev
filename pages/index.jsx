import styled from 'styled-components'

import BgImageWhitChildren from '../src/components/layout/BgImageWithChildren/BgImageWhitChildren'

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.white};
  min-width: 500px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`

export default function HomePage () {
  return (
    <div>
      <BgImageWhitChildren>
        <StyledDiv>
          Pagina inicial
        </StyledDiv>
      </BgImageWhitChildren>
    </div>
  )
}