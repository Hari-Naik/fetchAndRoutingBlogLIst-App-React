import './index.css'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <div className="user-info-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="user-img"
      />
      <h1 className="user-name">Wade Warren</h1>
      <p className="user-role">Software Developer, UK</p>
    </div>
    <BlogList />
  </div>
)

export default Home
