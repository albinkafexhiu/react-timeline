import React from 'react';
import { Track } from '@/types/track';
import { TrackItem } from './TrackItem';
import { useTimelineStore } from '@/store/timeLineStore';

interface TrackContainerProps {
  track: Track;
}

export const TrackContainer: React.FC<TrackContainerProps> = ({ track }) => {
  const zoom = useTimelineStore((state) => state.state.zoom);

  return (
    <div className="relative h-16 border-b border-gray-200 bg-white">
      <div className="absolute left-0 top-0 h-full w-40 bg-gray-50 border-r border-gray-200 px-4 flex items-center">
        {track.name}
      </div>
      <div className="absolute left-40 right-0 h-full">
        {track.items.map((item) => (
          <TrackItem
            key={item.id}
            item={item}
            zoom={zoom}
          />
        ))}
      </div>
    </div>
  );
};