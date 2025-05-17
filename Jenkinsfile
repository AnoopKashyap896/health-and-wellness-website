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
                // Add explicit file verification
                bat 'type test-output\\build.log'
                bat 'type test-output\\test.log'
            }
        }
    }

    post {
        always {
            emailext (
                subject: "Build Status: ${currentBuild.currentResult}",
                body: """<p>Hi Team,</p>
                        <p>Jenkins pipeline completed with status: <b>${currentBuild.currentResult}</b>.</p>
                        <p>See attached logs.</p>
                        <p>Regards,<br>Jenkins</p>""",
                to: "${env.EMAIL_RECIPIENT}",
                attachmentsPattern: 'test-output/**/*.log',
                attachLog: true,
                mimeType: 'text/html'
            )
        }
    }
}
