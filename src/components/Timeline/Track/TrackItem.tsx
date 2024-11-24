import React from 'react';
import { TimelineItem } from '@/types/item';
import { useTimelineStore } from '@/store/timelineStore';
import { millisecondsToPixels, pixelsToMilliseconds } from '@/utils/time';

interface TrackItemProps {
  item: TimelineItem;
  zoom: number;
}

export const TrackItem: React.FC<TrackItemProps> = ({ item, zoom }) => {
  const updateItem = useTimelineStore(state => state.updateItem);

  const handleDragStart = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startTime = item.startTime;
    const sensitivity = 0.5; // Reduce movement sensitivity

    const handleDrag = (e: MouseEvent) => {
      const dx = (e.clientX - startX) * sensitivity;
      const timeChange = pixelsToMilliseconds(dx, zoom);
      const newStartTime = Math.max(0, startTime + timeChange);
      
      updateItem(item.id, {
        startTime: Math.round(newStartTime / 100) * 100 // Snap to 100ms intervals
      });
    };

    const handleDragEnd = () => {
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleDragEnd);
    };

    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const startX = e.clientX;
    const startDuration = item.duration;
    const sensitivity = 0.5; // Reduce movement sensitivity

    const handleResize = (e: MouseEvent) => {
      const dx = (e.clientX - startX) * sensitivity;
      const durationChange = pixelsToMilliseconds(dx, zoom);
      const newDuration = Math.max(1000, startDuration + durationChange);
      
      updateItem(item.id, {
        duration: Math.round(newDuration / 100) * 100 // Snap to 100ms intervals
      });
    };

    const handleResizeEnd = () => {
      document.removeEventListener('mousemove', handleResize);
      document.removeEventListener('mouseup', handleResizeEnd);
    };

    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleResizeEnd);
  };

  return (
    <div
      className="absolute h-[80%] top-[10%] bg-blue-500 rounded cursor-move select-none group"
      style={{
        left: `${millisecondsToPixels(item.startTime, zoom)}px`,
        width: `${millisecondsToPixels(item.duration, zoom)}px`,
      }}
      onMouseDown={handleDragStart}
    >
      <div className="px-2 py-1 text-white text-sm truncate">
        {item.type}
      </div>
      
      <div
        className="absolute right-0 top-0 h-full w-2 cursor-e-resize 
          bg-blue-700 opacity-0 group-hover:opacity-100"
        onMouseDown={handleResizeStart}
      />
    </div>
  );
};