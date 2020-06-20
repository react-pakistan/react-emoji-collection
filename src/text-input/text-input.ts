import { IResponsiveProps, ITheme, responsiveComponent } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';
import { withFieldLabel } from '../hoc/field-label';

export const TextInput = styled.input.attrs<ITextInputAttrsProps>(({
  placeholder,
  type,
} : ITextInputAttrsProps) : ITextInputAttrsProps => ({
  placeholder,
  type,
}))<ITextInputProps>`
  background-color: ${({ backgroundColor, theme } : ThemedStyledProps<ITextInputProps, ITheme>) : string =>
    backgroundColor || theme.colors.white};
  border: ${({ border, hasError, theme } : ThemedStyledProps<ITextInputProps, ITheme>) : string =>
    hasError ? `0.5px solid ${theme.colors.cherryRed}` : border || `1px solid ${theme.colors.darkGrey}`};
  border-radius: ${({ borderRadius } : ITextInputProps) : string =>
    borderRadius || '0.5em'};
  display: inline-block;
  height: ${({ height } : ITextInputProps) : string => height || '3.5em'};
  margin: 0;
  padding: 0 1em;
  width: ${({ width } : ITextInputProps) : string => width || '100%'};

  &:focus {
    border: ${({ focusBorder, theme } : ThemedStyledProps<ITextInputProps, ITheme>) : string =>
      `${focusBorder}` || `0.5px solid ${theme.colors.skyBlue}`};
    outline: none;
    color: ${({ focusColor, theme } : ThemedStyledProps<ITextInputProps, ITheme>) : string =>
      `${focusColor}` || theme.colors.black};
  }

  &::-webkit-input-placeholder {
    color: ${({ placeholderColor, theme } : ThemedStyledProps<ITextInputProps, ITheme>) : string =>
      placeholderColor || theme.colors.lightBlack};
    font-family: ${({ theme } : ThemedStyledProps<ITextInputProps, ITheme>) : string => theme.typography.text.fontFamily};
    font-size: ${({ theme } : ThemedStyledProps<ITextInputProps, ITheme>) : string => theme.typography.text.fontSize};
    font-weight: ${({ theme } : ThemedStyledProps<ITextInputProps, ITheme>) : number => theme.typography.text.fontWeight};
    letter-spacing: ${({ theme } : ThemedStyledProps<ITextInputProps, ITheme>) : string => theme.typography.text.letterSpacing};
    line-height: ${({ theme } : ThemedStyledProps<ITextInputProps, ITheme>) : string => theme.typography.text.lineHeight};
    text-align: ${({ theme } : ThemedStyledProps<ITextInputProps, ITheme>) : string => theme.typography.text.textAlign};
    text-transform: ${({ theme } : ThemedStyledProps<ITextInputProps, ITheme>) : string => theme.typography.text.textTransform};
  }

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : ITextInputProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export const TextInputWithFieldLabel = withFieldLabel(TextInput);

export enum TEXT_INPUT_TYPES {
  CHECK_BOX = 'checkbox',
  COLOR = 'color',
  DATE = 'date',
  DATE_TIME = 'datetime-local',
  FILE = 'file',
  MONTH = 'month',
  RANGE = 'range',
  RADIO = 'radio',
  TEXT = 'text',
  TIME = 'time',
  WEEK = 'week',
}

export interface ITextInputAttrsProps {
  /**
   * Type attribute for Input component
   */
  type : string;
  /**
   * Placeholder attribute for Input component
   */
  placeholder : string;
}

export interface ITextInputProps extends IResponsiveProps {
  /**
   * Border property for Input component
   * @default 1px solid #EFEFEF
   */
  border? : string;
  /**
   * Border property for Input component
   * @default 0.5em
   */
  borderRadius? : string;
  /**
   * Border property for Input component
   * @default #FFFFFF
   */
  backgroundColor? : string;
  /**
   * Specifies the outline color of Input component on focus
   */
  focusBorder? : string;
  /**
   * Specifies the color of the Input component on focus
   */
  focusColor? : string;
  /**
   * Specifies if there is an error
   * @default false
   */
  hasError? : boolean;
  /**
   * Height property for Input component
   * @default 3.5em
   */
  height? : string;
  /**
   * Specifies the label for Input component
   */
  label? : string;
  /**
   * onChange handler for Input component
   */
  onChange? : (e : React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Color property for Input component placeholder text
   */
  placeholderColor? : string;
  /**
   * Value of Input component
   * @default ''
   */
  value? : string;
  /**
   * Width property for Input component
   * @default 25em
   */
  width? : string;
}
