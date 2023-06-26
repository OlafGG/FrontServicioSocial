import React from 'react';
import '../../css/calendary.component.css'


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        { day: 'LUNES', time: '9 AM', title: 'Reunión de equipo' },
        { day: 'MARTES', time: '10 AM', title: 'Presentación de proyecto' },
        { day: 'MIERCOLES', time: '12 PM', title: 'Almuerzo de negociosLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo creacion cereacon creacion ' },
        { day: 'JUEVES' , time: '1 PM', title: 'Prueba numero 3:Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo creacion cereacon creacion '},
        { day: 'VIERNES' , time: '11 AM', title: 'Prueba numero 2: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo creacion cereacon creacion creacion creacion dwiath dwiath'},
        { day: 'VIERNES' , time: '3 PM', title: 'Prueba numero 1: Esta prueba es para ver como se comporta la tabla con los textos largos'},
        { day: 'LUNES' , time: '6 PM', title: 'Prueba numero 2: Esta prueba es para ver como se comporta la tabla con los textos largos'}
      ]
    };
  }

  render() {
    const daysOfWeek = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES'];
    const hours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];

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