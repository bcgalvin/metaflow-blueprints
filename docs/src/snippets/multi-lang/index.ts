import { S3EventPattern, S3Operation } from 'metaflow_blueprints';

const myUploadsPattern = new S3EventPattern(scope, 'uploads', {
  bucketName: 'my-uploads',
  queueName: 'upload-events',
  region: 'us-west-2',
  filters: {
    paths: {
      prefixes: ['uploads/'],
      suffixes: ['.jpg', '.png', '.gif'],
      operations: [S3Operation.PUT]
    }
  },
  ...
})
  
myUploadsPattern.addDependency(...)

