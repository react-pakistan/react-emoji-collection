import { IResponsiveProps } from '@taimoormk/util-functions';
import styled from 'styled-components';

export const Spacer = styled.div<ISpacerProps>`
  margin: ${({ margin } : ISpacerProps) : string => margin};
  padding: ${({ padding } : ISpacerProps) : string => padding || '0'};
`;

export interface ISpacerProps extends IResponsiveProps {
  /**
   * Margin property for spacer component
   */
  margin : string;
  /**
   * Padding property for spacer component
   * @default 0
   */
  padding? : string;
}
