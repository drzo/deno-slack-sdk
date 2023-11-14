/** This file was autogenerated. Follow the steps in src/schema/slack/functions/_scripts/README.md to rebuild **/
import { DefineFunction } from "../../../functions/mod.ts";
import SchemaTypes from "../../schema_types.ts";
import SlackTypes from "../schema_types.ts";

export default DefineFunction({
  callback_id: "slack#/functions/send_ephemeral_message",
  source_file: "",
  title: 'Send an "only visible to you" message',
  description:
    "Send a temporary message to someone in a channel that only they can see",
  input_parameters: {
    properties: {
      channel_id: {
        type: SlackTypes.channel_id,
        description: "Search all channels",
        title: "Select a channel",
      },
      user_id: {
        type: SlackTypes.user_id,
        description: "Search all people",
        title: "Select a member of the channel",
      },
      message: {
        type: SlackTypes.rich_text,
        description: "Add a message",
        title: "Add a message",
      },
      thread_ts: {
        type: SchemaTypes.string,
        description:
          "Provide another message's ts value to make this message a reply",
        title: "Another message's timestamp value",
      },
    },
    required: ["channel_id", "user_id", "message"],
  },
  output_parameters: {
    properties: {
      message_ts: {
        type: SlackTypes.message_ts,
        description: "Message time stamp",
        title: "Message time stamp",
      },
    },
    required: ["message_ts"],
  },
});
