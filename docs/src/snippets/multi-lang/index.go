import (
    "github.com/outerbounds/metaflow-blueprints-go/metaflowblueprints/v1"
    "github.com/aws/jsii-runtime-go"
)

myUploadsPattern := metaflowblueprints.NewS3EventPattern(scope, jsii.String("uploads"), &metaflowblueprints.S3EventPatternProps{
    BucketName: jsii.String("my-uploads"),
    QueueName:  jsii.String("upload-events"),
    Region:     jsii.String("us-west-2"),
    Filters: &metaflowblueprints.S3EventFilters{
        Paths: &metaflowblueprints.PathFilters{
            Prefixes:   jsii.Strings("uploads/"),
            Suffixes:   jsii.Strings(".jpg", ".png", ".gif"),
            Operations: &[]metaflowblueprints.S3Operation{
                metaflowblueprints.S3Operation_PUT,
            },
        },
    },
})

myUploadsPattern.AddDependency(...)