# CD PIPELINE INTERGRATION - deploying the app 

************************

## Using a jenkins job to install nginx with an ec2 instance

These are the following steps to launch nginx via an ec2 instance on AWS with jenkins 

1. **Create a fresh instance on AWS** if you need a recap on how to do that click on the link here  ![deploying an instance in aws](https://github.com/joeodx/Tech258_AWS_cloud/tree/master/Deploying_vm_cloud)

2. **Make sure when you are configuring that security group of that instance** to allow for the follwing ports 


```port 22 for ssh```

```port 80 for html```

```port 3000 for local host```

```port 8080 for jenkins```

3. **Now launch that instance!** 


4. **Log onto jenkins and create a new project** follow the setting up of that here ![go to job one](https://github.com/joeodx/Tech258_AWS_cloud/tree/master/Deploying_vm_cloud)

 But dont save and apply just yet we need to add a few things!
