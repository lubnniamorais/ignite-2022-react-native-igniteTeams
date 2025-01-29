import { TouchableOpacityProps } from 'react-native';

import { ButtonIconTypeStyleProps, Container, Icon } from './styles';

type Props = TouchableOpacityProps & {};

export function ButtonIcon({ ...rest }: Props) {
  return (
    <Container>
      <Icon name="home" type="PRIMARY" />
    </Container>
  );
}
