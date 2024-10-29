from metaflow_blueprints import S3EventPattern, S3Operation

my_uploads_pattern = S3EventPattern(scope, "uploads",
    bucket_name="my-uploads",
    queue_name="upload-events",
    region="us-west-2",
    filters={
        "paths": {
            "prefixes": ["uploads/"],
            "suffixes": [".jpg", ".png", ".gif"],
            "operations": [S3Operation.PUT]
        }
    }
)

my_uploads_pattern.add_dependency(...)