import React from "react";
import { IconRegistry } from "../outils/IconRegistry";
import type { IconType } from "react-icons";
import "../styles/Card.css";

type StatCardProps = {
  title: string;
  value: string;
  lastN: string;
  comment: string;
  icon: string;
}

const CardMonitoring: React.FC<StatCardProps> = ({ title, value,lastN, comment, icon }) => {
  const IconComponent: IconType | undefined = IconRegistry[icon];

  return (
    <div className="card">
        <div className="entete" >
            <div className="card-title">
                {title}
            </div>
            <div className="card-icon">
                {IconComponent ? <IconComponent className="stat-icon" /> : <div className="icon-placeholder" />}
            </div>
        </div>
        <div className="seconPart">
             <div className="card-value">
                <div className="transparency-header">
                    {value}%
                </div>
                <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${value}%`,
                      }}
                    ></div>
                  </div>
                
            </div>
            <div className="card-desc">
                {lastN} {comment}
            </div>
        </div>
    </div>
  );
};
export default CardMonitoring;