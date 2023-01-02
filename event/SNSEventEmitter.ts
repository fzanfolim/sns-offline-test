import * as AWS from "aws-sdk";
import { Logger } from "@omnichat/omni-logger";
import { Topic } from "./IEventEmitter";
const logger = new Logger("SNSEventEmitter");

AWS.config.update({ region: "us-east-1" });

export class SNSEventEmitter {
  private readonly sns: AWS.SNS;

  constructor(private readonly topic: Topic) {
    this.sns = new AWS.SNS({
      endpoint: "http://127.0.0.1:4003",
      region: "us-east-1",
    });
  }

  async emit<T>(payload: T): Promise<void> {
    try {
      const teste = await this.sns
        .publish({
          Message: JSON.stringify(payload),
          TopicArn:
            // "arn:aws:sns:us-east-1:568082450586:devel-botmaker-core-BranchTopic",
            "arn:aws:sns:us-east-1:568082450586:devel-integration",
          // "arn:aws:sns:us-east-1:568082450586:devel-botmaker-publish-BotRefreshTokenTopic",
        })
        .promise();
      console.log(teste);
      logger.info("SNSEventEmitter", {
        eventName: "SNSEventEmitter",
        payload,
      });
    } catch (error) {
      logger.error("SNSEventEmitterError", {
        eventName: "SNSEventEmitterError",
        error,
        payload,
      });
    }
  }
}
