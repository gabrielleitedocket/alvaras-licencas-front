'use client';

import { ReactNode } from "react";
import {
    LoginWrapContentStyle,
    LoginBoxContent,
    LoginInfoContainer,
    LoginInfoFooter,
    ColumnFooter,
    LoginFormContainer
} from "./styles";
import Image from "next/image";
import LogoAlvarasLicencas from '@/../public/images/logos/alvaras-licencas.svg';
import LogoDocket from '@/../public/images/logos/logo-docket-branco.png';

export default function LoginWrapContent({ children }: { children: ReactNode }) {
    return(
        <LoginWrapContentStyle>
            <LoginBoxContent>
                <LoginInfoContainer>
                    <Image src={LogoAlvarasLicencas} alt="Logo Alvarás e Licenças" />
                    <p>
                        Gerencie de forma automatizada Alvarás, Licenças e demais Documentos Regulatórios 
                        em um único sistema com acesso rápido e prático.
                    </p>

                    <LoginInfoFooter>
                        <ColumnFooter borderRight>
                            <Image src={LogoDocket} alt="Logo Docket" />
                        </ColumnFooter>
                        <ColumnFooter>
                            <ul>
                                <li>
                                    <i className="icon-outline-email"></i>
                                    <span>sucessodocliente@docket.com.br</span>
                                </li>
                                <li>
                                    <i className="icon-outline-local_phone"></i>
                                    <span>(11) 3181-8938</span>
                                </li>
                            </ul>
                        </ColumnFooter>
                    </LoginInfoFooter>
                </LoginInfoContainer>
                <LoginFormContainer>
                    { children }
                </LoginFormContainer>
            </LoginBoxContent>
        </LoginWrapContentStyle>
    );
}