import { Underlined } from './button.component.styles';

export const Button = () => {
  return <>btn</>;
};

export const UnderlinedButton = ({ content, ...rest }) => {
  return (
    <Underlined {...rest}>
      {content}
      <i className='fa-solid fa-right-long'></i>
    </Underlined>
  );
};
