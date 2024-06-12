import { Link } from 'react-router-dom';

const HomeTop = () => {
  return (
    <div>
    <header className="App-header">
    <img src={process.env.PUBLIC_URL + './img/logo.png'} />
      <Link to="/" style={{ textDecoration: "none"}}><h1 style={{ color: "black"}}>소프트웨어학과</h1></Link>
      <nav>
        <ul>
          <li>
            <Link to="/about">학과소개</Link>
          </li>
          <li>
            <Link to="/study">교과과정</Link>
          </li>
          <li>
            <Link to="/bus">공대버스 정보</Link>
          </li>
          <li>
            <Link to="/articles">학생 커뮤니티</Link>
          </li>       
        </ul>
      </nav>
      
    </header> 
    </div>
  );
}

export default HomeTop;
