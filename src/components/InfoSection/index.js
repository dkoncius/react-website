import React from 'react'
import {Button} from '../ButtonElement';
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    ImgWrap, 
    Img } from './InfoElements';

const InfoSection = (obj) => {
    console.log()
  return (
    <>
        <InfoContainer lightBg={obj.lightBg} id={obj.id}>
            <InfoWrapper>
                <InfoRow imgStart={obj.imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{obj.topLine}</TopLine>
                            <Heading lightText={obj.lightText}>{obj.headline}</Heading>
                            <Subtitle darkText={obj.darkText}>{obj.description}</Subtitle>
                            <BtnWrap>
                                <Button 
                                to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={obj.primary ? 1 : 0}    
                                dark={obj.dark ? 1 : 0}   
                                dark2={obj.dark2 ? 1 : 0}   
                                >{obj.buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={obj.img} alt={obj.alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection