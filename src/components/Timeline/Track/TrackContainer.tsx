import React from 'react';
import { Track } from '@/types/track';
import { TrackItem } from './TrackItem';
import { useTimelineStore } from '@/store/timelineStore';

interface TrackContainerProps {
  track: Track;
}

export const TrackContainer: React.FC<TrackContainerProps> = ({ track }) => {
  const zoom = useTimelineStore((state) => state.state.zoom);

  return (
    <div className="h-16 border-b border-gray-200 relative">
      {track.items.map((item) => (
        <TrackItem
          key={item.id}
          item={item}
          zoom={zoom}
        />
      ))}
    </div>
  );
};