pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage('Pre-build') {
            steps {
                dir('app') {
                    sh 'npm install'
                }
            }
        }
        stage('Pre-test') {
            steps {
                dir('app') {
                    sh 'npm run test'
                }
            }
        }
        stage('Build') {
            steps {
                dir('app') {
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                dir('app') {
                    sh 'npm run start'
                }
            }
        }
    }
}