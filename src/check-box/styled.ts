import { IResponsiveProps, ITheme, responsiveComponent } from '@taimoormk/util-functions';
import styled, { ThemedStyledProps } from 'styled-components';

export const CheckBoxContainer = styled.div<ICheckBoxContainerProps>`
  display: inline-block;
  height: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.spacing.default};

  ${({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  } : ICheckBoxContainerProps) : string => responsiveComponent({
    desktop,
    laptop,
    laptopL,
    mobileL,
    mobileM,
    mobileS,
    tablet,
  })};
`;

export const HideNativeCheckbox = styled.input.attrs(() : any => ({
  type: 'checkbox',
}))`
  border: 0;
  clip: rect(0 0 0 0);
  height: 0px;
  margin: 0px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0px;
`;

export const Check = styled.svg`
  fill: none;
  stroke-width: 2px;
  stroke: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.colors.white};
`;

export const StyledCheckbox = styled.div<IStyledCheckboxProps>`
  background-color: ${({
    checkedColor,
    isChecked,
    theme,
    unCheckedColor,
  } : ThemedStyledProps<IStyledCheckboxProps, ITheme>) : string =>
    (isChecked ? (checkedColor || theme.colors.skyBlue) : (unCheckedColor || theme.colors.lighterBlack))};
  border-radius: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.radius.default};
  display: inline-block;
  height: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.spacing.default};
  transition: all 150ms;
  width: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.spacing.default};

  ${HideNativeCheckbox}:focus + & {
    box-shadow: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.shadow.default};
  }

  ${Check} {
    visibility: ${({ isChecked } : IStyledCheckboxProps) : string =>
      isChecked ? 'visible' : 'hidden'}
  }
`;

export interface IStyledCheckboxProps {
  /**
   * Background Color when its checked state
   * @default theme.colors.skyBlue
   */
  checkedColor? : string;
  /**
   * Checked property for the Checkbox
   */
  isChecked : boolean;
  /**
   * Background Color when its unchecked state
   * @default theme.colors.lighterBlack
   */
  unCheckedColor? : string;
}

export interface ICheckBoxContainerProps extends IResponsiveProps {}
