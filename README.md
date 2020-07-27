# backend
<!-- Robert Allen and Mercy A-Ansong -->

<!-- https://trello.com/b/t8YQKtf6/african-marketplace-2 -->

## POST https://afrikan-market.herokuapp.com/api/auth/register

**required {username, password}**

## POST https://afrikan-market.herokuapp.com/api/auth/login

**required {username, password}**

## GET https://afrikan-market.herokuapp.com/api/items

**required {authorization: token}**

## GET https://afrikan-market.herokuapp.com/api/items/:id

**required {authorization: token}**

## POST https://afrikan-market.herokuapp.com/api/items

**required {image, name, description, price, location}**
**required {authoriztion: token}**

## PUT https://afrikan-market.herokuapp.com/api/items/:id

**required {image, name, description, price, location}**
**required {authorization: token}**

## DELETE https://afrikan-market.herokuapp.com/api/items/:id

**required {authorization: token}**

