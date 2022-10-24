import React, { Fragment, useState, useEffect } from 'react'
import classes from './Clock.module.scss'


const Clock = () => {
  ////////
  // useState
  //FIXME: You should implement the managing state with useReducer
  const [days, setDays] = useState('') // Initial Days
  const [hours, setHours] = useState('') // Initial Hour
  const [minutes, setMinutes] = useState('') // Initial Minutes
  const [seconds, setSeconds] = useState('') // Initial Seconds
  let interval ; // Initial Interval

  const countDown = () => {
    // Setting my Final Date
    const finalDate = new Date('Dec 31, 2024').getTime()

    // IntervalCallback
    const intervalCallbackFn = () => {
      // Taking this exact moment
      const thisMoment = new Date().getTime()
      // Find out the difference between thisMoment and finalDate
      const differenceMoment = finalDate - thisMoment
      // Find out the exact n of days
      // This isn't the update of the current state of days / minutes / hours etc.
      const finalDays = Math.floor(differenceMoment / (1000 * 60 * 60 * 24))
      const finalHours = Math.floor(differenceMoment % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      const finalMinutes = Math.floor(differenceMoment % (1000 * 60 * 60) / (1000 * 60))
      const finalSeconds = Math.floor(differenceMoment % (1000 * 60) / 1000)

      // Condition for finalDate < 0
      if(finalDate < 0) clearInterval(interval.current)
      // Now i set my States function
      else {
        setDays(finalDays) // Update current state of Days
        setHours(finalHours) // Update current state of Hours
        setMinutes(finalMinutes) // Update current state of Minutes
        setSeconds(finalSeconds) // Update current state of Seconds
      }
    }
    // Interval declaration
    interval = setInterval(intervalCallbackFn)
  } 

  ////////
  // useEffect

  // useEffect callback funtion
  const clockCountDownCallbackFn = () => {
    // I invoked my Countdown Function
    countDown()
  }
  // useEffect declaration with his callback
  useEffect(clockCountDownCallbackFn)


  // Return Fragment
  return (
    <Fragment >
      {/* classes.clock_wrapper */}
      <div className={classes.clock_wrapper}>
        {/* classes.clock_data */}
        <div className={classes.clock_data}>
          {/* text-center */}
          <div className='text-center'>
            {/* Condition for Formatter */}
            {days >= 10 ? <h1 className={classes.clock_data_h1}> {days} </h1> : <h1 className={classes.clock_data_h1}> 0{days} </h1>}
            <h5 className={classes.clock_data_h5}>Days</h5>
          </div>
          <span className='text-white fs-3'>:</span>
        </div>
        {/* classes.clock_data */}
        <div className={classes.clock_data}>
          {/* text-center */}
          <div className='text-center'>
            {/* Condition for Formatter */}
            {hours >= 10 ? <h1 className={classes.clock_data_h1}> {hours} </h1> : <h1 className={classes.clock_data_h1}> 0{hours} </h1>}
            <h5 className={classes.clock_data_h5}>Hours</h5>
          </div>
          <span className='text-white fs-3'>:</span>
        </div>
        {/* classes.clock_data */}
        <div className={classes.clock_data}>
          {/* text-center */}
          <div className='text-center'>
            {/* Condition for Formatter */}
            {minutes >= 10 ? <h1 className={classes.clock_data_h1}> {minutes} </h1> : <h1 className={classes.clock_data_h1}> 0{minutes} </h1>}
            <h5 className={classes.clock_data_h5}>Minutes</h5>
          </div>
          <span className='text-white fs-3'>:</span>
        </div>      
        {/* classes.clock_data */}
        <div className={classes.clock_data}>
          {/* text-center */}
          <div className='text-center'>
            {/* Condition for Formatter */}
            {seconds >= 10 ? <h1 className={classes.clock_data_h1}> {seconds} </h1> : <h1 className={classes.clock_data_h1}> 0{seconds} </h1>}
            <h5 className={classes.clock_data_h5}>Seconds</h5>
          </div>
        </div>     
      </div>
    </Fragment>
  )
}

export default Clock