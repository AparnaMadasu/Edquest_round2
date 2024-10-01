import * as Contentstack from 'contentstack';

const Stack = Contentstack.Stack({
  api_key: 'YOUR_API_KEY',
  delivery_token: 'YOUR_DELIVERY_TOKEN',
  environment: 'YOUR_ENVIRONMENT',
});

export const getContentType = async (contentTypeUid) => {
  const query = Stack.ContentType(contentTypeUid).Query();
  return query.find()
    .then((result) => result[0])
    .catch((error) => console.error(error));
};
