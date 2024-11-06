import { FC } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';

import { cn } from '@/utils';
import { unknownTrackImageUri } from '../constants';

export interface ITrackListItem {
  track: { title: string; image?: string; artist?: string };
}

const TrackListItem: FC<ITrackListItem> = ({ track: { title, image, artist } }) => {
  const isActiveTrack = false;

  return (
    <TouchableHighlight>
      <View className="flex-row items-center gap-x-3 pr-5">
        <View>
          {/* <FastImage
            source={{ uri: image ?? unknownTrackImageUri, priority: FastImage.priority.normal }}
            className={cn('h-12 w-12 rounded-lg border opacity-100', {
              'opacity-60': isActiveTrack,
            })}
          /> */}
          <Image
            source={{ uri: image ?? unknownTrackImageUri }}
            className={cn('size-12 rounded-lg border opacity-100', { 'opacity-60': isActiveTrack })}
          />
        </View>

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
      </View>
    </TouchableHighlight>
  );
};

export default TrackListItem;
