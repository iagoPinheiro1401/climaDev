import styled from "styled-components"

const StyledFlex = styled.div`
    display: flex;
`

const StyledImage = styled.div`
    background-image: url('${props => props.image}');
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    width: 100%;
    height: 100vh;
`

export default function BgImageWhitChildren({ children, image }) {
    return(
        <StyledFlex>
            {children}
            <StyledImage image={image}/>
        </StyledFlex>
    )
}

BgImageWhitChildren.defaultProps = {
    image: "/background.png"
}