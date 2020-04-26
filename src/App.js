import React from 'react'
import {Card} from "library/Card"
import styled from "styled-components/macro"

const ThinnerCard = styled(Card)`
width: 400px;
`


export const App = () => {
  return (
    <div>
     <ThinnerCard
     coverImage = "https://www.fillmurray.com/500/300/"
     thumbnailurl= "https://www.fillmurray.com/100/100/"
     title="Title Goes Here" 
     secondaryText="Secondary Text goes here.."
     supportingText="Supporting text goes here!"
      />
    <ThinnerCard title="Another Title" secondaryText="Secondary again"/>
    <Card>
      <h1>Children here!</h1>
    </Card>
    </div>
  )
}
