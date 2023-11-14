/** This file was autogenerated. Follow the steps in src/schema/slack/functions/_scripts/README.md to rebuild **/
import {
  assertEquals,
  assertExists,
  assertNotStrictEquals,
} from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../workflows/mod.ts";
import { ManifestFunctionSchema } from "../../../manifest/manifest_schema.ts";
import SchemaTypes from "../../schema_types.ts";
import SlackTypes from "../schema_types.ts";
import UpdateChannelTopic from "./update_channel_topic.ts";

Deno.test("UpdateChannelTopic generates valid FunctionManifest", () => {
  assertEquals(
    UpdateChannelTopic.definition.callback_id,
    "slack#/functions/update_channel_topic",
  );
  const expected: ManifestFunctionSchema = {
    source_file: "",
    title: "Update the channel topic",
    description:
      "You or the people using the workflow must be members of the channel",
    input_parameters: {
      properties: {
        channel_id: {
          type: SlackTypes.channel_id,
          description: "Search all channels",
          title: "Select a channel",
        },
        topic: {
          type: SchemaTypes.string,
          description: "Enter a topic",
          title: "Add a topic",
        },
      },
      required: ["channel_id", "topic"],
    },
    output_parameters: {
      properties: {
        topic: {
          type: SchemaTypes.string,
          description: "Channel topic",
          title: "Channel topic",
        },
      },
      required: ["topic"],
    },
  };
  const actual = UpdateChannelTopic.export();

  assertNotStrictEquals(actual, expected);
});

Deno.test("UpdateChannelTopic can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_UpdateChannelTopic_slack_function",
    title: "Test UpdateChannelTopic",
    description: "This is a generated test to test UpdateChannelTopic",
  });
  testWorkflow.addStep(UpdateChannelTopic, {
    channel_id: "test",
    topic: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "slack#/functions/update_channel_topic");
  assertEquals(actual.inputs, { channel_id: "test", topic: "test" });
});

Deno.test("All outputs of Slack function UpdateChannelTopic should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_UpdateChannelTopic_slack_function",
    title: "Test UpdateChannelTopic",
    description: "This is a generated test to test UpdateChannelTopic",
  });
  const step = testWorkflow.addStep(UpdateChannelTopic, {
    channel_id: "test",
    topic: "test",
  });
  assertExists(step.outputs.topic);
});
