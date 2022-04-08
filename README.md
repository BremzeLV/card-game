### Deck of cards API based on Express
Small api for handling French card deck. Easily expendable, for example, uno cards, etc.

Currenlty available 3 endpoints:
- Create deck `/create-deck` POST
request
```json
{
    "type": "FULL",
    "shuffled": false
}
```
response
```json
{
    "deckId": "e914589a-42c9-42f9-bced-f87dc8e8fdd6",
    "type": "FULL",
    "shuffled": false,
    "remaining": 52
}
````
- Open deck `/open-deck` GET
request
```
/open-deck?deckId=c0ab505c-1a97-4059-8012-90deb14c7b51
```
response
```json
{
    "deckId": "c0ab505c-1a97-4059-8012-90deb14c7b51",
    "type": "FULL",
    "shuffled": true,
    "remaining": 52,
    "cards": [
        {
            "value": "ACE",
            "suit": "SPADES",
            "code": "AS"
        },
        {
            "value": "2",
            "suit": "DIAMONDS",
            "code": "2D"
        }
	]
}
```
- Draw deck `/draw-deck` PATCH
request
```
/draw-deck?deckId=8e665086-2d4c-4767-9429-8282bbc4adfb
{
    "count": 1
}
```
response
```json
{
    "cards": [
        {
            "value": "ACE",
            "suit": "SPADES",
            "code": "AS"
        }
    ]
}
```
- example error state
```json
{
    "message": "Deck not found",
    "status": 404
}
```
For more in-depth enpoint examples theres a postman url available:
https://www.getpostman.com/collections/e1448ab81b23b57491a2

### Setup

- Pull the repo 
- Install dependencies: `yarn`
- Run mongodb service
- Rename `.env.example` to `.env` and change values if required
- Start the project: `yarn start`

### Testing

Do `yarn test` for tests

### Code quality
Do `yarn lint`
