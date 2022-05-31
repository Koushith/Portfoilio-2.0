import { PillContainer } from './pill.component.styles';

export const Pill = ({ children, content, color, pointer, ...rest }) => {
  console.log('cont', content);
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
      case '7':
        return '#3A5F74';
      default:
        return 'rgb(93, 93, 255)';
    }
  };
  const finalColor = getRandomColors(color);
  return (
    <PillContainer style={{ background: finalColor, cursor: pointer && 'pointer' }} {...rest}>
      {content || children}
    </PillContainer>
  );
};

// #EB4898
