import { useParams } from "react-router-dom";

const data = {
    n1 : {
        name : '성낙운 교수',
        description : '세부전공 : 운영체제',
        email : 'nuseong@ks.ac.kr'
    },
    n2 : {
        name : '양태천 교수', 
        description : '세부전공 : 알고리즘, 컴퓨터그래픽스',
        email : 'tcyang@ks.ac.kr'
    },
    n3 : {
        name : '홍석희 교수',
        description : '세부전공 : 데이타베이스, 실시간데이터베이스, 실시간 시스템, 트랜잭션 시스템, 소프트웨어 시험, 저장 장치',
        email : 'shong@ks.ac.kr'
    },
    n4 : {
        name : '지상문 교수',
        description : '세부전공 : deep learning, bioinformatics',
        email : 'smchiks@ks.ac.kr'
    },
    n5 : {
        name : '강인수 교수',
        description : '세부전공 : 자연어처리, 정보검색, 시맨틱웹',
        email : 'dbaisk@ks.ac.kr'
    }, 
    n6 : {
        name : '김주현 교수',
        description : '세부전공 : 웹프로그래밍, 게임프로그래밍, 논리회로설계',
        email : 'isadora@naver.com'
    },    
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];  

    return (
        <div>
            <h1>교수진 소개</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                    <p>{profile.email}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
};

export default Profile;
