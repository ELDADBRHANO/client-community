import React from "react";
import "./doughnut-chart.css";
import { CChart } from "@coreui/react-chartjs";
import { usersContext } from '../../../../contexts/users'
import { useContext } from "react";

const DoughnutChart = () => {
    const { users, setUsers } = useContext(usersContext)
    console.log(users);
    return (
        <div className="doughnut-chart">
            <CChart
                type="doughnut"
                data={{
                    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                    datasets: [
                        {
                            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                            data: [40, 20, 80, 10],
                        },
                    ],
                }}
            />
        </div>
    )
}
export default DoughnutChart;