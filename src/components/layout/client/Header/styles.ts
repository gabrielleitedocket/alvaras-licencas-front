import styled from "styled-components";
import { colors } from "@/styles/assets/colors/colors";
import { spacings } from "@/styles/assets/spacings/spacings";
import { fontSizes } from "@/styles/assets/typography/sizes";

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.black02};
	position: fixed;
	padding: ${spacings.spacing2} ${spacings.spacing6};
	top: 0;
	right: 0;
	transition: width 0.3s ease-out;
	z-index: 99;
	height: 57px;
	width: calc(100% - 220px);

    &:before{
		display: inline-block;
		content: '';
		background-color: ${colors.black20};
		width: calc(100% - 64px);
		height: 1px;
		position: absolute;
		bottom: 0;
	}
`;

export const HeaderBreadcrumb = styled.div`
    display: flex;
    align-items: center;
    justify-content: initial;

    ul {
        list-style: none;

        li {
            display: inline;
            margin-right: ${spacings.spacing3};
            position: relative;
            font-size: ${fontSizes.sizeSmall};
            color: ${colors.black60};

            &:last-child{
                &::after{
                    display: none;
                }
            }

            &:after{
                content: '/';
                font-size: ${fontSizes.sizeSmall};
                color: ${colors.black60};
                width: 10px;
                height: 16px;
                position: absolute;
                right: -13px;
                top: 50%;
                transform: translateY(-50%);
                text-align: center;
            }

            a{
                font-size: ${fontSizes.sizeSmall};
                color: ${colors.black60};
                text-decoration: none;

                &:hover{
                    color: ${colors.black80};
                    text-decoration: underline;
                }
            }
        }
    }
`;

export const HeaderButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderMenuButtonOnboarding = styled.div`
    height: 40px;
    border-radius: 4px;
    border: 1px solid ${colors.black20};
    cursor: pointer;
    position: relative;
    padding: 0;
    background-color: ${colors.violetMedium};
    color: ${colors.white};
    margin-right: ${spacings.spacing4};

    &:hover{
        background: ${colors.violetMedium};
    }

    a {
        display: flex;
        align-items: center;
        padding: ${spacings.spacing2} ${spacings.spacing3};
        color: ${colors.white};
    }
`;

export const HeaderMenuButtonUser = styled.div`
    height: 40px;
    border-radius: 4px;
    border: 1px solid ${colors.black20};
    cursor: pointer;
    position: relative;
    padding: ${spacings.spacing2} ${spacings.spacing3};
    display: flex;
    align-items: center;
    justify-content: initial;

    &:hover{
        background-color: ${colors.black10};
    }

    h4 {
        color: ${colors.black80};
        max-width: 150px;
    }
`;

export const AvatarExample = styled.div`
    width: 32px;
	height: 32px;
	overflow: hidden;
	border-radius: 100%;
	border: 1px solid ${colors.black20};
	display: flex;
	justify-content: center;
	align-items: center;
	background: url('../../../../../alvaraslicencas-front/src/main/resources/static/images/icons/empty-space-foto.svg') ${colors.black40};
	background-size: 18px;
	background-position: center center;
	background-repeat: no-repeat;
	position: relative;
	object-fit: cover;
    margin-right: ${spacings.spacing2};
`;