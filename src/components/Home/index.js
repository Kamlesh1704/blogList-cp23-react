
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import './index.css'

const Home = () => {
  return (
    <div>
    <UserInfo />
    <ul className="ul">
      <BlogList />
    </ul>
  </div> 
  )
}

export default Home
