export interface TimelineItem {
    id: string;
    startTime: number; // in milliseconds
    duration: number; // in milliseconds
    trackId: string;
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    config: Record<string, any>;
    position?: {
      x: number;
      y: number;
    };
  }
  
  export type TimelineItemDragState = {
    isDragging: boolean;
    dragStartX: number;
    dragStartY: number;
    originalStartTime: number;
  };