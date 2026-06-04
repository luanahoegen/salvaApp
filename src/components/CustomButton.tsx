import { Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  textStyle?: TextStyle;
  style?: ViewStyle;
}

export function CustomButton({ title, textStyle, style, ...rest }: Props) {
  return (
    <TouchableOpacity style={style} {...rest}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}