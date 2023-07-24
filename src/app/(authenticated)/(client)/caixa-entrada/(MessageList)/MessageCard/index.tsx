import Checkbox from "@/components/form/Checkbox";
import {
    CardRow,
    MessageCardStyle,
    MessageTitle,
    NewMessageFlag,
    CardColumn,
    MessageText,
    MessageSentDate,
    ActionsContainer
} from "./styles";
import Image from "next/image";
import ApproveIcon from '@/../public/images/icons/ico-approve.svg';
import { ButtonCircleOutline, ButtonOutline } from "@/styles/assets/buttons/buttons";
import Dropdown from "@/components/navigation/Dropdown";
import useInboxDataEndpoints from "@/services/api/client/inbox";

interface IMessageCardProps {
    id: number;
    title: string;
    subtitle: string;
    isNew: boolean;
    text: string;
    sentDate: string;
    loadMessageList: () => void;
}

export default function MessageCard(props: IMessageCardProps) {
    const { id, title, subtitle, isNew, text, sentDate, loadMessageList } = props;
    const { putMarkMessageAsReady, deleteMessage } = useInboxDataEndpoints();

    async function markMessageAsReady() {
        const data = { title, subtitle, isNew: false, text, sentDate };
        const req = await putMarkMessageAsReady(id, data);

        if(req)
            loadMessageList();
    }

    async function removeMessage() {
        const req = await deleteMessage(id);

        if(req)
            loadMessageList();
    }

    const optionsActionsDropdowns = [
        { title: 'Marcar como lida', onClick: markMessageAsReady },
        { title: 'Excluir mensagem', onClick: removeMessage }
    ];

    return (
        <MessageCardStyle>
            <CardRow>
                <CardColumn>
                    <Checkbox
                        checked={false}
                        onChange={() => {}}
                        label=""
                    />

                    <Image src={ApproveIcon} alt="" />

                    <MessageTitle>
                        <h3>{ title }</h3>
                        <h4>{ subtitle }</h4>
                    </MessageTitle>
                </CardColumn>
                
                <CardColumn>
                    {
                        isNew ? 
                            <NewMessageFlag>
                                <span>nova</span>
                            </NewMessageFlag>
                        : ''
                    }

                    <ActionsContainer>
                        <ButtonOutline>Visualizar</ButtonOutline>
                        <Dropdown options={optionsActionsDropdowns}>
                            <ButtonCircleOutline>...</ButtonCircleOutline>
                        </Dropdown>
                    </ActionsContainer>
                </CardColumn>
            </CardRow>

            <CardRow>
                <CardColumn>
                    <MessageText>{ text }</MessageText>
                </CardColumn>

                <CardColumn>
                    <MessageSentDate>Enviado em { sentDate }.</MessageSentDate>
                </CardColumn>
            </CardRow>
        </MessageCardStyle>
    );
}