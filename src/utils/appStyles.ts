// colors.ts

export type ColorPalette = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent1: string;
  accent2: string;
  accent3: string;
  neutral1: string;
  neutral2: string;
};

export const colors: ColorPalette = {
  primary: '#6DBE45',
  secondary: '#F4A623',
  background: '#FFFFFF',
  text: '#333333',
  accent1: '#E71D36',
  accent2: '#FF9F1C',
  accent3: '#2EC4B6',
  neutral1: '#C0C0C0',
  neutral2: '#E5E5E5',
};

export type ColorDefinition = {
  color: string;
  className: string;
};

export const colorPalette: Record<string, ColorDefinition> = {
  primary: { color: '#6DBE45', className: 'text-primary' },
  secondary: { color: '#F4A623', className: 'text-secondary' },
  background: { color: '#FFFFFF', className: 'bg-background' },
  text: { color: '#333333', className: 'text-text' },
  accent1: { color: '#E71D36', className: 'text-accent1' },
  accent2: { color: '#FF9F1C', className: 'text-accent2' },
  accent3: { color: '#2EC4B6', className: 'text-accent3' },
  neutral1: { color: '#C0C0C0', className: 'text-neutral1' },
  neutral2: { color: '#E5E5E5', className: 'text-neutral2' },
};

export default colors;
/**
 * <div className={`bg-${colorPalette.primary.className}`}>
      This element has the background color from the primary color in the palette.
    </div>
 */