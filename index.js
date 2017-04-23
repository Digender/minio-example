const app = require('express')();
const Minio = require('minio');

var minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    secure: true,
    accessKey: 'RHEM9YSCJV21F1MKKD71',
    secretKey: 'TKOJfJz4pQlBIlxt1itXM3fV0HfVpyHQlO3UqXx4'
});

const file = 'hello.txt'

// Make a bucket called europetrip.
minioClient.makeBucket('digen-bucket', 'us-east-1', function(err) {
    if (err) return console.log(err)

    console.log('Bucket created successfully in "us-east-1".')

    // Using fPutObject API upload your file to the bucket europetrip.
    minioClient.fPutObject('digen-bucket', 'hello-upload.txt', file, 'application/octet-stream', function(err, etag) {
      if (err) return console.log(err)
      console.log('File uploaded successfully.')
    });
});