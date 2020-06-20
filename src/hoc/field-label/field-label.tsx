import React, { Fragment, ReactElement } from 'react';
import { Spacer } from '../../spacer';
import { Text } from '../../text';
import { StyledWrapper } from './styled';

const getDisplayName = (Component : any) : any => Component.displayName || 'Component';

export const withFieldLabel = (WrappedComponent : any) : any => {
  const Wrapper = ({
    hasError,
    helperText,
    helperTextColor,
    label,
    ...rest
  } : IWrapperProps) : ReactElement => (
    <StyledWrapper>
      {label && (
        <Fragment>
          <Text>{label}</Text>
          <Spacer margin="0.5em 0 0 0" />
        </Fragment>
      )}
      <WrappedComponent
        hasError={hasError}
        {...rest}
      />
      {helperText && (
        <Fragment>
          <Spacer margin="0.5em 0 0 0" />
          <Text
            color={hasError ? helperTextColor : ''}
            fontSize="0.8em"
          >
            {helperText}
          </Text>
        </Fragment>
      )}
    </StyledWrapper>
  );

  Wrapper.displayName = `withFieldLabel(${getDisplayName(
    WrappedComponent,
  )})`;

  return Wrapper;
};

export interface IWrapperProps {
  /**
   * Error message to render
   */
  hasError? : boolean;
  /**
   * Helper text for the field
   */
  helperText? : string;
  /**
   * Helper text color for the field
   */
  helperTextColor? : string;
  /**
   * Text for the label
   */
  label : string;
}
