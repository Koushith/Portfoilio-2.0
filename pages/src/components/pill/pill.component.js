import { PillContainer } from './pill.component.styles';

export const Pill = ({ children, color }) => {
  const getRandomColors = (color) => {
    switch (color) {
      case '1':
        return 'rgb(93, 93, 255)';
      case '2':
        return '#02B07C';

      case '3':
        return '#EB4898';
      case '4':
        return '#319795';
      case '5':
        return '#8731D2';
      case '6':
        return '#3178C6';
      default:
        return 'rgb(93, 93, 255)';
    }
  };
  const finalColor = getRandomColors(color);
  return <PillContainer style={{ background: finalColor }}>{children}</PillContainer>;
};

// #EB4898
