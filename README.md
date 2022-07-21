
# Automate AWS Lambda Function Deployments Using CircleCI and AWS CDK

[![CircleCI](https://circleci.com/gh/CIRCLECI-GWP/aws-cdk-lambda-circle-ci.svg?style=svg)](https://circleci.com/gh/CIRCLECI-GWP/aws-cdk-lambda-circle-ci)


<p align="center"><img src="https://avatars3.githubusercontent.com/u/59034516"></p>

An Application for showing how to set Continuous integration for progressive web apps on CI


## Clone the repository:

run the following command on your terminal to clone the repository:

```bash
https://github.com/CIRCLECI-GWP/aws-cdk-lambda-circle-ci.git

cd aws-cdk-lambda-circle-ci
```

## Configure AWS

```
aws configure
```

## Deploy the CDK stack

```bash
cdk bootstrap
```

and 

```bash
cdk deploy
```

## Details

This repo is built following a tutorial published on CircleCI blog under the CircleCI Guest Writer Program.

-   Blog post: [Automate AWS Lambda Function Deployments Using CircleCI and AWS CDK][blog]
-   Author's GitHub profile: [Vivek Kumar Maskara][author]

### About CircleCI Guest Writer Program
[blog]: https://circleci.com/blog/automate-aws-lambda-function-deployments-using-circleci-and-aws-cdk
[author]: https://github.com/maskaravivek