# MicroFrontend Application

This application is a MicroFrontend Application. It is designed to integrate multiple child applications into a single parent application. The parent application in this case is 'Meta'. It has two child applications: 'Instagram' which is a Social Media type application and 'WhatsApp' which is a Messaging type application. Each child application runs independently but they are all managed and coordinated by the parent application.


## Installation

1. Clone the repository:
   ```bash
   # Using https:
   git clone https://github.com/AkhilVN/MicroFrontend.git

   # Using ssh:
   git clone git@github.com:AkhilVN/MicroFrontend.git
   ```

2. Navigate to the project directory:
   ```bash
    cd MicroFrontend
   ```

3. Open a terminal for parent and navigate to the parent directory:
   ```bash
    cd Parent
   ```

4. Install the dependencies for Parent:
   ```bash
    npm install / yarn install
   ```

5. Build the application for Parent:
   ```bash
    npm run build / yarn build
   ```

6. Run the application for Parent:
   ```bash
    npm run start / yarn start
   ```

7. Now the parent application is running on http://localhost:8000

8. Open another terminal for child A and navigate to respective child directory
   ```bash
    cd Child-A
   ```

9. Install the dependencies for Child A:
   ```bash
    npm install / yarn install
   ```

10. Build the application for Child A:
   ```bash
    npm run build / yarn build
   ```

11. Run the application for Child A:
   ```bash
    npm run start / yarn start
   ```

12. Now the child A application is running on http://localhost:8001

13. Open another terminal for child B and navigate to respective child directory
   ```bash
    cd Child-B
   ```

14. Install the dependencies for child B:
   ```bash
    npm install / yarn install
   ```

15. Build the application for child B:
   ```bash
    npm run build / yarn build
   ```

16. Run the application for child B:
   ```bash
    npm run start / yarn start
   ```

17. Now the child B application is running on http://localhost:8002



# Objective of this application:
This application aims to share the data from the file (Parent/src/app/data.json) with child components and display the respective child's name in its component.


# Useful Links Regarding MFE Module Federation Plugin
1. [Webpack Documentation](https://webpack.js.org/plugins/module-federation-plugin/)
2. [Micro Frontend Architecture with Webpack Module Federation - Part 1](https://medium.com/trendyol-tech/micro-frontend-architecture-with-webpack-module-federation-part-1-9827d436bd1e)
3. [Module Federation for Micro Frontends](https://medium.com/@krishnakiran1992/module-federation-for-micro-frontends-8ef1b024d248)
