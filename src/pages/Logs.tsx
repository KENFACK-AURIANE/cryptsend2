import React, { useEffect, useState } from "react";
import "../styles/Logs.css";
import { AiOutlineFilter,  AiOutlineSearch} from "react-icons/ai";
import axios from "axios";
import Card from "../composants/Card";

interface StatsGridProps {
  
  id: number;
  title: string;
  value: string;
  lastN:string;
  comment: string;
  icon: string;
}

type networkStats = {
  title: string;
  value: string;
  description?: string;
};
type Logs = {
  id: string,
  timestamp: string,
  level: string,
  services: string,
  message: string,
  sources: string,
  Actions: string,
  // add other fields if needed
};
type StatNetwork = {
  Title: string,
  value: string,
  description: string,
  // add other fields if needed
};

const CardNetwork: React.FC<networkStats> = ({ title, value, description}) => (
  <div className="cardN">
    <div className="enteteN" >{title}</div>
    <div className="card-valueN">{value}</div>
    <div className="card-descN">{description}</div>
  </div>
);

const Logss: React.FC = () => {

  const [logs, setLogs] = useState<Logs[]>([]);
  const [network, setNetwork] = useState<StatNetwork[]>([]);
   const [cardtransactions, setCardTransactions] = useState< StatsGridProps[]>([]);

   useEffect(() => {
    axios
      .get("http://localhost:3000/cardTransaction")
      .then((response) => setCardTransactions(response.data))
      .catch((error) => console.error("Erreur lors du chargement des notifications :", error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Logs")
      .then((response) => setLogs(response.data))
      .catch((error) => console.error("Erreur lors du chargement des notifications :", error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/Network")
      .then((response) => setNetwork(response.data))
      .catch((error) => console.error("Erreur lors du chargement des notifications :", error));
  }, []);

  return (
    <div className="dashboardT">

      <div className="contentT">
        <div className="titlePageT" >
          <div className="deuxiemetitleT">
            Overview
          </div>
          <div className="titleT">
            System Logs
          </div>
          <div className="descriptionT">Comprehensive system logging for blockchain opérations and technical monitoring</div>
        </div>
        <div className="cards-gridL" >
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
        <div className="grid2L">
          <div className="enteteGrid2L">
            <div className="titreGrid2L">
              <div className="grid2LTitle">System Log Viewer</div>
              <div className="grid2LSubTitle">Real-time system logs with advanced filtering and search capabilities </div>
            </div>
            <div className="searchL">
              <div className="searchIconL">
                <AiOutlineSearch size={30} color="#818282"/>
               <input type="text" placeholder="Search by hash..." className="searchInputT"/>
              </div>
              <div className="filtresL">
                <AiOutlineFilter size={20} color="#818282"/>
              </div>
              
            </div>
            
          </div>
          <div className="metrics">
            <table className="tables">
              <thead>
                <tr className="titleMetrics">
                  <th className="metrictitle">Timestamp</th>
                  <th className="metrictitle">Level</th>
                  <th className="metrictitle">Service</th>
                  <th className="metrictitle">Message</th>
                  <th className="metrictitle">Source</th>
                  <th className="metrictitle">Actions</th>
                </tr>
              </thead>
              <tbody className="metricsLine">
                {logs.map((log) => (
                  <tr key={log.id} className="elementTransac">
                        <td className="hash">
                            {log.timestamp}
                        </td>
                        <td className="fromto" >
                        <div className="from">
                            {log.level}
                        </div>
                        </td>
                        <td className="amount">{log.services}</td>
                        <td className="fee">{log.message}</td>
                        <td className="block">{log.sources}</td>
                        <td className="action">{log.Actions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid3T">
          <div className="boxT">
            <div className="entetegrid3T">
              <div className="gridTitleT">Network Statistics</div>
              <div className="gridSubTitleT">Real-time blockchain network performances metrics</div>
            </div>
            
            <div className="network">
              {network.map((reseau) =>(
                <CardNetwork title={reseau.Title} value={reseau.value} description={reseau.description}  />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logss;