import withSpinnerStyles from './WithSpinner.module.scss';

const WithSpinner =
  WrapperComponent =>
  ({ isLoading, ...otherProps }) =>
    (
      <WrapperComponent {...otherProps}>
        {isLoading && (
          <div className={withSpinnerStyles.spinnerContainer}>
            <div className={withSpinnerStyles.spinner} />
          </div>
        )}
      </WrapperComponent>
    );

export default WithSpinner;
