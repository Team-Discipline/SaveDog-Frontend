// 더미 데이터 생성 함수
function generateDummyData() {
    const categories = ["game", "music", "art", "technology"];
    const tags = ["game", "music", "art", "technology", "programming"];

    return {
        contentImg: "https://1.vikiplatform.com/c/37396c/5fd11d4d99.jpg?x=b&a=0x0",
        category: categories[Math.floor(Math.random() * categories.length)],
        content_name: "talk",
        views: Math.floor(Math.random() * 50000) + 10000,
        tags: tags.slice(0, Math.floor(Math.random() * tags.length) + 1),
    };
}

// 10개의 더미 데이터 생성
export const ContentList = Array.from({ length: 10 }, () => generateDummyData());


