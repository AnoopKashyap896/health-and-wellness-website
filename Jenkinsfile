pipeline {
    agent any

    environment {
        PROJECT_NAME = "HealthnWellnessWebsite"
        STAGING_ENV = "staging"
        PROD_ENV = "production"
        EMAIL_RECIPIENT = "anoopkashyapp16@gmail.com"
    }

    stages {
        stage('Build') {
            steps {
                echo "Building the project..."
                bat 'echo Simulated build completed.'
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Running tests using JUnit or TestNG...'
                bat 'echo Tests executed.'
            }
            post {
                always {
                    emailext (
                        subject: "Test Stage - ${currentBuild.currentResult}",
                        body: "The Test stage has completed with status: ${currentBuild.currentResult}.",
                        recipientProviders: [[$class: 'DevelopersRecipientProvider']],
                        to: "${env.EMAIL_RECIPIENT}",
                        attachmentsPattern: "**/test-output/*.log",
                        attachLog: true
                    )
                }
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Static analysis using SonarQube or PMD...'
                bat 'echo Code analysis done.'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Security scan using OWASP Dependency-Check...'
                bat 'echo Security scan completed.'
            }
            post {
                always {
                    emailext (
                        subject: "Security Scan Stage - ${currentBuild.currentResult}",
                        body: "The Security Scan stage has completed with status: ${currentBuild.currentResult}.",
                        to: "${env.EMAIL_RECIPIENT}",
                        attachLog: true
                    )
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging using Ansible or shell script...'
                bat 'echo Deployed to staging.'
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Integration testing with Newman or Postman CLI...'
                bat 'echo Integration tests passed.'
            }
        }

        stage('Deploy to Production') {
            steps {
                input message: 'Approve deployment to production?'
                echo 'Deploying to production...'
                bat 'echo Production deployment done.'
            }
        }
    }
}
