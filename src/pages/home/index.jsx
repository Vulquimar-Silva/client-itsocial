import Stories from '../../components/stories'
// import Share from '../../components/share'
import Posts from '../../components/posts'

import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories />
      {/* <Share /> */}
      <Posts />
    </div>
  )
}

export default Home