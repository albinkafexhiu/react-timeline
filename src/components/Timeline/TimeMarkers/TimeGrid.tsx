import React from 'react';
import { calculateGridLines } from '@/utils/grid';
import { formatTime } from '@/utils/time';

interface TimeGridProps {
  width: number;
  zoom: number;
  gridSize?: number;
}

export const TimeGrid: React.FC<TimeGridProps> = ({ width, zoom, gridSize = 100 }) => {
  const gridLines = calculateGridLines(width, zoom, gridSize);

  return (
    <div className="relative h-8 border-b border-gray-200">
      {gridLines.map(({ position, time }) => (
        <div 
          key={position}
          className="absolute flex flex-col items-center"
          style={{ left: position }}
        >
          <div className="h-4 w-px bg-gray-300" />
          <span className="text-xs text-gray-600 mt-1">
            {formatTime(time)}
          </span>
        </div>
      ))}
    </div>
  );
};