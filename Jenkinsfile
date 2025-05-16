pipeline {
    agent any

    environment {
        EMAIL_RECIPIENT = "anoopkashyapp16@gmail.com"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Starting build...'
                bat '''
                    if not exist test-output mkdir test-output
                    echo Build successful! > test-output\\build.log
                '''
            }
        }

        stage('Tests') {
            steps {
                echo 'Running tests...'
                bat 'echo All tests passed. > test-output\\test.log'
            }
        }

        stage('Verify Logs') {
            steps {
                echo 'Listing files in test-output...'
                bat 'dir test-output'
            }
        }
    }

    post {
        always {
            emailext (
                subject: "Build Status: ${currentBuild.currentResult}",
                body: "Hi Team,\n\nThe Jenkins pipeline has completed with status: ${currentBuild.currentResult}.\n\nPlease find the attached logs.\n\nRegards,\nJenkins",
                to: "${env.EMAIL_RECIPIENT}",
                attachmentsPattern: 'test-output/*.log',
                attachLog: true
            )
        }
    }
}
