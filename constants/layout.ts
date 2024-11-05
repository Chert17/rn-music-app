import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { colors } from '../theme';

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
  headerLargeTitle: true,
  headerLargeStyle: {
    backgroundColor: colors.black,
  },
  headerLargeTitleStyle: {
    color: colors.white,
  },
  headerTintColor: colors.white,
  headerTransparent: true,
  headerBlurEffect: 'prominent',
  headerShadowVisible: false,
};
