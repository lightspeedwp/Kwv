/**
 * Utility to filter out Figma inspector props from component props
 * 
 * Figma's inspector injects internal props (starting with _fg) that should
 * not be passed to DOM elements or Radix UI primitives.
 * 
 * @param props - The props object to filter
 * @returns A new object without any _fg* properties
 */
export const filterFigmaProps = <T extends Record<string, any>>(
  props: T
): Omit<T, `_fg${string}`> => {
  const filtered: any = {};
  
  for (const key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key)) {
      // Only include props that don't start with _fg
      if (!key.startsWith('_fg')) {
        filtered[key] = props[key];
      }
    }
  }
  
  return filtered;
};
