// Import the AWS SDK
var AWS = require('aws-sdk');

// Set credentials and region,
// which can also go directly on the service client
AWS.config.loadFromPath('./config.json');
// AWS.config.update({region: 'REGION'});

var s3 = new AWS.S3({apiVersion: '2006-03-01'});

/**
 * This function retrieves a list of objects
 * in a bucket, then triggers the supplied callback
 * with the received error or data
 */
function listObjects(bucket, callback) {
  s3.listObjects({
    Bucket: bucket
  }, callback);
}

// Export the handler function
module.exports = listObjects;