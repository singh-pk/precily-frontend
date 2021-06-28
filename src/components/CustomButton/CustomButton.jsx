import customButtonStyles from './CustomButton.module.scss';

const CustomButton = ({ handleClick, children, btnFixed, ...otherProps }) => {
  return (
    <button
      className={`${customButtonStyles.btn} ${
        btnFixed && customButtonStyles.btnFixed
      }`}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
