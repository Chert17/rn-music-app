import { FC } from 'react';
import { FlatList, FlatListProps, View } from 'react-native';

import TrackListItem from './TrackListItem';

const ItemDivider: FC = () => {
  return <View className="my-2 ml-14 border border-textMuted opacity-30" />;
};

export interface ITrackList extends Partial<FlatListProps<any>> {
  tracks: any[];
}

const TrackList: FC<ITrackList> = ({ tracks, ...flatListProps }) => {
  return (
    <FlatList
      data={tracks}
      keyExtractor={(item, index) => `${item.title}-${index}`}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ItemSeparatorComponent={ItemDivider}
      ListFooterComponent={ItemDivider}
      renderItem={({ item }) => <TrackListItem track={{ ...item, image: item.artwork }} />}
      {...flatListProps}
    />
  );
};

export default TrackList;