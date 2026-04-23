import { RankBar, RankedUserContainer, RankedUserImage, RankedUserImageContainer, RankedUserInfo, RankedUserName } from "./styles.jsx"

type Props = {
    percent: number
}

const RankedUser = ({ percent }: Props) => {
    return (
        <RankedUserContainer>
            <RankedUserImageContainer>
                <RankedUserImage src="https://avatars.githubusercontent.com/u/106249494?v=4" alt="Giulliano Guimarães" />
            </RankedUserImageContainer>

            <RankedUserInfo>
                <RankedUserName>
                    Giulliano Guimarães
                </RankedUserName>
                <RankBar $percent={percent} />
            </RankedUserInfo>
        </RankedUserContainer>
    )
}

export default RankedUser