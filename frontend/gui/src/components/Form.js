import React from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";

class CustomForm extends React.Component {
  handleFormSubmit = async (event, requestType, articleID) => {
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

    switch (requestType) {
      case "post":
        const resp = await axios.post("http://localhost:8000/api/", {
          title,
          content,
        });
        console.log(resp);
        break;
      case "put":
        const resp1 = await axios.put(
          `http://localhost:8000/api/${articleID}/`,
          {
            title,
            content,
          }
        );
        console.log(resp1);
        break;
    }
    window.location.reload();
  };

  render() {
    return (
      <div>
        <Form
          layout="vertical"
          onSubmitCapture={(event) =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.articleID
            )
          }
        >
          <Form.Item label="Title">
            <Input name="title" placeholder="Enter the Article Title" />
          </Form.Item>
          <Form.Item label="Content">
            <TextArea
              name="content"
              rows={5}
              placeholder="Enter the Article Content"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
