import { ITheme } from '@taimoormk/util-functions';
import React, { ReactElement, ReactNode } from 'react';
import { TypographyWrapper, TypographyText } from './styled';
import { Grid } from '../grid';
import { H1 } from '../h1';
import { H2 } from '../h2';
import { H3 } from '../h3';
import { H4 } from '../h4';
import { H5 } from '../h5';
import { Text } from '../text';

export const Typography = ({
  theme,
} : ITypographyProps) : ReactElement => (
  <Grid
    columnGap="2em"
    gridColumn="1fr 1fr 1fr"
    gridRow="1fr 1fr"
    rowGap="2em"
  >
    <TypographyWrapper>
      <TypographyText>
        {Object.keys(theme.typography.h1).map((key : string) : ReactNode => (
          <Text key={key}>{`${key} - ${theme.typography.h1[key]}`}</Text>
        ))}
      </TypographyText>
    <H1>Heading1</H1>
    </TypographyWrapper>
    <TypographyWrapper>
      <TypographyText>
        {Object.keys(theme.typography.h2).map((key : string) : ReactNode => (
          <Text key={key}>{`${key} - ${theme.typography.h2[key]}`}</Text>
        ))}
      </TypographyText>
    <H2>Heading2</H2>
    </TypographyWrapper>
    <TypographyWrapper>
      <TypographyText>
        {Object.keys(theme.typography.h3).map((key : string) : ReactNode => (
          <Text key={key}>{`${key} - ${theme.typography.h3[key]}`}</Text>
        ))}
      </TypographyText>
      <H3>Heading3</H3>
    </TypographyWrapper>
    <TypographyWrapper>
      <TypographyText>
        {Object.keys(theme.typography.h4).map((key : string) : ReactNode => (
          <Text key={key}>{`${key} - ${theme.typography.h4[key]}`}</Text>
        ))}
      </TypographyText>
      <H4>Heading4</H4>
    </TypographyWrapper>
    <TypographyWrapper>
      <TypographyText>
        {Object.keys(theme.typography.h5).map((key : string) : ReactNode => (
          <Text key={key}>{`${key} - ${theme.typography.h5[key]}`}</Text>
        ))}
      </TypographyText>
      <H5>Heading5</H5>
    </TypographyWrapper>
    <TypographyWrapper>
      <TypographyText>
        {Object.keys(theme.typography.text).map((key : string) : ReactNode => (
          <Text key={key}>{`${key} - ${theme.typography.text[key]}`}</Text>
        ))}
      </TypographyText>
      <Text>Text</Text>
    </TypographyWrapper>
    <TypographyWrapper>
      <TypographyText>
        {Object.keys(theme.spacing).map((key : string) : ReactNode => (
          <Text key={key}>{`${key} - ${theme.spacing[key]}`}</Text>
        ))}
      </TypographyText>
      <Text>Spacing</Text>
    </TypographyWrapper>
    <TypographyWrapper>
      <TypographyText>
        {Object.keys(theme.breakpoints).map((key : string) : ReactNode => (
          <Text key={key}>{`${key} - ${theme.breakpoints[key]}`}</Text>
        ))}
      </TypographyText>
      <Text>Breakpoints</Text>
    </TypographyWrapper>
    <TypographyWrapper>
      <TypographyText>
        {Object.keys(theme.radius).map((key : string) : ReactNode => (
          <Text key={key}>{`${key} - ${theme.radius[key]}`}</Text>
        ))}
      </TypographyText>
      <Text>Radius</Text>
    </TypographyWrapper>
    <TypographyWrapper>
      <TypographyText>
        {Object.keys(theme.shadow).map((key : string) : ReactNode => (
          <Text key={key}>{`${key} - ${theme.shadow[key].toString()}`}</Text>
        ))}
      </TypographyText>
      <Text>Shadow</Text>
    </TypographyWrapper>
    <TypographyWrapper>
      <TypographyText>
        {Object.keys(theme.zIndex).map((key : string) : ReactNode => (
          <Text key={key}>{`${key} - ${theme.zIndex[key]}`}</Text>
        ))}
      </TypographyText>
      <Text>zIndex</Text>
    </TypographyWrapper>
  </Grid>
);

export interface ITypographyProps {
  /**
   * Theme object
   * @default theme
   */
  theme : ITheme;
}
