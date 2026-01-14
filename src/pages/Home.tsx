import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import axios from "axios"
import Card from "../composants/Card";
interface StatsGridProps {
  
  id: number;
  title: string;
  value: string;
  lastN:string;
  comment: string;
  icon: string;
}
type TransparencyData = {
  id: number;
  name: string;
  value: number;
  maxValue?: number;
}
type SystemStatus = {
  services: Record<string, string>;
  // add other fields if needed
};



const Home: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null);
  const [data, setData] = useState<TransparencyData[]>([]);
  const [cardtransactions, setCardTransactions] = useState< StatsGridProps[]>([]);

   useEffect(() => {
    axios
      .get("http://localhost:3000/cardTransaction")
      .then((response) => setCardTransactions(response.data))
      .catch((error) => console.error("Erreur lors du chargement des notifications :", error));
  }, []);

  useEffect(() => {
    // Charger depuis le "backend" simulé
    axios.get("http://localhost:3000/blockchainTransparency")
      .then((res) =>setData( res.data))
      .catch((error) => console.error("Erreur lors du chargement des notifications :", error));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/Réponse")
      .then((res) => setSystemStatus(res.data))
      .catch(() => setSystemStatus(null));
  }, []);

  return (
    <div className="dashboard">

      <div className="content">
        <div className="titlePage" >
          <div className="deuxiemetitle">
            Overview
          </div>
          <div className="title">
            Dashboard Overview
          </div>
          <div className="description">Real-time insights into your blockchain money transfer platform</div>
        </div>
        <div className="cards-grid" >
          {cardtransactions.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              value={item.value}
              lastN={item.lastN}
              comment={item.comment}
              icon={item.icon}
            />
          ))}
        </div>

        <div className="grid-2">
          <div className="box">
            <div className="gridTitle">Blockchain Transparency</div>
            <div className="gridSubTitle">Real-time blockchain network status and transparency metrics</div>
            <div className="transparency-grid">
              {data.map((item) => (
                <div key={item.id} className="transparency-item">
                  <div className="transparency-header">
                    <span>{item.name}</span>
                    <span className="value">
                      {item.maxValue ? `${item.value}/${item.maxValue}`: `${item.value}%`}
                    </span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: item.maxValue
                          ? `${(item.value / item.maxValue) * 100}%`
                          : `${item.value}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="box">
            <div className="gridTitle">Recent Activity</div>
            <div className="gridSubTitle">Latest transactions and systems events</div>
            <ul className="activity">
              <li>✔️ Transaction validée — 12:34</li>
              <li>🔒 Sécurité mise à jour — 11:22</li>
              <li>📦 Nouveau bloc ajouté — 10:10</li>
            </ul>
          </div>
        </div>
        <div className="grid-3" >
          <div className="box">
            <div className="gridTitle">System Health</div>
            <div className="gridSubTitle">Core system components status</div>
            <div className="health">
              <ul className="healthUl">
                {systemStatus && systemStatus.services
                  ? Object.entries(systemStatus.services).map(([service, health]) => (
                      <li key={service} className="healthUlIl">
                        <div>{service}</div>
                        <div className="healthN">{health}</div> 
                      </li>
                    ))
                  : <li>No system status available.</li>
                }
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;