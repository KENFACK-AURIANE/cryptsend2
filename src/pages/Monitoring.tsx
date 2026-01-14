import React, { useEffect, useState } from "react";
import "../styles/Transactions.css";
import axios from "axios";
import CardMonitoring from "../composants/CardMonitoring";

interface StatsGridProps {
  
  id: number;
  title: string;
  value: string;
  lastN:string;
  comment: string;
  icon: string;
}
type NodeStatus = {
  id: number;
  iconNode: string;
  title:string;
  iconWorld:string;
  continent:string;
  uptime:string;
  latency:string;
  peers:string;
  status:string;
}
// type networkStats = {
//   title: string;
//   value: string;
//   description?: string;
// };

// type StatNetwork = {
//   Title: string,
//   value: string,
//   description: string,
//   // add other fields if needed
// };


const CardNode: React.FC<NodeStatus> = ({id,iconNode, title, iconWorld, continent, uptime, latency, peers, status}) => (
  

  <div className="NodeStatus" key={id}>
    <div className="firstpart">
      <div className="Name" >
        <div className="iconNode">{iconNode}</div>
        <div className="title">{title}</div>
      </div>
      <div className="continent">
        <div className="iconWorld">{iconWorld}</div>
        <div className="nameContinent">{continent}</div>
      </div>
    </div>
    
    <div className="secondPart">
      <div className="parametres">
        <div className="parametre" >
          <div className="titreParametr">Uptime</div>
          <div className="valeur">{uptime}</div>
        </div>
        <div className="parametre">
          <div className="titreParametr">Latency</div>
          <div className="valeur">{latency}</div>
        </div>
         <div className="parametre">
          <div className="titreParametr">Peers</div>
          <div className="valeur">{peers}</div>
        </div>
      </div>
      <div className="status">{status}</div>
      
    </div>
  </div>
);

const Transactions: React.FC = () => {

  const [cardtransactions, setCardTransactions] = useState< StatsGridProps[]>([]);
  const [nodeStats, setNodeStats] = useState<NodeStatus[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cardMonitoring")
      .then((response) => setCardTransactions(response.data))
      .catch((error) => console.error("Erreur lors du chargement des notifications :", error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/nodeStatus")
      .then((response) => setNodeStats(response.data))
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
            Transactions Management
          </div>
          <div className="descriptionT">Monitor blockchain transactions with complete transparency and realtime tracking</div>
        </div>
        <div className="cards-gridT" >
          {cardtransactions.map((item) => (
            <CardMonitoring
              key={item.id}
              title={item.title}
              value={item.value}
              lastN={item.lastN}
              comment={item.comment}
              icon={item.icon}
            />
          ))}
        </div>
        <div className="grid2T">
          <div className="enteteGrid2T">
            <div className="titreGrid2T">
              <div className="grid2TTitle">Blockchain Node Status</div>
              <div className="grid2TSubTitle"> Distributed node network monitoring and health status </div>
            </div>
          </div>
          <div>
             {nodeStats.map((node) =>(
                <CardNode id={node.id} iconNode={node.iconNode} title={node.title} iconWorld={node.iconWorld} continent={node.continent} uptime={node.uptime} latency={node.latency} peers={node.peers} status={node.status} />
              ))}
          </div>
        </div>

        <div className="grid3T">
          <div className="boxT">
            <div className="entetegrid3T">
              <div className="gridTitleT">Network Statistics</div>
              <div className="gridSubTitleT">Real-time blockchain network performances metrics</div>
            </div>
            
            {/* <div className="network">
              {network.map((reseau) =>(
                <CardNetwork title={reseau.Title} value={reseau.value} description={reseau.description}  />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;