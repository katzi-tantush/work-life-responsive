import { FC } from "react";
import { IHeaderContent } from "../interfaces/IHeaderContent";

export interface Props {
    headerContent: IHeaderContent
}

export const Header: FC<Props> = ({ headerContent }) => {
    const { title, subTitle } = headerContent;

    return (
        <div>
            <div className="header-title">
                {title}
            </div>           
            <div className="header-subtitle">
                {subTitle}
            </div>
        </div>
    )
}