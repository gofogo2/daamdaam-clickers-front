import { Container, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GetAllList } from "../api";
import Visitor from "../0components/Visitor";
import CountChart from "../0components/CountChart";
import CountTable from "../0components/CountTable";
import Lottie from "react-lottie";
import refreshAnimation from "../assets/lotties/refresh.json";
import AdminVisitor from "../0components/AdminVisitor";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);
  const [isUpdate, setIsUpdate] = useState(true);
  const [isRefresh, setIsRefresh] = useState(true);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: refreshAnimation,

  };
  useEffect(() => {
    GetList();
  }, [isUpdate]);

  const GetList = () => {
    GetAllList().then((data) => {
      setItems(data.data);
      let t = 0;
      data.data.forEach((element) => {
        t += element.sum;
        if (element.day === new Date().getDate()) {
          setCurrent(element.count);
        }
      });
      setTotal(t);
    });
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: "#f1f1f1",
      }}
    >
      <Grid container spacing={3} sx={{ paddingBottom: 5 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 100,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f1f1f1",
              boxShadow: "none",
              color: "black",
            }}
          >
           <Typography style={{ fontFamily: "SamsungSharpSans-bold" }} sx={{ fontSize: "25px",fontWeight:'800', paddingTop: "50px" }}>
              Clickers Dashboard
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 100,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Visitor count={total.toLocaleString()} name="Total Visitors" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 100,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AdminVisitor count={current.toLocaleString()} name="Today Visitors" />
          </Paper>
          <div className="flex items-start justify-end w-full pr-3" >
            <div onClick={()=>{
              setIsRefresh(false);
              setIsUpdate(!isUpdate);
            setTimeout(()=>{
              setIsRefresh(true);
            },500);
            }} >
           <Lottie 
              style={{ backgroundColor: "#3E91FF", borderRadius: "15px",marginTop:'-52px'}}
              options={defaultOptions}
              height={40}
              width={40}
              isStopped={isRefresh}
            />
            </div>
            
            </div>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              height: 80,
              alignItems: "center",
              justifyContent: "space-around",
              borderRadius: 5,
            }}
          >
            <CountChart items={items} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              height: 220,
              alignItems: "center",
              justifyContent: "space-around",
              borderRadius: 5,
            }}
          >
            <CountTable items={items} Paper={Paper} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;