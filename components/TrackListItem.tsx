import Entypo from '@expo/vector-icons/Entypo';
import { FC } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { Track, useActiveTrack } from 'react-native-track-player';

import { unknownTrackImageUri } from '@/constants';
import { colors } from '@/theme';
import { cn } from '@/utils';

export interface ITrackListItem {
  track: Track;
  onTrackSelect: (track: Track) => void;
}

const TrackListItem: FC<ITrackListItem> = ({ track, onTrackSelect }) => {
  const { title, artwork, artist, url } = track;

  const isActiveTrack = useActiveTrack()?.url === url;

  return (
    <TouchableHighlight onPress={() => onTrackSelect(track)}>
      <View className="flex-row items-center gap-x-3 pr-5">
        <View>
          {/* <FastImage
            source={{ uri: image ?? unknownTrackImageUri, priority: FastImage.priority.normal }}
            className={cn('h-12 w-12 rounded-lg border opacity-100', {
              'opacity-60': isActiveTrack,
            })}
          /> */}
          <Image
            source={{ uri: artwork ?? unknownTrackImageUri }}
            className={cn('size-12 rounded-lg border opacity-100', { 'opacity-60': isActiveTrack })}
          />
        </View>

        <View className="flex-1 flex-row items-center justify-between">
          <View className="w-full">
            <Text
              className={cn('w-[90%] text-sm font-semibold text-white', {
                'text-primary': isActiveTrack,
              })}
              numberOfLines={1}>
              {title}
            </Text>

            {artist && (
              <Text className="mt-1 text-textMuted" numberOfLines={1}>
                {artist}
              </Text>
            )}
          </View>

          <Entypo name="dots-three-horizontal" size={18} color={colors.white} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default TrackListItem;
