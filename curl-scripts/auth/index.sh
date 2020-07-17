curl 'https://tic-tac-toe-api-production.herokuapp.com/games/:over?' \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --data '{
    "games":[
    {
      "cells": "'"${ARRAY}"'",
      "over": "'"${BOOLEAN}"'",
      "_id": "'"${ID}"'",
      "owner": "'"${USERID}"'",
      "createdAt": "'"${CREATEDAT}"'",
      "updatedAt": "'"${UPDATEDAT}"'",
      "_V": "'"${VERSION}"'"
    }
    ]
  }'

  echo
