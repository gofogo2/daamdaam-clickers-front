import { Container, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { AddCount, GetDayList } from "../api";
import CountButton from "../0components/CountButton";
import CurrentVisitor from "../0components/CurrentVisitor";
import Lottie from "react-lottie";
import refreshAnimation from "../assets/lotties/refresh.json";

const Exit = () => {
  const [count, setCount] = useState(0);
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
    GetDayList().then((data) => {
      const {
        data: { count },
      } = data;
      setCount(count);
    });
  };

  const Add = (count) => {
    AddCount(count).then(() => {
      setIsUpdate(!isUpdate);
    });
    navigator.vibrate(50);
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
            <Typography
              sx={{
                fontFamily: "SamsungSharpSans-bold",
                fontSize: "25px",
                fontWeight: "800",
                paddingTop: "50px",
              }}
            >
              Exit Clickers
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 120,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f1f1f1",
              boxShadow: "none",
            }}
          ></Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 250,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CurrentVisitor
              count={count.toLocaleString()}
              name="Current Visitors"
            />
          </Paper>
        </Grid>
        <div className="flex items-start justify-end w-full pr-3">
          <div
            onClick={() => {
              setIsRefresh(false);
              setIsUpdate(!isUpdate);
              setTimeout(() => {
                setIsRefresh(true);
              }, 500);
            }}
          >
            <Lottie
              style={{
                backgroundColor: "#3E91FF",
                borderRadius: "15px",
                marginTop: "-52px",
              }}
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
              height: 120,
              boxShadow: "none",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#f1f1f1",
            }}
          >
            <CountButton Add={Add} count={-10} />
            <div
              className="flex items-center justify-center w-24 h-24 text-white rounded-xl bg-[#3E91FF] active:bg-black"
              onClick={() => Add(-1)}
            >
              <div className="p-0 mt-2 text-5xl ">-1</div>
            </div>
            <CountButton Add={Add} count={-5} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Exit;
