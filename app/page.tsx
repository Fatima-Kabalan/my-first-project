"use client";

import Input from "@/components/atoms/Input";
import { useState } from "react";
import Button from "../components/atoms/Button";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePass = (e: any) => {
    setPassword(e.target.value);
  };

  console.log("name", name);
  console.log("email", email);
  console.log("password", password);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="flex flex-col gap-2 items-center p-2 bg-gray-200">
      <Input
        label={"Full Name"}
        inputType={"text"}
        placeholder={"enter your name"}
        value={name}
        onChange={handleName}
      />
      <Input
        label={"Email"}
        inputType={"email"}
        placeholder={"enter your email"}
        value={email}
        onChange={handleEmail}
      />
      <Input
        label={"Password"}
        inputType={"password"}
        placeholder={"enter your password"}
        value={password}
        onChange={handlePass}
      />
      <Button text={"Add me"} onClick={handleClick} />
    </div>
  );
}
