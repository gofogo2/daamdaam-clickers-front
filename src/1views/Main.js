import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
        margin: 0,
        padding: 5,
      }}
    >
      <div className="flex flex-col items-center justify-around w-screen h-screen p-0 m-0">
        <div>
          <div
            style={{ fontFamily: "SamsungSharpSans-bold" }}
            className="text-4xl"
          >
            Clickers
          </div>
        </div>
        <div className="grid w-full gap-5">
          <Link
            to="/entrance"
            className="flex items-center  pt-1 justify-center text-2xl text-white bg-[#3E91FF]  h-[4.2rem] rounded-2xl active:bg-black"
          >
            Entrance
          </Link>
          <Link
            to="/exit"
            className="flex items-center pt-1 justify-center text-2xl text-white bg-[#3E91FF]  h-[4.2rem] rounded-2xl active:bg-black"
          >
            Exit
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center pt-1 justify-center text-2xl text-white bg-[#3E91FF]  h-[4.2rem] rounded-2xl active:bg-black"
          >
            Dashboard
          </Link>
          <Link
            to="/gnusmasadmin"
            className="flex items-center pt-1 justify-center text-2xl text-white bg-[#3E91FF]  h-[4.2rem] rounded-2xl active:bg-black"
          >
            Admin
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Main;
