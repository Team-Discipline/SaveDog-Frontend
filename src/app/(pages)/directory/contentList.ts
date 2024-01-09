// 더미 데이터 생성 함수
function generateDummyData() {
    const categories = ["game", "music", "art", "technology"];
    const tags = ["game", "music", "art", "technology", "programming"];

    return {
        contentImg: "https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg",
        width: 250,
        height: 350,
        category: categories[Math.floor(Math.random() * categories.length)],
        content_name: "talk",
        views: Math.floor(Math.random() * 50000) + 10000,
        tags: tags.slice(0, Math.floor(Math.random() * tags.length) + 1),
    };
}

// 10개의 더미 데이터 생성
export const ContentList = Array.from({ length: 10 }, () => generateDummyData());


