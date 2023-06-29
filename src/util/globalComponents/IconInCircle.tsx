import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {View} from 'react-native';

type IconInCircleProps = {
  name: string;
  size: number;
  color: string;
  style: object;
};

export const IconInCircle = ({
  circleSize,
  borderWidth = 2,
  borderColor = 'black',
  backgroundColor = 'white',
  ...props
}: {
  circleSize: number;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
} & IconInCircleProps) => (
  <CircleBorder
    size={circleSize}
    borderWidth={borderWidth}
    borderColor={borderColor}
    backgroundColor={backgroundColor}>
    <Icon {...props} />
  </CircleBorder>
);

const CircleBorder = ({
  size,
  borderWidth,
  borderColor,
  backgroundColor,
  children,
}: {
  size: number;
  borderWidth: number;
  borderColor: string;
  backgroundColor: string;
  children: any;
}) => (
  <View
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      width: size,
      height: size,
      borderRadius: 0.5 * size,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: backgroundColor,
      borderColor,
      borderWidth,
    }}>
    {children}
  </View>
);
