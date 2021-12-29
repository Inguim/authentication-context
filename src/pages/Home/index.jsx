import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { Container } from "../../styles/Container";
import { Button } from "../../styles/Button";
import { Content } from "./syles";

const Home = () => {
  const { Logout, user } = useAuth();

  async function handleLogout() {
    Logout();
  }

  return (
    <Container>
      <Content>
        <h1>Welcome, {user.name} 🐵</h1>
        <Link to="/dashboard">Dashboard</Link>
        <Button backgroundColor="--red" onClick={() => handleLogout()}>Logout</Button>
      </Content>
    </Container>
  );
};

export default Home;
