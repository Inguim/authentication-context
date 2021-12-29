import React, { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { Container } from "../../styles/Container";
import { Button } from "../../styles/Button";
import { Input, FakeForm } from "./styles";

const Login = () => {
  const context = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    context.Login(context.setUser, context.setSigned, {
      email: email,
      password: password,
    });
  }

  return (
    <Container>
      <FakeForm>
        <Input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="1234"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button backgroundColor="--green" onClick={() => handleLogin()}>Login</Button>
      </FakeForm>
    </Container>
  );
};

export default Login;
