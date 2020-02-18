import React, { useState } from "react";
import ReactDOM from "react-dom";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
  TimePicker
} from "@material-ui/pickers";
import moment from "moment";
import MomentUtils from "@date-io/moment";

// Current Date + Time
let m = moment();

// Create from ISO 8601 string
m = moment("2019-05-19");

// Using a format
m = moment("2019-06-14 4:50PM", "YYYY/MM/DD h:mmA");

//console.log(`toString() => ${m.toString()}`);
//console.log(`toISOString() => ${m.toISOString()}`);

// Add time
let m2 = moment("2020-01-25");
//console.log(`Original Moment: ${m2.toString()}`);

m2.add(40, "minutes");
//console.log(`After Manipulation: ${m2.toString()}`);

const App = () => {
  const [date, setDate] = useState(moment("2020-01-25"));
  const handleDateChange = day => {
    setDate(day);
    setStartTime(0);
    updateStartTime(day, 0);
    setEndTime(10);
    updateEndTime(day, 10);
  };
  const [startTime, setStartTime] = useState(0);
  const handleStartChange = event => {
    setStartTime(event.target.value);
    updateStartTime(date, event.target.value);
  };
  const [endTime, setEndTime] = useState(10);
  const handleEndChange = event => {
    setEndTime(event.target.value);
    updateEndTime(date, event.target.value);
  };

  // Output Start Time
  const [outputStartTime, setOutputStartTime] = useState("");

  const updateStartTime = (day, amount) => {
    const d = moment(day);
    let combinedTime = d.add(amount, "minutes");
    setOutputStartTime(combinedTime);
    updateTotalTime(amount, endTime);
  };

  // Output End Time
  const [outputEndTime, setOutputEndTime] = useState("");

  const updateEndTime = (day, amount) => {
    const d = moment(day);
    let combinedTime = d.add(amount, "minutes");
    setOutputEndTime(combinedTime);
    updateTotalTime(startTime, amount);
  };

  // Output Total Time
  const [totalTime, setTotalTime] = useState(moment.duration(10, "minutes"));

  const updateTotalTime = (start, end) => {
    if (end >= start) {
      let minutes = end - start;
      setTotalTime(moment.duration(minutes, "minutes"));
    } else {
      alert("Select a valid end time");
    }
  };

  const formatHoursMinutes = num => {
    if (num.toString().length == 1) {
      num = "0" + num;
    }
    return num.toString();
  };

  // helper function
  const timeInMinutes = time => {
    const t = moment(time);

    // calculate time in minutes
    const minutes = t.hours() * 60 + t.minutes();
    return minutes;
  };

  const [pickerStartTime, handlePickerStartTime] = useState(
    moment({ minute: 0 })
  );
  const [pickerEndTime, handlePickerEndTime] = useState(moment({ minute: 10 }));

  const handleUpdateStart = time => {
    handlePickerStartTime(time);
    const mins = timeInMinutes(time);
    setStartTime(mins);
    updateStartTime(date, mins);
  };
  const handleUpdateEnd = time => {
    handlePickerEndTime(time);
    const mins = timeInMinutes(time);
    setEndTime(mins);
    updateEndTime(date, mins);
  };

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      wrap="nowrap"
    >
      <h1>Moment.js Playground</h1>
      <Card>
        <h3>Date Picker</h3>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardDatePicker
            clearable
            value={date}
            onChange={date => handleDateChange(date)}
            format="MM/DD/YY"
          />
        </MuiPickersUtilsProvider>

        <h3>MUI Time Pickers</h3>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Grid container direction="row" alignItems="center">
            <div className="time-select">
              <TimePicker
                variant="inline"
                label="Start Time"
                value={pickerStartTime}
                onChange={time => handleUpdateStart(time)}
              />
            </div>

            <div className="time-select">
              <TimePicker
                variant="inline"
                label="End Time"
                value={pickerEndTime}
                onChange={time => handleUpdateEnd(time)}
              />
            </div>
          </Grid>
        </MuiPickersUtilsProvider>

        <h3>Time Pickers</h3>
        <Grid container direction="row" alignItems="center">
          <div className="time-select">
            <InputLabel id="start-time-label">Start Time</InputLabel>
            <Select
              labelId="start-time-label"
              id="start-time"
              value={startTime}
              onChange={handleStartChange}
            >
              <MenuItem value={0}>12:00am</MenuItem>
              <MenuItem value={10}>12:10am</MenuItem>
              <MenuItem value={20}>12:20am</MenuItem>
              <MenuItem value={30}>12:30am</MenuItem>
              <MenuItem value={40}>12:40am</MenuItem>
              <MenuItem value={50}>12:50am</MenuItem>
              <MenuItem value={60}>1:00am</MenuItem>
              <MenuItem value={70}>1:10am</MenuItem>
              <MenuItem value={80}>1:20am</MenuItem>
              <MenuItem value={90}>1:30am</MenuItem>
              <MenuItem value={100}>1:40am</MenuItem>
              <MenuItem value={110}>1:50am</MenuItem>
              <MenuItem value={120}>2:00am</MenuItem>
              <MenuItem value={130}>2:10am</MenuItem>
              <MenuItem value={140}>2:20am</MenuItem>
              <MenuItem value={150}>2:30am</MenuItem>
              <MenuItem value={160}>2:40am</MenuItem>
              <MenuItem value={170}>2:50am</MenuItem>
              <MenuItem value={180}>3:00am</MenuItem>
              <MenuItem value={190}>3:10am</MenuItem>
              <MenuItem value={200}>3:20am</MenuItem>
              <MenuItem value={210}>3:30am</MenuItem>
              <MenuItem value={220}>3:40am</MenuItem>
              <MenuItem value={230}>3:50am</MenuItem>
              <MenuItem value={240}>4:00am</MenuItem>
              <MenuItem value={250}>4:10am</MenuItem>
              <MenuItem value={260}>4:20am</MenuItem>
              <MenuItem value={270}>4:30am</MenuItem>
              <MenuItem value={280}>4:40am</MenuItem>
              <MenuItem value={290}>4:50am</MenuItem>
              <MenuItem value={300}>5:00am</MenuItem>
              <MenuItem value={310}>5:10am</MenuItem>
              <MenuItem value={320}>5:20am</MenuItem>
              <MenuItem value={330}>5:30am</MenuItem>
              <MenuItem value={340}>5:40am</MenuItem>
              <MenuItem value={350}>5:50am</MenuItem>
              <MenuItem value={360}>6:00am</MenuItem>
              <MenuItem value={370}>6:10am</MenuItem>
              <MenuItem value={380}>6:20am</MenuItem>
              <MenuItem value={390}>6:30am</MenuItem>
              <MenuItem value={400}>6:40am</MenuItem>
              <MenuItem value={410}>6:50am</MenuItem>
              <MenuItem value={420}>7:00am</MenuItem>
              <MenuItem value={430}>7:10am</MenuItem>
              <MenuItem value={440}>7:20am</MenuItem>
              <MenuItem value={450}>7:30am</MenuItem>
              <MenuItem value={460}>7:40am</MenuItem>
              <MenuItem value={470}>7:50am</MenuItem>
              <MenuItem value={480}>8:00am</MenuItem>
              <MenuItem value={490}>8:10am</MenuItem>
              <MenuItem value={500}>8:20am</MenuItem>
              <MenuItem value={510}>8:30am</MenuItem>
              <MenuItem value={520}>8:40am</MenuItem>
              <MenuItem value={530}>8:50am</MenuItem>
              <MenuItem value={540}>9:00am</MenuItem>
              <MenuItem value={550}>9:10am</MenuItem>
              <MenuItem value={560}>9:20am</MenuItem>
              <MenuItem value={570}>9:30am</MenuItem>
              <MenuItem value={580}>9:40am</MenuItem>
              <MenuItem value={590}>9:50am</MenuItem>
              <MenuItem value={600}>10:00am</MenuItem>
              <MenuItem value={610}>10:10am</MenuItem>
              <MenuItem value={620}>10:20am</MenuItem>
              <MenuItem value={630}>10:30am</MenuItem>
              <MenuItem value={640}>10:40am</MenuItem>
              <MenuItem value={650}>10:50am</MenuItem>
              <MenuItem value={660}>11:00am</MenuItem>
              <MenuItem value={670}>11:10am</MenuItem>
              <MenuItem value={680}>11:20am</MenuItem>
              <MenuItem value={690}>11:30am</MenuItem>
              <MenuItem value={700}>11:40am</MenuItem>
              <MenuItem value={710}>11:50am</MenuItem>
              <MenuItem value={720}>12:00pm</MenuItem>
              <MenuItem value={730}>12:10pm</MenuItem>
              <MenuItem value={740}>12:20pm</MenuItem>
              <MenuItem value={750}>12:30pm</MenuItem>
              <MenuItem value={760}>12:40pm</MenuItem>
              <MenuItem value={770}>12:50pm</MenuItem>
              <MenuItem value={780}>1:00pm</MenuItem>
              <MenuItem value={790}>1:10pm</MenuItem>
              <MenuItem value={800}>1:20pm</MenuItem>
              <MenuItem value={810}>1:30pm</MenuItem>
              <MenuItem value={820}>1:40pm</MenuItem>
              <MenuItem value={830}>1:50pm</MenuItem>
              <MenuItem value={840}>2:00pm</MenuItem>
              <MenuItem value={850}>2:10pm</MenuItem>
              <MenuItem value={860}>2:20pm</MenuItem>
              <MenuItem value={870}>2:30pm</MenuItem>
              <MenuItem value={880}>2:40pm</MenuItem>
              <MenuItem value={890}>2:50pm</MenuItem>
              <MenuItem value={900}>3:00pm</MenuItem>
              <MenuItem value={910}>3:10pm</MenuItem>
              <MenuItem value={920}>3:20pm</MenuItem>
              <MenuItem value={930}>3:30pm</MenuItem>
              <MenuItem value={940}>3:40pm</MenuItem>
              <MenuItem value={950}>3:50pm</MenuItem>
              <MenuItem value={960}>4:00pm</MenuItem>
              <MenuItem value={970}>4:10pm</MenuItem>
              <MenuItem value={980}>4:20pm</MenuItem>
              <MenuItem value={990}>4:30pm</MenuItem>
              <MenuItem value={1000}>4:40pm</MenuItem>
              <MenuItem value={1010}>4:50pm</MenuItem>
              <MenuItem value={1020}>5:00pm</MenuItem>
              <MenuItem value={1030}>5:10pm</MenuItem>
              <MenuItem value={1040}>5:20pm</MenuItem>
              <MenuItem value={1050}>5:30pm</MenuItem>
              <MenuItem value={1060}>5:40pm</MenuItem>
              <MenuItem value={1070}>5:50pm</MenuItem>
              <MenuItem value={1080}>6:00pm</MenuItem>
              <MenuItem value={1090}>6:10pm</MenuItem>
              <MenuItem value={1100}>6:20pm</MenuItem>
              <MenuItem value={1110}>6:30pm</MenuItem>
              <MenuItem value={1120}>6:40pm</MenuItem>
              <MenuItem value={1130}>6:50pm</MenuItem>
              <MenuItem value={1140}>7:00pm</MenuItem>
              <MenuItem value={1150}>7:10pm</MenuItem>
              <MenuItem value={1160}>7:20pm</MenuItem>
              <MenuItem value={1170}>7:30pm</MenuItem>
              <MenuItem value={1180}>7:40pm</MenuItem>
              <MenuItem value={1190}>7:50pm</MenuItem>
              <MenuItem value={1200}>8:00pm</MenuItem>
              <MenuItem value={1210}>8:10pm</MenuItem>
              <MenuItem value={1220}>8:20pm</MenuItem>
              <MenuItem value={1230}>8:30pm</MenuItem>
              <MenuItem value={1240}>8:40pm</MenuItem>
              <MenuItem value={1250}>8:50pm</MenuItem>
              <MenuItem value={1260}>9:00pm</MenuItem>
              <MenuItem value={1270}>9:10pm</MenuItem>
              <MenuItem value={1280}>9:20pm</MenuItem>
              <MenuItem value={1290}>9:30pm</MenuItem>
              <MenuItem value={1300}>9:40pm</MenuItem>
              <MenuItem value={1310}>9:50pm</MenuItem>
              <MenuItem value={1320}>10:00pm</MenuItem>
              <MenuItem value={1330}>10:10pm</MenuItem>
              <MenuItem value={1340}>10:20pm</MenuItem>
              <MenuItem value={1350}>10:30pm</MenuItem>
              <MenuItem value={1360}>10:40pm</MenuItem>
              <MenuItem value={1370}>10:50pm</MenuItem>
              <MenuItem value={1380}>11:00pm</MenuItem>
              <MenuItem value={1390}>11:10pm</MenuItem>
              <MenuItem value={1400}>11:20pm</MenuItem>
              <MenuItem value={1410}>11:30pm</MenuItem>
              <MenuItem value={1420}>11:40pm</MenuItem>
              <MenuItem value={1430}>11:50pm</MenuItem>
            </Select>
          </div>

          <div className="time-select">
            <InputLabel id="end-time-label">End Time</InputLabel>
            <Select
              labelId="end-time-label"
              id="end-time"
              value={endTime}
              onChange={handleEndChange}
            >
              <MenuItem value={0}>12:00am</MenuItem>
              <MenuItem value={10}>12:10am</MenuItem>
              <MenuItem value={20}>12:20am</MenuItem>
              <MenuItem value={30}>12:30am</MenuItem>
              <MenuItem value={40}>12:40am</MenuItem>
              <MenuItem value={50}>12:50am</MenuItem>
              <MenuItem value={60}>1:00am</MenuItem>
              <MenuItem value={70}>1:10am</MenuItem>
              <MenuItem value={80}>1:20am</MenuItem>
              <MenuItem value={90}>1:30am</MenuItem>
              <MenuItem value={100}>1:40am</MenuItem>
              <MenuItem value={110}>1:50am</MenuItem>
              <MenuItem value={120}>2:00am</MenuItem>
              <MenuItem value={130}>2:10am</MenuItem>
              <MenuItem value={140}>2:20am</MenuItem>
              <MenuItem value={150}>2:30am</MenuItem>
              <MenuItem value={160}>2:40am</MenuItem>
              <MenuItem value={170}>2:50am</MenuItem>
              <MenuItem value={180}>3:00am</MenuItem>
              <MenuItem value={190}>3:10am</MenuItem>
              <MenuItem value={200}>3:20am</MenuItem>
              <MenuItem value={210}>3:30am</MenuItem>
              <MenuItem value={220}>3:40am</MenuItem>
              <MenuItem value={230}>3:50am</MenuItem>
              <MenuItem value={240}>4:00am</MenuItem>
              <MenuItem value={250}>4:10am</MenuItem>
              <MenuItem value={260}>4:20am</MenuItem>
              <MenuItem value={270}>4:30am</MenuItem>
              <MenuItem value={280}>4:40am</MenuItem>
              <MenuItem value={290}>4:50am</MenuItem>
              <MenuItem value={300}>5:00am</MenuItem>
              <MenuItem value={310}>5:10am</MenuItem>
              <MenuItem value={320}>5:20am</MenuItem>
              <MenuItem value={330}>5:30am</MenuItem>
              <MenuItem value={340}>5:40am</MenuItem>
              <MenuItem value={350}>5:50am</MenuItem>
              <MenuItem value={360}>6:00am</MenuItem>
              <MenuItem value={370}>6:10am</MenuItem>
              <MenuItem value={380}>6:20am</MenuItem>
              <MenuItem value={390}>6:30am</MenuItem>
              <MenuItem value={400}>6:40am</MenuItem>
              <MenuItem value={410}>6:50am</MenuItem>
              <MenuItem value={420}>7:00am</MenuItem>
              <MenuItem value={430}>7:10am</MenuItem>
              <MenuItem value={440}>7:20am</MenuItem>
              <MenuItem value={450}>7:30am</MenuItem>
              <MenuItem value={460}>7:40am</MenuItem>
              <MenuItem value={470}>7:50am</MenuItem>
              <MenuItem value={480}>8:00am</MenuItem>
              <MenuItem value={490}>8:10am</MenuItem>
              <MenuItem value={500}>8:20am</MenuItem>
              <MenuItem value={510}>8:30am</MenuItem>
              <MenuItem value={520}>8:40am</MenuItem>
              <MenuItem value={530}>8:50am</MenuItem>
              <MenuItem value={540}>9:00am</MenuItem>
              <MenuItem value={550}>9:10am</MenuItem>
              <MenuItem value={560}>9:20am</MenuItem>
              <MenuItem value={570}>9:30am</MenuItem>
              <MenuItem value={580}>9:40am</MenuItem>
              <MenuItem value={590}>9:50am</MenuItem>
              <MenuItem value={600}>10:00am</MenuItem>
              <MenuItem value={610}>10:10am</MenuItem>
              <MenuItem value={620}>10:20am</MenuItem>
              <MenuItem value={630}>10:30am</MenuItem>
              <MenuItem value={640}>10:40am</MenuItem>
              <MenuItem value={650}>10:50am</MenuItem>
              <MenuItem value={660}>11:00am</MenuItem>
              <MenuItem value={670}>11:10am</MenuItem>
              <MenuItem value={680}>11:20am</MenuItem>
              <MenuItem value={690}>11:30am</MenuItem>
              <MenuItem value={700}>11:40am</MenuItem>
              <MenuItem value={710}>11:50am</MenuItem>
              <MenuItem value={720}>12:00pm</MenuItem>
              <MenuItem value={730}>12:10pm</MenuItem>
              <MenuItem value={740}>12:20pm</MenuItem>
              <MenuItem value={750}>12:30pm</MenuItem>
              <MenuItem value={760}>12:40pm</MenuItem>
              <MenuItem value={770}>12:50pm</MenuItem>
              <MenuItem value={780}>1:00pm</MenuItem>
              <MenuItem value={790}>1:10pm</MenuItem>
              <MenuItem value={800}>1:20pm</MenuItem>
              <MenuItem value={810}>1:30pm</MenuItem>
              <MenuItem value={820}>1:40pm</MenuItem>
              <MenuItem value={830}>1:50pm</MenuItem>
              <MenuItem value={840}>2:00pm</MenuItem>
              <MenuItem value={850}>2:10pm</MenuItem>
              <MenuItem value={860}>2:20pm</MenuItem>
              <MenuItem value={870}>2:30pm</MenuItem>
              <MenuItem value={880}>2:40pm</MenuItem>
              <MenuItem value={890}>2:50pm</MenuItem>
              <MenuItem value={900}>3:00pm</MenuItem>
              <MenuItem value={910}>3:10pm</MenuItem>
              <MenuItem value={920}>3:20pm</MenuItem>
              <MenuItem value={930}>3:30pm</MenuItem>
              <MenuItem value={940}>3:40pm</MenuItem>
              <MenuItem value={950}>3:50pm</MenuItem>
              <MenuItem value={960}>4:00pm</MenuItem>
              <MenuItem value={970}>4:10pm</MenuItem>
              <MenuItem value={980}>4:20pm</MenuItem>
              <MenuItem value={990}>4:30pm</MenuItem>
              <MenuItem value={1000}>4:40pm</MenuItem>
              <MenuItem value={1010}>4:50pm</MenuItem>
              <MenuItem value={1020}>5:00pm</MenuItem>
              <MenuItem value={1030}>5:10pm</MenuItem>
              <MenuItem value={1040}>5:20pm</MenuItem>
              <MenuItem value={1050}>5:30pm</MenuItem>
              <MenuItem value={1060}>5:40pm</MenuItem>
              <MenuItem value={1070}>5:50pm</MenuItem>
              <MenuItem value={1080}>6:00pm</MenuItem>
              <MenuItem value={1090}>6:10pm</MenuItem>
              <MenuItem value={1100}>6:20pm</MenuItem>
              <MenuItem value={1110}>6:30pm</MenuItem>
              <MenuItem value={1120}>6:40pm</MenuItem>
              <MenuItem value={1130}>6:50pm</MenuItem>
              <MenuItem value={1140}>7:00pm</MenuItem>
              <MenuItem value={1150}>7:10pm</MenuItem>
              <MenuItem value={1160}>7:20pm</MenuItem>
              <MenuItem value={1170}>7:30pm</MenuItem>
              <MenuItem value={1180}>7:40pm</MenuItem>
              <MenuItem value={1190}>7:50pm</MenuItem>
              <MenuItem value={1200}>8:00pm</MenuItem>
              <MenuItem value={1210}>8:10pm</MenuItem>
              <MenuItem value={1220}>8:20pm</MenuItem>
              <MenuItem value={1230}>8:30pm</MenuItem>
              <MenuItem value={1240}>8:40pm</MenuItem>
              <MenuItem value={1250}>8:50pm</MenuItem>
              <MenuItem value={1260}>9:00pm</MenuItem>
              <MenuItem value={1270}>9:10pm</MenuItem>
              <MenuItem value={1280}>9:20pm</MenuItem>
              <MenuItem value={1290}>9:30pm</MenuItem>
              <MenuItem value={1300}>9:40pm</MenuItem>
              <MenuItem value={1310}>9:50pm</MenuItem>
              <MenuItem value={1320}>10:00pm</MenuItem>
              <MenuItem value={1330}>10:10pm</MenuItem>
              <MenuItem value={1340}>10:20pm</MenuItem>
              <MenuItem value={1350}>10:30pm</MenuItem>
              <MenuItem value={1360}>10:40pm</MenuItem>
              <MenuItem value={1370}>10:50pm</MenuItem>
              <MenuItem value={1380}>11:00pm</MenuItem>
              <MenuItem value={1390}>11:10pm</MenuItem>
              <MenuItem value={1400}>11:20pm</MenuItem>
              <MenuItem value={1410}>11:30pm</MenuItem>
              <MenuItem value={1420}>11:40pm</MenuItem>
              <MenuItem value={1430}>11:50pm</MenuItem>
              <MenuItem value={1440}>12:00am</MenuItem>
            </Select>
          </div>

          <div>
            HOURS <br />
            {formatHoursMinutes(totalTime.hours())}:
            {formatHoursMinutes(totalTime.minutes())}
          </div>
        </Grid>

        <h3>Output</h3>
        <p id="picker-output">date: {date.toString()}</p>
        <p id="picker-output">startTime: +{startTime.toString()}</p>
        <p id="picker-output">outputStartTime: {outputStartTime.toString()}</p>
        <p id="picker-output">endTime: +{endTime.toString()}</p>
        <p id="picker-output">outputEndTime: {outputEndTime.toString()}</p>
      </Card>
      <Card>
        <h3>Moment.js Manipulating Moments</h3>

        <p>Original Moment: {m.toString()}</p>
        <p>After Manipulation {m2.toString()}</p>
      </Card>
      <Card>
        <h3>Moment.js Formats</h3>

        <p>toString() => {date.toString()}</p>
        <p>toISOString() => {date.toISOString()}</p>
      </Card>
    </Grid>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
