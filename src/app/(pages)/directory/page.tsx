// Page.js
import ContentBox from "@/components/contentBox";
import styles from './styles.module.css'; // 스타일 모듈 import

const Page = () => {
    return (
        <div>
            <h1>Browse</h1>
            {/* 여러 nav 버튼들로 이루어진 */}
            {/* Categories, Live Channel nav링크 */}
            <div className={styles.container}>
                <button className={styles.responsive_button}>Button 1</button>
                <button className={styles.responsive_button}>Button 2</button>
                <button className={styles.responsive_button}>Button 3</button>
                <button className={styles.responsive_button}>Button 4</button>
                <button className={styles.responsive_button}>Button 5</button>
            </div>

            {/* searching categories 검색기능이랑 sort by 필터기능이 있는 component들이 있는 div */}
            <ContentBox content='/images/dog12.jpg' width={250} height={350}/>
        </div>
    )
}

export default Page;
