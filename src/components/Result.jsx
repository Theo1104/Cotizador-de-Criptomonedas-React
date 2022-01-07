import styled from "@emotion/styled"

const Container = styled.div`
    color: #FFF;
    font-family: "Lato", sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Image = styled.img`
    display: block;
    width: 120px;
`

const Paragraph = styled.p`
        font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Price = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

const Result = ({result}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result
    return (
        <Container>
            <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Cripto Imagen" />
            <div>
                <Price>El precio es de: <span>{PRICE}</span></Price>
                <Paragraph>El precio mas alto del dia es de: <span>{HIGHDAY}</span></Paragraph>
                <Paragraph>El precio mas bajo del dia es de: <span>{LOWDAY}</span></Paragraph>
                <Paragraph>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Paragraph>
                <Paragraph>Ultima actualización: <span>{LASTUPDATE}</span></Paragraph>
            </div>
        </Container>
    )
}

export default Result
