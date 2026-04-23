import Card from "../../components/Card/index.js"
import Header from "../../components/Header/index.js"
import RankedUser from "../../components/RankedUser/index.js"
import { FeedAside, FeedAsideTitle, FeedAsideUsers, FeedContainer, FeedPosts, FeedSection, FeedTitle } from "./styles.jsx"

const Feed = () => {
    return (
        <>
            <Header authenticated />

            <main>
                <FeedContainer>
                    <FeedSection>
                        <FeedTitle>
                            Feed
                        </FeedTitle>

                        <FeedPosts>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </FeedPosts>
                    </FeedSection>

                    <FeedAside as="aside">
                        <FeedAsideTitle>
                            # RANKING 5 TOP DA SEMANA
                        </FeedAsideTitle>

                        <FeedAsideUsers>
                            <RankedUser percent={85} />
                            <RankedUser percent={70} />
                            <RankedUser percent={66} />
                            <RankedUser percent={42} />
                        </FeedAsideUsers>
                    </FeedAside>
                </FeedContainer>
            </main>
        </>
    )
}

export default Feed