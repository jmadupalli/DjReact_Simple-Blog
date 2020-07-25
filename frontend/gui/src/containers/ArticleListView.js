import React from "react";
import axios from "axios";
import Articles from "../components/Article";
import CustomForm from "../components/Form";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

class ArticleList extends React.Component {
  state = {
    articles: [],
  };

  async componentDidMount() {
    const resp = await axios.get("http://localhost:8000/api/");
    this.setState({
      articles: resp.data,
    });
  }
  render() {
    return (
      <div>
        <Articles data={this.state.articles} />
        <br />
        <h2>Create a New Article</h2>
        <CustomForm requestType="post" articleID={null} btnText="Create" />
      </div>
    );
  }
}

export default ArticleList;
