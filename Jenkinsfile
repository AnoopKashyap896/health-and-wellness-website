pipeline {
    agent any
    stages { stage('Test') { steps { echo 'Test' } } }
    post {
        always {
            emailext(
                subject: 'SMTP TEST',
                body: 'Test email with credentials',
                to: 'anoopkashyapp16@gmail.com'
            )
        }
    }
}
