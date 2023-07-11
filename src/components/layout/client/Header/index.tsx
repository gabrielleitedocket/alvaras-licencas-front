import { useSession } from '@/contexts/SessionContext';
import {
    HeaderStyle,
    HeaderBreadcrumb,
    HeaderButtonsContainer,
    HeaderMenuButtonUser,
    HeaderMenuButtonOnboarding,
    AvatarExample
} from './styles';

export default function Header() {
    const { userSessionData } = useSession();

    return (
        <HeaderStyle>
            <HeaderBreadcrumb>
                <ul>
                    <li>
                        <a href="#">Alvarás e Licenças</a>
                    </li>
                    <li>
                        <a href="#">Dashboard</a>
                    </li>
                </ul>
            </HeaderBreadcrumb>

            <HeaderButtonsContainer>
                <HeaderMenuButtonOnboarding>
                    <a href="#">
                        <i className="icon-school-outline mr-2"></i>
                        Onboarding
                    </a>
                </HeaderMenuButtonOnboarding>

                <HeaderMenuButtonUser>
                    <AvatarExample />
                    <h4>{ userSessionData.name }</h4>
                </HeaderMenuButtonUser>
            </HeaderButtonsContainer>
        </HeaderStyle>
    );
}