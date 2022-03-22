import { FC } from "react";

interface Props {
    tabText: string;
}

export const Tab: FC<Props> = ({ tabText}) => {
    return (
        <div>
            { tabText }
        </div>
    )
}