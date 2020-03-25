 
import React, { Component } from 'react';
import './HomeworkDeck.css';

import {Card, CardDeck, Container, Row, Col, Button} from 'react-bootstrap';

import fileBG from '../../Assets/fileBG2.png'

import { useMediaQuery } from 'react-responsive'
 
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1373 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1372 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

class HomeworkDeck extends Component {
  render() {
    const DeckItem = ({title, about, lang, url}) =>
    <Container fluid={true} className="deckItemContainer">
      <Row className="deckItemRow">
        <Desktop>
          <Col xs={1} className="deckImgCol">
            <img
              src={fileBG}
              className="deckImg"
            />
          </Col>
        </Desktop>
        <Col className="deckItemCol">
          <Row className="deckItemTextRow">
            <a href={url} className="deckItemTitle">
             {title}
            </a>
          </Row>
          <Row className="deckItemTextRow">
            <a className="deckItemBody">
             {about}
            </a>
          </Row>
          <Row className="deckItemTextRow">
            <Col>
             <Row>
                <a className="deckItemBody">
                 Language:
                </a>
              <Col>
                <b>{lang}</b>
              </Col>
             </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    ;
    return (  
    <span>
    <div className="deckName">
      <h2>Homework</h2>
    </div>
    <div className="deck">
      <DeckItem 
       title={"Homework 01 - ASCII Manipulation"} 
       about={"Write a program that prompts the user to enter a telephone number expressed in letters and outputs the corresponding telephone number in digits."} 
       lang={"C++"}
       url={"https://ps.uci.edu/~drb/cs1b/hw01.pdf"}
      />
      <br/>
      <DeckItem 
       title={"Homework 02 - Body Mass Index Calculation"} 
       about={"Write a program that calculates the fat content in females and males using both strategies, and compare them by outputting the results on a tabular format side by side."} 
       lang={"C++"}
       url={"https://ps.uci.edu/~drb/cs1b/hw02.pdf"}
      />
      <br/>
      <DeckItem 
       title={"Homework 05 - GDB And Pointers"} 
       about={"Perform gdb analyses for the Pointers series slides, 14, 15, 16, 17, 18, 19, 20, and 22, each in a typescript session."} 
       lang={"C++"}
       url={"https://ps.uci.edu/~drb/cs1b/hw05.pdf"}
      />
      <br/>
      <DeckItem 
       title={"Homework 06 - Linked Lists - Books Database"} 
       about={"Write a program that implements a database of books. "} 
       lang={"C++"}
       url={"https://ps.uci.edu/~drb/cs1b/hw06.pdf"}
      />
    </div>
    </span>
    );
  }
}

export default HomeworkDeck;