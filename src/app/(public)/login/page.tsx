'use client';

import { FormLoginStyle } from "./page.styled";
import { LinkSpotlight } from "@/styles/assets/typography/texts";
import { ButtonRaised } from "@/styles/assets/buttons/buttons";
import { useState } from "react";
import { Input, Label } from "@/styles/assets/inputs/inputs";
import { get, post } from "@/services/api";
import { Login } from "@/services/auth";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSendingData, setIsSendingData] = useState(false);

    async function handleSubmit() {
        setIsSendingData(true);

        const data = { email, password };

        // TODO - trocar para POST e enviar dados de acesso
        const req = await get('/login');

        if(req)
            Login(req);

        setIsSendingData(false);
    }

    return (
        <>
            <FormLoginStyle>
                <Label>Email: </Label>
                <Input
                    type="text"
                    onChange={(e: any) => setEmail(e.target.value)}
                    style={{ marginBottom: '24px' }}
                />

                <Label>Senha: </Label>
                <Input
                    type="password"
                    onChange={(e: any) => setPassword(e.target.value)}
                    style={{ marginBottom: '24px' }}
                />

                <LinkSpotlight>Esqueci minha senha</LinkSpotlight>

                <ButtonRaised
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSendingData}
                >
                    Entrar
                </ButtonRaised>
            </FormLoginStyle>
        </>
    )
}