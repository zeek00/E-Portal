import React, {useState} from 'react'
import '../Dashboard.style.css'
import './events.styles.css'
import 'antd/dist/antd.css'
import { Card, Col, Row } from 'antd';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { TimePicker } from 'antd';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import { Input } from 'antd';

import { Checkbox } from 'antd';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const { TextArea } = Input;


const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const customFormat = value => `custom format: ${value.format(dateFormat)}`;

const customWeekStartEndFormat = value =>
    `${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value)
        .endOf('week')
        .format(weekFormat)}`;








const CreateEvent = (props) => {
    const {name} = props;

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleChange = (newValue) => {
        setValue(newValue);
    };



    return(
        <div className="createEvent">
            <div className="head">
                <h1 className="createEventHead">Create an Event</h1>
            </div>
            <div className="headcreate">

                <p className="p">fill in the information below..</p>
            </div>

            <div className="site-card-wrapper cardarea ">
                <Card className='itemsCard'>
                    <i className="bi bi-clipboard-check iconStyle"></i>
                    <h3 className='headText'>Name of Event</h3>
                    <TextField className='textBox' id="standard-basic" label="Enter Name" variant="standard" />
                </Card>
            </div>

            <div className="site-card-wrapper datetimearea ">
                <Card className='itemsCard'>
                    <i className="bi bi-calendar2-week iconStyle"></i>
                    <h3 className='headText'>Date and Time</h3>

                    <div className="cover">
                        <h4>Event starts</h4>
                        <DatePicker className='dateBox' defaultValue={moment('2015/01/01', dateFormat)} size="large" format={dateFormat} />
                    </div>

                    <div className="cover2">
                        <h4>Start Time</h4>
                        <TimePicker className='dateBox' defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
                    </div>

                    <div className="cover">
                        <h4>Event ends</h4>
                        <DatePicker className='dateBox' defaultValue={moment('2015/01/01', dateFormat)} size="large" format={dateFormat} />
                    </div>

                    <div className="cover2">
                        <h4>End Time</h4>
                        <TimePicker className='dateBox' defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
                    </div>




                </Card>
            </div>

            <div className="site-card-wrapper datetimearea ">
                <Card className='itemsCard'>
                    <i className="bi bi-geo-fill iconStyle"></i>
                    <h3 className='headText'>Location</h3>

                    <div className="content">
                        <h3>Venue Name</h3>
                        <TextArea placeholder="...." autoSize />
                        <div style={{ margin: '24px 0' }} />

                        <h3>Address Line</h3>
                        <TextArea placeholder="...." autoSize />
                        <div style={{ margin: '24px 0' }} />

                        <h3>Postcode</h3>
                        <TextArea placeholder="...." autoSize />
                        <div style={{ margin: '24px 0' }} />
                    </div>
                </Card>
            </div>

            <div className="site-card-wrapper datetimearea ">
                <Card className='itemsCard'>
                    <EventSeatIcon style={{fontSize:'2.5em'}}/>
                    <h3 className='headText'>Seats</h3>
                    <TextField className='textBox' id="standard-basic" type='number' label="Enter No of seats" variant="standard" />
                    <button className='seatsbtn'>Select</button>
                </Card>
            </div>
            <div className='btnSubmit'>
                <button className='formsubmit'>Submitt</button>
            </div>
        </div>
    );
}

export default CreateEvent