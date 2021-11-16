import {useEffect, useMemo, useState } from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./Home.css"
import {userData} from "../../dummyData"
import Widgetsm from '../../components/widgetsm/Widgetsm'
import Widgetlg from '../../components/widgetlg/Widgetlg'
import { userRequest } from "../../requestMethods";

function Home() {
    const [userStats, setUserStats] = useState([]);

    const MONTHS = useMemo(
      () => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      []
    );

    useEffect(() => {
        const getStats = async () => {
          try {
            const res = await userRequest.get("/users/stats");
            res.data.map((item) =>
              setUserStats((prev) => [
                ...prev,
                { name: MONTHS[item._id - 1], "Active User": item.total },
              ])
            );
          } catch {}
        };
        getStats();
      }, [MONTHS]);
    return (
        <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <Widgetsm />
        <Widgetlg />
      </div>
    </div>
    )
}

export default Home