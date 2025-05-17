pipeline {
    agent any

    environment {
        PROJECT_NAME = "HealthnWellnessWebsite"
        STAGING_ENV = "staging"
        PROD_ENV = "production"
        EMAIL_RECIPIENT = "anoopkashyapp16@gmail.com"
        EMAIL_SENDER = "jenkins@yourdomain.com"   // Add your actual sender email here
    }

    stages {
        stage('Build') {
            steps {
                echo "Building the project..."
                bat """
                    if not exist test-output mkdir test-output
                    echo Simulated build completed. > test-output/build.log
                """
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Running tests using JUnit or TestNG...'
                bat """
                    mkdir test-output
                    echo Test results for Unit and Integration Tests > test-output/test-report.log
                    echo All unit tests passed successfully. > test-output/test.log
                """
            }
            post {
                always {
                    emailext (
                        from: "${env.EMAIL_SENDER}",
                        subject: "Test Stage - ${currentBuild.currentResult}",
                        body: """
                            <p>The <b>Test stage</b> has completed with status: <b>${currentBuild.currentResult}</b>.</p>
                            <p>Project: ${env.PROJECT_NAME}</p>
                        """,
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
                bat """
                    if not exist analysis mkdir analysis
                    echo Code analysis completed. > analysis/code-analysis.log
                """
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Security scan using OWASP Dependency-Check...'
                bat """
                    mkdir scan-results
                    echo Simulated OWASP Dependency Scan > scan-results/security-report.log
                """
            }
            post {
                always {
                    emailext (
                        from: "${env.EMAIL_SENDER}",
                        subject: "Security Scan Stage - ${currentBuild.currentResult}",
                        body: """
                            <p>The <b>Security Scan</b> stage has completed with status: <b>${currentBuild.currentResult}</b>.</p>
                            <p>Project: ${env.PROJECT_NAME}</p>
                        """,
                        to: "${env.EMAIL_RECIPIENT}",
                        attachmentsPattern: "**/scan-results/*.log",
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

    post {
        failure {
            emailext (
                from: "${env.EMAIL_SENDER}",
                subject: "Pipeline FAILED - ${currentBuild.fullDisplayName}",
                body: """
                    <p>The Jenkins pipeline for <b>${env.PROJECT_NAME}</b> has <b>FAILED</b>.</p>
                    <p>Please check the console output and logs for details.</p>
                """,
                to: "${env.EMAIL_RECIPIENT}",
                attachLog: true
            )
        }
        always {
            emailext (
                from: "${env.EMAIL_SENDER}",
                subject: "Pipeline Completed - ${currentBuild.currentResult}",
                body: """
                    <p>The Jenkins pipeline for <b>${env.PROJECT_NAME}</b> has completed with status: <b>${currentBuild.currentResult}</b>.</p>
                    <p>Check the attached build log for more details.</p>
                """,
                to: "${env.EMAIL_RECIPIENT}",
                attachLog: true
            )
        }
    }
}
