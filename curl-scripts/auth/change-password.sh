curl 'https://tic-tac-toe-api-production.herokuapp.com/change-password' \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}"
  --header "Content-Type: application/json" \
    --data '{
      "credentials":{
        "old": "'"${OLD_PASSWORD}"'",
        "new": "'"${NEW_PASSWORD}"'"
      }
    }'

  echo
