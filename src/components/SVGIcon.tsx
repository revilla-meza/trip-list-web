import React from 'react';
import icons from './icons';

type SupportedSVGIcons = 'AddIcon' | 'PastIcon' | 'ItemsIcon' | 'ArrowBack';

interface SVGIconProps {
  icon: SupportedSVGIcons;
}
const SVGIcon = (props: SVGIconProps) => {
  const RenderIcon = icons[props.icon];
  return <RenderIcon />;
};

export default SVGIcon;
