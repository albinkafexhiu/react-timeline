export const millisecondsToPixels = (ms: number, zoom: number): number => {
    return ms * (zoom / 100);
  };
  
  export const pixelsToMilliseconds = (pixels: number, zoom: number): number => {
    return pixels / (zoom / 100);
  };
  
  export const formatTime = (ms: number): string => {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = ms % 1000;
    return `${seconds}.${milliseconds.toString().padStart(3, '0')}`;
  };
  
  export const snapToGrid = (value: number, gridSize: number): number => {
    return Math.round(value / gridSize) * gridSize;
  };