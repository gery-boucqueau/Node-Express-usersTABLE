import React from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
//import MessageList from './MessageList';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('gx5a64bj4ptz');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY29sZC1za3ktMyJ9.cggwlwnxEK9p0FRBdRst0XYgcZQWghVk2vwx1sORv1Q';

chatClient.setUser(
  {
    id: 'cold-sky-3',
    name: 'Doctor Maboul',
    image: 'https://getstream.io/random_svg/?id=cold-sky-3&name=Cold+sky'
  },
  userToken,
);

const filters = { type: 'messaging', members: { $in: ['cold-sky-3'] } };
const sort = { last_message_at: -1 };
const channels = chatClient.queryChannels(filters, sort);

const ChatApp = () => (
  <Chat client={chatClient} theme={'messaging light'} >
    <ChannelList
      filters={filters}
      sort={sort}
    />
    <Channel>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default ChatApp; 