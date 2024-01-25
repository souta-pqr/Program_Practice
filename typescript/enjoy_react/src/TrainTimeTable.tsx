// TrainTimeTable.tsx
import React, { useState } from 'react';

interface TrainTime {
  departure: string;
  destination: string;
}

//APIキーとAPIエンドポイント取得できたら変えられるようにする
// 津田沼からの電車の時刻表データ
const trainTimes: TrainTime[] = [
  { departure: '06:00', destination: '東京' },
  { departure: '06:30', destination: '東京' },
  { departure: '07:00', destination: '東京' },
  // 他の時刻を追加...
];

const TrainTimeTable: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<TrainTime | null>(null);

  const handleClick = (time: TrainTime) => {
    setSelectedTime(time);
  };

  return (
    <div>
      <h1>津田沼から東京までの電車時刻表</h1>
      {trainTimes.map((time, index) => (
        <div key={index} onClick={() => handleClick(time)}>
          <p>出発時間: {time.departure}</p>
          <p>行き先: {time.destination}</p>
        </div>
      ))}
      {selectedTime && (
        <div>
          <h2>選択した電車の情報:</h2>
          <p>出発時間: {selectedTime.departure}</p>
          <p>行き先: {selectedTime.destination}</p>
        </div>
      )}
    </div>
  );
};

export default TrainTimeTable;
