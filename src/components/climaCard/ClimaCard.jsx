import styled from "styled-components"

const StyledClimaCard = styled.div`
    background: ${props => props.theme.colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    border-radius: 10px;
    width: 350px;
    padding: 15px;
`

const Tile = styled.h6`
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    padding: 0;
    margin: 0;
`

const BasicInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const BasicInfoImg = styled.img`
    width: 100px;
    height: 100px;
`

const BasicInfoText = styled.div`
    text-align: center;
    flex: 1;
`

const InfoLine = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding: 10px 15px;
`

const InfoTemp = styled.span`
    font-weight: 700;

    ${props => props.blue  && 'color: #00c9f5'}
    ${props => props.red  && 'color: #ff0000'}
`

export default function ClimaCard({ title, icon, description, temp, feels, max, min}) {
    return(
        <StyledClimaCard>
            <Tile>{title}</Tile>
            <BasicInfo>
                <BasicInfoImg src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
                <BasicInfoText>{description}</BasicInfoText>
            </BasicInfo>
            <InfoLine>
                Temperatura<InfoTemp>{temp}ºC</InfoTemp>
            </InfoLine>
            <InfoLine>
                Sensação<InfoTemp>{feels}ºC</InfoTemp>
            </InfoLine>
            <InfoLine>
                Mínima<InfoTemp blue>{min}ºC</InfoTemp>
            </InfoLine>
            <InfoLine>
                Máxima<InfoTemp red>{max}ºC</InfoTemp>
            </InfoLine>
        </StyledClimaCard>
    )
}