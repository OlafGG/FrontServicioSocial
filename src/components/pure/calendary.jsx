import React from 'react';
import { useState, useEffect } from 'react';
import '../../css/calendary.component.css'


const Calendar = () => {


  const [calendario, setcalendario] = useState();

  useEffect(() => {
      const fechData = async () => {
          const response = await fetch('http://localhost:8000/api/calendario/')
          const data = await response.json()
          setcalendario(data.message)
      };
      
      fechData()
  }, []);

    const daysOfWeek = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES'];
    const hours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];

    return (
      <div>
      {
        console.log({calendario})
      }
        <table>
          <thead>
            <tr>
              <th>Hora</th>
              {daysOfWeek.map(day => (
                <th className='daysOfWeek' key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map(hour => (
              <tr key={hour}>
                <td className='Hour-td'>{hour}</td>
                {daysOfWeek.map(day => (
                  <td className='asunto-del-dia' key={`${day}-${hour}`}>
                    {
                      calendario ? 
                      calendario.map((element) => 
                    
                    <>
                      {
                        element.day === day && element.hour === hour ? 
                        <span>{element.title}</span> : ''
                      }
                    </>) : ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );


  
}

export default Calendar;