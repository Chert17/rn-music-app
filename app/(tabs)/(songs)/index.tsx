import { FC, useMemo } from 'react';
import { ScrollView, View } from 'react-native';

import { TrackList } from '@/components';
import data from '@/data/data.json';
import { trackTitleFilter } from '@/helpers';
import { useNavigationSearch } from '@/hooks';

const Songs: FC = () => {
  const { search } = useNavigationSearch({ searchBarOptions: { placeholder: 'Find songs' } });

  const filteredTracks = useMemo(() => {
    if (!search) return data;

    return data.filter(trackTitleFilter(search));
  }, [search, data]);

  return (
    <View className="flex-1 bg-black">
      <ScrollView className="px-6" contentInsetAdjustmentBehavior="automatic">
        <TrackList scrollEnabled={false} tracks={filteredTracks} />
      </ScrollView>
    </View>
  );
};

export default Songs;
