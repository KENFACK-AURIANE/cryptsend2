import React, { useEffect, useState } from "react";
import "../styles/Transactions.css";
import { AiOutlineFilter, AiOutlineSearch, } from "react-icons/ai";
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
type Transac = {
  id: string,
  transactionHash: string,
  from: string,
  to: string,
  amount: string,
  Fee: string,
  Statut: string,
  Block: string,
  Time: string,
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

const Transactions: React.FC = () => {

  const [transactions, setTransactions] = useState<Transac[]>([]);
  const [cardtransactions, setCardTransactions] = useState< StatsGridProps[]>([]);
  const [network, setNetwork] = useState<StatNetwork[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cardTransaction")
      .then((response) => setCardTransactions(response.data))
      .catch((error) => console.error("Erreur lors du chargement des notifications :", error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/transactions")
      .then((response) => setTransactions(response.data))
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
            Transactions Management
          </div>
          <div className="descriptionT">Monitor blockchain transactions with complete transparency and realtime tracking</div>
        </div>
        <div className="cards-gridT" >
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
        <div className="grid2T">
          <div className="enteteGrid2T">
            <div className="titreGrid2T">
              <div className="grid2TTitle">All Transactions</div>
              <div className="grid2TSubTitle">Real-time blockchain transaction monitoring with full transparency </div>
            </div>
            <div className="searchT">
              <div className="searchIconT">
                <AiOutlineSearch size={30} color="#818282"/>
               <input type="text" placeholder="Search by hash..." className="searchInputT"/>
              </div>
              <div className="filtresT">
                <AiOutlineFilter size={20} color="#818282"/>
              </div>
              
            </div>
            
          </div>
          <div className="metrics">
            <table className="tables">
              <thead>
                <tr className="titleMetrics">
                  <th className="metrictitle">Transactions Hash</th>
                  <th className="metrictitle">From To</th>
                  <th className="metrictitle">Fee</th>
                  <th className="metrictitle">Status</th>
                  <th className="metrictitle">Block</th>
                  <th className="metrictitle">Amount</th>
                  <th className="metrictitle">Time</th>
                  <th className="metrictitle">Action</th>
                </tr>
              </thead>
              <tbody className="metricsLine">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="elementTransac">
                    <td className="hash">
                      <div className="nameHash">{transaction.transactionHash}</div>
                    </td>
                    <td className="fromto" >
                      <div className="from">
                        <span>From:</span>
                        <span className="emetteur">         {transaction.from}
                        </span>
                      </div>
                      <div className="to">
                        <span>To:</span> 
                        <span className="destinataire">{transaction.to}
                        </span>
                      </div>
                    </td>
                    <td className="amount">{transaction.amount}</td>
                    <td className="fee">{transaction.Fee}</td>
                    <td className="statut">
                      <div className={`statuts ${transaction.Statut === "confirmed" ? 'confirmed': transaction.Statut === "failed" ? 'failed': transaction.Statut === "pending" ? 'pending': ''}`}>
                        {transaction.Statut}
                      </div>
                    </td>
                    <td className="block">{transaction.Block}</td>
                    <td className="time">{transaction.Time}</td>
                    <td className="action">{transaction.Actions}</td>
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

export default Transactions;