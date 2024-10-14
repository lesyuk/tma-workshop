## 1. Clone the Repository
```bash
git clone https://github.com/lesyuk/tma-workshop.git
cd tma-workshop
git checkout step-1
```
## 2. Install Dependencies
```bash
npm install
```
## 3. Create and Configure .env
Create a .env file from the example and add your bot token:
```bash
cp .env.example .env
```
Edit the `.env` file:
```makefile
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
```
## 4. Run the Bot Locally
```bash
node index.js
```