import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Container, Icon, ButtonIconTypeStyleProps } from './styles'

interface ButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({icon, type = 'PRIMARY', ...rest}: ButtonIconProps){
  return(
    <Container>

      <Icon 
        name={icon} 
        type={type} 
        {...rest}
      />

    </Container> 
  )
}