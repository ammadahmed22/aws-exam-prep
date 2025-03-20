const questions = 
    [
        {
          "id": 1,
          "question": "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
          "options": [
            "AWS CLI.",
            "AWS API.",
            "AWS SDK.",
            "AWS Management Console."
          ],
          "correctAnswer": "AWS Management Console."
        },
        {
          "id": 2,
          "question": "Which of the following is an example of horizontal scaling in the AWS Cloud?",
          "options": [
            "Replacing an existing EC2 instance with a larger, more powerful one.",
            "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.",
            "Adding more RAM capacity to an EC2 instance.",
            "Adding more EC2 instances of the same size to handle an increase in traffic."
          ],
          "correctAnswer": "Adding more EC2 instances of the same size to handle an increase in traffic."
        },
        {
          "id": 3,
          "question": "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
          "options": [
            "Amazon Inspector.",
            "AWS CloudTrail.",
            "AWS Trusted Advisor.",
            "EC2 Instance Usage Report."
          ],
          "correctAnswer": "AWS CloudTrail."
        },
        {
          "id": 4,
          "question": "Which of the below options are related to the reliability of AWS? (Choose TWO)",
          "options": [
            "Applying the principle of least privilege to all AWS resources.",
            "Automatically provisioning new resources to meet demand.",
            "All AWS services are considered Global Services, and this design helps customers serve their international users.",
            "Providing compensation to customers if issues occur.",
            "Ability to recover quickly from failures."
          ],
          "correctAnswer": [
            "Automatically provisioning new resources to meet demand.",
            "Ability to recover quickly from failures."
          ]
        },
        {
          "id": 5,
          "question": "Which statement is true regarding the AWS Shared Responsibility Model?",
          "options": [
            "Responsibilities vary depending on the services used.",
            "Security of the IaaS services is the responsibility of AWS.",
            "Patching the guest OS is always the responsibility of AWS.",
            "Security of the managed services is the responsibility of the customer."
          ],
          "correctAnswer": "Responsibilities vary depending on the services used."
        },
        {
          "id": 6,
          "question": "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
          "options": [
            "The Reserved Instance discounts can only be shared with the master account.",
            "All accounts can receive the hourly cost benefit of the Reserved Instances.",
            "The purchased instances will have better performance than On-demand instances.",
            "There are no cost benefits from using consolidated billing; It is for informational purposes only."
          ],
          "correctAnswer": "All accounts can receive the hourly cost benefit of the Reserved Instances."
        },
        {
          "id": 7,
          "question": "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
          "options": [
            "Deploy the application across multiple Availability Zones and Edge locations.",
            "Deploy the application across multiple Availability Zones and subnets.",
            "Deploy the application across multiple Regions and Availability Zones.",
            "Deploy the application across multiple VPC's and subnets."
          ],
          "correctAnswer": "Deploy the application across multiple Regions and Availability Zones."
        },
        {
          "id": 8,
          "question": "What does AWS Snowball provide? (Choose TWO)",
          "options": [
            "Built-in computing capabilities that allow customers to process data locally.",
            "A catalog of third-party software solutions that customers need to build solutions and run their businesses.",
            "A hybrid cloud storage between on-premises environments and the AWS Cloud.",
            "An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.",
            "Secure transfer of large amounts of data into and out of the AWS."
          ],
          "correctAnswer": [
            "Built-in computing capabilities that allow customers to process data locally.",
            "Secure transfer of large amounts of data into and out of the AWS."
          ]
        },
        {
          "id": 9,
          "question": "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
          "options": [
            "AWS Health Dashboard.",
            "AWS Support Concierge.",
            "AWS Customer Service.",
            "AWS Operations Support."
          ],
          "correctAnswer": "AWS Support Concierge."
        },
        {
          "id": 10,
          "question": "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
          "options": [
            "Applying the Amazon Connect latency-based routing policy.",
            "Registering a new US domain name to serve the users in the US.",
            "Building a new data center in the US and implementing a hybrid model.",
            "Deploying new Amazon EC2 instances in a Region located in the US."
          ],
          "correctAnswer": "Deploying new Amazon EC2 instances in a Region located in the US."
        },
        {
          "id": 11,
          "question": "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
          "options": [
            "IAM roles.",
            "IAM users.",
            "IAM user groups.",
            "AWS Organizations."
          ],
          "correctAnswer": "IAM user groups."
        },
        {
          "id": 12,
          "question": "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
          "options": [
            "AWS OpsWorks.",
            "AWS Database Migration Service.",
            "AWS Server Migration Service.",
            "AWS Application Discovery Service."
          ],
          "correctAnswer": "AWS Database Migration Service."
        },
        {
          "id": 13,
          "question": "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
          "options": [
            "Build security in every layer.",
            "Parallelize tasks.",
            "Implement elasticity.",
            "Adopt monolithic architecture."
          ],
          "correctAnswer": "Implement elasticity."
        },
        {
          "id": 14,
          "question": "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
          "options": [
            "Increasing speed and agility.",
            "There is no need to worry about security.",
            "Gaining complete control over the physical infrastructure.",
            "Operating applications on behalf of customers.",
            "All of the physical security and most of the data/network security are taken care of for you."
          ],
          "correctAnswer": [
            "Increasing speed and agility.",
            "All of the physical security and most of the data/network security are taken care of for you."
          ]
        },
        {
          "id": 15,
          "question": "What is the advantage of the AWS-recommended practice of 'decoupling' applications?",
          "options": [
            "Allows treating an application as a single, cohesive unit.",
            "Reduces inter-dependencies so that failures do not impact other components of the application.",
            "Allows updates of any monolithic application quickly and easily.",
            "Allows tracking of any API call made to any AWS service."
          ],
          "correctAnswer": "Reduces inter-dependencies so that failures do not impact other components of the application."
        },
        {
          "id": 16,
          "question": "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
          "options": [
            "AWS Budgets.",
            "AWS Pricing Calculator.",
            "AWS Systems Manager.",
            "AWS Cost & Usage Reports."
          ],
          "correctAnswer": "AWS Cost & Usage Reports."
        },
        {
          "id": 17,
          "question": "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
          "options": [
            "AWS services' costs will be reduced to half the original price.",
            "The consolidated billing feature is just for organizational purpose.",
            "Each AWS account gets volume discounts.",
            "Each AWS account gets five times the free-tier services capacity."
          ],
          "correctAnswer": "Each AWS account gets volume discounts."
        },
        {
          "id": 18,
          "question": "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
          "options": [
            "Regularly update firmware on EBS devices.",
            "Create EBS snapshots.",
            "Ensure that EBS data is encrypted at rest.",
            "Store a backup daily in an external drive.",
            "Prevent any unauthorized access to AWS data centers."
          ],
          "correctAnswer": [
            "Create EBS snapshots.",
            "Ensure that EBS data is encrypted at rest."
          ]
        },
        {
          "id": 19,
          "question": "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture's design?",
          "options": [
            "By automatically scaling your on-premises resources based on changes in demand.",
            "By automatically scaling your AWS resources using an Elastic Load Balancer.",
            "By reducing interdependencies between application components wherever possible.",
            "By automatically provisioning the required AWS resources based on changes in demand."
          ],
          "correctAnswer": "By automatically provisioning the required AWS resources based on changes in demand."
        },
        {
          "id": 20,
          "question": "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
          "options": [
            "Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.",
            "Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis.",
            "Configure the AWS Budgets Service to alert the company when the threshold is exceeded.",
            "Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded.",
            "Configure the Amazon Connect Service to alert the company when the threshold is exceeded."
          ],
          "correctAnswer": [
            "Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.",
            "Configure the AWS Budgets Service to alert the company when the threshold is exceeded."
          ]
        },
        {
          "id": 21,
          "question": "What does Amazon CloudFront use to distribute content to global users with low latency?",
          "options": [
            "AWS Global Accelerator.",
            "AWS Regions.",
            "AWS Edge Locations.",
            "AWS Availability Zones."
          ],
          "correctAnswer": "AWS Edge Locations."
        },
        {
          "id": 22,
          "question": "What does the 'Principle of Least Privilege' refer to?",
          "options": [
            "You should grant your users only the permissions they need when they need them and nothing more.",
            "All IAM users should have at least the necessary permissions to access the core AWS services.",
            "All trusted IAM users should have access to any AWS service in the respective AWS account.",
            "IAM users should not be granted any permissions; to keep your account safe."
          ],
          "correctAnswer": "You should grant your users only the permissions they need when they need them and nothing more."
        },
        {
          "id": 23,
          "question": "Which of the following does NOT belong to the AWS Cloud Computing models?",
          "options": [
            "Platform as a Service (PaaS).",
            "Infrastructure as a Service (IaaS).",
            "Software as a Service (SaaS).",
            "Networking as a Service (NaaS)."
          ],
          "correctAnswer": "Networking as a Service (NaaS)."
        },
        {
          "id": 24,
          "question": "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
          "options": [
            "S3 Intelligent-Tiering.",
            "AWS Marketplace.",
            "Amazon S3 Glacier Deep Archive.",
            "Amazon EBS."
          ],
          "correctAnswer": "Amazon S3 Glacier Deep Archive."
        },
        {
          "id": 25,
          "question": "Which service provides DNS in the AWS cloud?",
          "options": [
            "Route 53.",
            "AWS Config.",
            "Amazon CloudFront.",
            "Amazon EMR."
          ],
          "correctAnswer": "Route 53."
        },
        {
          "id": 26,
          "question": "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
          "options": [
            "AWS Shield.",
            "AWS Config.",
            "Amazon Cognito.",
            "AWS WAF.",
            "AWS KMS."
          ],
          "correctAnswer": [
            "AWS Shield.",
            "AWS WAF."
          ]
        },
        {
          "id": 27,
          "question": "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application's response time is optimal?",
          "options": [
            "AWS OpsWorks.",
            "AWS Storage Gateway.",
            "Amazon EBS volume.",
            "Amazon ElastiCache."
          ],
          "correctAnswer": "Amazon ElastiCache."
        },
        {
          "id": 28,
          "question": "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
          "options": [
            "Reserved instances.",
            "Spot instances.",
            "Dedicated instances.",
            "On-demand instances."
          ],
          "correctAnswer": "On-demand instances."
        },
        {
          "id": 29,
          "question": "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
          "options": [
            "Reserved Instances.",
            "On-demand Instances.",
            "Dedicated Instances.",
            "Spot Instances."
          ],
          "correctAnswer": "Spot Instances."
        },
        {
          "id": 30,
          "question": "Which of the following can be described as a global content delivery network (CDN) service?",
          "options": [
            "AWS VPN.",
            "AWS Direct Connect.",
            "AWS Regions.",
            "Amazon CloudFront."
          ],
          "correctAnswer": "Amazon CloudFront."
        },
        {
          "id": 31,
          "question": "Which of the following services allows customers to manage their agreements with AWS?",
          "options": [
            "AWS Artifact.",
            "AWS Certificate Manager.",
            "AWS Systems Manager.",
            "AWS Organizations."
          ],
          "correctAnswer": "AWS Artifact."
        },
        {
          "id": 32,
          "question": "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
          "options": [
            "Amazon VPC.",
            "Amazon DynamoDB.",
            "Amazon Elastic MapReduce.",
            "AWS IAM.",
            "Amazon Elastic Compute Cloud."
          ],
          "correctAnswer": [
            "Amazon DynamoDB.",
            "Amazon Elastic MapReduce."
          ]
        },
        {
          "id": 33,
          "question": "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
          "options": [
            "Amazon Aurora.",
            "Amazon DynamoDB.",
            "Amazon Elastic Block Store.",
            "Amazon Redshift."
          ],
          "correctAnswer": "Amazon DynamoDB."
        },
        {
          "id": 34,
          "question": "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
          "options": [
            "AWS Identity and Access Management (IAM) user.",
            "Infrastructure Event Management (IEM) engineer.",
            "AWS Consulting Partners.",
            "Technical Account Manager (TAM)."
          ],
          "correctAnswer": "Technical Account Manager (TAM)."
        },
        {
          "id": 35,
          "question": "How can you view the distribution of AWS spending in one of your AWS accounts?",
          "options": [
            "By using Amazon VPC console.",
            "By contacting the AWS Support team.",
            "By using AWS Cost Explorer.",
            "By contacting the AWS Finance team."
          ],
          "correctAnswer": "By using AWS Cost Explorer."
        },
        {
          "id": 36,
          "question": "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
          "options": [
            "Access keys.",
            "Secret token.",
            "UserID.",
            "User name and password."
          ],
          "correctAnswer": "Access keys."
        },
        {
          "id": 37,
          "question": "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
          "options": [
            "Contact the AWS Customer Service team.",
            "Contact the AWS Abuse team.",
            "Contact the AWS Concierge team.",
            "Contact the AWS Security team."
          ],
          "correctAnswer": "Contact the AWS Abuse team."
        },
        {
          "id": 38,
          "question": "Select TWO examples of the AWS shared controls.",
          "options": [
            "Patch Management.",
            "IAM Management.",
            "VPC Management.",
            "Configuration Management.",
            "Data Center operations."
          ],
          "correctAnswer": [
            "Patch Management.",
            "Configuration Management."
          ]
        },
        {
          "id": 39,
          "question": "In order to implement best practices when dealing with a 'Single Point of Failure,' you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
          "options": [
            "ELB.",
            "Auto Scaling.",
            "Amazon Athena.",
            "ECR.",
            "Amazon EC2."
          ],
          "correctAnswer": [
            "ELB.",
            "Auto Scaling."
          ]
        },
        {
          "id": 40,
          "question": "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
          "options": [
            "Amazon SNS.",
            "Amazon Kinesis Video Streams.",
            "AWS CloudFormation.",
            "Amazon CloudFront."
          ],
          "correctAnswer": "Amazon CloudFront."
        },
        {
          "id": 41,
          "question": "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
          "options": [
            "A MySQL database installed on an EC2 instance.",
            "Amazon Aurora.",
            "Amazon DynamoDB.",
            "Amazon Neptune."
          ],
          "correctAnswer": "Amazon Aurora."
        },
        {
          "id": 42,
          "question": "What is the AWS service that enables AWS architects to manage infrastructure as code?",
          "options": [
            "AWS CloudFormation.",
            "AWS Config.",
            "Amazon SES.",
            "Amazon EMR."
          ],
          "correctAnswer": "AWS CloudFormation."
        },
        {
          "id": 43,
          "question": "Under the shared responsibility model, which of the following is the responsibility of AWS?",
          "options": [
            "Client-side encryption.",
            "Configuring infrastructure devices.",
            "Server-side encryption.",
            "Filtering traffic with Security Groups."
          ],
          "correctAnswer": "Configuring infrastructure devices."
        },
        {
          "id": 44,
          "question": "What does the AWS Health Dashboard provide? (Choose TWO)",
          "options": [
            "Detailed troubleshooting guidance to address AWS events impacting your resources.",
            "Health checks for Auto Scaling instances.",
            "Recommendations for Cost Optimization.",
            "A dashboard detailing vulnerabilities in your applications.",
            "Personalized view of AWS service health."
          ],
          "correctAnswer": [
            "Detailed troubleshooting guidance to address AWS events impacting your resources.",
            "Personalized view of AWS service health."
          ]
        },
        {
          "id": 45,
          "question": "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can't reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
          "options": [
            "AWS Lambda.",
            "AWS Config.",
            "Amazon CloudWatch.",
            "AWS CloudTrail."
          ],
          "correctAnswer": "Amazon CloudWatch."
        },
        {
          "id": 46,
          "question": "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
          "options": [
            "AWS Shield.",
            "AWS Management Console.",
            "AWS Secrets Manager.",
            "AWS Trusted Advisor."
          ],
          "correctAnswer": "AWS Trusted Advisor."
        },
        {
          "id": 47,
          "question": "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
          "options": [
            "Amazon S3 provides unlimited storage for any type of data.",
            "Amazon S3 can run any type of application or backend system.",
            "Amazon S3 stores any number of objects, but with object size limits.",
            "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.",
            "Amazon S3 provides 99.999999999% (11 9's) of data durability."
          ],
          "correctAnswer": [
            "Amazon S3 can run any type of application or backend system.",
            "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere."
          ]
        },
        {
          "id": 48,
          "question": "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
          "options": [
            "Disk disposal.",
            "Controlling physical access to compute resources.",
            "Patching the Network infrastructure.",
            "Setting password complexity rules.",
            "Configuring network access rules."
          ],
          "correctAnswer": [
            "Setting password complexity rules.",
            "Configuring network access rules."
          ]
        },
        {
          "id": 49,
          "question": "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
          "options": [
            "Amazon Aurora.",
            "Amazon CloudWatch.",
            "AWS Quick Start reference deployments.",
            "AWS OpsWorks."
          ],
          "correctAnswer": "AWS Quick Start reference deployments."
        },
        {
          "id": 50,
          "question": "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
          "options": [
            "Elastic RI.",
            "Premium RI.",
            "Standard RI.",
            "Convertible RI."
          ],
          "correctAnswer": "Convertible RI."
        },
        {
          "id": 51,
          "question": "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
          "options": [
            "AWS Organizations.",
            "AWS Trusted Advisor.",
            "IAM User Groups.",
            "AWS Config."
          ],
          "correctAnswer": "AWS Organizations."
        },
        {
          "id": 52,
          "question": "Which service provides object-level storage in AWS?",
          "options": [
            "Amazon EBS.",
            "Amazon Instance Store.",
            "Amazon EFS.",
            "Amazon S3."
          ],
          "correctAnswer": "Amazon S3."
        },
        {
          "id": 53,
          "question": "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
          "options": [
            "AWS Elastic Load Balancer.",
            "AWS Budgets.",
            "AWS Auto Scaling.",
            "AWS Cost Explorer."
          ],
          "correctAnswer": "AWS Auto Scaling."
        },
        {
          "id": 54,
          "question": "Which S3 storage class is best for data with unpredictable access patterns?",
          "options": [
            "Amazon S3 Intelligent-Tiering.",
            "Amazon S3 Glacier Flexible Retrieval.",
            "Amazon S3 Standard.",
            "Amazon S3 Standard-Infrequent Access."
          ],
          "correctAnswer": "Amazon S3 Intelligent-Tiering."
        },
        {
          "id": 55,
          "question": "What is the AWS database service that allows you to upload data structured in key-value format?",
          "options": [
            "Amazon DynamoDB.",
            "Amazon Aurora.",
            "Amazon Redshift.",
            "Amazon RDS."
          ],
          "correctAnswer": "Amazon DynamoDB."
        },
        {
          "id": 56,
          "question": "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
          "options": [
            "You have to pay a start-up fee when launching a new instance for the first time.",
            "The on-demand instances follow the AWS pay-as-you-go pricing model.",
            "With on-demand instances, no longer-term commitments or upfront payments are needed.",
            "When using on-demand Linux instances, you are charged per second based on an hourly rate."
          ],
          "correctAnswer": "You have to pay a start-up fee when launching a new instance for the first time."
        },
        {
          "id": 57,
          "question": "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
          "options": [
            "AWS Trusted Advisor.",
            "Amazon Inspector.",
            "Amazon SNS.",
            "Amazon CloudWatch.",
            "Concierge Support Team."
          ],
          "correctAnswer": [
            "AWS Trusted Advisor.",
            "Amazon Inspector."
          ]
        },
        {
          "id": 58,
          "question": "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
          "options": [
            "Encrypted keys.",
            "Email verification.",
            "AWS KMS.",
            "AWS MFA."
          ],
          "correctAnswer": "AWS MFA."
        },
        {
          "id": 59,
          "question": "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
          "options": [
            "AWS Knowledge Center.",
            "AWS Health Dashboard.",
            "Infrastructure Event Management.",
            "AWS Support Concierge Service."
          ],
          "correctAnswer": "Infrastructure Event Management."
        },
        {
          "id": 60,
          "question": "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
          "options": [
            "Amazon RDS.",
            "Amazon Redshift.",
            "Amazon DynamoDB.",
            "Amazon CloudWatch."
          ],
          "correctAnswer": "Amazon RDS."
        },
        {
          "id": 61,
          "question": "Which of the below is a best-practice when designing solutions on AWS?",
          "options": [
            "Invest heavily in architecting your environment, as it is not easy to change your design later.",
            "Use AWS reservations to reduce costs when testing your production environment.",
            "Automate wherever possible to make architectural experimentation easier.",
            "Provision a large compute capacity to handle any spikes in load."
          ],
          "correctAnswer": "Automate wherever possible to make architectural experimentation easier."
        },
        {
          "id": 62,
          "question": "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
          "options": [
            "Penetration testing is not allowed in AWS.",
            "Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.",
            "Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.",
            "The AWS customers are only allowed to perform penetration testing on services managed by AWS."
          ],
          "correctAnswer": "Penetration testing can be performed by the customer on their own instances without prior authorization from AWS."
        },
        {
          "id": 63,
          "question": "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
          "options": [
            "Amazon SQS.",
            "Amazon SES.",
            "AWS Direct Connect.",
            "Amazon Connect."
          ],
          "correctAnswer": "Amazon SQS."
        },
        {
          "id": 64,
          "question": "The principle 'design for failure and nothing will fail' is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
          "options": [
            "Multi-factor authentication.",
            "Availability Zones.",
            "Elastic Load Balancing.",
            "Penetration testing.",
            "Vertical Scaling."
          ],
          "correctAnswer": [
            "Availability Zones.",
            "Elastic Load Balancing."
          ]
        },
        {
          "id": 65,
          "question": "What is the AWS service that provides a virtual network dedicated to your AWS account?",
          "options": [
            "AWS VPN.",
            "AWS Subnets.",
            "AWS Dedicated Hosts.",
            "Amazon VPC."
          ],
          "correctAnswer": "Amazon VPC."
        },
        {
          "id": 66,
          "question": "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
          "options": [
            "Managing environmental events of AWS data centers.",
            "Protecting the confidentiality of data in transit in Amazon S3.",
            "Controlling physical access to AWS Regions.",
            "Ensuring that the underlying EC2 host is configured properly.",
            "Patching applications installed on Amazon EC2."
          ],
          "correctAnswer": [
            "Protecting the confidentiality of data in transit in Amazon S3.",
            "Patching applications installed on Amazon EC2."
          ]
        },
        {
          "id": 67,
          "question": "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
          "options": [
            "Amazon VPC.",
            "Amazon CloudWatch.",
            "Amazon S3.",
            "Amazon EC2.",
            "AWS Lambda."
          ],
          "correctAnswer": [
            "Amazon EC2.",
            "AWS Lambda."
          ]
        },
        {
          "id": 68,
          "question": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
          "options": [
            "Amazon EBS.",
            "Amazon SQS.",
            "Amazon S3.",
            "Amazon Instance store."
          ],
          "correctAnswer": "Amazon S3."
        },
        {
          "id": 69,
          "question": "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
          "options": [
            "Instance Password.",
            "Key pairs.",
            "Access Keys.",
            "MFA."
          ],
          "correctAnswer": "Access Keys."
        },
        {
          "id": 70,
          "question": "What does Amazon ElastiCache provide?",
          "options": [
            "In-memory caching for read-heavy applications.",
            "An Ehcache compatible in-memory data store.",
            "An online software store that allows Customers to launch pre-configured software with just few clicks.",
            "A domain name system in the cloud."
          ],
          "correctAnswer": "In-memory caching for read-heavy applications."
        },
        {
          "id": 71,
          "question": "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
          "options": [
            "AWS WAF.",
            "AWS Trusted Advisor.",
            "AWS Organizations.",
            "Amazon Config."
          ],
          "correctAnswer": "AWS Organizations."
        },
        {
          "id": 72,
          "question": "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
          "options": [
            "Dedicated Instances.",
            "Dedicated Hosts.",
            "On-demand Instances.",
            "Reserved Instances."
          ],
          "correctAnswer": "Dedicated Hosts."
        },
        {
          "id": 73,
          "question": "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
          "options": [
            "Free support for all enterprise customers.",
            "Automatic data protection.",
            "Reduced Capital Expenditure (CapEx).",
            "AWS holds responsibility for managing customer applications."
          ],
          "correctAnswer": "Reduced Capital Expenditure (CapEx)."
        },
        {
          "id": 74,
          "question": "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
          "options": [
            "Always use Global Services in your architecture rather than Regional Services.",
            "Always choose to pay as you go.",
            "Treat servers as fixed resources.",
            "Automate wherever possible.",
            "Remove single points of failure."
          ],
          "correctAnswer": [
            "Automate wherever possible.",
            "Remove single points of failure."
          ]
        },
        {
          "id": 75,
          "question": "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
          "options": [
            "AWS Direct Connect.",
            "Amazon CloudFront.",
            "AWS Snowball.",
            "Amazon Route 53."
          ],
          "correctAnswer": "AWS Direct Connect."
        },
        {
          "id": 76,
          "question": "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
          "options": [
            "Internet gateways.",
            "Virtual Private Cloud.",
            "Security Groups.",
            "Amazon CloudFront."
          ],
          "correctAnswer": "Virtual Private Cloud."
        },
        {
          "id": 77,
          "question": "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
          "options": [
            "Amazon Cognito.",
            "AWS IAM.",
            "Amazon Aurora.",
            "AWS WAF."
          ],
          "correctAnswer": "AWS WAF."
        },
        {
          "id": 78,
          "question": "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
          "options": [
            "Amazon EMR.",
            "Amazon MQ.",
            "Amazon SNS.",
            "Amazon SQS."
          ],
          "correctAnswer": "Amazon EMR."
        },
        {
          "id": 79,
          "question": "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
          "options": [
            "Monitoring network performance.",
            "Installing software on EC2 instances.",
            "Creating hypervisors.",
            "Configuring Access Control Lists (ACLs).",
            "Hardware maintenance."
          ],
          "correctAnswer": [
            "Creating hypervisors.",
            "Hardware maintenance."
          ]
        },
        {
          "id": 80,
          "question": "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
          "options": [
            "Amazon Redshift.",
            "Amazon DynamoDB.",
            "Amazon EC2.",
            "Amazon RDS."
          ],
          "correctAnswer": "Amazon EC2."
        },
        {
          "id": 81,
          "question": "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
          "options": [
            "MFA.",
            "Security tokens.",
            "A user name and password.",
            "Access keys."
          ],
          "correctAnswer": "A user name and password."
        },
        {
          "id": 82,
          "question": "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
          "options": [
            "IAM.",
            "An internet gateway.",
            "EBS Snapshot.",
            "AMI."
          ],
          "correctAnswer": "AMI."
        },
        {
          "id": 83,
          "question": "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
          "options": [
            "Reserved Compute capacity.",
            "Eliminating Single Points of Failure (SPOFs).",
            "Distributed infrastructure.",
            "Virtualized compute resources.",
            "Dedicated hosting."
          ],
          "correctAnswer": [
            "Eliminating Single Points of Failure (SPOFs).",
            "Distributed infrastructure."
          ]
        },
        {
          "id": 84,
          "question": "Which of the following aspects of security are managed by AWS? (Choose TWO)",
          "options": [
            "Encryption of EBS volumes.",
            "VPC security.",
            "Access permissions.",
            "Hardware patching.",
            "Securing global physical infrastructure."
          ],
          "correctAnswer": [
            "Hardware patching.",
            "Securing global physical infrastructure."
          ]
        }
];

// Function to get random questions
function getRandomQuestions(count = 60) {
    // Get total number of available questions
    const totalAvailableQuestions = questions.length;
    
    // Validate the requested count
    if (count > totalAvailableQuestions) {
        console.warn(`Requested ${count} questions but only ${totalAvailableQuestions} are available. Using all available questions.`);
        count = totalAvailableQuestions;
    }
    
    // Create array of indices and shuffle them
    const indices = Array.from({ length: totalAvailableQuestions }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    
    // Take the first 'count' indices and map them to questions
    return indices.slice(0, count).map(index => questions[index]);
}

// Function to check if a question requires multiple answers
function isMultipleAnswer(question) {
    return Array.isArray(question.correctAnswer);
}

// Export the functions and questions
window.quizData = {
    questions,
    getRandomQuestions,
    isMultipleAnswer,
    getTotalQuestions: () => questions.length
}; 