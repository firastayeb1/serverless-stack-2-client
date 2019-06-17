
const dev = {
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1lawihmiawcu"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://qzdo0e30w1.execute-api.eu-west-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_lqYtitXfC",
    APP_CLIENT_ID: "307hltaci0mnd6mpcm7c0u6u82",
    IDENTITY_POOL_ID: "eu-west-1:a5cef2cd-7584-40e4-9b8a-bf50f28488be"
  }
};

const prod = {
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1s69f4xzj7jiu"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://qzdo0e30w1.execute-api.eu-west-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_3sKeDEkT8",
    APP_CLIENT_ID: "6d4maml27058g24b91vthfvmho",
    IDENTITY_POOL_ID: "eu-west-1:fb22b65d-acda-4d25-a9e6-d29bb11b1430"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
