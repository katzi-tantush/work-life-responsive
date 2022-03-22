import { IHeaderContent } from "../interfaces/IHeaderContent";
import { IMiniContent } from "../interfaces/IMiniCOntent";

class MockDataStore {
    headerContent: IHeaderContent;
    miniContent: IMiniContent[];
    mainContentBlocks: string[];

    constructor(
        _headerContent: IHeaderContent,
        _miniContent: IMiniContent[],
        _mainContentBlocks: string[]
    ) {
        this.headerContent = _headerContent;
        this.miniContent = _miniContent;
        this.mainContentBlocks = _mainContentBlocks;
    }
}

const headerContent: IHeaderContent = {
    title: 'Put your heart, mind, and soul into even your smallest acts.',
    subTitle: `This is the secret of success.`
}

const miniContent: IMiniContent[] = [
    {
        title: 'Stay hungry',
        text: `Be a yardstick of quality. Some people aren't used to an environment where
        excellence is expected.`
    },
    {
        title: 'Stay foolish',
        text: `If you trust in yourself. . .and believe in your dreams. . .and follow your star. . . you'll still get beaten by people who spent their time working hard and learning things and weren't so lazy.`
    }
];

const mainContentBlocks = [
    `Technology is nothing. What's important is that you have a faith in people,
    that they're basically good and smart, and if you give them tools, they'll do
    wonderful things with them.`,
    `Your work is going to fill a large part of your life, and the only way to be truly
    satisfied is to do what you believe is great work. And the only way to do great
    work is to love what you do. If you haven't found it yet, keep looking. Don't
    settle. As with all matters of the heart, you'll know when you find it.`
];

export const mockDataStore = new MockDataStore(headerContent, miniContent, mainContentBlocks);