import { useState } from 'react';
import { Text, TextInput, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

interface Props extends TextInputProps {
  label: string;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  eyeStyle?: TextStyle;
}

export function PasswordInput({ label, labelStyle, containerStyle, inputStyle, eyeStyle, ...rest }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <Text style={labelStyle}>{label}</Text>
      
      <View style={containerStyle}>
        <TextInput
          secureTextEntry={!showPassword}
          style={inputStyle}
          placeholderTextColor={rest.placeholderTextColor || "#808080"}
          {...rest}
        />

        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={eyeStyle}>
            {showPassword ? '🙈' : '👁'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}