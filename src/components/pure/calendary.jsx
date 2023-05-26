import React from 'react';
import '../../css/calendary.component.css'


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        { day: 'Lunes', time: '9 AM', title: 'Reunión de equipo' },
        { day: 'Martes', time: '10 AM', title: 'Presentación de proyecto' },
        { day: 'Miércoles', time: '12 PM', title: 'Almuerzo de negociosLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo creacion cereacon creacion ' },
        { day: 'Jueves' , time: '1 PM', title: 'Prueba numero 3:Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo creacion cereacon creacion '},
        { day: 'Viernes' , time: '11 AM', title: 'Prueba numero 2: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo creacion cereacon creacion creacion creacion dwiath dwiath'},
        { day: 'Viernes' , time: '3 PM', title: 'Prueba numero 1: Esta prueba es para ver como se comporta la tabla con los textos largos'}
      ]
    };
  }

  render() {
    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const hours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM'];

    return (
      <div>
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
                    {this.renderEvent(day, hour)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  renderEvent(day, hour) {
    const { events } = this.state;

    const event = events.find(
      e => e.day === day && e.time === hour
    );

    return event ? <span>{event.title}</span> : null;
  }
}

export default Calendar;