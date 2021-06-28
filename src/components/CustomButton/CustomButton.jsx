import customButtonStyles from './CustomButton.module.scss';

const CustomButton = ({ handleClick, children, ...otherProps }) => {
  return (
    <button
      className={customButtonStyles.btn}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
