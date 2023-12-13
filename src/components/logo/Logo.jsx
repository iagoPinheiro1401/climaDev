import styled from "styled-components"

const VerticalText = styled.h1`
    font-size: 80px;
    color: ${props => props.theme.colors.black};
    line-height: 70px;
    margin-left: 220px;
    margin-top: -90px;
`

const HorizontalText = styled.h1`
    font-size: 40px;
`

const PrimaryColor = styled.span`
    color: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    background: none;
`

export default function Logo({ showImage, type }) {
    return(
        <>
            {showImage && <img src="/woman.svg"/>}   
            {type === 'vertical' && 
                <VerticalText>
                    Clima <br/><PrimaryColor>Dev</PrimaryColor>
                </VerticalText>
            }
            {type === 'horizontal' && 
                <HorizontalText>
                    Clima<PrimaryColor>Dev</PrimaryColor>
                </HorizontalText>
            }      
        </>
    )
}

Logo.defaultProps = {
    type: 'horizontal'
}