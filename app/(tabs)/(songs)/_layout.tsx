import { Stack } from 'expo-router';
import { View } from 'react-native';

import { StackScreenWithSearchBar } from '@/constants';

const SongsLayout = () => {
  return (
    <View className="flex-1 bg-black">
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackScreenWithSearchBar,
            headerTitle: 'Songs',
          }}
        />
      </Stack>
    </View>
  );
};

export default SongsLayout;
