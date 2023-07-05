import { spacings } from "../../../../styles/assets/spacings/spacings";
import styled from "styled-components";

export const WrapContentStyle = styled.div`
    width: calc(100% - 220px);
	position: absolute;
	left: 220px;
	padding: 57px ${spacings.spacing6} 0;
	transition: all 0.3s ease-out;
	min-width: 990px;
`;