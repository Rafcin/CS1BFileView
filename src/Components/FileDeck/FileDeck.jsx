 
import React, { Component } from 'react';
import './FileDeck.css';

import {Card, CardDeck, Container, Row, Col, Button} from 'react-bootstrap';

import textF from '../../Assets/fileBG2.png'
import videoF from '../../Assets/videofile.png'
import pdfF from '../../Assets/pdf.png'
import isoF from '../../Assets/iso.png'


import fs from 'fs'
import brfs from 'brfs'

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

class FileDeck extends Component {

  state = {data: ''}

  render() {
    const DeckItem = ({title, about, lang, url, icon}) =>
    <Container fluid={true} className="deckItemContainer">
      <Row className="deckItemRow">
        <Desktop>
          <Col xs={1} className="deckImgCol">
            <img
              src={icon}
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
                 Type:
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
      <h2>Files</h2>
    </div>
    <div className="deck">
      <DeckItem 
       title={"C++ Quickref"} 
       about={"Reference sheet for C++"} 
       lang={"TXT"}
       url={"https://ps.uci.edu/~drb/cs1b/cpp_quickref.txt"}
       icon={textF}
      />
      <br/>
      <DeckItem 
       title={"Github Video"} 
       about={"1:16:44 video explaining github"} 
       lang={"MP4"}
       url={"https://ps.uci.edu/~drb/cs1b/git.mp4"}
       icon={videoF}
      />
      <br/>
      <DeckItem 
       title={"Syllabus"} 
       about={"Course syllabus for CS1B 2020 Spring"} 
       lang={"PDF"}
       url={"https://ps.uci.edu/~drb/cs1b/syllabus.pdf"}
       icon={pdfF}
      />
      <br/>
      <DeckItem 
       title={"Ubuntu 18.04"} 
       about={"Ubuntu 18.04 with preinstalled tools for CS1B course"} 
       lang={"OVA"}
       url={"https://ps.uci.edu/~drb/cs1b/ubuntu1804.ova"}
       icon={isoF}
      />
      <br/>
      <DeckItem 
       title={"GDB Cheatsheet"} 
       about={"GDB reference document"} 
       lang={"PDF"}
       url={"https://ps.uci.edu/~drb/cs1b/gdb_cheatsheet.pdf"}
       icon={pdfF}
      />
      <br/>
    </div>
    </span>
    );
  }
}

export default FileDeck;