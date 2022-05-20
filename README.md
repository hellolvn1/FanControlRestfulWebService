*****Video of the interface

https://www.youtube.com/shorts/B2t4YjalXVk

***** How to run the Fan Demo from MacOS using Docker. If you don't have Docker Desktop install, please follow the instruction here: https://www.docker.com/products/docker-desktop/

Step 1. Download the source code:

git clone https://github.com/hellolvn1/FanControlRestfulWebService.git

Step 2. Run the command: cd FanControlRestfulWebService/docker_deploy

Step 3. Run the command: docker build -t fandemos .

Step 4. Run the command: docker run -itd -p 8085:8080 fandemos 

You will be able to access web interface through: http://localhost:8085/FanDemos-0.0.1-SNAPSHOT/fan.html


****** If you want to rebuild the war file from the source using Maven:

1. brew install maven (you can install Maven with any package installer with your OS)
2. git clone https://github.com/hellolvn1/FanControlRestfulWebService.git
3. cd FanControlRestfulWebService
4. cp target/FanDemos-0.0.1-SNAPSHOT.war /docker_deploy
5. Follow from Step 1 to Step 4 above.

****** How to use the fan

1. The first button (blue) is increasing the fan speed (1 to 3 speed) and will reset the speed to off after Speed 3.
2. The second button (green) is decreasing the fan speed (3 speed) and will reset the speed to off before Speed 1.
3. The third button (red) will stop the fan immediately.

****** Technology in the demo

1. Front end: HTML, JS, and CSS, FontAwesome
2. Back end: Java 8, Tomcat 8, Jersey 1.2 (Restful Web Service)

****** Things to improve later:

1. Add restful web service security
2. Allow multiple fan interface
3. Separate HTML and web service laywer
4. Improve the 3 action buttons design
5. Clean up both the front end and back end code.

****Acknowledgement

The FAN spining html code was used from this URL: https://programtuts.com/fan/fan.html
