# AWS Serverless SaaS Workshop
The goal of this workshop is to build a multi-tenant Software-as-a-Service (SaaS) solution using AWS Serverless Services, such as Amazon API Gateway, Amazon Cognito, AWS Lambda, Amazon DynamoDB, AWS CodePipeline, and Amazon CloudWatch.

By the end of this workshop you will be able to understand the challenges that are unique to a SaaS based delivery, such as onboarding, tenant isolation, data partitioning, tenant deployment pipelines, observability, and how to address them using AWS Serverless services.

**Lab 5 : to get arounf cdk error, remove PutPublicPolicyBlock from bootstrap-template.yaml:
```
~/.nvm/versions/node/v14.18.1/lib/node_modules/aws-cdk/lib/api ((v0.39.0)) $ nano bootstrap/bootstrap-template.yaml
```
***general instructions
```
removed putpublicblockaccess, added code, modified aws-cdk bootstrap-template.yml removed putpublicblock, modified nested_templates/userinterface.yml removed putpublicblockaccess
```
# Starting the workshop
Follow this link for detailed instructions to run this workshop in your AWS Account: https://catalog.us-east-1.prod.workshops.aws/v2/workshops/b0c6ad36-0a4b-45d8-856b-8a64f0ac76bb/en-US

# License
The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.

The sample code within this documentation is made available under the MIT-0 license. See the LICENSE-SAMPLECODE file.
