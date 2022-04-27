import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {BlogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updateData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      topic: eachData.topic,
    }))
    this.setState({BlogsList: updateData, isLoading: false})
  }

  render() {
    const {BlogsList, isLoading} = this.state
    return (
      <div className="blogs-container">
        <div className="blogs-list-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            BlogsList.map(eachBlog => (
              <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default BlogList
