
# Blockchain-based Electoral Bond Funding Platform

A blockchain-based platform using Ethereum, Hardhat, and React.js to facilitate secure and transparent funding for political parties through electoral bonds.Transparently display the entire history of electoral bond transactions, allowing users to verify the legitimacy of contributions and ensuring compliance with electoral funding regulations.

Index
- [Features](#Features)
- [Installation](#installation)
- [Run Locally](#RunLocally)
- [Environment Variables](#EnvironmentVariables)
- [Screenshots](#Screenshots)
- [Demo](#Demo)




## Features

### Project Features

- **Blockchain Integration:** Integrates blockchain technology for secure and decentralized data handling.
- **Smart Contracts:** Implements smart contracts using Solidity for automated and trustless execution of business logic.
- **Dynamic Campaign Interaction:** Enables dynamic interaction based on campaign IDs obtained from URLs.
- **React-Based Application:** Developed using React framework for efficient UI development.
- **Modern UI Design:** Utilizes Tailwind CSS for responsive and modern UI components.
- **Routing:** Implements routing using React Router DOM for seamless navigation.
- **Testing:** Includes comprehensive testing with Jest and React Testing Library.
- **Performance Monitoring:** Utilizes Web Vitals for tracking and optimizing web performance metrics.
- **Accessibility:** Ensures accessibility compliance with Jest DOM and user-event libraries.
- **Custom CSS:** Customizes CSS for specific application styling needs.
- **Deployment:** Configured for deployment using React Scripts build commands.
- **Code Quality:** Enforces code quality standards with ESLint based on React guidelines.



## Installation

Install my-project with npm

```bash
  npm install
  cd client
  npm install
```
## Metamask Installation

This project utilizes blockchain technology and smart contracts, requiring the installation of Metamask for Ethereum wallet functionality. Follow these steps to set up Metamask:

1. **Install Metamask:**

   If you haven't already, install Metamask as a browser extension for your preferred browser (Chrome, Firefox, Brave, etc.). You can find Metamask and installation instructions at [metamask.io](https://metamask.io/).

2. **Set up Metamask:**

   - Create a new wallet or import an existing one.
   - Connect Metamask to the Ethereum Mainnet or any other network your project interacts with.

3. **Configure your wallet:**

   Ensure your wallet is funded with the appropriate Ethereum (ETH) or tokens required for interacting with this application's smart contracts.

4. **Connect Metamask to the application:**

   Once Metamask is installed and set up, connect it to the application to enable blockchain interactions.

For detailed instructions on using Metamask, refer to the [Metamask User Guide](https://metamask.zendesk.com/hc/en-us/categories/360001824191).

## RunLocally

Clone the project

```bash
  git clone https://github.com/gagan-kotian/Blockchain-based-Electoral-Bond-Web-App.git
```

Go to the project directory

```bash
  cd Blockchain-based-Electoral-Bond-Web-App
```

Install dependencies

```bash
  npm install
```
Deploy Smart contract
```bash
  npx hardhat run --network goerli scripts/finaldeploy.js
```
copy and paste the deployed contract address in App.js
```bash
  const contractAddress = "0x0e32839B72AD8589F633F1Ce9ad94d13D1438630";
```

Frontend install

```bash
  cd client
  npm install
```

Start the server

```bash
  npm start
```


## EnvironmentVariables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

GOERLI_URL=ADD RPC url

PRIVATE_KEY=ADD Private key of wallet
## Screenshots

![Screenshot 1](https://github.com/gagan-kotian/Blockchain-based-Electoral-Bond-Web-App/raw/main/screenshots/img1.png)
![Screenshot 2](https://github.com/gagan-kotian/Blockchain-based-Electoral-Bond-Web-App/raw/main/screenshots/img2.png)
![Screenshot 3](https://github.com/gagan-kotian/Blockchain-based-Electoral-Bond-Web-App/raw/main/screenshots/img3.png)
![Screenshot 4](https://github.com/gagan-kotian/Blockchain-based-Electoral-Bond-Web-App/raw/main/screenshots/img4.png)
![Screenshot 5](https://github.com/gagan-kotian/Blockchain-based-Electoral-Bond-Web-App/raw/main/screenshots/img5.png)
![Screenshot 6](https://github.com/gagan-kotian/Blockchain-based-Electoral-Bond-Web-App/raw/main/screenshots/img6.png)
![Screenshot 7](https://github.com/gagan-kotian/Blockchain-based-Electoral-Bond-Web-App/raw/main/screenshots/img7.png)
![Screenshot 8](https://github.com/gagan-kotian/Blockchain-based-Electoral-Bond-Web-App/raw/main/screenshots/img8.png)
![Screenshot 9](https://github.com/gagan-kotian/Blockchain-based-Electoral-Bond-Web-App/raw/main/screenshots/img9.png)
![Screenshot 10](https://github.com/gagan-kotian/Blockchain-based-Electoral-Bond-Web-App/raw/main/screenshots/img10.png)

## Demo
Demo videos

https://drive.google.com/drive/folders/1oOLGE9CTzLQFaszguw-PJKKkuRfBPuGL?usp=sharing
