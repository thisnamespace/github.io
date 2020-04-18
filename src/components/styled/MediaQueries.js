import { css } from 'styled-components';

const sizes = {
  phone: 720,
  tablet: 1024,
  desktop: 1280
};

// Iterate through the sizes and create a media template
export const maxmedia = (Object.keys(sizes)).reduce(
  (acc, label) => {
    acc[label] = (first, ...interpolations) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;
    return acc;
  },
  {},
);

// Iterate through the sizes and create a media template
export const minmedia = (Object.keys(sizes)).reduce(
  (acc, label) => {
    acc[label] = (first, ...interpolations) => css`
      @media (min-width: ${sizes[label] + 1}px) {
        ${css(first, ...interpolations)}
      }
    `;
    return acc;
  },
  {} ,
);
