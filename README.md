Frontend app using common backend app

#To run  
git clone https://github.com/anandc/ounassFrontend.git  
cd ounassFrontend  
docker build -t ounass-fe .  
docker run -it -p 3000:3000 ounass-fe  

#For backend  
git clone https://github.com/anandc/commonBackendApp.git  
docker build -t common-be .  
docker run -it -p 4000:4000 common-be  

##This project was bootstrapped with Create React App.
