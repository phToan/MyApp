import {Platform, Text, TextProps, TextStyle} from 'react-native';
import {color} from '../../constants/colors';
import {fontSize} from '../../utils/typography';

interface CustomTextProps extends TextProps {
  fontSize?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  backgroundColor?: string;
  textColor?: string;
}

const fontFamily =
  Platform.OS === 'android' ? 'Roboto-Medium' : 'SF-Pro-Text-Medium';

export const CustomText: React.FC<CustomTextProps> = ({
  style,
  fontSize = 14,
  fontWeight = 'normal',
  textColor = color.black[1],
  children,
  ...props
}) => {
  return (
    <Text
      style={[{fontSize, fontWeight, color: textColor, fontFamily}, style]}
      {...props}>
      {children}
    </Text>
  );
};

export const TinyText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  children,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {fontSize: fontSize.tiny, fontWeight, color: textColor, fontFamily},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const SmallText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  children,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {fontSize: fontSize.small, fontWeight, color: textColor, fontFamily},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const NormalText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  children,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {fontSize: fontSize.normal, fontWeight, color: textColor, fontFamily},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const MediumText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  children,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {fontSize: fontSize.medium, fontWeight, color: textColor, fontFamily},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const LargeText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  children,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {fontSize: fontSize.large, fontWeight, color: textColor, fontFamily},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const HugeText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  children,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {fontSize: fontSize.huge, fontWeight, color: textColor, fontFamily},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const BigText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  children,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {fontSize: fontSize.big, fontWeight, color: textColor, fontFamily},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export const GigText = ({
  fontWeight,
  textColor = color.black[1],
  style,
  children,
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {fontSize: fontSize.gigantic, fontWeight, color: textColor, fontFamily},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};
