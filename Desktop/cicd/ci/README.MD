# CI/CD pipelines with Jenkins and Github
*****************************

## Creating a CI/CD pipeline


![](https://th.bing.com/th/id/R.a9e359a95eb536995410fda9cac113a7?rik=llCQcpzwEAOavQ&riu=http%3a%2f%2fwww.tmap.net%2fsites%2ftmap%2ffiles%2fstyles%2fmedium%2fpublic%2fimages%2f450_0.png%3fitok%3dK8WoGylh&ehk=4lx253Amy%2fvuIC5P6ZJ3zAoN4LNiDxv%2fdvkxOSoppmo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1)

What do we want to do?

* We want to create a simple pipeline for CI/CD
* We want to do this using a code from a github repo 
* We want to push our code to github in one branch 
* Then automate the test merge and deploy

 ## First of all what is a CI pipeline?

 * A Continuous Integration (CI) pipeline is a set of automated processes that software development teams use to build, test, and deploy their code changes. 
 * The primary goal of a CI pipeline is to automate the steps involved in integrating new code into a shared repository and ensuring that it functions correctly with the existing codebase.

 
## When is a CI pipeline used?
* CI pipelines are used whenever there are code changes to integrate into a project's codebase.
* Developers trigger CI pipelines by pushing code changes to a version control system (e.g., Git) or by creating pull requests.
* In our case looking at the diagram we are pushing the code automatically to jenkins to test the code before it is either deployed or delivered.

## How does a CI pipeline work?
* When triggered, a CI pipeline retrieves the latest code changes from the version control system and executes predefined stages or tasks
* Each stage in the pipeline performs a specific action, such as compiling code, running tests, checking code quality, or deploying artifacts.
* In our case the pipeline is being triggered when code needs to be teseted in Jenkins 
  
## Why use a CI pipeline?
* There are many uses to a Ci pipeline. It saves time as you can automate the process of thigns you can do manually 
* It ensures consistency along how code gets built, tested or even deployed 

![](images/CICD%20(1).png)


## What is a web hook?
* A webhook is a mechanism for automatically triggering an action or notifying an external system when a certain event occurs.

* For example when you order something online, a webhook is the reason you get a confirmation email. 

## What is a node?

* A node is an instance that is created for running our differnt builds.
* We can have a master node for production and maybe another node for testing.

<br>


# CCI/CD Pipeline Documentation 
*******************
## Implmenting a CI/CD pipeline with jobs

![](images/overview.png)


### Job 1, 2 and 3 : What do they mean?
**************
<br>

* A Jenkins job, also known as a build job or pipeline, is a task or set of tasks that Jenkins executes as part of a continuous integration (CI) or continuous deployment (CD) process. 
  
* These jobs define the steps needed to build, test, deploy, and deliver software applications automatically


We will be setting up 3 jobs as paer of our CI/CD pipeline. Have a look at teh diagram above. What role does each job have?

* Job 1 and 2 are Contrinious Intergration phase of the CICD pipeline.

* Job 3 is the phase of Continious Delivery.


#### Job 1 : 
  Here we are looking to test the application on the Dev branch, ensuring its stabilty before integration into the main branch.

  **What does the job do?**
  * It creates a dev branch with Git
  * Tests the Npm on the Dev branch 
  * It uses a webhook to change to code changes 
  * It execites the command for testing npm instillation and running tests 



#### Job 2 : 
  Once Job 1 has been sucessful and does its job, Job 2 handles the merging of that branch to the main branch 

  **What does the job do?**
  * It configures GitHub details and merge settings
  * merges the Dev branch with the main branch
  * It ensures CI by only triggering if Job 1 has worked.



#### Job 3 : 
 Job 3 starts the CD phase of our pipeline by deploying the code from the main branch to production. It our case the aws cloud.

  **What does the job do?**
  * Retrieves the code from the main branch 
  * Pushes the code to the production environment, in our case a e2 instnace
  * It makes sure network security are correct by configuring the port settings 
  * Then it installs all depedencies the instance needs to run 


## Setting up a CI/CD job in jenkins


Okay how do we actually set up these jobs in Jenkins? 

Lets do job 1 first...the steps below!

1. **Log into jenkins**. The link can be found here [Jenkins login](http://35.176.161.147:8080/login?from=%2F)

2. **Click New item** 

3. **Enter name** You can put ```<your name> - Ci```

4. **Select Freestyle project** then click enter
    ![](images/project.jpg)

5. **Add a description to your project** you could call it ```building ci for node.js app```

![](images/sc.jpg)

6. **Add Github and input URL** this is where you add the url of the github repo that holds your app. In my case it was 
```git@github.com:joeodx/tech258_cicd.git```. You can go to your github code page to find yours if needed.

7. **Click on the option that says restrict where this project can run** then where it says label expression type ```sparta-ubuntu-node```

![](images/ubuntu.jpg)

 8. **Click on the git button under source managment** and input the url of your git repo. 
  ![](images/source.jpg)

9. **Now put in your private SSH key** where it stayed credentials. You should have it saved.
![](images/private%20key.jpg)

10. **Make sure you change the branch supplier** to ```*/dev```

11. **In build environment, tick enable Provide node and npm bin/ folder to PATH** you need to configure the environment to include the node.js and npm binary folders in the PATH. 
 ![](images/done.jpg)

12. **Click the add build step and then click execute shell** 

![](images/add.jpg)

13. **Now add the following command into that execute shell** this will be executed as part of the build process.

```
cd
cd npm install
npm test
```

14. **Click save and apply** button when you have finished 
 ![](images/apply.jpeg)


15. **Click run build on the left hand side tab** then check the console outlook, just in case there was any issues.
![](images/console.jpg)

*****************************

## Adding a web hook

Now we are going to add a web hook. The steps are as follows : 

1. **Go to build triggers section in jenkins** and tick the github hook trigger for GIT polling option. This wil ltell jenkisn to trigger builds automatically whenevere we make chanes and push to the github repo.

![](images/web.jpg)

2. **Go to that githubs repo settings, then click on the webhooks section** and then click add webhook.
   
![](images/3.jpeg)

3.**Change the playload URL input to the jenkins Url** so github can send the data to jenkins. For example I used ```http://3.9.14.9:8080/github-webhook/```

4.**Change the content type** to application/json. **Then enable let me see individual events** option 

5. **Then click on enable pull requets and pushes** and the option **Active is enabled**
![](images/push.jpg)

6. **Go to repo and make a change to test this** 

## Job 2 steps 

Now lets complete job 2. What was it again? Good time for a reminder. We need to create a job that automatically merges the changes that have been checked by job 1 from the ```dev branch``` to the ```main branch```.

![](images/overview.png)


1. **Configure jenkins to use your github repo and the dev branch** First we need to create a new job call. I called it ```joe-ci-merge```

2. **Then set it up like the job before** by restricting where the project is run to ```sparta-ubuntu-node```

3. **Under the source managment secion select git** and use your ssh link to your github repo.

4. **Change the branches to build** to */dev and have the additional behaviours as followed : 

![](images/merge2.jpg)


5.**Configure the post build actions** to as follows : 

![](images/merge3.jpg)
 

6. **Now select apply and save and run that machine**


*********************************************


## Plan for job 3 

  This is where we need to take that merged code and push it to the prodcution environment! Here is a plan to do that. 

* Create an EC2 instance with Ubuntu 18.04LTS
* Ensure that I allow the ports for Jenkins 8080 and SSH 22 into the prod env
* For Jenkins to access the EC2 I need to use the tech258.pem file on the SSH Agent
* you need the job to clone the app code over from the main repo
*Now I need to SSH into the instance to see if the job has been successful and the newly merged app code is present
* Next I need to now prepare the dependencies for the app to run update, upgrade, nginx?, node.js, pm2?


*************************



























