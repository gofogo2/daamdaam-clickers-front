import { Button, Grid, Paper, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";

import React, { useEffect, useState } from "react";
import { AddTotal, GetAdmin } from "../api";
import Visitor from "../0components/Visitor";
import AdminButton from "../0components/AdminButton";
import Lottie from "react-lottie";
import refreshAnimation from "../assets/lotties/refresh.json";
import AdminVisitor from "../0components/AdminVisitor";

const Admin = () => {
  const [total, setTotal] = useState(0);
  const [todaySum, setTodaySum] = useState(0);
  const [isUpdate, setIsUpdate] = useState(true);
  const [isRefresh, setIsRefresh] = useState(true);
  useEffect(() => {
    GetList();
  }, [isUpdate]);
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: refreshAnimation,

  };
  const GetList = () => {
    GetAdmin().then((data) => {
      console.log(data);
      const {
        data: { day, all },
      } = data;

      setTotal(all);
      setTodaySum(day);
    });
  };

  const Add = (count) => {
    AddTotal(count).then((data) => {
      GetList();
    });
  };

  

  return (
    <Container
      maxWidth="lg"
      sx={{ height: "100vh",   paddingLeft: 5,
      paddingRight: 5, backgroundColor: "#f1f1f1" }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 150,
              
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f1f1f1",
              boxShadow: "none",
              color: "black",
            }}
          >
            <Typography style={{ fontFamily: "SamsungSharpSans-bold" }}  sx={{  fontSize: "25px",fontWeight:'800', paddingTop: "50px" }}>
            Clickers Admin Page
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 120,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
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
              height: 120,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            <AdminVisitor count={todaySum.toLocaleString()} name="Today Visitors" />
          </Paper>
        </Grid>
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

        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              mt:5,
              height: 250,
              alignItems: "center",
              justifyContent: "center",
              boxShadow:'none',
              backgroundColor: "#f1f1f1"
            }}
          >
            <div className="flex flex-col items-center justify-center w-full h-full" >
              <div className="text-xl" >Add Today's Visitor</div>
              <div className="mt-10" ></div>
            <AdminButton Add={Add} count={100}  />
            <div className="mt-6" ></div>
            <AdminButton Add={Add} count={1000} />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Admin;
