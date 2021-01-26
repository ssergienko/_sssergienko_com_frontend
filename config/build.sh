if [ "${AWS_BRANCH}" = "main" ] || [ "${AWS_BRANCH}" = "dev" ]
then
  echo "BUILD ENV:  ${AWS_BRANCH}"
  npm install -g @aws-amplify/cli
  amplifyPush --simple
  npm run build
else
  echo "BUILD ENV: ${AWS_BRANCH}"
  echo "Not pushing backend"
fi