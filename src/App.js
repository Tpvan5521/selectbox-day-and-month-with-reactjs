import React from 'react';

export default function App() {

  const [selectedMon, setMon] = React.useState(1)
  const [selectedDay, setDay] = React.useState(1)

  const handleChangeMon = (e) => {
    setMon(e.target.value)
  }
  const handleChangeDay = (e) => {
    setDay(e.target.value)
  }

  return (
    <div className="App">
      <div>Chọn tháng:
          <select onChange={handleChangeMon}>
          {[...Array(12)].map((_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
          ))}
        </select>
      </div>
      <div>Chọn ngày:
        <select onChange={handleChangeDay}>
          {[...Array(new Date(2021, selectedMon, 0).getDate())].map((_, index) => (
          <option key={index + 1} value={index + 1}>{index + 1}</option>
          ))}
        </select>
      </div>

      <div>Ngày {selectedDay} tháng {selectedMon}</div>
    </div>
  );
};