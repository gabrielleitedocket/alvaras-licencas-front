import {
    HeaderStyle,
    HeaderBreadcrumb,
    HeaderButtonsContainer,
    HeaderMenuButtonUser,
    HeaderMenuButtonOnboarding,
    AvatarExample
} from './styles';

export default function Header() {
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
                    <h4>Gabriel Leite</h4>
                </HeaderMenuButtonUser>
            </HeaderButtonsContainer>
        </HeaderStyle>
    );
}