import { IResponsiveProps, ITheme, responsiveComponent } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';
import { withFieldLabel } from '../hoc/field-label';

export const TextArea = styled.textarea.attrs<ITextAreaAttrsProps>(({
  autoComplete,
  autoFocus,
  cols,
  dirName,
  disabled,
  maxLength,
  minLength,
  placeholder,
  readOnly,
  required,
  rows,
  value,
  wrap,
} : ITextAreaAttrsProps) : ITextAreaAttrsProps => ({
  autoComplete : autoComplete || 'off',
  autoFocus: autoFocus || false,
  cols: cols || 20,
  dirName: dirName || '',
  disabled: disabled || false,
  maxLength: maxLength || 0,
  minLength: minLength || 0,
  placeholder: placeholder || '',
  readOnly: readOnly || false,
  required: required || false,
  rows: rows || 5,
  value,
  wrap: wrap || WRAP_TYPE.HARD,
}))<ITextAreaProps>`
  background-color: ${({ backgroundColor, theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : string =>
    backgroundColor || theme.colors.white};
  border: ${({ border, hasError, theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : string =>
    hasError ? `0.5px solid ${theme.colors.cherryRed}` : border || `1px solid ${theme.colors.darkGrey}`};
  border-radius: ${({ borderRadius } : ThemedStyledProps<ITextAreaProps, ITheme>) : string =>
    borderRadius || '0em'};
  color: ${({ color, theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : string =>
    color || theme.colors.black};
  display: inline-block;
  font-family: ${({ fontFamily, theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : string =>
    fontFamily || theme.typography.text.fontFamily};
  font-size: ${({ fontSize, theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : string =>
    fontSize || theme.typography.text.fontSize};
  font-stretch: normal;
  font-style: normal;
  font-weight: ${({ fontWeight, theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : number =>
    fontWeight || theme.typography.text.fontWeight};
  letter-spacing: ${({ letterSpacing, theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : string =>
    letterSpacing || theme.typography.text.letterSpacing};
  line-height: ${({ lineHeight, theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : string =>
    lineHeight || theme.typography.text.lineHeight};
  margin: 0;
  overflow: auto;
  padding: 1em;
  resize: none;
  width: 100%;

  &:focus {
    outline: none;
    border: ${({ outlineColor, theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : string =>
      `0.5px solid ${outlineColor}` || `0.5px solid ${theme.colors.skyBlue}`};
  }

  &::-webkit-input-placeholder {
    color: ${({ placeholderColor, theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : string =>
      placeholderColor || theme.colors.lightBlack};
    font-family: ${({ theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : string => theme.typography.text.fontFamily};
    font-size: ${({ theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : string => theme.typography.text.fontSize};
    font-weight: ${({ theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : number => theme.typography.text.fontWeight};
    letter-spacing: ${({ theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : string => theme.typography.text.letterSpacing};
    line-height: ${({ theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : string => theme.typography.text.lineHeight};
    text-align: ${({ theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : string => theme.typography.text.textAlign};
    text-transform: ${({ theme } : ThemedStyledProps<ITextAreaProps, ITheme>) : string => theme.typography.text.textTransform};
  }

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : ITextAreaProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export const TextAreaWithFieldLabel = withFieldLabel(TextArea);

export enum WRAP_TYPE {
  HARD = 'hard',
  SOFT = 'soft',
}

export interface ITextAreaAttrsProps {
  /**
   * AutoComplete attribute for TextArea component
   * @default off
   */
  autoComplete? : string;
  /**
   * AutoFocus attribute for TextArea component
   * @default false
   */
  autoFocus? : boolean;
  /**
   * Columns attribute for TextArea component
   * @default 20
   */
  cols? : number;
  /**
   * Specifies the dir name for TextArea component
   * @default '''
   */
  dirName? : string;
  /**
   * Specifies the default value for TextArea component
   * @default ''
   */
  defaultValue? : string;
  /**
   * Disabled attribute for TextArea component
   * @default false
   */
  disabled? : boolean;
  /**
   * Max char length attribute for TextArea component
   * @default 0
   */
  maxLength? : number;
  /**
   * Min char length attribute for TextArea component
   * @default 0
   */
  minLength? : number;
  /**
   * Placeholder attribute for TextArea component
   * @default ''
   */
  placeholder? : string;
  /**
   * Readonly attribute for TextArea component
   * @default false
   */
  readOnly? : boolean;
  /**
   * Required attribute for TextArea component
   * @default false
   */
  required? : boolean;
  /**
   * Rows attribute for TextArea component
   * @default 5
   */
  rows? : number;
  /**
   * Returns / Sets the raw value contained in the control.
   * @default ''
   */
  value? : string;
  /**
   * Wrap attribute for TextArea component
   * @default WrapType.hard
   */
  wrap? : WRAP_TYPE;
}

export interface ITextAreaProps extends IResponsiveProps {
  /**
   * Border property for TextArea component
   * @default #FFFFFF
   */
  backgroundColor? : string;
  /**
   * Border property for TextArea component
   * @default #EFEFEF
   */
  border? : string;
  /**
   * Border property for TextArea component
   * @default 0em
   */
  borderRadius? : string;
  /**
   * Color property for Text component
   * @default ThemeText
   */
  color? : string;
  /**
   * Font Family property for Text component
   * @default Montserrat
   */
  fontFamily? : string;
  /**
   * Font Size property for Text component
   * @default ThemeText
   */
  fontSize? : string;
  /**
   * Font Weight property for Text component
   * @default ThemeText
   */
  fontWeight? : number;
  /**
   * Specifies if there is an error
   * @default false
   */
  hasError? : boolean;
  /**
   * Letter Spacing property for Text component
   * @default ThemeText
   */
  letterSpacing? : string;
  /**
   * Line Height proprty for Text component
   * @default ThemeText
   */
  lineHeight? : string;
  /**
   * onChange handler for Input component
   */
  onChange? : (e : React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * Specifies the placeholder text color
   */
  placeholderColor? : string;
  /**
   * Specifies the outline color of text area
   */
  outlineColor? : string;
  /**
   * Value of Input component
   * @default ''
   */
  value? : string;
}
