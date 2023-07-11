import Image from "next/image";
import LogoAlvarasLicencas from '@/../public/images/logos/alvaras-licencas.svg';
import LogoClientExemple from '@/../public/images/logos/logo-client-example.png';
import {
    SidenavStyle,
    SidenavHeader,
    SidenavClient,
    SidenavClientLogo,
    SidenavLinks,
    LinkItem
} from './styles';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "@/contexts/SessionContext";

export default function Sidenav() {
    const pathName = usePathname();
    const { clientSessionData } = useSession();

    function checkItemRefersToCurrentPage(itemName: string) {
        return pathName.includes(itemName).toString();
    }

    return (
        <SidenavStyle>
            <SidenavHeader>
                <a href="#">
                    <Image
                        src={LogoAlvarasLicencas}
                        alt="Alvarás e Licenças"
                    />
                </a>
            </SidenavHeader>

            <SidenavClient>
                <SidenavClientLogo>
                    <Image
                        src={LogoClientExemple}
                        alt="Logo Cliente"
                    />
                </SidenavClientLogo>

                <h3>{ clientSessionData.name }</h3>
            </SidenavClient>

            <SidenavLinks>
                <LinkItem active={checkItemRefersToCurrentPage('/dashboard')}>
                    <Link href="/dashboard"><i className="icon-outline-dashboard"></i> Dashboard</Link>
                </LinkItem>
                <LinkItem active={checkItemRefersToCurrentPage('/caixa-entrada')}>
                    <Link href="/caixa-entrada"><i className="icon-outline-inbox-24px"></i> Entrada</Link>
                </LinkItem>
                <LinkItem active={checkItemRefersToCurrentPage('/unidades')}>
                    <Link href="/unidades"><i className="icon-outline-businessx"></i> Unidades</Link>
                </LinkItem>
                <LinkItem active={checkItemRefersToCurrentPage('/licencas')}>
                    <Link href="/licencas"><i className="icon-license"></i> Licenças</Link>
                </LinkItem>
                <LinkItem active={checkItemRefersToCurrentPage('/condicionantes')}>
                    <Link href="/condicionantes"><i className="icon-file-check-outline"></i> Condicionantes</Link>
                </LinkItem>
                <LinkItem active={checkItemRefersToCurrentPage('/relatorios')}>
                    <Link href="/relatorios"><i className="icon-finance-1"></i> Relatórios</Link>
                </LinkItem>
            </SidenavLinks>
        </SidenavStyle>
    );
}