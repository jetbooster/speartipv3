import React, { ReactElement } from 'react';
import { Grid } from 'semantic-ui-react';
import { SemanticWIDTHS } from 'semantic-ui-react/dist/commonjs/generic';

interface ReactiveGridProps {
  children: ReactElement[],
  columns: number,
}

export const ResponsiveGrid = ({ children, columns }:ReactiveGridProps) => {
  const GridItems = children.map((child) => <Grid.Column key={child.props.src}>{child}</Grid.Column>);
  const rows = GridItems.reduce<ReactElement[][]>((resultArray, GridItem, index) => {
    const chunkIndex = Math.floor(index / columns);
    if (!resultArray[chunkIndex]) {
      // eslint-disable-next-line no-param-reassign
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(GridItem);

    return resultArray;
  }, []);
  console.log(rows);
  return (
    <Grid>
      {rows.map((row) => (
        <Grid.Row columns={columns as SemanticWIDTHS}>
          {row.map((item: ReactElement) => item)}
        </Grid.Row>
      ))}
    </Grid>
  );
};
