import React, { Component } from "react";
import {Launcher} from 'react-chat-window'
import './Chat_bot.css'
import logo from './logo.jpg';

class Bot extends Component {
  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }


  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [
          ...this.state.messageList,
          {
            author: "them",
            type: "text",
            data: { text }
          }
        ]
      });
    }
  }

  render() {
    return (
      <div style={{marginBottom: 20}}>
        <Launcher  
          agentProfile={{
            teamName: "Welcome to Alpha",
            imageUrl:"http://www.simpleimageresizer.com/_uploads/photos/1827928a/logo_50x50.jpg",
  }}
         
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji
        />
      </div>
    );
  }
}

export default Bot;