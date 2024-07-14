"use client";

import React, { useState } from "react";
import axios from "axios";
import SigninLayout from "./layout";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Checkbox from "@/components/input/Checkbox";
import { useRouter } from "next/navigation";
import "@styles/css/common.css";
import { useAuth } from "@/hoc/AuthContext";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/signin", {
        email,
        password,
        autoLogin,
      });
      const { token, expiresIn } = response.data;

      login(token, expiresIn);
      router.push("/");
    } catch (error: any) {
      alert(error.response?.data.message);
      setEmail("");
      setPassword("");
      setAutoLogin(false);
    }
  };

  const handleAutoLoginChange = (checked: boolean) => {
    setAutoLogin(checked);
  };

  return (
    <SigninLayout>
      <form onSubmit={handleSignin} className="form">
        <h2 className="txt_primary">Login</h2>
        <Input
          type="email"
          value={email}
          placeholder="이메일을 입력하세요"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Checkbox
          label="자동 로그인"
          checked={autoLogin}
          onChange={handleAutoLoginChange}
        />
        <Button type="submit" variant="primary" block>
          로그인
        </Button>
      </form>
    </SigninLayout>
  );
};

export default SigninPage;
