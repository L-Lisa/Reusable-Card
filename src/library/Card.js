import React from "react"
import styled from "styled-components/macro"



const Container = styled.div`
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);
padding: 20px;
border-radius: 3px;
background: white;
`;

const Title = styled.h1`
font-size: 1.1rem;
`;
const SecondaryText=styled.h2`
font-size: 1rem;
`;

const Thumbnail = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
background-image: url (${(props) => props.url});
background-size:cover;
margin-right: 7px;
`;
const TitleBar= styled.div`
display: flex;
align-items: center;
`;

const CoverImage = styled.img`

`;

export const Card = ({title, secondaryText, thumbnailurl, coverImage}) => {
return(

    <Container>
         {coverImage && <CoverImage src={coverImage}/>}
        <TitleBar>
            <Thumbnail url={thumbnailurl}/>
            <div>
            {title && <Title>{title}</Title> }
            {secondaryText &&  <SecondaryText>{secondaryText}</SecondaryText>}
            </div>
        </TitleBar>
    </Container>
)
}