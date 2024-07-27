import { ImageStyle, TextStyle, ViewStyle } from 'react-native';


export type customStyles = { [key in keyof any]: ViewStyle | TextStyle | ImageStyle };
export type ColorType = { [P in keyof any]: string };
