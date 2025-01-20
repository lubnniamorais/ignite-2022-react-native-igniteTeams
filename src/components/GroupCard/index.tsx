import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};

// Com o ...rest estamos pegando todas as propriedades restantes do TouchableOpacityProps, logo
// podemos repassar as propriedades para o componente GroupCard.
export function GroupCard({ title, ...rest }: Props) {
  return (
    // Com o {...rest} conseguimos pegar as propriedades/tipagens de dentro do TouchableOpacityProps
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
