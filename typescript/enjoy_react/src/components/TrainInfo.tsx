// TrainInfo.tsx
import React, { useEffect, useState } from 'react';

interface TrainInfo {
  destination: string;
  departureTime: string;
}

const TrainInfo: React.FC = () => {
  const [trains, setTrains] = useState<TrainInfo[]>([]);

  useEffect(() => {
    fetchTrains();
  }, []);

  const fetchTrains = async () => {
    // ここには適切なAPIエンドポイントとAPIキーを設定してください
    const response = await fetch('https://api.example.com/trains?station=Tsudanuma');
    const data = await response.json();
    setTrains(data.trains);
  };

  return (
    <div>
      <h1>津田沼駅からの電車情報</h1>
      {trains.map((train, index) => (
        <div key={index}>
          <p>行き先: {train.destination}</p>
          <p>出発時間: {train.departureTime}</p>
        </div>
      ))}
    </div>
  );
};

export default TrainInfo;
