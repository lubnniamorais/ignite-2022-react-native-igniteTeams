import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  /* Ao passarmos a altura mínima e máxima com os mesmos valores isso é um hackzinho para
     poder previnir quando formos utilizar o botão que tenha algum contexto flex então 
     prevenimos para que o tamanho do botão não seja influenciado */
  min-height: 56px;
  max-height: 56px;

  /* Para a cor do botão colocamos a cor de forma condicional, ou seja, passamos a propriedade
    "type" para o background do botão, pois podemos acessar ela através das Props que estamos 
    passando como generics */
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  color: ${({ theme }) => theme.COLORS.WHITE};
`;
