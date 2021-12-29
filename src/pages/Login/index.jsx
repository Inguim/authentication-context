import React, { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { Container } from "../../styles/Container";
import { Button } from "../../styles/Button";
import { Input, FakeForm } from "./styles";
import { MessageError } from "../../styles/MessageError";

const Login = () => {
  const context = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");

  function handleLogin() {
    context.Login(context.setUser, context.setSigned, {
      email: email,
      password: password,
    }).then(response => {
      if(response) {
        setMessageError(response);
      }
    });
  }

  return (
    <Container>
      <FakeForm>
        <Input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          error={messageError}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="1234"
          value={password}
          error={messageError}
          onChange={(e) => setPassword(e.target.value)}
        />
        <MessageError>{messageError}</MessageError>
        <Button backgroundColor="--green" onClick={() => handleLogin()}>Login</Button>
      </FakeForm>
    </Container>
  );
};

export default Login;
