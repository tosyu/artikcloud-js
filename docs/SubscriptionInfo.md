# ArtikCloud.SubscriptionInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**awsRegion** | **String** | AWS region (if subscriptionType is awsKinesis | [optional] 
**description** | **String** | Description | [optional] 
**awsKey** | **String** | AWS key (if subscriptionType is awsKinesis | [optional] 
**awsSecret** | **String** | AWS secret (if subscriptionType is awsKinesis | [optional] 
**awsKinesisStreamName** | **String** | AWS Kinesis stream name (if subscriptionType is awsKinesis | [optional] 
**uid** | **String** | User ID | [optional] 
**messageType** | **String** | Message type | [optional] 
**ddid** | **String** | Destination device ID | [optional] 
**subscriptionType** | **String** | Subscription type (either httpCallback or awsKinesis, default to httpCallback) | [optional] 
**name** | **String** | Name | [optional] 
**sdid** | **String** | Source device ID | [optional] 
**callbackUrl** | **String** | Callback URL | [optional] 
**sdtid** | **String** | Source device type ID | [optional] 


