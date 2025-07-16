import { GitHubIcon, LinkedInIcon } from '@/components/icons'

export const RESUME_DATA = {
	name: 'Jorge Pezuela',
	initials: 'JP',
	location: 'Loeches, Madrid',
	about: 
	    'DevOps & Cloud Engineer passionate about automation, scalability, and building reliable infrastructure that empowers development teams.',
    summary: `I specialize in DevOps, Cloud Computing and Infrastructure Automation with hands-on expertise in tools like Kubernetes, Terraform, Docker, ArgoCD and CI/CD pipelines. I design and implement cloud-native architectures that are scalable, secure and resilient with a strong focus on efficiency and reliability.`,
	avatar: '/assets/avatar.jpg',
	personalWebsiteUrl: {
		name: 'Portfolio',
		url: 'https://jorgepezuela.site'
	},
	contact: {
		link: {
			name: 'Other Links',
			url: 'https://link.jorgepezuela.site'
		},
		email: {
			name: 'Email',
			at: 'jorge.pezuela@hotmail.com'
		},
		tel: {
			name: 'Phone',
			phoneNumber: '+34616124637'
		},
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/jorgepezuela',
				icon: GitHubIcon
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/jorge-pezuela-gonzalez',
				icon: LinkedInIcon
			}
		]
	},
	education: [
		{
		  school: 'IES Valle Inclán',
		  degree: "Higher National Diploma in Computer/Information Technology Administration and Management",
		  start: 'Sep, 2013',
		  end: 'Jun, 2015',
		  description: [
			'Built a strong foundation in core engineering/computing principles.',
			'Explored interdisciplinary interests that led to a growing passion for automation and cloud infrastructure.',
		  ]
		}
	],
	certifications: [
		{
			title: 'Microsoft Certified: Azure Fundamentals',
			techStack: ['Azure'],
			description: 'Fundamentals of Microsoft Azure'
		},
		{
			title: 'AWS Cloud Practitioner (CLF-C02)',
			techStack: ['AWS'],
			description: 'Fundamentals of AWS Cloud'
		},
		{
			title: 'CKA Certification Course - Certified Kubernetes Administrator',
			techStack: ['Kubernetes'],
			description: 'Certified Kubernetes Administrator (CKA) demonstrating expertise in Kubernetes operations'
		},
		{
			title: 'DevSecOps - Kubernetes DevOps & Security',
			techStack: ['Kubernetes', 'DevOps'],
			description: 'DevSecOps - Kubernetes DevOps & Security demonstrating expertise in Kubernetes application development'
		},
		{
			title: 'Red Hat Certified System Administrator(RHCSA)',
			techStack: ['Linux'],
			description: 'Red Hat Certified System Administrator(RHCSA) demonstrating expertise in system administration'
		},
		{
			title: 'Terraform Associate Certification: HashiCorp Certified',
			techStack: ['Terraform'],
			description: 'Terraform Associate Certification: HashiCorp Certified demonstrating expertise in Terraform.'
		},
		{
			title: 'PCAP - Python Certification Course',
			techStack: ['Python'],
			description: 'PCAP - Python Certification Course demonstrating expertise in Python.'
		},
		{
			title: 'Jenkins',
			techStack: ['Jenkins'],
			description: 'Demonstrating expertise in Jenkins.'
		},
		{
			title: 'Kustomize',
			techStack: ['Kustomize', 'Kubernetes'],
			description: 'Demonstrating expertise in Kustomize.'
		}
	],
	work: [
		{
		  company: 'Sogeti',
		  link: 'https://www.sogeti.es',
		  badges: ['Remote'],
		  jobs: [
			{
			  title: 'DevOps Engineer',
			  start: 'Feb, 2022',
			  end: 'Present',
			  description: [
				'AWS/Azure Cloud design and administration focus on microservices architecture based on Kubernetes.',
				'Implemented CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps to accelerate software delivery.',
				'Managed Kubernetes clusters and containerized applications using Docker, Helm charts and Kustomize.',
				'Implemented GitOps practices through ArgoCD for continuos delivery.',
				'Automated infrastructure provisioning using Terraform and Ansible across hybrid cloud environments.',
				'Monitored and optimized system performance with Prometheus, Grafana, and ELK stack.',
				'Collaborated with cross-functional teams to enhance deployment workflows and incident response.'
			  ]
			}
		  ]
		},
		{
		  company: 'Knowmad Mood',
		  link: 'https://www.knowmadmood.com/es',
		  badges: ['Remote'],
		  jobs: [
			{
			  title: 'Cloud Engineer',
			  start: 'Sep, 2020',
			  end: 'Jan, 2022',
			  description: [
				'Azure Cloud global administration.',
				'Implemented Azure DevOps pipelines for continuous integration and delivery.',
				'Azure Service Fabric administration.',
				'Tasks automation using Powershell and Bash scripting.',
				'Worked closely with development teams to improve deployment reliability and rollback mechanisms.'
			  ]
			}
		  ]
		},
		{
		  company: 'Marktel',
		  link: 'https://www.marktel.es',
		  badges: ['In-Office'],
		  jobs: [
			{
			  title: 'System Administrator',
			  start: 'Nov, 2015',
			  end: 'Jan, 2020',
			  description: [
				'Linux/Windows onpremise servers administration.',
				'Cisco Networking configuration and maintenance (FW, switches, routers, DNS ).',
				'Technical Support.'
			  ]
			}
		  ]
		}
	],
	problems: [
		{
			title: 'Azure API Manager Performance Optimization',
			problem: [
				"The Azure API Manager was saturated, causing microservices to experience slowness during peak loads.",
				"The challenge was to maintain consistent performance while managing API traffic efficiently."
			],
			solution: [
				"Designed and implemented an automated scaling solution for Azure API Manager.",
				"Created a custom script that monitored third-party endpoint conditions to trigger scaling events.",
				"Implemented a dynamic scaling strategy that adjusted APIM units based on real-time traffic conditions.",
				"The solution improved API response times and reduced latency during peak loads.",
			]
		},
		{
			title: 'CI/CD Pipeline Performance Optimization',
			problem: [
				"A large enterprise's CI/CD pipelines were experiencing significant delays, with build times exceeding 45 minutes.",
				"The pipelines utilized shared resources, leading to resource contention and inconsistent build times.",
				"When a modification needed to be done on all (team) pipelines, it had to be done manually on each pipeline."
			],
			solution: [
				"Redesigned the pipeline architecture to use dedicated build agents for each team running on Kubernetes with resource isolation.",
				"Unify all pipelines in a architecture based on templates to optimize its management, allowing to update all pipelines at once.",
				"The optimized pipelines reduced average build times by 70% and improved reliability.",
			]
		},
		{
			title: 'Disaster Recovery for Critical Enterprise Applications',
			problem: [
				"A financial institution needed to ensure business continuity for their mission-critical applications.",
				"The existing disaster recovery plan was manual and time-consuming, with high risk of human error.",
				"The recovery process needed to be automated while maintaining data consistency and regulatory compliance."
			],
			solution: [
				"Developed an automated disaster recovery solution using Terraform.",
				"Implemented cross-region replication for critical databases and stateful services.",
				"Created automated testing procedures to validate recovery procedures.",
				"The solution reduced recovery time from hours to minutes and improved compliance with regulatory requirements.",
			]
		},
		{
			title: 'Azure App Services Migration to Kubernetes',
			problem: [
				"Needed to migrate 300+ Azure App Services to Kubernetes microservices.",
				"Container images were initially hosted on DockerHub and needed to be moved to Azure Container Registry (ACR).",
				"The challenge was to implement a self-service deployment process for developers while maintaining security and consistency."
			],
			solution: [
				"Successfully migrated 300+ Azure App Services to Kubernetes microservices.",
				"Implemented container image migration from DockerHub to Azure Container Registry.",
				"Designed and implemented a GitOps architecture using ArgoCD with Kustomize for configuration management.",
				"Created automated deployment pipeline that enables developers to:",
				"- Apply code changes",
				"- Build and deploy microservices automatically through ArgoCD",
				"- Eliminate DevOps team intervention for routine deployments",
				"The solution streamlined the deployment process and improved developer productivity.",
			]
		}
	],
	skills: [
		'AWS',
		'Azure',
		'ArgoCD',
		'Kubernetes',
		'Docker',
		'Terraform',
		'Linux',
		'CI/CD',
		'GitHub Actions',
		'Azure DevOps',
		'GitLab',
		'Prometheus',
		'Grafana',
		'Bash',
		'Python',
		'Nginx',
		'Networking',
		'Disaster Recovery',
		'High Availability',
	],	  
	projects: [
		{
			title: 'Real-World DevOps Projects',
			techStack: ['DevOps', 'Projects'],
			description: 'Real-world DevOps projects.',
			link: {
			  label: 'github.com/jorgepezuela/devops-projects',
			  href: 'https://github.com/jorgepezuela/devops-projects'
			}
		},  
		{
			title: 'Kubernetes Azure DevOps Agents',
			techStack: ['Kubernetes', 'Azure', 'DevOps'],
			description: 'Azure DevOps agents examples on AKS for Backend, Frontend, Data, VIP and SRE teams.',
			link: {
				label: 'github.com/jorgepezuela/k8s-azure-devops-agents',
				href: 'https://github.com/jorgepezuela/k8s-azure-devops-agents'
		  }
		},
		{
			title: 'Provisioning EKS on AWS with Terraform',
			techStack: ['AWS', 'EKS', 'Terraform'],
			description: 'Provision Amazon EKS Cluster on AWS using Terraform.',
			link: {
				label: 'github.com/jorgepezuela/terraform-on-eks',
				href: 'https://github.com/jorgepezuela/terraform-on-eks'
		}
		},  
		{
			title: 'AWS EC2 Terraform',
			techStack: ['Terraform', 'AWS'],
			description: 'Terraform On AWS for EC2, VPC, ASG, ALB, CLB, NLB, CloudWatch, SNS, S3, CodePipeline, ACM, Route53.',
			link: {
				label: 'github.com/jorgepezuela/terraform-on-aws-ec2',
				href: 'https://github.com/jorgepezuela/terraform-on-aws-ec2'
		  }
		},
		{
			title: 'AWS EKS DevOps',
			techStack: ['Terraform', 'AWS'],
			description: 'AWS EKS DevOps Implementation using AWS CodePipeline or AWS Developer Tools.',
			link: {
				label: 'github.com/jorgepezuela/aws-eks-devops',
				href: 'https://github.com/jorgepezuela/aws-eks-devops'
		  }
		},
		{
			title: 'Docker Projects',
			techStack: ['Docker'],
			description: 'Docker Practical Demos for DevOps.',
			link: {
			  label: 'github.com/jorgepezuela/docker',
			  href: 'https://github.com/jorgepezuela/docker'
			}
		  },  
		{
			title: 'DevOps Tools Collection',
			techStack: ['DevOps'],
			description: 'Collection of essential DevOps tools for development, deployment, monitoring, security, and automation.',
			link: {
				label: 'github.com/jorgepezuela/devops-tools',
				href: 'https://github.com/jorgepezuela/devops-tools'
		  }
		},
		{
			title: 'DevOps Setup & Installation Guides',
			techStack: ['DevOps'],
			description: 'Guides for installing and setting up essential DevOps and DevSecOps tools.',
			link: {
				label: 'github.com/jorgepezuela/devops-setup-installations',
				href: 'https://github.com/jorgepezuela/devops-setup-installations'
		  }
		},
		{
			title: 'DevOps Tool Installer Scripts',
			techStack: ['Automation'],
			description: 'Automated installation/uninstallation scripts for essential DevOps tools on Linux and Windows.',
			link: {
				label: 'github.com/jorgepezuela/devops-tool-installer',
				href: 'https://github.com/jorgepezuela/devops-tool-installer'
		  }
		},
		{
			title: 'DevOps Cheatsheet',
			techStack: ['DevOps'],
			description: 'Quick-reference DevOps cheatsheets covering CI/CD, cloud, security, monitoring, and automation.',
			link: {
				label: 'github.com/jorgepezuela/devops-cheatsheet',
				href: 'https://github.com/jorgepezuela/devops-cheatsheet'
		  }
		},
	]			
}