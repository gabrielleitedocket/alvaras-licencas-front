import styled from "styled-components";
import { colors } from "@/styles/assets/colors/colors";
import { spacings } from "@/styles/assets/spacings/spacings";
import { fontSizes, fontWeights } from "@/styles/assets/typography/sizes";

interface ILinkItem {
    active?: string;
}

export const SidenavStyle = styled.aside`
    background-color: ${colors.violetMedium};
    width: 220px;
    height: 100vh;
	position: fixed;
	left: 0;
	transition: width 0.3s ease-out;
	z-index: 101;
`;

export const SidenavHeader = styled.div`
    display: flex;
    padding: ${spacings.spacing3} ${spacings.spacing4};
    height: 56px;
    background-color: ${colors.black100};
`;

export const SidenavClient = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${spacings.spacing5} 0;
    text-align: center;
    height: auto;

    h3 {
        max-width: 85%;
        color: ${colors.white};
        margin: ${spacings.spacing0} auto;
        font-size: ${fontSizes.sizeSubtitle};
        font-weight: ${fontWeights.weightSemiBold};
        white-space: break-spaces;
    }
`;

export const SidenavClientLogo = styled.div`
    display: flex;
    width: 72px;
    height: 72px;
    background: ${colors.white};
    overflow: hidden;
    border-radius: 100%;
    margin: 0 auto ${spacings.spacing2} auto;
    transition: all 0.3s ease-out;

    img {
        width: 100%;
        object-fit: cover;
    }
`;

export const SidenavLinks = styled.ul`
    list-style: none;
    margin: 0;
	padding: 0;
`;

export const LinkItem = styled.li<ILinkItem>`
    height: 40px;
    font-size: ${fontSizes.sizeBody};
    background-color: ${props => props.active === 'true' ? colors.violetDark : 'none'};
    transition: background-color 0.2s;

    a {
        display: block;
        color: ${colors.white};
        text-decoration: none;
        line-height: 40px;
        padding: 0 ${spacings.spacing4};
        display: flex;
        align-items: center;
        white-space: nowrap;

        i {
            margin-right: ${spacings.spacing2};
        }
    }

    &:hover {
        background-color: ${colors.violetDark};
    }

    &.active {
        border-left: 4px solid ${colors.greenMedium};

        a {
            padding-left: calc(#{spacings.spacing4} - 4px);
        }
    }
`;