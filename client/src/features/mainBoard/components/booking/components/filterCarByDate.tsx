import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import addWeeks from 'date-fns/addWeeks';

function getWeeksAfter(date: Date | null, amount: number) {
  return date ? addWeeks(date, amount) : undefined;
}

function FilterCarByDate(props) {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  React.useEffect(() => {
    props.dateValue(value)
  }, [value])
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          disablePast
          calendars={1}
          value={value}
          startText="Ngày thuê"
          endText="Ngày trả"
          maxDate={getWeeksAfter(value[0], 4)}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> đến </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
    </LocalizationProvider>
  );
}
export default FilterCarByDate;