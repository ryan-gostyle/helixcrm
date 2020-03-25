import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'First Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Date', field: 'birthDate', type: 'date' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'Makati', 63: 'Manila' },
      },
    ],
    data: [
      { name: 'Ryan', surname: 'Ramiso', birthDate: '5/27/1999', birthCity: 63 },
      { name: 'Juan', surname: 'Dela Cruz', birthDate: '5/5/2000', birthCity: 34},
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}