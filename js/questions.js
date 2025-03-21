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
        },
        {
          "id": 85,
          "question": "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
          "options": [
            "The ability of a system to recover gracefully from failure.",
            "The efficient use of computing resources to meet requirements.",
            "The ability to monitor systems and improve supporting processes and procedures.",
            "The ability to manage datacenter operations more efficiently."
          ],
          "correctAnswer": "The ability to monitor systems and improve supporting processes and procedures."
        },
        {
          "id": 86,
          "question": "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
          "options": [
            "Edge locations are used by CloudFront to cache the most recent responses.",
            "Edge locations are used by CloudFront to improve your end users' experience when uploading files.",
            "Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.",
            "Edge locations are used by CloudFront to distribute content to global users with low latency."
          ],
          "correctAnswer": "Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency."
        },
        {
          "id": 87,
          "question": "What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
          "options": [
            "AWS CloudTrail.",
            "Amazon Comprehend.",
            "AWS Transit Gateway.",
            "AWS X-Ray.",
            "AWS Config."
          ],
          "correctAnswer": [
            "AWS CloudTrail.",
            "AWS Config."
          ]
        },
        {
          "id": 88,
          "question": "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
          "options": [
            "Amazon ECS.",
            "AWS Data Pipeline.",
            "AWS Cloud9.",
            "AWS Personal Health Dashboard."
          ],
          "correctAnswer": "Amazon ECS."
        },
        {
          "id": 89,
          "question": "Which of the following services will help businesses ensure compliance in AWS?",
          "options": [
            "CloudFront.",
            "CloudEndure Migration.",
            "CloudWatch.",
            "CloudTrail."
          ],
          "correctAnswer": "CloudTrail."
        },
        {
          "id": 90,
          "question": "Which of the following procedures will help reduce your Amazon S3 costs?",
          "options": [
            "Use the Import/Export feature to move old files automatically to Amazon Glacier.",
            "Use the right combination of storage classes based on different use cases.",
            "Pick the right Availability Zone for your S3 bucket.",
            "Move all the data stored in S3 standard to EBS."
          ],
          "correctAnswer": "Use the right combination of storage classes based on different use cases."
        },
        {
          "id": 91,
          "question": "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
          "options": [
            "AWS Direct Connect.",
            "Amazon EC2 Auto Scaling.",
            "Elastic Load Balancer.",
            "CloudFormation.",
            "Network ACLs."
          ],
          "correctAnswer": [
            "Amazon EC2 Auto Scaling.",
            "Elastic Load Balancer."
          ]
        },
        {
          "id": 92,
          "question": "Which of the following activities may help reduce your AWS monthly costs?",
          "options": [
            "Enabling Amazon EC2 Auto Scaling for all of your workloads.",
            "Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.",
            "Removing all of your Cost Allocation Tags.",
            "Deploying your AWS resources across multiple Availability Zones."
          ],
          "correctAnswer": "Enabling Amazon EC2 Auto Scaling for all of your workloads."
        },
        {
          "id": 93,
          "question": "What is the AWS service/feature that takes advantage of Amazon CloudFront's globally distributed edge locations to transfer files to S3 with higher upload speeds?",
          "options": [
            "S3 Transfer Acceleration.",
            "AWS WAF.",
            "AWS Snowmobile.",
            "AWS Snowball."
          ],
          "correctAnswer": "S3 Transfer Acceleration."
        },
        {
          "id": 94,
          "question": "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
          "options": [
            "AWS X-Ray.",
            "Network ACL.",
            "Security Groups.",
            "VPC Flow logs."
          ],
          "correctAnswer": "Security Groups."
        },
        {
          "id": 95,
          "question": "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
          "options": [
            "AWS KMS.",
            "AWS Global accelerator.",
            "AWS Direct Connect.",
            "AWS Glue.",
            "Amazon CloudFront."
          ],
          "correctAnswer": [
            "AWS Global accelerator.",
            "Amazon CloudFront."
          ]
        },
        {
          "id": 96,
          "question": "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
          "options": [
            "Building the relational database schema.",
            "Performing backups.",
            "Managing the database settings.",
            "Patching the database software.",
            "Installing the database software."
          ],
          "correctAnswer": [
            "Building the relational database schema.",
            "Managing the database settings."
          ]
        },
        {
          "id": 97,
          "question": "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
          "options": [
            "Amazon DynamoDB.",
            "Amazon SNS.",
            "Amazon RDS.",
            "Amazon ElastiCache."
          ],
          "correctAnswer": "Amazon RDS."
        },
        {
          "id": 98,
          "question": "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
          "options": [
            "APN Consulting Partners.",
            "AWS TAM.",
            "APN Technology Partners.",
            "AWS Professional Services."
          ],
          "correctAnswer": "APN Technology Partners."
        },
        {
          "id": 99,
          "question": "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
          "options": [
            "Amazon LightSail.",
            "AWS Lambda.",
            "Amazon RDS instances.",
            "Amazon EC2 instances."
          ],
          "correctAnswer": "AWS Lambda."
        },
        {
          "id": 100,
          "question": "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
          "options": [
            "She has properly built an elastic system.",
            "She has properly built a fault tolerant system.",
            "She has properly built an encrypted system.",
            "She has properly built a scalable system."
          ],
          "correctAnswer": "She has properly built a fault tolerant system."
        },
        {
          "id": 101,
          "question": "Where can you store files in AWS? (Choose TWO)",
          "options": [
            "Amazon EFS.",
            "Amazon SNS.",
            "Amazon EBS.",
            "Amazon ECS.",
            "Amazon EMR."
          ],
          "correctAnswer": [
            "Amazon EFS.",
            "Amazon EBS."
          ]
        },
        {
          "id": 102,
          "question": "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
          "options": [
            "Amazon Simple Queue Service.",
            "AWS Storage Gateway.",
            "Amazon Simple Email Service.",
            "Amazon Simple Storage Service."
          ],
          "correctAnswer": "Amazon Simple Queue Service."
        },
        {
          "id": 103,
          "question": "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
          "options": [
            "Pay less as AWS grows.",
            "Pay as you go.",
            "Pay less by using more.",
            "Save when you reserve."
          ],
          "correctAnswer": "Save when you reserve."
        },
        {
          "id": 104,
          "question": "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
          "options": [
            "Right-size before and after migration.",
            "Use a Multi-Region Active-Passive architecture.",
            "Combine On-demand Capacity Reservations with Saving Plans.",
            "Use a Multi-Region Active-Active architecture."
          ],
          "correctAnswer": "Right-size before and after migration."
        },
        {
          "id": 105,
          "question": "What is the primary storage service used by Amazon RDS database instances?",
          "options": [
            "Amazon Glacier.",
            "Amazon EBS.",
            "Amazon EFS.",
            "Amazon S3."
          ],
          "correctAnswer": "Amazon EBS."
        },
        {
          "id": 106,
          "question": "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
          "options": [
            "AWS CodePipeline.",
            "AWS X-Ray.",
            "Amazon Inspector.",
            "AWS CloudTrail."
          ],
          "correctAnswer": "AWS X-Ray."
        },
        {
          "id": 107,
          "question": "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
          "options": [
            "Amazon Redshift.",
            "AWS Snowball.",
            "Amazon Simple Storage Service.",
            "Amazon EBS.",
            "Amazon DynamoDB."
          ],
          "correctAnswer": [
            "Amazon Simple Storage Service.",
            "Amazon DynamoDB."
          ]
        },
        {
          "id": 108,
          "question": "What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)",
          "options": [
            "AWS Regions.",
            "Multi-AZ Deployment.",
            "Automatic patching.",
            "Read Replicas.",
            "Edge Locations."
          ],
          "correctAnswer": [
            "Multi-AZ Deployment.",
            "Read Replicas."
          ]
        },
        {
          "id": 109,
          "question": "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application's traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
          "options": [
            "Replicate the current resources across multiple Availability Zones within the same region.",
            "Migrate the application to a hosting provider in Asia.",
            "Recreate the website content.",
            "Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia."
          ],
          "correctAnswer": "Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia."
        },
        {
          "id": 110,
          "question": "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
          "options": [
            "AWS Identity and Access Management.",
            "Amazon RDS.",
            "Network Access Control Lists.",
            "Amazon EMR."
          ],
          "correctAnswer": "AWS Identity and Access Management."
        },
        {
          "id": 111,
          "question": "Using Amazon EC2 falls under which of the following cloud computing models?",
          "options": [
            "Iaas & SaaS.",
            "IaaS.",
            "SaaS.",
            "PaaS."
          ],
          "correctAnswer": "IaaS."
        },
        {
          "id": 112,
          "question": "Which of the below is a best-practice when building applications on AWS?",
          "options": [
            "Strengthen physical security by applying the principle of least privilege.",
            "Ensure that the application runs on hardware from trusted vendors.",
            "Use IAM policies to maintain performance.",
            "Decouple the components of the application so that they run independently."
          ],
          "correctAnswer": "Decouple the components of the application so that they run independently."
        },
        {
          "id": 113,
          "question": "A company has deployed applications on Amazon EC2 instances. The company needs to assess application vulnerabilities and must identify infrastructure deployments that do not meet best practices. Which AWS service can the company use to meet these requirements?",
          "options": [
            "AWS Trusted Advisor.",
            "Amazon Inspector.",
            "AWS Config.",
            "Amazon GuardDuty."
          ],
          "correctAnswer": "Amazon Inspector."
        },
        {
          "id": 114,
          "question": "Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)",
          "options": [
            "active archives.",
            "dynamic websites' assets.",
            "long-term analytic data.",
            "active databases.",
            "cached data."
          ],
          "correctAnswer": [
            "active archives.",
            "long-term analytic data."
          ]
        },
        {
          "id": 115,
          "question": "What does Amazon Elastic Beanstalk provide?",
          "options": [
            "A PaaS solution to automate application deployment.",
            "A compute engine for Amazon ECS.",
            "A scalable file storage solution for use with AWS and on-premises servers.",
            "A NoSQL database service."
          ],
          "correctAnswer": "A PaaS solution to automate application deployment."
        },
        {
          "id": 116,
          "question": "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
          "options": [
            "Amazon Kinesis.",
            "Security groups.",
            "Amazon Inspector.",
            "AWS Network Access Control Lists."
          ],
          "correctAnswer": "Amazon Inspector."
        },
        {
          "id": 117,
          "question": "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
          "options": [
            "Patch management controls.",
            "Database controls.",
            "Awareness & Training.",
            "Environmental controls.",
            "Physical controls."
          ],
          "correctAnswer": [
            "Environmental controls.",
            "Physical controls."
          ]
        },
        {
          "id": 118,
          "question": "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
          "options": [
            "Reserved instances - No Upfront.",
            "Reserved instances - Partial Upfront.",
            "On-Demand instances.",
            "Spot Instances."
          ],
          "correctAnswer": "Reserved instances - Partial Upfront."
        },
        {
          "id": 119,
          "question": "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users' experience?",
          "options": [
            "Elasticity.",
            "Global reach.",
            "Data durability.",
            "High availability."
          ],
          "correctAnswer": "Global reach."
        },
        {
          "id": 120,
          "question": "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
          "options": [
            "AWS Batch.",
            "AWS Outposts.",
            "Amazon Lightsail.",
            "Amazon EC2.",
            "AWS Lambda."
          ],
          "correctAnswer": [
            "Amazon EC2.",
            "AWS Lambda."
          ]
        },
        {
          "id": 121,
          "question": "A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
          "options": [
            "Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.",
            "Deploy AWS resources across multiple Availability Zones within the same AWS Region.",
            "Create point-in-time backups in another subnet and recover this data when a disaster occurs.",
            "Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy."
          ],
          "correctAnswer": "Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy."
        },
        {
          "id": 122,
          "question": "Which statement is correct with regards to AWS service limits? (Choose TWO)",
          "options": [
            "You can contact AWS support to increase the service limits.",
            "Each IAM user has the same service limit.",
            "There are no service limits on AWS.",
            "You can use the AWS Trusted Advisor to monitor your service limits.",
            "The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit."
          ],
          "correctAnswer": [
            "You can contact AWS support to increase the service limits.",
            "You can use the AWS Trusted Advisor to monitor your service limits."
          ]
        },
        {
          "id": 123,
          "question": "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
          "options": [
            "AWS Console.",
            "AWS Service Catalog.",
            "AWS OpsWorks.",
            "AWS CLI."
          ],
          "correctAnswer": "AWS CLI."
        },
        {
          "id": 124,
          "question": "What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)",
          "options": [
            "AWS Artifact.",
            "AWS Cloud9.",
            "AWS Direct Connect.",
            "AWS CloudTrail.",
            "AWS VPN."
          ],
          "correctAnswer": [
            "AWS Direct Connect.",
            "AWS VPN."
          ]
        },
        {
          "id": 125,
          "question": "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
          "options": [
            "AWS EC2 Auto Recovery.",
            "AWS Auto Scaling.",
            "AWS Network Load Balancer.",
            "AWS Application Load Balancer."
          ],
          "correctAnswer": "AWS Application Load Balancer."
        },
        {
          "id": 126,
          "question": "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
          "options": [
            "Amazon Neptune.",
            "Amazon Aurora.",
            "Amazon RDS for SQL Server.",
            "Amazon RDS for PostgreSQL."
          ],
          "correctAnswer": "Amazon Aurora."
        },
        {
          "id": 127,
          "question": "Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)",
          "options": [
            "AWS CloudHSM.",
            "Security Groups.",
            "AWS Batch.",
            "AWS IAM.",
            "Network Access Control Lists (Network ACLs)."
          ],
          "correctAnswer": [
            "Security Groups.",
            "Network Access Control Lists (Network ACLs)."
          ]
        },
        {
          "id": 128,
          "question": "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
          "options": [
            "Amazon Redshift.",
            "Amazon Kinesis.",
            "Amazon DynamoDB.",
            "Amazon RDS."
          ],
          "correctAnswer": "Amazon Redshift."
        },
        {
          "id": 129,
          "question": "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
          "options": [
            "Application development.",
            "Market research.",
            "Business analysis.",
            "Physical hardware."
          ],
          "correctAnswer": "Physical hardware."
        },
        {
          "id": 130,
          "question": "How are AWS customers billed for Linux-based Amazon EC2 usage?",
          "options": [
            "EC2 instances will be billed on one second increments, with a minimum of one minute.",
            "EC2 instances will be billed on one hour increments, with a minimum of one day.",
            "EC2 instances will be billed on one minute increments, with a minimum of one hour.",
            "EC2 instances will be billed on one day increments, with a minimum of one month."
          ],
          "correctAnswer": "EC2 instances will be billed on one second increments, with a minimum of one minute."
        },
        {
          "id": 131,
          "question": "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
          "options": [
            "Instance type.",
            "The Availability Zone where the instance is provisioned.",
            "Load balancing.",
            "Number of buckets.",
            "Number of private IPs."
          ],
          "correctAnswer": [
            "Instance type.",
            "The Availability Zone where the instance is provisioned."
          ]
        },
        {
          "id": 132,
          "question": "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
          "options": [
            "By creating an AWS Config template from the old instance and launching a new instance from it.",
            "By creating an EBS Snapshot of the old instance.",
            "By installing Aurora on EC2 and launching a new instance from it.",
            "By creating an AMI from the old instance and launching a new instance from it."
          ],
          "correctAnswer": "By creating an AMI from the old instance and launching a new instance from it."
        },
        {
          "id": 133,
          "question": "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
          "options": [
            "IAM Principals.",
            "AWS Service Control Policies (SCPs).",
            "IAM policies.",
            "AWS Fargate."
          ],
          "correctAnswer": "AWS Service Control Policies (SCPs)."
        },
        {
          "id": 134,
          "question": "Which of the following statements describes the AWS Cloud's agility?",
          "options": [
            "AWS allows you to host your applications in multiple regions around the world.",
            "AWS provides customizable hardware at the lowest possible cost.",
            "AWS allows you to provision resources in minutes.",
            "AWS allows you to pay upfront to reduce costs."
          ],
          "correctAnswer": "AWS allows you to provision resources in minutes."
        },
        {
          "id": 135,
          "question": "What are the benefits of using the Amazon Relational Database Service? (Choose TWO)",
          "options": [
            "Lower administrative burden.",
            "Complete control over the underlying host.",
            "Resizable compute capacity.",
            "Scales automatically to larger or smaller instance types.",
            "Supports the document and key-value data structure."
          ],
          "correctAnswer": [
            "Lower administrative burden.",
            "Resizable compute capacity."
          ]
        },
        {
          "id": 136,
          "question": "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
          "options": [
            "Internet Gateway.",
            "AWS IQ.",
            "AWS Direct Connect.",
            "AWS Site-to-Site VPN."
          ],
          "correctAnswer": "AWS Site-to-Site VPN."
        },
        {
          "id": 137,
          "question": "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
          "options": [
            "Enterprise Support.",
            "Developer Support.",
            "Basic Support.",
            "Business Support."
          ],
          "correctAnswer": "Business Support."
        },
        {
          "id": 138,
          "question": "Which of the following is used to control network traffic in AWS? (Choose TWO)",
          "options": [
            "Network Access Control Lists (NACLs).",
            "Key Pairs.",
            "Access Keys.",
            "IAM Policies.",
            "Security Groups."
          ],
          "correctAnswer": [
            "Network Access Control Lists (NACLs).",
            "Security Groups."
          ]
        },
        {
          "id": 139,
          "question": "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
          "options": [
            "Reserved instances.",
            "Spot Instances.",
            "On-Demand instances.",
            "Dedicated instances."
          ],
          "correctAnswer": "Spot Instances."
        },
        {
          "id": 140,
          "question": "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
          "options": [
            "AWS Service Health Dashboard.",
            "AWS Management Console.",
            "Amazon CloudWatch.",
            "AWS Personal Health Dashboard."
          ],
          "correctAnswer": "AWS Service Health Dashboard."
        },
        {
          "id": 141,
          "question": "Which AWS service or feature can be used to call AWS Services from different programming languages?",
          "options": [
            "AWS Software Development Kit.",
            "AWS Command Line Interface.",
            "AWS CodeDeploy.",
            "AWS Management Console."
          ],
          "correctAnswer": "AWS Software Development Kit."
        },
        {
          "id": 142,
          "question": "Which AWS Service can be used to register a new domain name?",
          "options": [
            "Amazon Personalize.",
            "Amazon Route 53.",
            "AWS KMS.",
            "AWS Config."
          ],
          "correctAnswer": "Amazon Route 53."
        },
        {
          "id": 143,
          "question": "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
          "options": [
            "AWS CloudFormation.",
            "AWS Migration Hub.",
            "AWS IAM.",
            "AWS Elastic Beanstalk.",
            "Amazon Macie."
          ],
          "correctAnswer": [
            "AWS CloudFormation.",
            "AWS Elastic Beanstalk."
          ]
        },
        {
          "id": 144,
          "question": "Which AWS service provides cost-optimization recommendations?",
          "options": [
            "AWS Trusted Advisor.",
            "AWS Pricing Calculator.",
            "Amazon QuickSight.",
            "AWS X-Ray."
          ],
          "correctAnswer": "AWS Trusted Advisor."
        },
        {
          "id": 145,
          "question": "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
          "options": [
            "VPC Peering.",
            "AWS Transit Gateway.",
            "Amazon Connect.",
            "Security Groups."
          ],
          "correctAnswer": "AWS Transit Gateway."
        },
        {
          "id": 146,
          "question": "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
          "options": [
            "Instances can be shut down by AWS at any time with no notification.",
            "Reserved instances require at least a one-year pricing commitment.",
            "There is no additional charge for using dedicated instances.",
            "Reserved instances provide a significant discount compared to on-demand instances.",
            "Reserved instances are best suited for periodic workloads."
          ],
          "correctAnswer": [
            "Reserved instances require at least a one-year pricing commitment.",
            "Reserved instances provide a significant discount compared to on-demand instances."
          ]
        },
        {
          "id": 147,
          "question": "Why does every AWS Region contain multiple Availability Zones?",
          "options": [
            "Multiple Availability Zones allows you to build resilient and highly available architectures.",
            "Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.",
            "Multiple Availability Zones allows for data replication and global reach.",
            "Multiple Availability Zones within a region increases the storage capacity available in that region."
          ],
          "correctAnswer": "Multiple Availability Zones allows you to build resilient and highly available architectures."
        },
        {
          "id": 148,
          "question": "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
          "options": [
            "On-Demand Instances.",
            "Spot Instances.",
            "Reserved Instances - All Upfront.",
            "Reserved Instances - No Upfront."
          ],
          "correctAnswer": "On-Demand Instances."
        },
        {
          "id": 149,
          "question": "Which of the following is a benefit of running an application in multiple Availability Zones?",
          "options": [
            "Allows you to exceed AWS service limits.",
            "Reduces application response time between servers and global users.",
            "Increases available compute capacity.",
            "Increases the availability of your application."
          ],
          "correctAnswer": "Increases the availability of your application."
        },
        {
          "id": 150,
          "question": "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
          "options": [
            "AWS sells the old devices to other hosting providers.",
            "AWS destroys the old devices in accordance with industry-standard practices.",
            "AWS sends the old devices for remanufacturing.",
            "AWS stores the old devices in a secure place."
          ],
          "correctAnswer": "AWS destroys the old devices in accordance with industry-standard practices."
        },
        {
          "id": 151,
          "question": "A developer needs to set up an SSL security certificate for a client's eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)",
          "options": [
            "Amazon Route 53.",
            "AWS ACM.",
            "AWS Directory Service.",
            "AWS Identity & Access Management.",
            "AWS Data Pipeline."
          ],
          "correctAnswer": [
            "AWS ACM.",
            "AWS Identity & Access Management."
          ]
        },
        {
          "id": 152,
          "question": "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
          "options": [
            "Amazon EC2.",
            "Amazon S3.",
            "AWS Lambda.",
            "Amazon EMR.",
            "Amazon EBS."
          ],
          "correctAnswer": [
            "Amazon S3.",
            "AWS Lambda."
          ]
        },
        {
          "id": 153,
          "question": "A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)",
          "options": [
            "Application management.",
            "Capacity management.",
            "Access control.",
            "Operating system maintenance.",
            "Data management."
          ],
          "correctAnswer": [
            "Capacity management.",
            "Operating system maintenance."
          ]
        },
        {
          "id": 154,
          "question": "How do ELBs improve the reliability of your application?",
          "options": [
            "By distributing traffic across multiple S3 buckets.",
            "By replicating data to multiple availability zones.",
            "By creating database Read Replicas.",
            "By ensuring that only healthy targets receive traffic."
          ],
          "correctAnswer": "By ensuring that only healthy targets receive traffic."
        },
        {
          "id": 155,
          "question": "A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?",
          "options": [
            "On-demand instances.",
            "Spot instances.",
            "Dedicated instances.",
            "Reserved instances."
          ],
          "correctAnswer": "Dedicated instances."
        },
        {
          "id": 156,
          "question": "A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?",
          "options": [
            "Snowball.",
            "S3 Transfer Acceleration.",
            "Snowmobile.",
            "Amazon VPC."
          ],
          "correctAnswer": "Snowmobile."
        },
        {
          "id": 157,
          "question": "A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?",
          "options": [
            "Amazon S3 Glacier.",
            "Amazon EFS.",
            "Amazon S3 Standard.",
            "Amazon EBS."
          ],
          "correctAnswer": "Amazon S3 Glacier."
        },
        {
          "id": 158,
          "question": "Which AWS Service is used to manage user permissions?",
          "options": [
            "Security Groups.",
            "Amazon ECS.",
            "AWS IAM.",
            "AWS Support."
          ],
          "correctAnswer": "AWS IAM."
        },
        {
          "id": 159,
          "question": "Which support plan includes AWS Support Concierge Service?",
          "options": [
            "Premium Support.",
            "Business Support.",
            "Enterprise Support.",
            "Standard Support."
          ],
          "correctAnswer": "Enterprise Support."
        },
        {
          "id": 160,
          "question": "A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?",
          "options": [
            "AWS Config.",
            "Amazon CloudWatch.",
            "AWS CloudTrail.",
            "AWS CloudFormation."
          ],
          "correctAnswer": "AWS CloudTrail."
        },
        {
          "id": 161,
          "question": "What are the benefits of using an AWS-managed service? (Choose TWO)",
          "options": [
            "Provides complete control over the virtual infrastructure.",
            "Allows customers to deliver new solutions faster.",
            "Lowers operational complexity.",
            "Eliminates the need to encrypt data.",
            "Allows developers to control all patching related activities."
          ],
          "correctAnswer": [
            "Allows customers to deliver new solutions faster.",
            "Lowers operational complexity."
          ]
        },
        {
          "id": 162,
          "question": "Which of the following are use cases for Amazon S3? (Choose TWO)",
          "options": [
            "Hosting static websites.",
            "Hosting websites that require sustained high CPU utilization.",
            "Cost-effective database and log storage.",
            "A media store for the CloudFront service.",
            "Processing data streams at any scale."
          ],
          "correctAnswer": [
            "Hosting static websites.",
            "A media store for the CloudFront service."
          ]
        },
        {
          "id": 163,
          "question": "What is the AWS' recommendation regarding access keys?",
          "options": [
            "Delete all access keys and use passwords instead.",
            "Only share them with trusted people.",
            "Rotate them regularly.",
            "Save them within your application code."
          ],
          "correctAnswer": "Rotate them regularly."
        },
        {
          "id": 164,
          "question": "What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?",
          "options": [
            "Key Pair.",
            "Access Keys.",
            "SDK.",
            "MFA."
          ],
          "correctAnswer": "MFA."
        },
        {
          "id": 165,
          "question": "What is the benefit of using an API to access AWS Services?",
          "options": [
            "It improves the performance of AWS resources.",
            "It reduces the time needed to provision AWS resources.",
            "It reduces the number of developers necessary.",
            "It allows for programmatic management of AWS resources."
          ],
          "correctAnswer": "It allows for programmatic management of AWS resources."
        },
        {
          "id": 166,
          "question": "A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?",
          "options": [
            "AWS Storage Gateway.",
            "Amazon S3.",
            "Amazon EBS.",
            "Amazon Glacier."
          ],
          "correctAnswer": "Amazon EBS."
        },
        {
          "id": 167,
          "question": "How can AWS customers track and avoid over-spending on underutilized reserved instances?",
          "options": [
            "Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.",
            "Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.",
            "Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.",
            "Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill."
          ],
          "correctAnswer": "Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define."
        },
        {
          "id": 168,
          "question": "What is the AWS service that provides five times the performance of a standard MySQL database?",
          "options": [
            "Amazon Aurora.",
            "Amazon Redshift.",
            "Amazon DynamoDB.",
            "Amazon Neptune."
          ],
          "correctAnswer": "Amazon Aurora."
        },
        {
          "id": 169,
          "question": "What does AWS Service Catalog provide?",
          "options": [
            "It enables customers to quickly find descriptions and use cases for AWS services.",
            "It enables customers to explore the different catalogs of AWS services.",
            "It simplifies organizing and governing commonly deployed IT services.",
            "It allows developers to deploy infrastructure on AWS using familiar programming languages."
          ],
          "correctAnswer": "It simplifies organizing and governing commonly deployed IT services."
        },
        {
          "id": 170,
          "question": "For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)",
          "options": [
            "Protecting credentials.",
            "Logging access activity.",
            "Patching the database software.",
            "Operating system maintenance.",
            "Creating access policies."
          ],
          "correctAnswer": [
            "Patching the database software.",
            "Operating system maintenance."
          ]
        },
        {
          "id": 171,
          "question": "Which of the following AWS Services helps with planning application migration to the AWS Cloud?",
          "options": [
            "AWS Snowball Migration Service.",
            "AWS Application Discovery Service.",
            "AWS DMS.",
            "AWS Migration Hub."
          ],
          "correctAnswer": "AWS Application Discovery Service."
        },
        {
          "id": 172,
          "question": "A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?",
          "options": [
            "Amazon Machine Image.",
            "AWS Cost Explorer.",
            "AWS Cost & Usage Report.",
            "Amazon CloudWatch."
          ],
          "correctAnswer": "AWS Cost & Usage Report."
        },
        {
          "id": 173,
          "question": "Which statement best describes the concept of an AWS region?",
          "options": [
            "An AWS Region is a geographical location with a collection of Edge locations.",
            "An AWS Region is a virtual network dedicated only to a single AWS customer.",
            "An AWS Region is a geographical location with a collection of Availability Zones.",
            "An AWS Region represents the country where the AWS infrastructure exist."
          ],
          "correctAnswer": "An AWS Region is a geographical location with a collection of Availability Zones."
        },
        {
          "id": 174,
          "question": "A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?",
          "options": [
            "SNS logs.",
            "SQS logs.",
            "CloudWatch Logs.",
            "CloudTrail logs."
          ],
          "correctAnswer": "CloudTrail logs."
        },
        {
          "id": 175,
          "question": "Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)",
          "options": [
            "Availability Zones.",
            "Data sovereignty.",
            "The number of reads and writes per second.",
            "The nature of the queries.",
            "Software bugs."
          ],
          "correctAnswer": [
            "The number of reads and writes per second.",
            "The nature of the queries."
          ]
        },
        {
          "id": 176,
          "question": "What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)",
          "options": [
            "Quickly identify resources that belong to a specific project.",
            "Quickly identify software solutions on AWS.",
            "Track API calls in your AWS account.",
            "Quickly identify deleted resources and their metadata.",
            "Track AWS spending across multiple resources."
          ],
          "correctAnswer": [
            "Quickly identify resources that belong to a specific project.",
            "Track AWS spending across multiple resources."
          ]
        },
        {
          "id": 177,
          "question": "What are AWS shared controls?",
          "options": [
            "Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.",
            "Controls that a customer inherits from AWS.",
            "Controls that apply to both the infrastructure layer and customer layers.",
            "Controls that the customer and AWS collaborate together upon to secure the infrastructure."
          ],
          "correctAnswer": "Controls that apply to both the infrastructure layer and customer layers."
        },
        {
          "id": 178,
          "question": "Which design principles relate to performance efficiency in AWS? (Choose TWO)",
          "options": [
            "Build multi-region architectures to better serve global customers.",
            "Apply security at all layers.",
            "Implement strong Identity and Access controls.",
            "Use serverless architectures.",
            "Enable audit logging."
          ],
          "correctAnswer": [
            "Build multi-region architectures to better serve global customers.",
            "Use serverless architectures."
          ]
        },
        {
          "id": 179,
          "question": "Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)",
          "options": [
            "Protecting sensitive data.",
            "Patching of the underlying infrastructure.",
            "Setup and operation of managed databases.",
            "Maintaining consistent hardware components.",
            "Installing and configuring third-party software."
          ],
          "correctAnswer": [
            "Protecting sensitive data.",
            "Installing and configuring third-party software."
          ]
        },
        {
          "id": 180,
          "question": "Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)",
          "options": [
            "Free commercial software licenses.",
            "Free technical support.",
            "Elastic resources.",
            "On-site visits for auditing.",
            "Cost Savings."
          ],
          "correctAnswer": [
            "Elastic resources.",
            "Cost Savings."
          ]
        },
        {
          "id": 181,
          "question": "Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)",
          "options": [
            "Amazon Inspector.",
            "AWS Virtual Private Gateway.",
            "AWS Batch.",
            "Amazon ECS.",
            "AWS Config."
          ],
          "correctAnswer": [
            "Amazon Inspector.",
            "AWS Config."
          ]
        },
        {
          "id": 182,
          "question": "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?",
          "options": [
            "Amazon EC2 is considered a Serverless Web Service.",
            "Amazon EC2 eliminates the need to invest in hardware upfront.",
            "Amazon EC2 can launch as many or as few virtual servers as needed.",
            "Amazon EC2 offers scalable computing."
          ],
          "correctAnswer": "Amazon EC2 is considered a Serverless Web Service."
        },
        {
          "id": 183,
          "question": "What is the AWS Compute service that executes code only when triggered by events?",
          "options": [
            "AWS Lambda.",
            "Amazon CloudWatch.",
            "AWS Transit Gateway.",
            "Amazon EC2."
          ],
          "correctAnswer": "AWS Lambda."
        },
        {
          "id": 184,
          "question": "Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers' requirements. What is the name of these virtual servers in AWS?",
          "options": [
            "Amazon EBS Snapshots.",
            "Amazon VPC.",
            "AWS Managed Servers.",
            "Amazon EC2 Instances."
          ],
          "correctAnswer": "Amazon EC2 Instances."
        },

  {
    "id": 185,
    "question": "What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?",
    "options": [
      "AWS Secrets Manager.",
      "AWS WAF.",
      "AWS CAF.",
      "Amazon EFS."
    ],
    "correctAnswer": "AWS CAF."
  },
  {
    "id": 186,
    "question": "TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?",
    "options": [
      "AWS Cost Explorer.",
      "AWS TCO Calculator.",
      "AWS Budgets.",
      "AWS Pricing Calculator."
    ],
    "correctAnswer": "AWS TCO Calculator."
  },
  {
    "id": 187,
    "question": "Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?",
    "options": [
      "Using AWS Trusted Advisor to find underutilized resources.",
      "Using AWS CloudTrail to record user activities.",
      "Using AWS CloudFormation to manage infrastructure as code.",
      "Deploying an application in multiple Availability Zones."
    ],
    "correctAnswer": "Using AWS CloudFormation to manage infrastructure as code."
  },
  {
    "id": 188,
    "question": "Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)",
    "options": [
      "AWS allows them to pay later when their business succeed.",
      "AWS can build complete data centers faster than any other Cloud provider.",
      "Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.",
      "AWS removes the need to invest in operational expenditure.",
      "Using AWS allows companies to replace large capital expenditure with low variable costs."
    ],
    "correctAnswer": [
      "Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.",
      "Using AWS allows companies to replace large capital expenditure with low variable costs."
    ]
  },
  {
    "id": 189,
    "question": "What are the benefits of using DynamoDB? (Choose TWO)",
    "options": [
      "Automatically scales to meet required throughput capacity.",
      "Provides resizable instances to match the current demand.",
      "Supports both relational and non-relational data models.",
      "Offers extremely low (single-digit millisecond) latency.",
      "Supports the most popular NoSQL database engines such as CouchDB and MongoDB."
    ],
    "correctAnswer": [
      "Automatically scales to meet required throughput capacity.",
      "Offers extremely low (single-digit millisecond) latency."
    ]
  },
  {
    "id": 190,
    "question": "Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)",
    "options": [
      "Versioning.",
      "Deduplication.",
      "Permissions.",
      "Decryption.",
      "Conversion."
    ],
    "correctAnswer": [
      "Versioning.",
      "Permissions."
    ]
  },
  {
    "id": 191,
    "question": "As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)",
    "options": [
      "AWS Partners.",
      "AWS Artifact.",
      "AWS Professional Services.",
      "Amazon Athena.",
      "Amazon PinPoint."
    ],
    "correctAnswer": [
      "AWS Partners.",
      "AWS Professional Services."
    ]
  },
  {
    "id": 192,
    "question": "AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?",
    "options": [
      "Deleting unused EBS volumes after terminating an EC2instance.",
      "Deleting unused AutoScaling launch configuration.",
      "Deleting unused Elastic Load Balancers.",
      "Releasing unused Elastic IPs after terminating an EC2instance."
    ],
    "correctAnswer": "Deleting unused AutoScaling launch configuration."
  },
  {
    "id": 193,
    "question": "What is the AWS tool that can help a company visualize their AWS spending in the last few months?",
    "options": [
      "AWS Cost Explorer.",
      "AWS Pricing Calculator.",
      "AWS Budgets.",
      "AWS Consolidated Billing."
    ],
    "correctAnswer": "AWS Cost Explorer."
  },
  {
    "id": 194,
    "question": "When running a workload in AWS, the customer is NOT responsible for: (Select TWO)",
    "options": [
      "Running penetration tests.",
      "Reserving capacity.",
      "Data center operations.",
      "Auditing and regulatory compliance.",
      "Infrastructure security."
    ],
    "correctAnswer": [
      "Data center operations.",
      "Infrastructure security."
    ]
  },
  {
    "id": 195,
    "question": "Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?",
    "options": [
      "Amazon Simple Email Service (Amazon SES).",
      "Amazon Simple Storage Service (Amazon S3).",
      "Amazon Simple Notification Service (Amazon SNS).",
      "Amazon Simple Queue Service (Amazon SQS)."
    ],
    "correctAnswer": "Amazon Simple Notification Service (Amazon SNS)."
  },
  {
    "id": 196,
    "question": "Which of the following allows you to create new RDS instances? (Choose TWO)",
    "options": [
      "AWS CodeDeploy.",
      "AWS Quick Starts.",
      "AWS CloudFormation.",
      "AWS DMS.",
      "AWS Management Console."
    ],
    "correctAnswer": [
      "AWS CloudFormation.",
      "AWS Management Console."
    ]
  },
  {
    "id": 197,
    "question": "One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?",
    "options": [
      "Low monthly instance maintenance costs.",
      "Low-cost instance tagging.",
      "Per-second instance billing.",
      "Low instance start-up fees."
    ],
    "correctAnswer": "Per-second instance billing."
  },
  {
    "id": 198,
    "question": "Which AWS Group assists customers in achieving their desired business outcomes?",
    "options": [
      "AWS Security Team.",
      "AWS Professional Services.",
      "AWS Trusted Advisor.",
      "AWS Concierge Support Team."
    ],
    "correctAnswer": "AWS Professional Services."
  },
  {
    "id": 199,
    "question": "Which AWS service or feature is used to manage the keys used to encrypt customer data?",
    "options": [
      "AWS KMS.",
      "AWS Service Control Policies (SCPs).",
      "Multi-Factor Authentication (MFA).",
      "Amazon Macie."
    ],
    "correctAnswer": "AWS KMS."
  },
  {
    "id": 200,
    "question": "Which AWS Service allows customers to download AWS SOC & PCI reports?",
    "options": [
      "AWS Well-Architected Tool.",
      "AWS Artifact.",
      "AWS Glue.",
      "Amazon Chime."
    ],
    "correctAnswer": "AWS Artifact."
  },
  {
    "id": 201,
    "question": "A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?",
    "options": [
      "Least Privilege.",
      "Pilot Light.",
      "Fault Tolerance.",
      "Multi-threading."
    ],
    "correctAnswer": "Fault Tolerance."
  },
  {
    "id": 202,
    "question": "You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?",
    "options": [
      "All up-front reservation.",
      "All reserved instance payment options provide the same discount level.",
      "Partial up-front reservation.",
      "No up-front reservation."
    ],
    "correctAnswer": "All up-front reservation."
  },
  {
    "id": 203,
    "question": "What features does AWS offer to help protect your data in the Cloud? (Choose TWO)",
    "options": [
      "Access control.",
      "Physical MFA devices.",
      "Data encryption.",
      "Unlimited storage.",
      "Load balancing."
    ],
    "correctAnswer": [
      "Access control.",
      "Data encryption."
    ]
  },
  {
    "id": 204,
    "question": "An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?",
    "options": [
      "3 hours for the Linux instance and 5 hours for the CentOS instance.",
      "2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.",
      "2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.",
      "3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance."
    ],
    "correctAnswer": "2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance."
  },
  {
    "id": 205,
    "question": "What is the AWS Support feature that allows customers to manage support cases programmatically?",
    "options": [
      "AWS Trusted Advisor.",
      "AWS Operations Support.",
      "AWS Support API.",
      "AWS Personal Health Dashboard."
    ],
    "correctAnswer": "AWS Support API."
  },
  {
    "id": 206,
    "question": "Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)",
    "options": [
      "AWS CLI.",
      "AWS Security Groups.",
      "AWS SDKs.",
      "AWS Network Access Control Lists.",
      "AWS CodeCommit."
    ],
    "correctAnswer": [
      "AWS CLI.",
      "AWS SDKs."
    ]
  },
  {
    "id": 207,
    "question": "Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)",
    "options": [
      "AWS Resource Groups.",
      "IAM Policies.",
      "IAM Roles.",
      "IAM Users.",
      "AWS Organizations."
    ],
    "correctAnswer": [
      "IAM Roles.",
      "IAM Users."
    ]
  },
  {
    "id": 208,
    "question": "Which of the following Amazon RDS features facilitates offloading of database read activity?",
    "options": [
      "Database Snapshots.",
      "Multi-AZ Deployments.",
      "Automated Backups.",
      "Read Replicas."
    ],
    "correctAnswer": "Read Replicas."
  },
  {
    "id": 209,
    "question": "How does AWS notify customers about security and privacy events pertaining to AWS services?",
    "options": [
      "Using the AWS ACM service.",
      "Using Security Bulletins.",
      "Using the AWS Management Console.",
      "Using Compliance Resources."
    ],
    "correctAnswer": "Using Security Bulletins."
  },
  {
    "id": 210,
    "question": "Which IAM entity can best be used to grant temporary access to your AWS resources?",
    "options": [
      "IAM Users.",
      "Key Pair.",
      "IAM Roles.",
      "IAM Groups."
    ],
    "correctAnswer": "IAM Roles."
  },
  {
    "id": 211,
    "question": "A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?",
    "options": [
      "AWS Global Accelerator.",
      "AWS Application Load Balancer (ALB).",
      "Amazon CloudFront.",
      "Transit VPC."
    ],
    "correctAnswer": "AWS Application Load Balancer (ALB)."
  },
  {
    "id": 212,
    "question": "Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?",
    "options": [
      "Use Software test automation tools.",
      "Use AWS CodeDeploy to build and automate your AWS environment.",
      "Use code to provision and operate your AWS infrastructure.",
      "Migrate all of your applications to a dedicated host."
    ],
    "correctAnswer": "Use code to provision and operate your AWS infrastructure."
  },
  {
    "id": 213,
    "question": "A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?",
    "options": [
      "Restrict any API call made through SDKs or CLI.",
      "Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.",
      "Require Multi-Factor Authentication (MFA) for all IAM User access.",
      "Set up two login passwords."
    ],
    "correctAnswer": "Require Multi-Factor Authentication (MFA) for all IAM User access."
  },
  {
    "id": 214,
    "question": "Which AWS Service offers volume discounts based on usage?",
    "options": [
      "Amazon VPC.",
      "Amazon S3.",
      "Amazon Lightsail.",
      "AWS Cost Explorer."
    ],
    "correctAnswer": "Amazon S3."
  },
  {
    "id": 215,
    "question": "Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)",
    "options": [
      "The AWS Region's security level.",
      "Data sovereignty.",
      "Cost.",
      "The planned number of VPCs.",
      "Geographic proximity to the company's location."
    ],
    "correctAnswer": [
      "Data sovereignty.",
      "Cost."
    ]
  },
  {
    "id": 216,
    "question": "You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?",
    "options": [
      "Amazon EFS.",
      "Amazon Neptune.",
      "Amazon ElastiCache.",
      "DAX."
    ],
    "correctAnswer": "Amazon ElastiCache."
  },
  {
    "id": 217,
    "question": "What are the advantages of using Auto Scaling Groups for EC2 instances?",
    "options": [
      "Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.",
      "Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.",
      "Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.",
      "Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance."
    ],
    "correctAnswer": "Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance."
  },
  {
    "id": 218,
    "question": "The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?",
    "options": [
      "AWS helps customers invest more in capital expenditures.",
      "AWS automates all infrastructure operations, so customers save more on human resources costs.",
      "AWS continues to lower the cost of cloud computing for its customers.",
      "AWS secures AWS resources at no additional charge."
    ],
    "correctAnswer": "AWS continues to lower the cost of cloud computing for its customers."
  },
  {
    "id": 219,
    "question": "Which of the following are examples of the customer's responsibility to implement 'security IN the cloud'? (Choose TWO)",
    "options": [
      "Building a schema for an application.",
      "Replacing physical hardware.",
      "Creating a new hypervisor.",
      "Patch management of the underlying infrastructure.",
      "File system encryption."
    ],
    "correctAnswer": [
      "Patch management of the underlying infrastructure.",
      "File system encryption."
    ]
  },
  {
    "id": 220,
    "question": "Which of the following is a type of MFA device that customers can use to protect their AWS resources?",
    "options": [
      "AWS CloudHSM.",
      "U2F Security Key.",
      "AWS Access Keys.",
      "AWS Key Pair."
    ],
    "correctAnswer": "U2F Security Key."
  },
  {
    "id": 221,
    "question": "A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?",
    "options": [
      "Amazon SNS.",
      "AWS Elastic Beanstalk.",
      "AWS Systems Manager.",
      "AWS Trusted Advisor."
    ],
    "correctAnswer": "AWS Elastic Beanstalk."
  },
  {
    "id": 222,
    "question": "Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)",
    "options": [
      "The amount of time the instances will be running.",
      "Number of security groups.",
      "Allocated Elastic IP Addresses.",
      "Number of Hosted Zones.",
      "Number of instances."
    ],
    "correctAnswer": [
      "Number of security groups.",
      "Number of Hosted Zones."
    ]
  },
  {
    "id": 223,
    "question": "Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?",
    "options": [
      "AWS Data Pipeline.",
      "AWS Storage Gateway.",
      "Amazon Aurora.",
      "Amazon EFS."
    ],
    "correctAnswer": "AWS Storage Gateway."
  },
  {
    "id": 224,
    "question": "A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?",
    "options": [
      "Amazon Simple Storage Service.",
      "Amazon Elastic Block Store.",
      "Amazon Elastic Container Service.",
      "AWS Storage Gateway."
    ],
    "correctAnswer": "Amazon Simple Storage Service."
  },
  {
    "id": 225,
    "question": "You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?",
    "options": [
      "EBS and S3 are accessible only to the root account owner.",
      "The systems administrator must contact AWS Support first to activate his new IAM account.",
      "There is not enough space in S3 to store the snapshots.",
      "There is a non-explicit deny to all new users."
    ],
    "correctAnswer": "There is a non-explicit deny to all new users."
  },
  {
    "id": 226,
    "question": "An external auditor is requesting a log of all accesses to the AWS resources in the company's account. Which of the following services will provide the auditor with the requested information?",
    "options": [
      "AWS CloudTrail.",
      "Amazon CloudFront.",
      "AWS CloudFormation.",
      "Amazon CloudWatch."
    ],
    "correctAnswer": "AWS CloudTrail."
  },
  {
    "id": 227,
    "question": "Which of the below options is true of Amazon Cloud Directory?",
    "options": [
      "Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.",
      "Amazon Cloud Directory enables the analysis of video and data streams in real time.",
      "Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.",
      "Amazon Cloud Directory allows for registration and management of domain names."
    ],
    "correctAnswer": "Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions."
  },
  {
    "id": 228,
    "question": "A user has opened a 'Production System Down' support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?",
    "options": [
      "12 hours.",
      "15 minutes.",
      "24 hours.",
      "One hour."
    ],
    "correctAnswer": "One hour."
  },
  {
    "id": 229,
    "question": "Which of the below options is a best practice for making your application on AWS highly available?",
    "options": [
      "Deploy the application to at least two Availability Zones.",
      "Use Elastic Load Balancing (ELB) across multiple AWS Regions.",
      "Deploy the application code on at least two servers in the same Availability Zone.",
      "Rewrite the application code to handle all incoming requests."
    ],
    "correctAnswer": "Deploy the application to at least two Availability Zones."
  },
  {
    "id": 230,
    "question": "Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)",
    "options": [
      "Labor and IT costs.",
      "Cooling and power consumption.",
      "Amazon EBS computing power.",
      "Software architecture.",
      "Software compatibility."
    ],
    "correctAnswer": [
      "Labor and IT costs.",
      "Cooling and power consumption."
    ]
  },
  {
    "id": 231,
    "question": "Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?",
    "options": [
      "AWS Basic Support.",
      "AWS Developer Support.",
      "AWS Business Support.",
      "AWS Enterprise Support."
    ],
    "correctAnswer": "AWS Enterprise Support."
  },
  {
    "id": 232,
    "question": "Which of the following AWS offerings are serverless services? (Choose TWO)",
    "options": [
      "Amazon EC2.",
      "AWS Lambda.",
      "Amazon DynamoDB.",
      "Amazon EMR.",
      "Amazon RDS."
    ],
    "correctAnswer": [
      "AWS Lambda.",
      "Amazon DynamoDB."
    ]
  },
  {
    "id": 233,
    "question": "Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?",
    "options": [
      "Amazon GuardDuty.",
      "AWS ACM.",
      "Amazon Detective.",
      "AWS WAF."
    ],
    "correctAnswer": "AWS ACM."
  },
  {
    "id": 234,
    "question": "Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?",
    "options": [
      "AWS Config.",
      "AWS OpsWorks.",
      "AutoScaling.",
      "AWS CloudFormation."
    ],
    "correctAnswer": "AWS OpsWorks."
  },
  {
    "id": 235,
    "question": "A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?",
    "options": [
      "Amazon EBS.",
      "Amazon EFS.",
      "Amazon S3.",
      "Amazon Instance Store."
    ],
    "correctAnswer": "Amazon S3."
  },
  {
    "id": 236,
    "question": "Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?",
    "options": [
      "AWS WAF.",
      "Amazon CloudWatch.",
      "AWS Cloud9.",
      "AWS CloudTrail."
    ],
    "correctAnswer": "AWS WAF."
  },
  {
    "id": 237,
    "question": "A company is migrating a web application to AWS. The application's compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?",
    "options": [
      "On-demand Instances.",
      "Dedicated Hosts.",
      "Spot Instances.",
      "Reserved Instances."
    ],
    "correctAnswer": "Reserved Instances."
  },
  {
    "id": 238,
    "question": "A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?",
    "options": [
      "Create an IAM role and attach a policy with Amazon DynamoDB access permissions.",
      "Create an IAM role and attach a policy with Administrator access permissions.",
      "Create an IAM user and attach a policy with Amazon DynamoDB access permissions.",
      "Create an IAM user and attach a policy with Administrator access permissions."
    ],
    "correctAnswer": "Create an IAM user and attach a policy with Amazon DynamoDB access permissions."
  },
  {
    "id": 239,
    "question": "When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?",
    "options": [
      "Generate new IAM access keys every time you delegate permissions.",
      "Store the required AWS credentials directly within the application code.",
      "Use temporary security credentials (IAM roles) instead of long-term access keys.",
      "Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources."
    ],
    "correctAnswer": "Use temporary security credentials (IAM roles) instead of long-term access keys."
  },
  {
    "id": 240,
    "question": "Which of the following will help AWS customers save on costs when migrating their workloads to AWS?",
    "options": [
      "Use servers instead of managed services.",
      "Use existing third-party software licenses on AWS.",
      "Migrate production workloads to AWS edge locations instead of AWS Regions.",
      "Use AWS Outposts to run all workloads in a cost-optimized environment."
    ],
    "correctAnswer": "Use existing third-party software licenses on AWS."
  },
  {
    "id": 241,
    "question": "An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?",
    "options": [
      "Amazon SQS.",
      "Virtual Private Gateway.",
      "AWS Artifact.",
      "Amazon CloudFront."
    ],
    "correctAnswer": "Amazon SQS."
  },
  {
    "id": 242,
    "question": "Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)",
    "options": [
      "Amazon Connect.",
      "AWS CLI.",
      "AWS Identity and Access Management (IAM).",
      "Amazon SNS.",
      "Amazon Virtual Private Cloud."
    ],
    "correctAnswer": [
      "AWS CLI.",
      "AWS Identity and Access Management (IAM)."
    ]
  },
  {
    "id": 243,
    "question": "According to best practices, which of the below options is best suited for processing a large number of binary files?",
    "options": [
      "Vertically scaling EC2 instances.",
      "Running RDS instances in parallel.",
      "Vertically scaling RDS instances.",
      "Running EC2 instances in parallel."
    ],
    "correctAnswer": "Running EC2 instances in parallel."
  },
  {
    "id": 244,
    "question": "A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?",
    "options": [
      "AWS Cost Explorer.",
      "AWS Pricing Calculator.",
      "AWS Budgets.",
      "AWS Cost & Usage Report."
    ],
    "correctAnswer": "AWS Pricing Calculator."
  },
  {
    "id": 245,
    "question": "What should you do if you see resources, which you don't remember creating, in the AWS Management Console? (Choose TWO)",
    "options": [
      "Stop all running services and open an investigation.",
      "Give your root account password to AWS Support so that they can assistin troubleshooting and securing the account.",
      "Check the AWS CloudTrail logs and delete all IAM users that have access to your resources.",
      "Open an investigation and delete any potentially compromised IAM users.",
      "Change your AWS root account password and the passwords of any IAM users."
    ],
    "correctAnswer": [
      "Open an investigation and delete any potentially compromised IAM users.",
      "Change your AWS root account password and the passwords of any IAM users."
    ]
  },
  {
    "id": 246,
    "question": "A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?",
    "options": [
      "Elastic coupling.",
      "Loosely coupling.",
      "Scalable coupling.",
      "Tightly coupling."
    ],
    "correctAnswer": "Loosely coupling."
  },
  {
    "id": 247,
    "question": "Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?",
    "options": [
      "Amazon Elastic File System.",
      "Amazon Simple Storage Service.",
      "Amazon Elastic Block Store.",
      "AWS Storage Gateway."
    ],
    "correctAnswer": "Amazon Elastic File System."
  },
  {
    "id": 248,
    "question": "Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?",
    "options": [
      "Create private connection to your data center.",
      "Achieve global high availability.",
      "Automate the process of provisioning new compute resources.",
      "Make synchronous replication of your data possible."
    ],
    "correctAnswer": "Make synchronous replication of your data possible."
  },
  {
    "id": 249,
    "question": "Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)",
    "options": [
      "Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats.",
      "Lambda natively supports a number of programming languages such as Node.js, Python, and Java.",
      "Lambda is AWS' proprietary programming language for microservices.",
      "Lambda doesn't support programming languages; it is a serverless compute service.",
      "Lambda can support any programming language using an API."
    ],
    "correctAnswer": [
      "Lambda natively supports a number of programming languages such as Node.js, Python, and Java.",
      "Lambda can support any programming language using an API."
    ]
  },
  {
    "id": 250,
    "question": "What are the capabilities of AWS X-Ray? (Choose TWO)",
    "options": [
      "Automatically decouples application components.",
      "Facilitates tracking of user requests to identify application issues.",
      "Helps improve application performance.",
      "Deploys applications to Amazon EC2 instances.",
      "Deploys applications to on-premises servers."
    ],
    "correctAnswer": [
      "Facilitates tracking of user requests to identify application issues.",
      "Helps improve application performance."
    ]
  }
];

// Function to get random questions
function getRandomQuestions(count = 60) {
    // Get total number of available questions
    const totalAvailableQuestions = questions.length;
    console.log(`Total questions in pool: ${totalAvailableQuestions}`);
    
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
    const selectedQuestions = indices.slice(0, count).map(index => questions[index]);
    console.log(`Selected ${selectedQuestions.length} questions for the exam`);
    return selectedQuestions;
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
