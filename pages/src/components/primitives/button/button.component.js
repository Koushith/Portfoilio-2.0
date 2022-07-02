import { Underlined } from './button.component.styles';

export const Button = () => {
  return <>btn</>;
};

export const UnderlinedButton = ({ children, content, ...rest }) => {
  return (
    <Underlined {...rest}>
      {content ? content : children}
      <i className='fa-solid fa-right-long'></i>
    </Underlined>
  );
};
