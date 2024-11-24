import React from 'react';
import { TimelineItem } from '@/types/item';
import { getItemStyle } from '@/utils/grid';
import { useDragAndDrop } from '@/hooks/useDragAndDrop';

interface TrackItemProps {
  item: TimelineItem;
  zoom: number;
}

export const TrackItem: React.FC<TrackItemProps> = ({ item, zoom }) => {
  const { handleDragStart, isDragging } = useDragAndDrop(item);
  const style = getItemStyle(item, zoom);

  return (
    <div
      className={`absolute h-full bg-blue-500 rounded cursor-move select-none
        ${isDragging ? 'opacity-75 shadow-lg z-10' : 'opacity-100'}
        hover:bg-blue-600 transition-colors`}
      style={style}
      onMouseDown={handleDragStart}
    >
      <div className="px-2 py-1 text-white text-sm truncate">
        {item.type}
      </div>
    </div>
  );
};