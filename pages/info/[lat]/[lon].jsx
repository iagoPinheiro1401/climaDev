import styled from "styled-components"

import Navbar from "../../../src/components/navbar/navbar"
import Container from "../../../src/components/layout/container/Container"
import ClimaCard from "../../../src/components/climaCard/ClimaCard"

const Body = styled.div`
    background-color: ${props => props.theme.colors.grey};
    min-height: 100vh;
`

const Content = styled.div`
    padding: 80px 0;
    background: none;
`

const Text = styled.p`
    font-size: 20px;
    font-weight: bold;
    background: none;
    padding: 0;
    margin: 0;
`

const CityName = styled.h2`
    font-size: 40px;
    background: none;
    padding: 0;
    margin: 0;  
`

const InfoContainer = styled.div`
    background: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 100px;
`

export default function InfoPage() {
    return(
        <>
            <Navbar/>
            <Body>
                <Container>
                    <Content>
                        <Text>Previsão do tempo para</Text>
                        <CityName>Iguatu, Ce, Brasil</CityName>
                        <InfoContainer>
                            <ClimaCard/>
                            <ClimaCard/>
                            <ClimaCard/>
                        </InfoContainer>
                    </Content>
                </Container>
            </Body>
        </>
    )
}