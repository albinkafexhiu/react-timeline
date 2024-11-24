import React from 'react';
import { TimeGrid } from './TimeMarkers/TimeGrid';
import { TrackContainer } from './Track/TrackContainer';
import { ZoomControls } from './Controls/ZoomControls';
import { useTimelineStore } from '@/store/timelineStore';

export const Timeline: React.FC = () => {
  const timeline = useTimelineStore((state) => state.timeline);
  const zoom = useTimelineStore((state) => state.state.zoom);

  if (!timeline) {
    return null;
  }

  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden relative">
      <ZoomControls />
      <div className="relative">
        <div className="sticky top-0 z-10 bg-white pl-40">
          <TimeGrid
            width={1200}
            zoom={zoom}
            gridSize={50}
          />
        </div>
        <div className="relative">
          {timeline.tracks.map((track) => (
            <TrackContainer
              key={track.id}
              track={track}
            />
          ))}
        </div>
      </div>
    </div>
  );
};