import styled from 'styled-components';

export const RadioButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row nowrap;
  justify-content: flex-start;
`;

export const StyledCheckBox = styled.input.attrs<IStyledCheckBoxProps>(({
  checked,
} : IStyledCheckBoxProps) : IStyledCheckBoxProps & any => ({
  checked,
  type: 'radio',
}))``;

export interface IStyledCheckBoxProps {
  /**
   * Specifies if Radio button is selected or not
   * @default false
   */
  checked : boolean;
}
