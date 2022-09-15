import React, { useContext } from 'react';
import { FooterMain, FooterContent, Text, Contacts } from './Footer.styles';
import { St } from '../Styles/GeneralStyles';
import { ThemeContext } from 'styled-components';

function Footer() {
    const { title } = useContext(ThemeContext);
    const gitLight = `https://img.shields.io/badge/GitHub-404040?style=for-the-badge&logo=github&logoColor=white`;
    const gitDark = `https://img.shields.io/badge/GitHub-101010?style=for-the-badge&logo=github&logoColor=white`;

    return (
      <FooterMain id="footer">
        <FooterContent>
          <Text>Este projeto foi desenvolvido por
            <St> Tomas Breuckmann </St>
            , como parte do processo avaliativo enquanto aluno de
            <St> Desenvolvimento Web Full Stack </St> pela <St> Trybe </St>.
          </Text>
          <Contacts>
            <a target="_blank" href="https://www.linkedin.com/in/tomasbreuckmann/" rel="noreferrer">
                <img src={`https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white`} />
            </a>
            <a target="_blank" href="https://github.com/Tomas-Breuckmann"    rel="noreferrer">
                <img src={title === 'light' ? gitDark : gitLight} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5554999964137" target="_blank">
                <img src={`https://img.shields.io/badge/WhatsApp-2D9644?style=for-the-badge&logo=whatsapp&logoColor=white`} />
            </a>
            <a href="mailto:tomas.yoga@yahoo.com" target="_blank">
                <img src={`https://img.shields.io/badge/Yahoo!-6001D2?style=for-the-badge&logo=Yahoo!&logoColor=white`} />
            </a>
          </Contacts>
        </FooterContent>
      </FooterMain>
    );
  }

export default Footer;