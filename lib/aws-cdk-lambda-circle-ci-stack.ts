import { Stack, StackProps, aws_s3 as s3, aws_dynamodb as dynamodb, aws_lambda as lambda,
  Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkLambdaCircleCiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const circleCiGwpBucket = new s3.Bucket(this, "circle-ci-gwp-bucket", {
      bucketName: "circle-ci-gwp-app-unique",
    });

    const circleCiGwpTable = new dynamodb.Table(this, "CircleCIGwpTable", {
      tableName: "CircleCIGwpAppUniqueTable",
      partitionKey: { name: "jobId", type: dynamodb.AttributeType.STRING },
    });

    const circleCiGwpLambda = new lambda.Function(
      this,
      "CircleCiGwpLambda",
      {
        runtime: lambda.Runtime.NODEJS_14_X,
        handler: "index.handler",
        timeout: Duration.seconds(30),
        code: lambda.Code.fromAsset("lambda/"),
        environment: {
          TABLE_NAME: circleCiGwpTable.tableName,
          BUCKET_NAME: circleCiGwpBucket.bucketName
        },
      }
    );

    circleCiGwpBucket.grantPut(circleCiGwpLambda);
    circleCiGwpTable.grantReadWriteData(circleCiGwpLambda);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkLambdaCircleCiQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
