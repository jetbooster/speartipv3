import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
} from 'semantic-ui-react';
import { DateTime, Interval } from 'luxon';

interface WorkItemProps {
  jobTitle: string,
  company: string,
  children: ReactNode,
  startDate: string,
  endDate?: string,
  current?: boolean
}

const parseInterval = ({ months, years }:{months:number, years:number}) => {
  const trimmedMonths = Math.floor(months);
  const trimmedYears = Math.floor(years);
  const plural = (n:number) => (n > 1 ? 's' : '');
  const m = `${trimmedMonths ? `${trimmedMonths} Month${plural(trimmedMonths)}` : ''}`;
  const y = `${trimmedYears ? `${trimmedYears} Year${plural(trimmedYears)}` : ''}`;
  const spacer = (m && y) && ' ';
  return `${y}${spacer}${m}`;
};

export const WorkItem:React.FC<WorkItemProps> = ({
  jobTitle, company, children, startDate, endDate = DateTime.now().toFormat('MMyy'), current,
}) => {
  const diff = Interval
    .fromDateTimes(DateTime.fromFormat(startDate, 'MMyy'), DateTime.fromFormat(endDate, 'MMyy'))
    .toDuration(['years', 'months']);
  const prettyInterval = parseInterval(diff);
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{jobTitle}</Card.Header>
        <Card.Meta>
          {company}
          {' - '}
          {prettyInterval}
          {current && <span style={{ fontWeight: 900 }}> - (current)</span>}
        </Card.Meta>
        <Card.Meta />
      </Card.Content>
      <Card.Content description>

        {children}
      </Card.Content>
    </Card>
  );
};

WorkItem.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  // current: PropTypes.bool,
};

WorkItem.defaultProps = {
  endDate: `${DateTime.now().toFormat('MMyy')}`,
  current: false,
};
