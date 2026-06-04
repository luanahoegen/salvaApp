import { Text, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';

interface Props extends TextInputProps {
  label: string;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
}

export function CustomInput({ label, labelStyle, containerStyle, inputStyle, ...rest }: Props) {
  return (
    <View>
      <Text style={labelStyle}>{label}</Text>
      <View style={containerStyle}>
        <TextInput
          style={inputStyle}
          placeholderTextColor={rest.placeholderTextColor || "#808080"}
          {...rest}
        />
      </View>
    </View>
  );
}