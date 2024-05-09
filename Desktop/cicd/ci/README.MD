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

## Adding a web hook with job 2

Now we are going to do job 2. The steps areas follows 

1. 






16. Go to the office 365 connector and click the option that says **Restrict where this project can be run**. Then under **label expression** add ```sparta-ubuntu-app```


4. On the **source managment tab** slect Git. Add the the github repo URL. You should have already have your SSH key set up so you should get a error message now. 

5. To fix this, add your private ssh key for the repo to Jenkins, and then choose it in the credentials. 

6. Also **change the branch to main** like below : 

![](images/sc2.jpg)


7. Now we need to provide a Node and npm for our app. Under the build environment check Provide Node and npm bin? folder to Path.
  Change the node installation to ``Sparta-Node-JS```

8. When you go to build tab add this to the execute shell : 


```
cd
cd npm install
npm test 
```

![](images/done.jpg)


9. Now save this. Our jenkins Master should be set up now.

10. Now head to your github repp and go to the setting called webhooks. You see an option callled called paylaod, make sure to enter the url for the jenkins serve like below : 

 * and the content type is **application/json**
 * click **jsut the push event**
 * click **Active**


![](images/3.jpeg)

Then click update webhook. The webhook will send a post HTTP request to our jenkins server. **200** if is correct and **404** if not

11. Now go back to the jenkins config page for our job and under the build triggets tab, make sure to check **Github hook triggers for GITScm polling. 

***************************************************


# CD pipelines with jenkins and GIThub
*************************************

* To make a Cd pipeline with jenkins, We are going to need to automate certain steps using triggers. This could be webhooks or from Jenkins builds being completed 
* We need to add the jobs to merge the code. 


How do we do that? The steps are below!


1. Create a dev branch on your github repo using ```git checkout - b dev```. 
2. You can do this in your git bash. 
3. Then  push that branch ```git push origin dev```

* We now want it to automatically merge this branch with the main branch so we need to set up a job to do that. 


## Job 1 
****************
1. Create a job on jenkins to test the push on the dev branch.
2. When something gets pushed a a job gets triggered to test teh code 
3.  Set it up like the job you did before but 





## Merge code from development branch to main branch
* Configure Jenkisn to use your Git repo and chosoe the dev branch you have created 
* Scroll down to the ```post-build-action``` and click on ```add post-build action```
   * select "Git Publisher"
   * Check t
1. For testing purposes, make a change to your work. 

2.  Now using the testing job we created before, if the test pass it shall trigger the next job to merge the code from your new branch you created to ```main```
   
  


## Continus Delivery with Jenkins 

* Now our code has been tested and has merged to the ```main branch``, the next step is to copy that code over to production
* In our case that will be a ec2 instance. 

How do we do this?

1. Create a EC2 instance on AWS- with **Ubuntu 18.04 LTS**
2. Configure the network security group to allow *ssh*,**3000**(node app) and 8080(for jenkins) and **80** for HTTP traffic
3. git clone the app coide to the EC2 instance we made.
4. Install what dependencies are required.

* Once this is done we can now ssh into the instancew we made and manually install and start the app

## Continious Deployment with Jenkins 

How do we get our code to automatically deployed to the cloud?

1. Use jenkins to ssh into our EC2 without user input so add the ```frontend command```
2. Head to the app folder.
3. Start the app in the background!

***************************************************************





