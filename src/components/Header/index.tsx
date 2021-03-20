import React, { useContext, useEffect, useState, FormEvent } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import LogoImg from '../../assets/Logo.svg'

import { 
  Container, 
  Content,
} from './styles';

interface Props {
  toggleTheme(): void;
}


const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container> 
      <Content>
      <img src={LogoImg} alt="logo"/>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
      </Content>
    </Container>
  );
};

export default Header;
