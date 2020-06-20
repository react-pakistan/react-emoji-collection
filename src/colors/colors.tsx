import { IColors } from '@taimoormk/util-functions';
import React, { ReactElement, ReactNode, Fragment } from 'react';
import { Grid } from '../grid';
import { Text } from '../text';
import {
  Swatch,
  SwatchPalette,
  SwatchPaletteContainer,
  SwatchPaletteLabel,
} from './styled';

export const Colors = ({
  colors,
} : IColorsProps) : ReactElement => (
  <Grid
    columnGap="1em"
    gridColumn="1fr 1fr 1fr"
    gridRow="1fr"
    height="auto"
    rowGap="1em"
    width="auto"
  >
    {Object.keys(colors).map((key : string) : ReactNode => (
      <Fragment key={key}>
        <SwatchPaletteContainer>
          <SwatchPalette>
            <Swatch backgroundColor={colors[key]} opacity={1} />
            <Swatch backgroundColor={colors[key]} opacity={0.75} />
            <Swatch backgroundColor={colors[key]} opacity={0.5} />
            <Swatch backgroundColor={colors[key]} opacity={0.25} />
          </SwatchPalette>
          <SwatchPaletteLabel>
            <Text>{key} - {colors[key]}</Text>
          </SwatchPaletteLabel>
        </SwatchPaletteContainer>
      </Fragment>
    ))}
  </Grid>
);

export interface IColorsProps {
  /**
   *
   */
  colors : IColors;
}
