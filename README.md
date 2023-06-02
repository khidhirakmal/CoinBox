# CoinBox

## Description
CoinBox is a cryptocurrency and NFT tracking platform, providing real-time insights into digital assets. It delivers real-time data on cryptocurrencies and Non-Fungible Tokens (NFTs), sourced directly from CoinGecko's reliable API.

### Technical Used
Language: Javascript 

Library: React.js

Fetch API: Axios

API Source: coingecko.com

State Management: Zustand 

Style Extension: Sass 

### Wireframes
1. Home
![image](https://github.com/khidhirakmal/seif-13-project-2/assets/125201926/50035710-df52-42e8-963d-a8ff2b4d59af)

2. Cryptocurrencies
![image](https://github.com/khidhirakmal/seif-13-project-2/assets/125201926/eb9796d1-7968-4df2-9f3d-f282230674dd)

3. NFTs
![image](https://github.com/khidhirakmal/seif-13-project-2/assets/125201926/52aceacd-0a1d-422c-b533-219520e19fe4)

### User Stories
User is greeted with top 7 trending coins at the homepage at the current time. 
At the same time able to access current overall crypto market statistics. (in progress)

There is also a search bar for the user to search other cryptocurrencies. User should be able to access more data
of the coin when they click on it. 

User is able to navigate to Cryptocurrencies to see all available coins in the market. (in progress)

User is able to navigate to NFT to see the current top 5 NFT and see the data. (in progress) 

## Planning and Development Process
I took inspiration from a few cryptocurrency tracking websites and made a wireframe on Figma. The app has to be able to extract latest data from the market. So I chose a reliable CoinGecko API. The app has to be simple enough for user to understand how to use it and display data intuitively.

### Problem-Solving Strategy
I had to break it down into smaller individual components and tackle it one step at a time. I had to rely on console.log() most of 
the time to ensure that I am on the right track. My source of knowledge has been supplemented from stackoverflow, mozilla, ChatGPT and YouTube. 

### Unsolved problems
Cryptocurrencies: User should be able to all crpytocurrencies
Header Overall Market: User should be able to see real-time overall market.
NFT: Should be able to access more data when clicking on the NFT.
Watchlist: User should be able to add cryptocurrencies and NFTs to favourites.

## APIs Used
https://www.coingecko.com/en/api/documentation

Searchbar: `https://api.coingecko.com/api/v3/search?query=${query}`

Bitcoin Price: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true`

Trending Coins: `https://api.coingecko.com/api/v3/search/trending`

Market Chart: `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`

Coin Data: `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`

NFT List: `https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_desc&per_page=5`

NFT Data: `https://api.coingecko.com/api/v3/nfts/${nft.id}`
