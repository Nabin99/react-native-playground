import {StyleSheet} from 'react-native';
import {stylesConstant} from './abstracts/abstracts';

const borderStyles = (
  width = 1,
  style = 'solid',
  color = stylesConstant.color.borderColorDefault,
  radius = 10,
) =>
  StyleSheet.create({
    borderWidth: width,
    borderColor: color,
    borderStyle: style,
    borderRadius: radius,
  });

const flexStyles = (
  flex = 1,
  justifyContent = 'center',
  alignItems = 'center',
  flexDirection = 'column',
) =>
  StyleSheet.create({
    flex,
    justifyContent,
    alignItems,
    flexDirection,
  });

export default stylesProvider = {borderStyles, flexStyles};
