import { ListContainer, ListHeader } from "./styles";
import Checkbox from "@/components/form/Checkbox";
import { useEffect, useState } from "react";
import MessageCard from "./MessageCard";
import useInboxDataEndpoints from "@/services/api/client/inbox";
import Loading from "@/components/data-display/Loading";

interface IMessage {
    id: number;
    title: string;
    subtitle: string;
    isNew: boolean;
    text: string;
    sentDate: string;
}

export default function MessageList() {
    const { getMessages } = useInboxDataEndpoints();

    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [messages, setMessages] = useState([] as IMessage[]);

    useEffect(() => {
        getMessageListData();
    }, []);

    function handleSelectAllCheckboxChange(e: any) {
        setSelectAllChecked(e.target.checked);
    }

    async function getMessageListData() {
        setIsLoadingData(true);

        const req = await getMessages();

        if(req)
            setMessages(req);

        setIsLoadingData(false);
    }

    function renderMessageList() {
        if(isLoadingData)
            return (<Loading />);

        return (
            messages.map((message, index) => {
                const { id, title, subtitle, isNew, text, sentDate } = message;

                return (
                    <MessageCard
                        key={index}
                        id={id}
                        title={title}
                        subtitle={subtitle}
                        isNew={isNew}
                        text={text}
                        sentDate={sentDate}
                        loadMessageList={getMessageListData}
                    />
                )
            })
        );
    }

    return (
        <>
            <ListHeader>
                <Checkbox
                    checked={selectAllChecked}
                    label="Selecionar todos"
                    onChange={handleSelectAllCheckboxChange}
                />
            </ListHeader>

            <ListContainer>
                {renderMessageList()}
            </ListContainer>
        </>
    );
}