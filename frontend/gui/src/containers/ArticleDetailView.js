import React from "react";
import axios from "axios";

import { Button, Card } from "antd";
import CustomForm from "../components/Form";

class ArticleDetail extends React.Component {
  state = {
    article: {},
  };

  async componentDidMount() {
    const articleID = this.props.match.params.articleID;
    const resp = await axios.get(`http://localhost:8000/api/${articleID}/`);
    this.setState({
      article: resp.data,
    });
  }

  handleDelete = async (event) => {
    const articleID = this.props.match.params.articleID;
    await axios.delete(`http://localhost:8000/api/${articleID}/`);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Card title={this.state.article.title}>
          <p>{this.state.article.content}</p>
        </Card>
        <CustomForm
          requestType="put"
          articleID={this.props.match.params.articleID}
          btnText="Update"
        />
        <Button type="danger" onClick={this.handleDelete}>
          Delete
        </Button>
      </div>
    );
  }
}

export default ArticleDetail;
