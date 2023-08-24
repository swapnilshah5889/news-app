import './date-picker.styles.scss';

const DatePicker = ({todayDate, onDateChange, datePickerId, isDateError=false}) => {
    console.log(isDateError);
    return (
        <input 
        id={datePickerId}
        className={'date-picker'+`${isDateError?" date-picker-error":""}`}
        type="date" 
        max={todayDate} 
        onChange={onDateChange}/>
    );
}

export default DatePicker;