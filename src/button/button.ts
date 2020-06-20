import { IResponsiveProps, ITheme, responsiveComponent } from '@taimoormk/util-functions';
import React from 'react';
import styled, {
  FlattenSimpleInterpolation,
  ThemedStyledProps,
  css,
} from 'styled-components';

export const Button = styled.button.attrs<IButtonAttrsProps>(({
  autoFocus,
  disabled,
  form,
  formaction,
  formenctype,
  formmethod,
  formnovalidate,
  formtarget,
  name,
  type,
  value,
} : IButtonAttrsProps) : IButtonAttrsProps => ({
  autoFocus: autoFocus || false,
  disabled: disabled || false,
  form: form || '',
  formaction: formaction || '',
  formenctype: formenctype || BUTTON_FORM_ENCTYPE.TEXT,
  formmethod: formmethod || BUTTON_FORM_METHODS.GET,
  formnovalidate: formnovalidate || false,
  formtarget: formtarget || BUTTON_FORM_TARGET.SELF,
  name: name || '',
  type: type || BUTTON_TYPE.BUTTON,
  value: value || '',
}))<IButtonProps>`
  background-color: ${({ backgroundColor, theme } : ThemedStyledProps<IButtonProps, ITheme>) : string => (
    backgroundColor || theme.colors.white
  )};
  border-radius: ${({ borderRadius } : IButtonProps) : string => borderRadius || ''};
  border: ${({ border } : IButtonProps) : string | false => border || 'none'};
  height: ${({ height } : IButtonProps) : string => height || 'auto'};
  padding: ${({ padding } : IButtonProps) : string => padding || ''};
  pointer-events: ${({ disabled } : IButtonProps) : string => disabled ? 'none' : 'auto'};
  transition: all 0.3s ease-in-out;
  width: ${({ width } : IButtonProps) : string => width || 'auto'};

  &:hover, &:focus, &:active {
    cursor: ${({ disabled } : IButtonProps) : string => disabled ? 'not-allowed' : 'pointer'}
  }

  &:focus {
    outline: none;
  }

  @media ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.breakpoints.mobileS} {
    ${({ mobileS } : IButtonProps) : FlattenSimpleInterpolation | undefined | '' => mobileS && css`
      ${mobileS}
    `};
  }

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : IButtonProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export enum BUTTON_FORM_ENCTYPE {
  APPLICATION = 'application/x-www-form-urlencoded',
  MULTIPART = 'multipart/form-data',
  TEXT = 'text/plain',
}

export enum BUTTON_FORM_METHODS {
  GET = 'get',
  POST = 'post',
}

export enum BUTTON_FORM_TARGET {
  BLANK = '_blank',
  PARENT = '_parent',
  SELF = '_self',
  TOP = '_top',
}

export enum BUTTON_TYPE {
  BUTTON = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}

export interface IButtonAttrsProps {
  /**
   * Specifies that a button should automatically get focus when the page loads
   * @default false
   */
  autoFocus? : boolean;
  /**
   * Specifies that a button should be disabled
   * @default false
   */
  disabled? : boolean;
  /**
   * Specifies one or more forms the button belongs to
   * @default ''
   */
  form? : string;
  /**
   * Specifies where to send the form-data when a form is submitted. Only for type="submit"
   * @default ''
   */
  formaction? : string;
  /**
   * Specifies how form-data should be encoded before sending it to a server. Only for type="submit"
   * @default BUTTON_FORM_ENCTYPE.text
   */
  formenctype? : BUTTON_FORM_ENCTYPE;
  /**
   * Specifies how to send the form-data (which HTTP method to use). Only for type="submit"
   * @default BUTTON_FORM_METHODS.GET
   */
  formmethod? : BUTTON_FORM_METHODS;
  /**
   * Specifies that the form-data should not be validated on submission. Only for type="submit"
   * @default false
   */
  formnovalidate? : boolean;
  /**
   * Specifies where to display the response after submitting the form. Only for type="submit"
   * @default BUTTON_FORM_TARGET.self
   */
  formtarget? : BUTTON_FORM_TARGET;
  /**
   * Specifies a name for the button
   * @default ''
   */
  name? : string;
  /**
   * Specifies the type of button
   * @default BUTTON_TYPE.type
   */
  type? : BUTTON_TYPE;
  /**
   * Specifies an initial value for the button
   * @default ''
   */
  value? : string;
}

export interface IButtonProps extends IResponsiveProps {
  /**
   * Specifies the background color of the button
   * @default theme.colors.white
   */
  backgroundColor? : string;
  /**
   * Specifies the border of the button
   * @default none
   */
  border? : string | false;
  /**
   * Specifies the border radius of the button
   * @default ''
   */
  borderRadius? : string;
  /**
   * Specifies if button is disabled or not
   */
  disabled? : boolean;
  /**
   * Specifies the height of the button
   * @default auto
   */
  height? : string;
  /**
   * Specifies the onClick handler of the button
   */
  onClick? : (event : React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Specifies the padding of the button
   * @default ''
   */
  padding? : string;
  /**
   * Specifies the width of the button
   * @default auto
   */
  width? : string;
}
